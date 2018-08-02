pragma solidity ^0.4.24;

library Bytes32Utils {

    uint private BYTES_HEADER_SIZE = 32; // Can't actually use constants within in-line assembly but figured it'd be good to define anyways

    function toBytes(bytes32 _bytes32) internal pure returns (bytes memory retBytes) {
        retBytes = new bytes(32);

        assembly {
            mstore(add(bts, /* BYTES_HEADER_SIZE */ 32), _bytes32)
        }
    }
}
