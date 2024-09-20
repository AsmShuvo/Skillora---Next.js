"use client"

import Link from "next/link";
import { Roboto } from "next/font/google";
import { Concert_One } from "next/font/google";
import { Gochi_Hand } from "next/font/google";
import { Button } from "./ui/button"; 

const concertOne = Concert_One({ weight: ['400'], subsets: ["latin"] })
const gochi_hand = Gochi_Hand({ weight: ['400'], subsets: ["latin"] })


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li>
                                <a>Courses</a>
                                <ul className="p-2">
                                    <li><Link href={"/web-development"}> Web Development </Link> </li>
                                    <li><Link href={"/web-design"}> Web Design </Link> </li>
                                    <li><Link href={"/app-development"}> App Development </Link> </li>
                                    <li><Link href={"/game-development"}> Game Development </Link> </li>
                                    <li><Link href={"/uiux-design"}> UIUX Design </Link> </li>
                                    <li><Link href={"/cyber-security"}> Cyber Security </Link> </li>
                                </ul>
                            </li>
                            <li><Link href="/about-us">About Us</Link> </li>
                            <li><Link href="/contact-us">Contact Us</Link> </li>
                        </ul>
                    </div>
                    <a className={`text-blue-600 text-5xl ml-8 mt-3 font-bold ${gochi_hand.className} `}>Skillora</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="text-gray-700" href={"/"}>Home</Link></li>
                        <li>
                            <details>
                                <summary className="text-gray-700" >Courses</summary>
                                <ul className="p-2">
                                    <li><Link href={"/web-development"}> Web Development </Link> </li>
                                    <li><Link href={"/web-design"}> Web Design </Link> </li>
                                    <li><Link href={"/app-development"}> App Development </Link> </li>
                                    <li><Link href={"/game-development"}> Game Development </Link> </li>
                                    <li><Link href={"/uiux-design"}> UIUX Design </Link> </li>
                                    <li><Link href={"/cyber-security"}> Cyber Security </Link> </li>
                                </ul>
                            </details>
                        </li>
                        <li><Link className="text-gray-700" href="/about-us">About Us</Link> </li>
                        <li><Link className="text-gray-700" href="/contact-us">Contact Us</Link> </li>
                        <label className="input bg-gray-50 text-gray-900 input-bordered flex items-center gap-2 h-10">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>

                    </ul>
                </div>
                <div className="navbar-end">

                    <Button className="text-blue-600" variant="link">Login</Button>
                    <Button className="border border-blue-800 text-blue-800 font-semibold" variant="outline">Join for free</Button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;