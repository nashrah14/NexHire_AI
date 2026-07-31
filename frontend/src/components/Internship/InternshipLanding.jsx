"use client";

import Image from "next/image";
import { Briefcase, Target, Users, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InternshipLanding() {
    const router = useRouter();

    return (
        <main className="bg-[#050816] text-gray-200 min-h-screen flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-24 min-h-screen">
                {/* Left Text Section */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <Rocket className="w-16 h-16 text-[#4f8cff] mx-auto md:mx-0" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Explore Latest Internship Opportunities
                    </h2>
                    <p className="text-[#b4bcd0] text-lg max-w-md mx-auto md:mx-0">
                        Get access to top internships fetched live from our
                        AI-powered FastAPI backend. Stay updated with new
                        openings every day from leading tech companies.
                    </p>

                    <button
                        onClick={() => router.push("/internships")}
                        className="border bg-[#4f8cff] text-black px-5 py-3 rounded-xl font-semibold hover:border-[#7b61ff] hover:bg-[#050816] hover:text-[#4f8cff] transition-all duration-200"
                    >
                        Explore Internships
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 mt-12 md:mt-0 flex justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80"
                        alt="Internship Illustration"
                        width={480}
                        height={360}
                        className="rounded-2xl shadow-[0_0_40px_#4f8cff20]"
                    />
                </div>
            </section>

            {/* Why Internship Section */}
            <section className="w-full py-20 bg-[#0a0a0a] border-t border-[#243056]">
                <div className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-10">
                    <h2 className="text-3xl font-bold text-white">
                        Why Choose Internships?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Target,
                                title: "Real-world Experience",
                                desc: "Work on live projects and gain hands-on exposure to real tech challenges.",
                            },
                            {
                                icon: Users,
                                title: "Network & Collaborate",
                                desc: "Connect with industry professionals, mentors, and other passionate learners.",
                            },
                            {
                                icon: Rocket,
                                title: "Boost Your Career",
                                desc: "Turn your internship into a full-time opportunity and build a strong portfolio.",
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
