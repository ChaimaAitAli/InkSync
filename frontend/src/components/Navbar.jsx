"use client";

import logo from "../assets/inkSyncLogo.png";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white" }}>
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <Image
                        src={logo}
                        alt="inkSync Logo"
                        width={112}
                        height={40}
                        className="d-inline-block align-text-top"
                    />
                </Link>
                <div className={`hamburger-container ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                        <g strokeWidth="6.5" strokeLinecap="round">
                            <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3795bd" />
                            <path d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554" fill="none" stroke="#3795bd" />
                            <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3795bd" />
                            <path d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554" fill="none" stroke="#3795bd" />
                            <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3795bd" />
                            <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3795bd" />
                        </g>
                    </svg>
                </div>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto mobile-nav">
                        <li className="nav-item nav-spacing">
                            <Link href="#" className="nav-link dosis" style={{ fontWeight: "500" }}>
                                Templates
                            </Link>
                        </li>
                        <li className="nav-item nav-spacing">
                            <Link href="#" className="nav-link dosis" style={{ fontWeight: "500" }}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item nav-spacing">
                            <Link href="#" className="nav-link dosis" style={{ fontWeight: "500" }}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item nav-spacing">
                            <Link href="#" className="nav-link dosis" style={{ fontWeight: "500" }}>
                                Help
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item login nav-spacing-login">
                            <Link href="#" className="nav-link dosis" style={{ color: "#3795bd" }}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item get-started">
                            <Link href="#" className="nav-link dosis">
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;