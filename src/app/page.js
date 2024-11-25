"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletBalance from "@/Components/WalletBalance/page";
import MintNFT from "@/Components/Mint/page";

import DisplayNFT from "@/Components/Nftdisplay/page";
import Show from "@/Components/Disp/page";

const contractAddress = "0xbaBA0D5eFCCE35253D3c8459b902d3c5A7F661d4";
import Card from "@/Components/Card/page";

export default function Page() {
  // Run only once on component mount

  return (
    <div className="bg-base-100">
      <h1 className="text-3xl font-bold p-4 text-center">Listed Assets</h1>

      <Card />
    </div>
  );
}
