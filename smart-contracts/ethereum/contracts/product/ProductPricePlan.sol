pragma solidity ^0.4.24;

import "./ProductBase.sol";

contract ProductPricePlan is ProductBase {

    constructor(address _marketplaceStorage) public {
        marketplaceStorage = _marketplaceStorage;
    }

    function createPricePlan(uint _productId, string _code, string _name, uint _price) external {
        marketplaceStorage.pushProductPricePlan(_productId, _code, _name, _price);
    }

    function editPricePlan(uint _productId, uint _index, string _code, string _name, uint _price) external {
        marketplaceStorage.setProductPricePlan(_productId, _index, _code, _name, _price);
    }

    function getPricePlan(uint _productId, uint _index) external view returns (string code, string name, uint price) {
        ProductStorageAccess.PricePlan memory pricePlan = marketplaceStorage.getProductPricePlan(_productId, _index);

        return (pricePlan.code, pricePlan.name, pricePlan.price);
    }
}
