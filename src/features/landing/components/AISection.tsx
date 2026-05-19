import { useState } from 'react';

import { Bot, Calendar, ChevronRight, FileText, Mail } from 'lucide-react';

import LandingButton from './LandingButton';
import LandingSection from './LandingSection';

const AISection = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <LandingSection className="overflow-hidden bg-[#050505] py-24">
            {/* Smooth fade from hero into black */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-landing-background to-transparent" />
            <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-landing-accent/20 bg-landing-accent/10 px-3 py-1 text-sm font-medium text-landing-accent">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-landing-accent" />
                    Artificial Intelligence
                </div>

                {/* Heading */}
                <h2 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                    AI-assisted freelance workflow (Coming Soon)
                </h2>

                {/* Description */}
                <p className="mb-10 max-w-2xl text-xl leading-relaxed text-landing-secondary">
                    Freelancyfy AI. Choose from a variety of AI agents and start delegating work,
                    from proposal generation to client communication.
                </p>

                {/* CTA */}
                <LandingButton variant="secondary" className="mb-24 h-12 rounded-full px-8">
                    Learn more <ChevronRight size={14} className="ml-1" />
                </LandingButton>

                {/* 3D Visual */}
                <div className="perspective-[2000px] relative flex h-[600px] w-full max-w-5xl justify-center">
                    {/* The Tilted Card Container */}
                    <div
                        className="hover:rotate-x-[15deg] sm:rotate-x-[25deg] absolute top-0 w-full max-w-4xl origin-top transform-gpu rounded-xl border border-white/10 bg-[#0E0E10] p-4 shadow-2xl transition-transform duration-700"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Header of the fake menu */}
                        <div className="relative mb-4" style={{ transform: 'translateZ(20px)' }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Assign to..."
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-lg text-white placeholder-landing-accent/70 outline-none focus:border-landing-accent/50 focus:ring-1 focus:ring-landing-accent/50"
                            />
                            <div className="absolute left-4 top-4 h-6 w-0.5 animate-pulse bg-landing-accent" />
                        </div>

                        {/* List Items */}
                        <div className="space-y-1 p-2">
                            {/* Active Item - POPPED OUT */}
                            <div
                                className="relative z-10 -mx-4 flex items-center gap-4 rounded-xl border border-white/20 bg-[#1C1C1F]/90 p-4 text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,1)] backdrop-blur-md transition-all"
                                style={{ transform: 'translateZ(60px) scale(1.05)' }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                    <Bot size={20} />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-medium">Proposal Agent</span>
                                    <span className="text-sm text-white/50">
                                        Draft a contract for the new branding project
                                    </span>
                                </div>
                                <div className="ml-auto flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-landing-accent text-white shadow-lg shadow-landing-accent/50">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 3L4.5 8.5L2 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                {/* Rim Light Effect */}
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                            </div>

                            {/* Inactive Item 1 */}
                            <div
                                className="group flex cursor-pointer items-center gap-4 rounded-lg p-4 text-landing-secondary opacity-90 transition-colors duration-300 hover:bg-white/5 hover:text-white hover:opacity-100"
                                style={{ transform: 'translateZ(10px)' }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                                    <FileText size={20} />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-medium">Invoice Agent</span>
                                    <span className="text-sm opacity-50">
                                        Generate Invoice #1024
                                    </span>
                                </div>
                                <span className="ml-auto text-sm opacity-0 transition-opacity group-hover:opacity-100">
                                    Command + I
                                </span>
                            </div>

                            {/* Inactive Item 2 */}
                            <div
                                className="group flex cursor-pointer items-center gap-4 rounded-lg p-4 text-landing-secondary transition-colors hover:bg-white/5 hover:text-white"
                                style={{ transform: 'translateZ(10px)' }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-green-500/10 text-green-400 group-hover:bg-green-500/20">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-medium">Email Assistant</span>
                                    <span className="text-sm opacity-50">
                                        Summarize client emails
                                    </span>
                                </div>
                            </div>

                            {/* Inactive Item 3 */}
                            <div
                                className="group flex cursor-pointer items-center gap-4 rounded-lg p-4 text-landing-secondary opacity-90 transition-colors duration-300 hover:bg-white/5 hover:text-white hover:opacity-100"
                                style={{ transform: 'translateZ(10px)' }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20">
                                    <Calendar size={20} />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-medium">Scheduling Bot</span>
                                    <span className="text-sm opacity-50">
                                        Schedule meeting with Sarah
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Fade Overlay */}
                        <div className="absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/80 to-transparent" />
                    </div>

                    {/* Glow effect behind */}
                    <div className="absolute top-20 -z-10 h-64 w-96 rounded-full bg-landing-accent/20 blur-[100px]" />
                </div>
            </div>
        </LandingSection>
    );
};

export default AISection;
