pragma solidity ^0.4.24;

import "../../MarketplaceStorage.sol";

library ProductStorageAccess {

    /*
        Each product (indexed by ID) stores the following data in MarketplaceStorage and accesses it through the
        associated namespace:
            string name                                                     (product.name)
            bytes32 type                                                    (product.type)
            ProduceBase.Status Status                                       (product.status)
            bytes32[] systemTags                                            (product.systemTags)
            bytes32[] authorTags                                            (product.authorTags)
    */

    // Getters

    function generateNewProductId(MarketplaceStorage _storage) internal returns (uint) {
        uint id = getNextProductId(_storage);
        incrementNextProductId(_storage);
        return id;
    }

    function getNextProductId(MarketplaceStorage _storage) internal view returns (uint) {
        return _storage.getUint(keccak256("product.nextProductId"));
    }

    function getProductName(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.name", _productId)));
    }

    function getProductType(MarketplaceStorage _storage, uint _productId) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.type", _productId)));
    }

    function getProductStatus(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.status", _productId)));
    }

    function getProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.systemTags", _productId, _index)));
    }

    function getProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.authorTags", _productId, _index)));
    }



    // Setters

    function incrementNextProductId(MarketplaceStorage _storage) internal {
        uint currentId = _storage.getUint(keccak256("product.nextProductId"));
        _storage.setUint(keccak256("product.nextProductId"), currentId + 1);
    }

    function setProductName(MarketplaceStorage _storage, uint _productId, string _name) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.name", _productId)), _name);
    }

    function setProductType(MarketplaceStorage _storage, uint _productId, bytes32 _type) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.type", _productId)), _type);
    }

    function setProductStatus(MarketplaceStorage _storage, uint _productId, uint _status) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.status", _productId)), _status);
    }

    function setProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.systemTags", _productId, _index)), _tag);
    }

    function setProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.authorTags", _productId, _index)), _tag);
    }
}
