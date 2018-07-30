pragma solidity ^0.4.24;

import "./MarketplaceStorage.sol";
import "./libraries/storage/ProductStorageAccess.sol";
import "./ProductBase.sol";

contract ProductRegistration is ProductBase {

    constructor(address _marketplaceStorage) public {
        marketplaceStorage = _marketplaceStorage;

        // Reserve product ID 0
        marketplaceStorage.incrementNextProductId();
    }

    function createProduct(string _name, bytes32 _type, bytes32[] _systemTags, bytes32[] _authorTags) external {
        uint id = marketplaceStorage.generateProductId();

        marketplaceStorage.setProductName(id, _name);
        marketplaceStorage.setProductStatus(id, uint(Status.Pending));
        marketplaceStorage.setProductType(id, _type);

        for (uint i = 0; i < _systemTags.length; i++) {
            bytes32 tag = _systemTags[i];
            marketplaceStorage.setProductSystemTag(id, i, tag);
        }

        for (uint j = 0; j < _authorTags.length; j++) {
            bytes32 tag = _authorTags[j];
            marketplaceStorage.setProductAuthorTag(id, j, tag);
        }
    }
}
