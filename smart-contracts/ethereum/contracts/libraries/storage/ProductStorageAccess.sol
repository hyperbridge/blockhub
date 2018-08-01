pragma solidity ^0.4.24;

import "../../MarketplaceStorage.sol";

library ProductStorageAccess {

    struct PricePlan {
        string code;
        string name;
        uint price;
    }

    struct SystemRequirement {
        string systemInfo;
        string requirementInfo;
    }

    struct LanguageSupport {
        string language;
        bool closedCaptioning;
        bool audioDescription;
    }

    struct Version {
        bytes32 version;
        string downloadRefType;
        string downloadRefSource;
        string checksum;
        uint createdAt;
    }

    /*
        Each product (indexed by ID) stores the following data in MarketplaceStorage and accesses it through the
        associated namespace:
            string title                                                    (product.title)
            bytes32 type                                                    (product.type)
            string content                                                  (product.content)
            ProduceBase.Status Status                                       (product.status)
            bytes32[] systemTags                                            (product.systemTags)
            bytes32[] authorTags                                            (product.authorTags)
            address developer                                               (product.developer)
            uint developerId                                                (product.developerId)
            Version latestVersion
                bytes32 version                                             (product.latestVersion.version)
                string downloadRefType                                      (product.latestVersion.downloadRefType)
                string downloadRefSource                                    (product.latestVersion.downloadRefSource)
                string checksum                                             (product.latestVersion.checksum)
                uint createdAt                                              (product.latestVersion.createdAt)
            Version[] pendingVersions
                bytes32 version                                             (product.pendingVersions.version)
                string downloadRefType                                      (product.pendingVersions.downloadRefType)
                string downloadRefSource                                    (product.pendingVersions.downloadRefSource)
                string checksum                                             (product.pendingVersions.checksum)
                uint createdAt                                              (product.pendingVersions.createdAt)
            PricePlan[] pricePlans
                string code                                                 (product.pricePlans.code)
                string name                                                 (product.pricePlans.name)
                uint price                                                  (product.pricePlans.price)
            SystemRequirement[] systemRequirements
                string system                                               (product.systemRequirements.system)
                string info                                                 (product.systemRequirements.info)
            LanguageSupport[] languagesSupported
                string language                                             (product.languagesSupported.language)
                bool closedCaptioning                                       (product.languagesSupported.closedCaptioning)
                bool audioDescription                                       (product.languagesSupported.audioDescription)

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
        return _storage.getBytes32(keccak256(abi.encodePacked("product.type", _productId)));
    }

    function getProductStatus(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.status", _productId)));
    }

    function getProductContent(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.content", _productId)));
    }

    function getProductSystemTagsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.systemTags.length", _productId)));
    }

    function getProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes32(keccak256(abi.encodePacked("product.systemTags", _productId, _index)));
    }

    function getProductAuthorTagsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.authorTags.length", _productId)));
    }

    function getProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        return _storage.getBytes32(keccak256(abi.encodePacked("product.authorTags", _productId, _index)));
    }

    function getProductDeveloper(MarketplaceStorage _storage, uint _productId) internal view returns (address) {
        return _storage.getAddress(keccak256(abi.encodePacked("product.developer", _productId)));
    }

    function getProductDeveloperId(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.developerId", _productId)));
    }

    // Price Plan

    function getProductPricePlansLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.pricePlans.length", _productId)));
    }

    function getProductPricePlanCode(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.pricePlans.code", _productId, _index)));
    }

    function getProductPricePlanName(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.pricePlans.name", _productId, _index)));
    }

    function getProductPricePlanPrice(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (uint) {
        return _storage.getUint(keccak256(abi.encodePacked("product.pricePlans.price", _productId, _index)));
    }

    function getProductPricePlan(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (PricePlan) {
        PricePlan memory pricePlan = PricePlan({
            code: getProductPricePlanCode(_storage, _productId, _index),
            name: getProductPricePlanName(_storage, _productId, _index),
            price: getProductPricePlanPrice(_storage, _productId, _index)
        });

        return pricePlan;
    }

    // System Requirement

    function getProductSystemRequirementsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.systemRequirements.length", _productId)));
    }

    function getProductSystemRequirementSystem(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.systemRequirements.system", _productId, _index)));
    }

    function getProductSystemRequirementInfo(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.systemRequirements.info", _productId, _index)));
    }

    function getProductSystemRequirement(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (SystemRequirement) {
        SystemRequirement memory systemRequirement = SystemRequirement({
            systemInfo: getProductSystemRequirementSystem(_storage, _productId, _index),
            requirementInfo: getProductSystemRequirementInfo(_storage, _productId, _index)
        });

        return systemRequirement;
    }

    // Language Support

    function getProductLanguagesSupportedLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.languagesSupported.length", _productId)));
    }

    function getProductLanguageSupportLanguage(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        return _storage.getString(keccak256(abi.encodePacked("product.languagesSupported.language", _productId, _index)));
    }

    function getProductLanguageSupportClosedCaptioning(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bool) {
        return _storage.getBool(keccak256(abi.encodePacked("product.languagesSupported.closedCaptioning", _productId, _index)));
    }

    function getProductLanguageSupportAudioDescription(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bool) {
        return _storage.getBool(keccak256(abi.encodePacked("product.languagesSupported.audioDescription", _productId, _index)));
    }

    function getProductLanguageSupport(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (LanguageSupport) {
        LanguageSupport memory languageSupport = LanguageSupport({
            language: getProductLanguageSupportLanguage(_storage, _productId, _index),
            closedCaptioning: getProductLanguageSupportClosedCaptioning(_storage, _productId, _index),
            audioDescription: getProductLanguageSupportAudioDescription(_storage, _productId, _index)
        });

        return languageSupport;
    }

    // Version

    function getProductLatestVersionVersion(MarketplaceStorage _storage, uint _productId) internal view returns (bytes32) {
        _storage.getBytes32(keccak256(abi.encodePacked("product.latestVersion.version", _productId)));
    }

    function getProductLatestVersionDownloadRefType(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.latestVersion.downloadRefType", _productId)));
    }

    function getProductLatestVersionDownloadRefSource(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.latestVersion.downloadRefSource", _productId)));
    }

    function getProductLatestVersionChecksum(MarketplaceStorage _storage, uint _productId) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.latestVersion.checksum", _productId)));
    }

    function getProductLatestVersionCreatedAt(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.latestVersion.createdAt", _productId)));
    }

    function getProductLatestVersion(MarketplaceStorage _storage, uint _productId) internal view returns (Version) {
        Version memory version = Version({
            version: getProductLatestVersionVersion(_storage, _productId),
            downloadRefType: getProductLatestVersionDownloadRefType(_storage, _productId),
            downloadRefSource: getProductLatestVersionDownloadRefSource(_storage, _productId),
            checksum: getProductLatestVersionChecksum(_storage, _productId),
            createdAt: getProductLatestVersionCreatedAt(_storage, _productId)
        });
        
        return version;
    }

    function getProductPendingVersionsLength(MarketplaceStorage _storage, uint _productId) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.pendingVersions.length", _productId)));
    }

    function getProductPendingVersionVersion(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (bytes32) {
        _storage.getBytes32(keccak256(abi.encodePacked("product.pendingVersions.version", _productId, _index)));
    }

    function getProductPendingVersionDownloadRefType(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.pendingVersions.downloadRefType", _productId, _index)));
    }

    function getProductPendingVersionDownloadRefSource(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.pendingVersions.downloadRefSource", _productId, _index)));
    }

    function getProductPendingVersionChecksum(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (string) {
        _storage.getString(keccak256(abi.encodePacked("product.pendingVersions.checksum", _productId, _index)));
    }

    function getProductPendingVersionCreatedAt(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (uint) {
        _storage.getUint(keccak256(abi.encodePacked("product.pendingVersions.createdAt", _productId, _index)));
    }

    function getProductPendingVersion(MarketplaceStorage _storage, uint _productId, uint _index) internal view returns (Version) {
        Version memory version = Version({
            version: getProductPendingVersionVersion(_storage, _productId, _index),
            downloadRefType: getProductPendingVersionDownloadRefType(_storage, _productId, _index),
            downloadRefSource: getProductPendingVersionDownloadRefSource(_storage, _productId, _index),
            checksum: getProductPendingVersionChecksum(_storage, _productId, _index),
            createdAt: getProductPendingVersionCreatedAt(_storage, _productId, _index)
        });

        return version;
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
        return _storage.setBytes32(keccak256(abi.encodePacked("product.type", _productId)), _type);
    }

    function setProductStatus(MarketplaceStorage _storage, uint _productId, uint _status) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.status", _productId)), _status);
    }

    function setProductContent(MarketplaceStorage _storage, uint _productId, string _content) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.content", _productId)), _content);
    }

    function setProductSystemTagsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.systemTags.length", _productId)), _length);
    }

    function setProductSystemTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes32(keccak256(abi.encodePacked("product.systemTags", _productId, _index)), _tag);
    }

    function setProductAuthorTagsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.authorTags.length", _productId)), _length);
    }

    function setProductAuthorTag(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _tag) internal {
        return _storage.setBytes32(keccak256(abi.encodePacked("product.authorTags", _productId, _index)), _tag);
    }

    function setProductDeveloper(MarketplaceStorage _storage, uint _productId, address _developer) internal {
        return _storage.setAddress(keccak256(abi.encodePacked("product.developer", _productId)), _developer);
    }

    function setProductDeveloperId(MarketplaceStorage _storage, uint _productId, uint _developerId) internal {
        return _storage.setUint(keccak256(abi.encodePacked("product.developerId", _productId)), _developerId);
    }

    // Price Plan

    function setProductPricePlansLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.pricePlans.length", _productId)), _length);
    }

    function setProductPricePlanCode(MarketplaceStorage _storage, uint _productId, uint _index, string _code) internal {
        _storage.setString(keccak256(abi.encodePacked("product.pricePlans.code", _productId, _index)), _code);
    }

    function setProductPricePlanName(MarketplaceStorage _storage, uint _productId, uint _index, string _name) internal {
        _storage.setString(keccak256(abi.encodePacked("product.pricePlans.name", _productId, _index)), _name);
    }

    function setProductPricePlanPrice(MarketplaceStorage _storage, uint _productId, uint _index, uint _price) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.pricePlans.price", _productId, _index)), _price);
    }

    function setProductPricePlan(MarketplaceStorage _storage, uint _productId, uint _index, string _code, string _name, uint _price) internal {
        setProductPricePlanCode(_storage, _productId, _index, _code);
        setProductPricePlanName(_storage, _productId, _index, _name);
        setProductPricePlanPrice(_storage, _productId, _index, _price);
    }

    function pushProductPricePlan(MarketplaceStorage _storage, uint _productId, string _code, string _name, uint _price) internal {
        uint nextIndex = getProductPricePlansLength(_storage, _productId);

        setProductPricePlan(_storage, _productId, nextIndex, _code, _name, _price);

        setProductPricePlansLength(_storage, _productId, nextIndex + 1);
    }

    // System Requirement

    function setProductSystemRequirementsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.systemRequirements.length", _productId)), _length);
    }

    function setProductSystemRequirementSystem(MarketplaceStorage _storage, uint _productId, uint _index, string _system) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.systemRequirements.system", _productId, _index)), _system);
    }

    function setProductSystemRequirementInfo(MarketplaceStorage _storage, uint _productId, uint _index, string _info) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.systemRequirements.info", _productId, _index)), _info);
    }

    function setProductSystemRequirement(MarketplaceStorage _storage, uint _productId, uint _index, string _system, string _info) internal {
        setProductSystemRequirementSystem(_storage, _productId, _index, _system);
        setProductSystemRequirementInfo(_storage, _productId, _index, _info);
    }

    function pushProductSystemRequirement(MarketplaceStorage _storage, uint _productId, string _system, string _info) internal {
        uint nextIndex = getProductSystemRequirementsLength(_storage, _productId);

        setProductSystemRequirement(_storage, _productId, nextIndex, _system, _info);

        setProductSystemRequirementsLength(_storage, _productId, nextIndex + 1);
    }

    // Language Support

    function setProductLanguagesSupportedLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.languagesSupported.length", _productId)), _length);
    }

    function setProductLanguageSupportLanguage(MarketplaceStorage _storage, uint _productId, uint _index, string _language) internal {
        return _storage.setString(keccak256(abi.encodePacked("product.languagesSupported.language", _productId, _index)), _language);
    }

    function setProductLanguageSupportClosedCaptioning(MarketplaceStorage _storage, uint _productId, uint _index, bool _closedCaptioning) internal {
        return _storage.setBool(keccak256(abi.encodePacked("product.languagesSupported.closedCaptioning", _productId, _index)), _closedCaptioning);
    }

    function setProductLanguageSupportAudioDescription(MarketplaceStorage _storage, uint _productId, uint _index, bool _audioDescription) internal {
        return _storage.setBool(keccak256(abi.encodePacked("product.languagesSupported.audioDescription", _productId, _index)), _audioDescription);
    }

    function setProductLanguageSupport(MarketplaceStorage _storage, uint _productId, uint _index, string _language, bool _closedCaptioning, bool _audioDescription) internal {
        setProductLanguageSupportLanguage(_storage, _productId, _index, _language);
        setProductLanguageSupportClosedCaptioning(_storage, _productId, _index, _closedCaptioning);
        setProductLanguageSupportAudioDescription(_storage, _productId, _index, _audioDescription);
    }

    function pushProductLanguageSupport(MarketplaceStorage _storage, uint _productId, string _language, bool _closedCaptioning, bool _audioDescription) internal {
        uint nextIndex = getProductLanguagesSupportedLength(_storage, _productId);

        setProductLanguageSupport(_storage, _productId, nextIndex, _language, _closedCaptioning, _audioDescription);

        setProductLanguagesSupportedLength(_storage, _productId, nextIndex + 1);
    }

    // Version

    function setProductLatestVersionVersion(MarketplaceStorage _storage, uint _productId, bytes32 _version) internal {
        _storage.setBytes32(keccak256(abi.encodePacked("product.latestVersion.version", _productId)), _version);
    }

    function setProductLatestVersionDownloadRefType(MarketplaceStorage _storage, uint _productId, string _downloadRefType) internal {
        _storage.setString(keccak256(abi.encodePacked("product.latestVersion.downloadRefType", _productId)), _downloadRefType);
    }

    function setProductLatestVersionDownloadRefSource(MarketplaceStorage _storage, uint _productId, string _downloadRefSource) internal {
        _storage.setString(keccak256(abi.encodePacked("product.latestVersion.downloadRefSource", _productId)), _downloadRefSource);
    }

    function setProductLatestVersionChecksum(MarketplaceStorage _storage, uint _productId, string _checksum) internal {
        _storage.setString(keccak256(abi.encodePacked("product.latestVersion.checksum", _productId)), _checksum);
    }

    function setProductLatestVersionCreatedAt(MarketplaceStorage _storage, uint _productId, uint _createdAt) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.latestVersion.createdAt", _productId)), _createdAt);
    }

    function setProductLatestVersion(MarketplaceStorage _storage, uint _productId, bytes32 _version, string _downloadRefType, string _downloadRefSource, string _checksum, uint _createdAt) internal {
        setProductLatestVersionVersion(_storage, _productId, _version);
        setProductLatestVersionDownloadRefType(_storage, _productId, _downloadRefType);
        setProductLatestVersionDownloadRefSource(_storage, _productId, _downloadRefSource);
        setProductLatestVersionChecksum(_storage, _productId, _checksum);
        setProductLatestVersionCreatedAt(_storage, _productId, _createdAt);
    }

    function setProductPendingVersionsLength(MarketplaceStorage _storage, uint _productId, uint _length) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.pendingVersions.length", _productId)), _length);
    }

    function setProductPendingVersionVersion(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _version) internal {
        _storage.setBytes32(keccak256(abi.encodePacked("product.pendingVersions.version", _productId, _index)), _version);
    }

    function setProductPendingVersionDownloadRefType(MarketplaceStorage _storage, uint _productId, uint _index, string _downloadRefType) internal {
        _storage.setString(keccak256(abi.encodePacked("product.pendingVersions.downloadRefType", _productId, _index)), _downloadRefType);
    }

    function setProductPendingVersionDownloadRefSource(MarketplaceStorage _storage, uint _productId, uint _index, string _downloadRefSource) internal {
        _storage.setString(keccak256(abi.encodePacked("product.pendingVersions.downloadRefSource", _productId, _index)), _downloadRefSource);
    }

    function setProductPendingVersionChecksum(MarketplaceStorage _storage, uint _productId, uint _index, string _checksum) internal {
        _storage.setString(keccak256(abi.encodePacked("product.pendingVersions.checksum", _productId, _index)), _checksum);
    }

    function setProductPendingVersionCreatedAt(MarketplaceStorage _storage, uint _productId, uint _index, uint _createdAt) internal {
        _storage.setUint(keccak256(abi.encodePacked("product.pendingVersions.createdAt", _productId, _index)), _createdAt);
    }

    function setProductPendingVersion(MarketplaceStorage _storage, uint _productId, uint _index, bytes32 _version, string _downloadRefType, string _downloadRefSource, string _checksum, uint _createdAt) internal {
        setProductPendingVersionVersion(_storage, _productId, _index, _version);
        setProductPendingVersionDownloadRefType(_storage, _productId, _index, _downloadRefType);
        setProductPendingVersionDownloadRefSource(_storage, _productId, _index, _downloadRefSource);
        setProductPendingVersionChecksum(_storage, _productId, _index, _checksum);
        setProductPendingVersionCreatedAt(_storage, _productId, _index, _createdAt);
    }
    
    function pushProductPendingVersion(MarketplaceStorage _storage, uint _productId, bytes32 _version, string _downloadRefType, string _downloadRefSource, string _checksum, uint _createdAt) internal {
        uint nextIndex = getProductPendingVersionsLength(_storage, _productId);

        setProductPendingVersion(_storage, _productId, nextIndex, _version, _downloadRefType, _downloadRefSource, _checksum, _createdAt);

        setProductPendingVersionsLength(_storage, _productId, nextIndex + 1);
    }
}
