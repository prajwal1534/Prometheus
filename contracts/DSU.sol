// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DSU is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    uint256 public minted;
    uint256 maxmint = 1;

    constructor(address initialOwner) ERC721("Dayanand Sagar University", "DSU") Ownable(initialOwner) {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function payToMint(address recipient) public payable returns (uint256) {
        require(msg.value >= 0.005 ether, "Need to pay up!");
        require(minted < maxmint, "sold out");

        uint256 newItemId = _nextTokenId++;
        string memory metadataURI = "https://lavender-fantastic-antelope-698.mypinata.cloud/ipfs/QmNeSpEVtCnFPhVM3ZixbPvexFzBQtkmQtikjYji8pZHH4";
    
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI);
        minted++;

        return newItemId;
    }

    // Withdraw function for owner to withdraw contract balance
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}
