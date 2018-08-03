pragma solidity ^0.4.24;

import "./ProductBase.sol";

contract ProductPurchase is ProductBase {

    event productPurchased(uint productId, uint value, address purchaser, address developer);

    constructor(address _marketplaceStorage) public {
        marketplaceStorage = MarketplaceStorage(_marketplaceStorage);
    }

    function purchase(uint _productId, uint _pricePlanIndex) external payable {
        uint numPricePlans = marketplaceStorage.getProductPricePlansLength(_productId);
        require(_pricePlanIndex < numPricePlans, "Price plan does not exist.");

        uint productPrice = marketplaceStorage.getProductPricePlanPrice(_productId, _pricePlanIndex);
        require(msg.value == productPrice, "Transaction value incorrect.");

        uint senderPurchases = marketplaceStorage.getProductHasPurchased(_productId, msg.sender);
        marketplaceStorage.setProductHasPurchased(_productId, msg.sender, senderPurchases + 1);

        address developerAddress = marketplaceStorage.getProductDeveloper(_productId);
        developerAddress.transfer(msg.value);

        emit productPurchased(_productId, msg.value, msg.sender, developerAddress);
    }
}
