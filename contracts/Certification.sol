//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Certification {
    string public name;
    string public password;
    string public ipfsHash;

    constructor(
        string memory _name,
        string memory _password,
        string memory _ipfsHash
    ) {
        name = _name;
        password = _password;
        ipfsHash = _ipfsHash;
    }
}
