import { useEffect, useState } from 'react';

const metadataURI = "https://peach-neat-locust-443.mypinata.cloud/ipfs/QmebHsuc6GBFer4oeCryNgiCds6Bhw5Nm7Ai4EYE3T47tm";

export default function Show() {
  const [nftData, setNftData] = useState(null);
  
  useEffect(() => {
    const fetchNFTData = async () => {
      try {
        const response = await fetch(metadataURI);
        const data = await response.json();
        setNftData(data);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      }
    };

    fetchNFTData();
  }, []);

  return (
    <div>
      {nftData ? (
        <div>
          <h2>{nftData.name}</h2>
          <img src={nftData.image} alt={nftData.name} style={{ width: '300px', height: 'auto' }} />
          <p>{nftData.description}</p>
        </div>
      ) : (
        <p>Loading NFT data...</p>
      )}
    </div>
  );
}
