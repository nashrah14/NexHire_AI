"use client";

import { Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#050816] text-[#b4bcd0] border-t border-[#243056] py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo + Description */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src="/logo.svg"
                            alt="NexHire AI Logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm leading-relaxed text-[#b4bcd0]">
                        Empowering students to connect with internships, coding
                        practice, and AI-driven interview preparation - built
                        with <span className="text-[#4f8cff]">dedication</span>{" "}
                        and <span className="text-[#4f8cff]">hard work</span>.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/#home"
                                className="hover:text-[#4f8cff] transition-all"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#ai-interview"
                                className="hover:text-[#4f8cff] transition-all"
                            >
                                AI Interview
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#internships"
                                className="hover:text-[#4f8cff] transition-all"
                            >
                                Internships
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#coding"
                                className="hover:text-[#4f8cff] transition-all"
                            >
                                Coding Practice
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="hover:text-[#4f8cff] transition-all"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Contact Us
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {/* <li className="flex items-center gap-2">
                            <Phone size={16} className="text-[#4f8cff]" />
                            <span>+91 80749 93925</span>
                        </li> */}
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-[#4f8cff]" />
                            <span>nashrahfathima14@gmail.com</span>
                        </li>
                        <li>
                            <p className="text-gray-500 text-xs">
                                For hiring or collaboration, reach us via email.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://linkedin.com/in/nashrahfathima"
                            target="_blank"
                            className="text-[#b4bcd0] hover:text-[#4f8cff] transition-all"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="https://github.com/nashrah14"
                            target="_blank"
                            className="text-[#b4bcd0] hover:text-[#4f8cff] transition-all"
                        >
                            <Github size={28} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#243056] mt-10 pt-6 text-center text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()}{" "}
                    <span className="text-[#4f8cff] font-medium">
                        NexHire AI
                    </span>{" "}
                    - Built with 💙 for developers and students.
                </p>
            </div>
        </footer>
    );
}
