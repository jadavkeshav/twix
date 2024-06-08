"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    return (
        <>
            <header className="bg-vlack shadow ">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center justify-between md:justify-start">
                            <Link className="block text-blue-600" href="/">
                                <span className="sr-only">Home</span>
                                <h1 className="text-3xl font-bold hover:opacity-80 ">Twix</h1>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:flex md:items-center md:gap-12">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-blue-500/75"
                                            href="/aboutus"
                                        >
                                            AboutUs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-blue-500/75"
                                            href="/profile"
                                        >
                                            profile
                                        </Link>
                                    </li>
                                    

                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <Link
                                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/login"
                                >
                                    Login
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`fixed top-0 left-0 z-50 w-64 bg-white h-full shadow-md md:hidden`}
                >
                    <ul className="flex flex-col items-start p-4 text-sm">
                        <li className="w-full">
                            <Link
                                className="block w-full py-2 text-gray-500 transition hover:text-gray-500/75"
                                href="/aboutus"
                                onClick={toggleMobileMenu}
                            >
                                AboutUs
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                className="block w-full py-2 text-gray-500 transition hover:text-gray-500/75"
                                href="/lawyers"
                                onClick={toggleMobileMenu}
                            >
                                lawyers
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                className="block w-full py-2 text-gray-500 transition hover:text-gray-500/75"
                                href="/Awareness"
                                onClick={toggleMobileMenu}
                            >
                                Awareness
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                className="block w-full py-2 text-gray-500 transition hover:text-gray-500/75"
                                href="/services"
                                onClick={toggleMobileMenu}
                            >
                                Services
                            </Link>
                        </li>


                        <li className="w-full">
                            <Link
                                className="block w-full py-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/login"
                                onClick={toggleMobileMenu}
                            >
                                Login
                            </Link>
                        </li>
                        <li className="w-full">

                        </li>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default Navbar