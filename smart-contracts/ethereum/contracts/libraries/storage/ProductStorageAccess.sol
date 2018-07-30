pragma solidity ^0.4.24;

import "../../MarketplaceStorage.sol";

library ProductStorageAccess {

    struct PricePlan {
        string code;
        string name;
        uint price;
    }

    /*
        Each product (indexed by ID) stores the following data in MarketplaceStorage and accesses it through the
        associated namespace:
            string title                                                    (product.title)
            bytes32 type                                                    (product.type)
            ProduceBase.Status Status                                       (product.status)
            bytes32[] systemTags                                            (product.systemTags)
            bytes32[] authorTags                                            (product.authorTags)
            address developer                                               (product.developer)
            uint developerId                                                (product.developerId)
    */

    /**** Getters *******/

    function generateNewProductId(MarketplaceStorage _storage) internal returns (uint) {
        uint id = getNextProductId(_storage);
        incrementNextProductId(_storage);
        return id;
    }

    function getNextProductId(MarketplaceStorage _storage) internal view returns (uint) {
        return _storage.getUint(keccak256("product.nextProductId"));
    }

    function getProductTitle(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.title", _productId)));
    }

    function getProductType(MarketplaceStorage _storage, uint _productId) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.type", _productId)));
    }

    function getProductStatus(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.status", _productId)));
    }

    function getProductSystemTagsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.systemTags.length", _productId)));
    }

    function getProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.systemTags", _productId, _index)));
    }

    function getProductAuthorTagsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.authorTags.length", _productId)));
    }

    function getProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes(keccak256(abi.encodePacked("product.authorTags", _productId, _index)));
    }

    function getProductDeveloper(MarketplaceStorage _storage, uint _productId) internal view returns (address) {
        return _storage.getAddress(keccak256(abi.encodePacked("product.developer", _productId)));
    }

    function getProductDeveloperId(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.developerId", _productId)));
    }

    // Price Plan

    function getProductPricePlanCode(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.pricePlans.code", _productId, _index)));
    }

    function getProductPricePlanName(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.pricePlans.name", _productId, _index)));
    }

    function getProductPricePlanPrice(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.pricePlans.price", _productId, _index)));
    }



    /**** Setters *******/

    function incrementNextProductId(MarketplaceStorage _storage) internal {
        uint currentId = _storage.getUint(keccak256("product.nextProductId"));
        _storage.setUint(keccak256("product.nextProductId"), currentId + 1);
    }

    function setProductTitle(MarketplaceStorage _storage, uint _productId, string _title) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.title", _productId)), _title);
    }

    function setProductType(MarketplaceStorage _storage, uint _productId, bytes32 _type) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.type", _productId)), _type);
    }

    function setProductStatus(MarketplaceStorage _storage, uint _productId, uint _status) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.status", _productId)), _status);
    }

    function setProductSystemTagsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.systemTags.length", _productId)), _length);
    }

    function setProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.systemTags", _productId, _index)), _tag);
    }

    function setProductAuthorTagsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.authorTags.length", _productId)), _length);
    }

    function setProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes(keccak256(abi.encodePacked("product.authorTags", _productId, _index)), _tag);
    }

    function setProductDeveloper(MarketplaceStorage _storage, uint _productId, address _developer) internal {
        return _storage.setAddress(keccak256(abi.encodePacked("product.developer", _productId)), _developer);
    }

    function setProductDeveloperId(MarketplaceStorage _storage, uint _productId, uint _developerId) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.developerId", _productId)), _developerId);
    }

    // Price Plan

    function setProductPricePlanCode(MarketplaceStorage _storage, uint _productId, uint _index, string _code) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.pricePlans.code", _productId, _index)), _code);
    }

    function setProductPricePlanName(MarketplaceStorage _storage, uint _productId, uint _index, string _name) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.pricePlans.name", _productId, _index)), _name);
    }

    function setProductPricePlanPrice(MarketplaceStorage _storage, uint _productId, uint _index, uint _price) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.pricePlans.price", _productId, _index)), _price);
    }
}
