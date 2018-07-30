pragma solidity ^0.4.24;

import "./MarketplaceStorage.sol";
import "./libraries/storage/ProductStorageAccess.sol";
import "./ProductBase.sol";

contract ProductRegistration is ProductBase {

    event ProductCreated(uint productId);

    constructor(address _marketplaceStorage) public {
        marketplaceStorage = _marketplaceStorage;

        // Reserve product ID 0
        marketplaceStorage.incrementNextProductId();
    }

    function createProduct(string _title, bytes32 _type, string _content, bytes32[] _systemTags, bytes32[] _authorTags) external {
        // Verify that sender is a developer
        uint developerId = marketplaceStorage.getDeveloperId(msg.sender);
        require(developerId != 0, "This address is not a developer.");

        uint productId = marketplaceStorage.generateProductId();

        marketplaceStorage.setProductTitle(productId, _title);
        marketplaceStorage.setProductStatus(productId, uint(Status.Draft));
        marketplaceStorage.setProductType(productId, _type);
        marketplaceStorage.setProductContent(productId, _content);
        marketplaceStorage.setProductDeveloper(productId, msg.sender);
        marketplaceStorage.setProductDeveloperId(productId, _developerId);

        for (uint i = 0; i < _systemTags.length; i++) {
            bytes32 systemTag = _systemTags[i];
            marketplaceStorage.setProductSystemTag(productId, i, systemTag);
        }

        for (uint j = 0; j < _authorTags.length; j++) {
            bytes32 authorTag = _authorTags[j];
            marketplaceStorage.setProductAuthorTag(productId, j, authorTag);
        }

        // TODO - Add product to developer

        emit ProductCreated(productId);
    }

    function editProductInfo(uint _productId, string _name, bytes32 _type, bytes32[] _systemTags, bytes32[] _authorTags) external {
        marketplaceStorage.setProductName(_productId, _name);
        marketplaceStorage.setProductType(_productId, _type);

        for (uint i = 0; i < _systemTags.length; i++) {
            bytes32 systemTag = _systemTags[i];
            marketplaceStorage.setProductSystemTag(_productId, i, systemTag);
        }

        for (uint j = 0; j < _authorTags.length; j++) {
            bytes32 authorTag = _authorTags[j];
            marketplaceStorage.setProductAuthorTag(_productId, j, authorTag);
        }
    }

    function getProduct(
        uint _productId
    )
        external
        view
        returns (
            uint id,
            uint status,
            string title,
            bytes32 type,
            string content,
            bytes32[] systemTags,
            bytes32[] authorTags,
            address developer,
            uint developerId
        )
    {
        id = _productId;
        status = marketplaceStorage.getProductStatus(_productId);
        title = marketplaceStorage.getProductTitle(_productId);
        type = marketplaceStorage.getProductType(_productId);
        content = marketplaceStorage.getProductContent(_productId);
        developer = marketplaceStorage.getProductDeveloper(_productId);
        developerId = marketplaceStorage.getProductDeveloperId(_productId);

        uint systemTagsLength = marketplaceStorage.getSystemTagsLength(_productId);
        for (uint i = 0; i < systemTagsLength; i++) {
            systemTags[i] = marketplaceStorage.getProductSystemTag(_productId, i);
        }

        uint authorTagsLength = marketplaceStorage.getAuthorTagsLength(_productId);
        for (uint j = 0; j < authorTagsLength; j++) {
            authorTags[j] = marketplaceStorage.getProductAuthorTag(_productId, j);
        }

        return (id, status, title, type, content, systemTags, authorTags, developer, developerId);
    }
}
