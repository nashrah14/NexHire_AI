"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const tabs = [
        { key: "Home", label: "Home", href: "#home" },
        {
            key: "Interview",
            label: "AI Interview",
            href: "#ai-interview",
        },
        { key: "Jobs", label: "Jobs", href: "#internships" },
        { key: "Coding", label: "Coding", href: "#coding" },
        { key: "Contact", label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const sections = tabs.map((tab) => document.querySelector(tab.href));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const current = tabs.find(
                            (tab) => tab.href === `#${entry.target.id}`
                        );

                        if (current) setActive(current.key);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((sec) => sec && observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="flex items-center justify-between rounded-full border border-[#243056] bg-[#0D1224]/80 backdrop-blur-xl px-8 py-4 shadow-[0_10px_40px_rgba(79,140,255,0.18)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(79,140,255,0.28)]">
                {/* Logo */}
                <Link
                    href="/#home"
                    className="flex items-center"
                    onClick={() => setActive("Home")}
                >
                    <Image
                        src="/logo.svg"
                        alt="NexHire AI"
                        width={150}
                        height={42}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {tabs.map((tab) => (
                        <a
                            key={tab.key}
                            href={tab.href}
                            onClick={() => setActive(tab.key)}
                            className={`group relative text-sm font-medium tracking-wide transition-all duration-300 ${
                            active === tab.key
                            ? "text-[#4F8CFF]"
                            : "text-[#B4BCD0] hover:text-white"
                            }`}
                        >           
                            {tab.label}

                            <span
                                className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-300 ${
                                    active === tab.key
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href="#ai-interview"
                    className="hidden md:flex items-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,140,255,0.35)]"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    ☰
                </button>
            </div>
        </nav>
    );
}