pragma solidity >=0.4.15;

import "./Marketplace.sol";

contract UserProfile {

  struct App {
    uint id; // redundant but usefull to include
    bytes32 version;
    bool enabled;
    uint permissions; // bitmap for effeciency ;)
  }

  /* this data structure is mainly to store keys for blockhub wallets/extensions */
  struct Key {
    string publicKey; // it can be any blockchain address 
    string privateKey;
    string name;
    string metaData;
  }

  modifier onlyDelegates() {
    require(msg.sender == owner || delegates[msg.sender]);
    _;
  }
  

  modifier userOnly() { 
    require(users[msg.sender].addr == msg.sender); 
    _; 
  }

  modifier hasApp(uint _id) {
    require(users[msg.sender].apps[_id].id == _id); 
    _; 
  }

  struct Profile { // might change the profile to a contract in the future if needed
    address addr;
    string data; // json string includes all the profile data we want to store (encrypted by the user)

    mapping (uint => App) apps;  // app_id  => app_version_id
    uint[] appList;

    mapping (string => Key) keys; // the string is the publicKey (theoritically this might be replicated but technically it's very very unlikely)
  }

  mapping (address => Profile) users;
  
  address marketPlaceContract;

  mapping (address => bool) delegates;

  address republicContract;
  address owner;


  constructor() public {
    owner = msg.sender;
  }

  function setRepublicContract (address _contract_address) public onlyDelegates returns(bool res) {
    republicContract = _contract_address;

    return true;
  }
  
  function refreshDelegateList() public pure returns(bool res) { // this should be called after delegates elections
    return true;
  }

  function register(string _data) public returns(bool res) {
    require (users[msg.sender].addr != msg.sender);
    uint[] memory app_list;

    users[msg.sender] = Profile({addr: msg.sender, data: _data, appList: app_list});
    return true;
  }

  function getDefaultPermissions() public pure returns(uint res) {
    return 256;
  }


  function installApp(uint _id, bytes32 _version) public userOnly returns(bool res) {
    require(users[msg.sender].apps[_id].version != _version);

    Marketplace market = Marketplace(marketPlaceContract);
    var (owner_addr, name, category, files, votes) = market.getApp(_id, _version); // will raise unused vars warning. ignore for now

    if (votes > 0) {
        if (users[msg.sender].apps[_id].id == _id) { // the user installing different version
          users[msg.sender].apps[_id].version = _version;
          // TODO check for permissions changes as well
        } else {
          users[msg.sender].apps[_id] = App(_id, _version, true, getDefaultPermissions());
          users[msg.sender].appList.push(_id);
        }
        
        return true;
    }

    return false;
  }

  
  function getAppList() public view userOnly returns(uint[] apps) {
    return users[msg.sender].appList;
  }

  // function removeApp (uint _id, bytes32 _version) userOnly hasApp returns(bool res)  {
  //   return true;
  // }

  function disableApp (uint _id) public userOnly hasApp(_id) returns(bool res)  {
    users[msg.sender].apps[_id].enabled = false;

    return true;
  }

//   function changePermissions (address addr, uint perm) userOnly hasApp returns(bool res) {
//     return true;
//   }

  function setMarketPlace(address addr) public onlyDelegates {
      marketPlaceContract = addr;
  }
}