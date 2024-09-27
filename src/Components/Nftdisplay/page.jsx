"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
//import Test from '@/artifacts/contracts/NFT.sol/Test.json';

const contractAddress = '0x0B306BF915C4d645ff596e518fAf3F9669b97016';

export default function DisplayNFT() {
  const [nftData, setNftData] = useState(null);
  
  const fetchNFTData = async (tokenId) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, Test.abi, provider);
    
    try {
      const tokenURI = await contract.tokenURI(tokenId);
      const response = await fetch(tokenURI);
      const data = await response.json();
      setNftData(data);
    } catch (error) {
      console.error("Error fetching NFT data:", error);
    }
  };

  return (
    <div>
      {nftData && (
        <div>
          <h2>{nftData.name}</h2>
          <img src={nftData.image} alt={nftData.name} />
          <p>{nftData.description}</p>
        </div>
      )}
      {/* You can call fetchNFTData with a specific tokenId, for example: */}
      <button onClick={() => fetchNFTData(0)}>Fetch NFT Data</button>
    </div>
  );
}
