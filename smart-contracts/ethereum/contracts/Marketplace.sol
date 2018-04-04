pragma solidity >=0.4.15;

contract Marketplace {

  modifier onlyDelegates() {
    require(msg.sender == owner || delegates[msg.sender]);
    _;
  }

  struct AppVersion {
    bytes32 version;
    string files;
    mapping (address => int8) votesMap;
    address[] voters; // we might exclude old voters after elections
    string checksum;
    uint permissions;
    int8 votesSum;
    uint timestamp;
  }


  struct App {
    uint id;
    address owner;
    string name;
    string category;
    mapping  (bytes32 => AppVersion)  versions;
    bytes32[] versionList;
    bytes32 latestVersion;
  }

  mapping (uint => App) apps;
  uint[] appIds;
  mapping (address => bool) delegates;

  address owner;
  address republicContract;

  event AppSubmitted(uint id);
  event VersionSubmitted(uint app_id, bytes32 version);
  event AppVoting(uint app_id, bytes32 version, int8 vote);
  event AppListing(uint[]);

  function Marketplace() public {
    owner = msg.sender;
  }

  function setRepublicContract (address _contract_address) public onlyDelegates returns(bool res) {
    republicContract = _contract_address;

    return true;
  }

  function refreshDelegateList() public pure returns(bool res) { // this should be called after delegates elections
    return true;
  }


  function submitAppForReview(string _name, bytes32 _version, string _category, string _files, string _checksum, uint _permissions) public returns(bool res) {
    uint new_id = appIds.length;
    appIds.push(new_id);
    bytes32[] memory versionList;

    apps[new_id] = App(new_id, msg.sender, _name, _category, versionList, 0);
    AppSubmitted(new_id);
    submitVersionForReview(new_id, _version, _files, _checksum, _permissions);

    return true;
  }

  function submitVersionForReview(uint _id, bytes32 _version, string _files, string _checksum, uint _permissions) public returns(bool res) {
    require(apps[_id].id == _id); // check if the app exists
    require(apps[_id].versions[_version].version != _version); // check that the version doesn't exist
    require(apps[_id].owner == msg.sender);

    address[] memory voters;

    apps[_id].versions[_version] = AppVersion(_version, _files, voters, _checksum, _permissions, 0, now);
    apps[_id].versionList.push(_version);
    VersionSubmitted(_id, _version);

    return true;
  }



  function voteForApp(uint _id, bytes32 _version, int8 _vote) public onlyDelegates returns(bool res) {
    require (apps[_id].id == _id && apps[_id].versions[_version].version == _version); // check if the app and the version exist
    require (_vote == -1 || _vote == 1);

    if (apps[_id].versions[_version].votesMap[msg.sender] == 0) {
      apps[_id].versions[_version].voters.push(msg.sender);
    }

    apps[_id].versions[_version].votesMap[msg.sender] = _vote;

    AppVoting(_id, _version, _vote);
    return true;
  }

  function getApp(uint _id, bytes32 _version) public view returns(address appOwner, string name, string category, string files, int8 votes) {
    require (apps[_id].id == _id && apps[_id].versions[_version].version == _version);

    return (apps[_id].owner, apps[_id].name, apps[_id].category, apps[_id].versions[_version].files, apps[_id].versions[_version].votesSum);
  }

  function getLatestVersion(uint _id) public view returns(address appOwner, string name, string category, string files, int8 votes) {
    require (apps[_id].id == _id);

    return getApp(_id, apps[_id].latestVersion);
  }

  function updateAppVotes(uint _id, bytes32 _version) public onlyDelegates returns (bool res) {
    require (apps[_id].id == _id && apps[_id].versions[_version].version == _version);

    int8 vote_sum = 0;

    for(uint i; i < apps[_id].versions[_version].voters.length; i++) {
      vote_sum = vote_sum + apps[_id].versions[_version].votesMap[apps[_id].versions[_version].voters[i]];
    }
    apps[_id].versions[_version].votesSum = vote_sum;

    // if the version is approved and new then set latest_version to this version
    if (vote_sum > 0 && apps[_id].versions[_version].timestamp > apps[_id].versions[apps[_id].latestVersion].timestamp) {
      apps[_id].latestVersion = _version;
    }

    return true;
  }

  function listApps(uint _page, uint _offset) public returns (uint[]) {
    uint current_id = _page * _offset - _offset + 1; // calculate an id to start iterating from
    uint[] apps;

    while (appIds.length > current_id) {
      apps.push(current_id);
      current_id++;
    }

    AppListing(apps);

    return (apps);
  }
}
