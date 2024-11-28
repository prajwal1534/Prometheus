"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import WF from "@/artifacts/contracts/WindFarm.sol/WF.json"; // Update the path if necessary
import { BackgroundBeams } from "@/Components/ui/background-beams";

const contractAddress = "0xc250067223b1698d8D7d8DFed904eE39Ed799B4A";
const POLYGON_AMOY_CHAIN_ID = "0x13882"; // Chain ID for Polygon Amoy Testnet (80002 in hex)

export default function MintNFTPage() {
  const [loading, setLoading] = useState(false);

  const mintNFT = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      try {
        // Check if the user is connected to the Polygon Amoy Testnet
        const { chainId } = await provider.getNetwork();
        if (chainId !== parseInt(POLYGON_AMOY_CHAIN_ID, 16)) {
          try {
            // Switch the network to Polygon Amoy Testnet
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: POLYGON_AMOY_CHAIN_ID }],
            });
          } catch (switchError) {
            // If the network is not added, request to add the network
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: POLYGON_AMOY_CHAIN_ID,
                    chainName: "Polygon Amoy Testnet",
                    rpcUrls: ["https://rpc-amoy.polygon.technology/"], // New RPC URL
                    nativeCurrency: {
                      name: "Polygon",
                      symbol: "MATIC",
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://amoy.polygonscan.com/"], // Block Explorer URL
                  },
                ],
              });
            } else {
              console.error("Failed to switch network:", switchError);
              return;
            }
          }
        }

        // Proceed with minting the NFT
        const contract = new ethers.Contract(contractAddress, WF.abi, signer);
        setLoading(true);
        const tx = await contract.payToMint(await signer.getAddress(), {
          value: ethers.parseEther("0.005"),
        });
        await tx.wait(); // Wait for the transaction to be mined
        alert("NFT Minted!");
      } catch (error) {
        console.error("Minting error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Ethereum object does not exist");
    }
  };

  return (
    <div className="bg-base-100 flex-row flex">
      <img
        className=" h-full w-[40%] mt-10 px-5 relative"
        src="https://nationaltoday.com/wp-content/uploads/2022/05/National-Windmill-Day-min.jpg"
        alt="RWA"
      />
      <div className=" text-center w-full pt-5">
        <p className=" text-6xl font-extrabold"> Windmill farms</p>
        <br></br>

        <div className=" text-xl px-5 space-y-4">
          <p>Invest in Wind Farm, spread across 5 acres in Chitradurga</p>

          <p>Total Supply: 100</p>
          <p>Price: 0.005 MATIC</p>
          <p>
            Government Deals Acquired:{" "}
            <a
              className="link link-info"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              See More
            </a>
          </p>
          <p>Expected Yield: 15% APY</p>
          <button
            onClick={mintNFT}
            disabled={loading}
            className="btn btn-active btn-primary text-[20px] font-normal"
          >
            {loading ? "Minting..." : "MINT NOW!!"}
          </button>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
