pragma solidity ^0.4.24;

import "./MarketplaceStorage.sol";
import "./libraries/storage/AdministrationStorageAccess.sol";

/**
 * @title Administration
 * @dev The Administration contract interacts with Marketplace Storage to register administrators.
 */
contract Administration {

    using AdministrationStorageAccess for MarketplaceStorage;

    /**
     * @dev Throws if called by any account other than the administrator.
     */
    modifier onlyAdministrator() {
        require(msg.sender == administrator);
        _;
    }

    MarketplaceStorage public marketplaceStorage;

    event AdministratorRegistered(address indexed newAdministrator);
    event AdministrationRenounced(address indexed previousAdministrator);
    event AdministrationTransferred(
        address indexed previousAdministrator,
        address indexed newAdministrator
    );

    /**
     * @dev The Administration constructor sets the Marketplace Storage contract.
     */
    constructor(address _marketplaceStorage) public {
        marketplaceStorage = MarketplaceStorage(_marketplaceStorage);
    }

    /**
     * @dev Initializes msg.sender as an adminstrator.
     * @notice Must be called after Administration contract has been registered with MarketplaceStorage to allow write
     * access.
     */
    function initialize() public {
        marketplaceStorage.setIsAdmin(msg.sender, true);
    }

    /**
    * @dev Registers a new administrator
    * @param _newAdministrator The address to register as an administrator.
    */
    function registerAdministrator(address _newAdministator) public onlyAdministrator {
        require(_newAdministrator != address(0));
        emit AdministratorRegistered(_newAdministrator);
        marketplaceStorage.setIsAdmin(_newAdminstrator, true);
    }

    /**
     * @dev Allows the sending administrator to relinquish administration privileges.
     */
    function renounceAdministration() public onlyAdministrator {
        emit AdministrationRenounced(msg.sender);
        marketplaceStorage.setIsAdmin(msg.sender, false);
    }

    /**
     * @dev Allows the sending administrator to transfer administration privileges to a newAdministrator.
     * @param _newAdministrator The address to transfer administration to.
     */
    function transferAdministration(address _newAdministrator) public onlyAdministrator {
        _transferAdministration(_newAdministrator);
    }

    /**
     * @dev Transfers administration privileges to a newAdministrator.
     * @param _newAdministrator The address to transfer administration to.
     */
    function _transferAdministration(address _newAdministrator) internal {
        require(_newAdministrator != address(0));
        emit AdministrationTransferred(administrator, _newAdministrator);
        marketplaceStorage.setIsAdmin(msg.sender, false);
        marketplaceStorage.setIsAdmin(_newAdministrator, true);
    }
}
