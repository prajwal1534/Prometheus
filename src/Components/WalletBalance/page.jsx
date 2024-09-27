"use client"; // Make sure to include this at the top if you're using this in a Next.js client component

import { useState } from 'react';
import { ethers } from 'ethers'; // Import ethers

function WalletBalance() {
    const [balance, setBalance] = useState(null); // Initialize balance to null
    const [loading, setLoading] = useState(false); // Optional: Loading state

    const getBalance = async () => {
        setLoading(true); // Set loading to true
        try {
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const balance = await provider.getBalance(account);
            setBalance(ethers.formatEther(balance)); // Use ethers.formatEther directly
        } catch (error) {
            console.error("Error fetching balance:", error);
            setBalance(null); // Reset balance on error
        } finally {
            setLoading(false); // Set loading to false regardless of success
        }
    };
  
    return (
        <div>
            <h5>Your Balance: {balance !== null ? `${balance} ETH` : "Connect your wallet"}</h5>
            <button onClick={getBalance} disabled={loading}>
                {loading ? 'Loading...' : 'Show My Balance'}
            </button>
        </div>
    );
}

export default WalletBalance;
