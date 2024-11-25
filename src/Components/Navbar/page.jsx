import React from "react";
import flamer from "../../Public/flamer.png";
import Image from "next/image";
import Link from "next/link";
import page from "@/app/Dashboard/page";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-gray-600">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-center" href="/">
          Prometheus
          <Image width={22} height={25} src={flamer} alt="tezt" />
        </a>
      </div>
      <div className="flex-none dropdown">
        <button className="btn btn-square btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-max align-middle right-6">
          <li>
            <Link href="/Dashboard">Dashboard</Link>
          </li>
        </ul>
        {/*<Link href="/Dashboard">
        </Link>*/}
      </div>
    </div>
  );
}
