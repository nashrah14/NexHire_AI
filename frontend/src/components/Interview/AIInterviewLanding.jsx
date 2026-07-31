"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, UserCheck, Rocket } from "lucide-react";

export default function AIInterviewLanding() {
    return (
        <main className="bg-[#050816] text-white min-h-screen flex flex-col items-center justify-center">
            <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-32 pb-24 mt-10">
                <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                        alt="AI Interview Illustration"
                        width={480}
                        height={360}
                        className="rounded-2xl shadow-[0_0_40px_#4f8cff20]"
                    />
                </div>

                <div className="flex-1 space-y-6 text-center md:text-left md:pl-10">
                    <span className="text-[#4f8cff] text-sm uppercase tracking-wider">
                        AI Interview
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Practice & Improve{" "}
                        <span className="text-[#4f8cff]">Your Skills</span>
                    </h1>
                    <p className="text-[#b4bcd0] text-lg max-w-md mx-auto md:mx-0">
                        Upload your resume, role, and company details - our AI
                        generates interview questions, guides your responses,
                        and provides feedback to help you shine.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link href="/interview">
                            <button className="border bg-[#4f8cff] text-black px-5 py-3 rounded-xl font-semibold  hover:border-[#7b61ff] hover:bg-[#050816] hover:text-[#4f8cff] transition-all duration-200">
                                Experience AI Interview
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-[#0a0a0a] border-t border-[#243056]">
                <div className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-8">
                    <h2 className="text-3xl font-bold text-white">
                        Why Choose AI Interview?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: UserCheck,
                                title: "Personalized Questions",
                                desc: "AI tailors every question based on your resume and job role.",
                            },
                            {
                                icon: Target,
                                title: "Real-time Feedback",
                                desc: "Get instant performance analysis and improvement tips.",
                            },
                            {
                                icon: Rocket,
                                title: "Boost Confidence",
                                desc: "Practice as many times as you need until you're ready for the real deal.",
                            },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="p-8 bg-[#0d1224] border border-[#243056] rounded-2xl hover:border-[#4f8cff] hover:shadow-[0_0_25px_#4f8cff40] transition-all duration-300"
                            >
                                <Icon className="w-10 h-10 text-[#4f8cff] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">
                                    {title}
                                </h3>
                                <p className="text-[#b4bcd0]">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
