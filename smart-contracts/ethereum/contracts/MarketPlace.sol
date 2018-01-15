pragma solidity >=0.4.15;

contract MarketPlace {

  modifier onlyDelegates() {
    require(delegates[msg.sender]);
    _;
  }

  struct AppVersion {
    bytes32 version;
    string files;
    mapping (address => int8) votes;
    address[] voters; // we might exclude old voters after elections
    string checksum;
    uint permissions;
  }
  

  struct App {
    uint id;
    address owner;
    string name;
    string category;
    mapping  (bytes32 => AppVersion)  versions;
    bytes32[] versionList;
  }
  
  mapping (uint => App) apps;
  uint[] app_ids;
  mapping (address => bool) delegates;

  address republicContract;
  
  event AppSubmitted(uint id);
  event VersionSubmitted(uint app_id, bytes32 version);
  event AppVoting(uint app_id, bytes32 version, int8 vote);
  
  function MarketPlace() public {
    delegates[msg.sender] = true; // only one delegate for now until republic contract is fully functional
  }

  function setRepublicContract (address _contract_address) public onlyDelegates returns(bool res) {
    republicContract = _contract_address;

    return true;
  }
  
  function refreshDelegatesList() public pure returns(bool res) { // this should be called after delegates elections
    return true;
  }
  

  function submitAppForReview(string _name, bytes32 _version, string _category, string _files, string _checksum, uint _permissions) public returns(bool res) {
    uint new_id = app_ids.length;
    app_ids.push(new_id);
    bytes32[] memory versionList;

    apps[new_id] = App(new_id, msg.sender, _name, _category, versionList);
    AppSubmitted(new_id);
    submitVersionForReview(new_id, _version, _files, _checksum, _permissions);

    return true;
  }

  function submitVersionForReview(uint _id, bytes32 _version, string _files, string _checksum, uint _permissions) public returns(bool res) {
    require(apps[_id].id == _id);
    require(apps[_id].versions[_version].version != _version);
    address[] memory voters;

    apps[_id].versions[_version] = AppVersion(_version, _files, voters, _checksum, _permissions);
    apps[_id].versionList.push(_version);
    VersionSubmitted(_id, _version);

    return true;
  }
  


  function voteForApp(uint _id, bytes32 _version, int8 _vote) public onlyDelegates returns(bool res) {
    require (apps[_id].id == _id && apps[_id].versions[_version].version == _version);
    require (_vote == -1 || _vote == 1);

    if (apps[_id].versions[_version].votes[msg.sender] == 0) {
      apps[_id].versions[_version].voters.push(msg.sender);
    }

    apps[_id].versions[_version].votes[msg.sender] = _vote;

    AppVoting(_id, _version, _vote);
    return true;
  }
  
  function getApp(uint _id, bytes32 _version) public view returns(address owner, string name, string category, string files, int votes) {
    require (apps[_id].id == _id && apps[_id].versions[_version].version == _version);

    int8 vote_sum = 0;

    for(uint i; i < apps[_id].versions[_version].voters.length; i++) {
      vote_sum = vote_sum + apps[_id].versions[_version].votes[apps[_id].versions[_version].voters[i]];
    }

    return (apps[_id].owner, apps[_id].name, apps[_id].category, apps[_id].versions[_version].files, vote_sum);
  }
}