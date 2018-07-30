pragma solidity ^0.4.24;

import "./MarketplaceStorage.sol";
import "./libraries/storage/ProductStorageAccess.sol";

contract ProductBase {

    using ProductStorageAccess for MarketplaceStorage;

    enum Status { Inactive, Pending, Published, Rejected }

    MarketplaceStorage public marketplaceStorage;
}
