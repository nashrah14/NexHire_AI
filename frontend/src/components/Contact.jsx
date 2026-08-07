"use client";

import { Mail, Phone, Heart } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-[#050816] text-gray-200 min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <section className="max-w-3xl w-full text-center space-y-10">
                {/* Header */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-[#b4bcd0] text-lg">
                        Made with a lot of 💙, hard work, and dedication to help
                        students and professionals accelerate their careers.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="bg-[#0d1224] border border-[#243056] rounded-2xl p-8 shadow-lg space-y-6">
                    <h2 className="text-2xl font-semibold text-[#4f8cff]">
                        Contact Information
                    </h2>
                    <p className="text-[#b4bcd0]">
                        Have a question, want to collaborate, or interested in
                        hiring us? Reach out anytime — we’d love to hear from
                        you.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-4 mt-6">
                        {/* <div className="flex items-center space-x-3">
                            <Phone className="text-[#4f8cff] w-6 h-6" />
                            <a
                                href="tel:+916300768805"
                                className="text-gray-300 hover:text-[#4f8cff] transition-colors"
                            >
                                +91 80749 93925
                            </a>
                        </div> */}

                        <div className="flex items-center space-x-3">
                            <Mail className="text-[#4f8cff] w-6 h-6" />
                            <a
                                href="mailto:NexHire AI@zohomail.in"
                                className="text-gray-300 hover:text-[#4f8cff] transition-colors"
                            >
                                nashrahfathima14@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hiring Section */}
                <div className="text-center mt-10 space-y-3">
                    <h3 className="text-2xl font-semibold text-white">
                        Hiring or Collaboration
                    </h3>
                    <p className="text-[#b4bcd0]">
                        For partnership, hiring, or contract opportunities,
                        please reach out to us via{" "}
                        <span className="text-[#4f8cff] font-semibold">
                            email above
                        </span>
                        . Let’s build something amazing together!
                    </p>
                </div>
            </section>
        </main>
    );
}
