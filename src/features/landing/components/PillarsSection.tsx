import { ArrowRight, Command, Layers, Zap } from 'lucide-react';

import LandingSection from './LandingSection';

const PillarsSection = () => {
    const pillars = [
        {
            title: 'Purpose-built for freelancers',
            desc: 'Designed to help you move fast and stay organized.',
            visual: 'bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent',
            iconColor: 'text-purple-400',
            iconBg: 'bg-purple-500/10',
            Icon: Layers,
            graphic: (
                <div className="absolute left-1/2 top-8 h-32 w-3/4 -translate-x-1/2 space-y-3">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-purple-500/20">
                        <div className="h-full w-2/3 animate-lineGrow rounded-full bg-purple-500/60" />
                    </div>
                    <div className="flex gap-2">
                        <div className="h-16 w-1/2 space-y-2 rounded-lg border border-white/5 bg-[#1C1C1F] p-2">
                            <div className="h-2 w-8 rounded bg-white/10" />
                            <div className="h-1.5 w-full rounded bg-white/5" />
                            <div className="h-1.5 w-2/3 rounded bg-white/5" />
                        </div>
                        <div className="h-16 w-1/2 space-y-2 rounded-lg border border-white/5 bg-[#1C1C1F] p-2 opacity-50">
                            <div className="h-2 w-8 rounded bg-white/10" />
                            <div className="h-1.5 w-full rounded bg-white/5" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Designed to move fast',
            desc: 'Keyboard shortcuts, instant loading, and zero clutter.',
            visual: 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent',
            iconColor: 'text-blue-400',
            iconBg: 'bg-blue-500/10',
            Icon: Zap,
            graphic: (
                <div className="absolute left-1/2 top-12 flex -translate-x-1/2 gap-4">
                    <div className="flex h-12 w-12 -rotate-6 transform items-center justify-center rounded-lg border border-white/10 bg-[#1C1C1F] font-mono text-xs text-white/50 shadow-lg transition-transform duration-500 group-hover:rotate-0">
                        ⌘K
                    </div>
                    <div className="flex h-12 w-12 rotate-3 transform items-center justify-center rounded-lg border border-white/10 bg-[#1C1C1F] font-mono text-xs text-white/50 shadow-lg transition-transform delay-75 duration-500 group-hover:rotate-0">
                        C
                    </div>
                    <div className="flex h-12 w-12 rotate-12 transform items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 font-mono text-xs text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-transform delay-150 duration-500 group-hover:rotate-0">
                        ↵
                    </div>
                </div>
            ),
        },
        {
            title: 'Crafted to perfection',
            desc: 'A tool that feels as premium as the work you deliver.',
            visual: 'bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-transparent',
            iconColor: 'text-pink-400',
            iconBg: 'bg-pink-500/10',
            Icon: Command,
            graphic: (
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="flex h-48 w-48 animate-[spin_10s_linear_infinite] items-center justify-center rounded-full border border-pink-500/20">
                        <div className="flex h-32 w-32 animate-[spin_8s_linear_infinite_reverse] items-center justify-center rounded-full border border-pink-500/30">
                            <div className="h-16 w-16 rounded-full border border-pink-500/40" />
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <LandingSection className="bg-gradient-to-b from-[#050505] to-[#0E0E10]">
            <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div>
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
                        Made for modern <br />
                        freelance businesses
                    </h2>
                </div>
                <div>
                    <p className="mb-6 text-lg leading-relaxed text-landing-secondary">
                        Freelancyfy is shaped by the practices and principles that distinguish
                        world-class founders from the rest: relentless focus, fast execution, and a
                        commitment to the quality of craft.
                    </p>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-landing-accent transition-colors hover:text-white"
                    >
                        Make the switch <ArrowRight size={14} />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {pillars.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="group relative flex h-[400px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#0E0E10] p-8"
                    >
                        {/* Static Border */}
                        <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-landing-border transition-colors duration-500 group-hover:border-white/5" />

                        {/* Abstract Visual Background */}
                        <div
                            className={`absolute inset-0 ${pillar.visual} opacity-40 transition-opacity duration-700 group-hover:opacity-60`}
                        />

                        {/* Grid Pattern */}
                        <div className="pointer-events-none absolute inset-0 bg-[url('https://linear.app/static/images/grid.svg')] bg-center opacity-10" />

                        {/* Interactive Graphic Area */}
                        <div className="relative h-40 w-full">{pillar.graphic}</div>

                        <div className="relative z-10">
                            <div
                                className={`h-10 w-10 rounded-lg ${pillar.iconBg} ${pillar.iconColor} mb-4 flex items-center justify-center border border-white/5 backdrop-blur-md`}
                            >
                                <pillar.Icon size={18} />
                            </div>
                            <h3 className="mb-2 text-xl font-medium text-white">{pillar.title}</h3>
                            <p className="text-sm leading-relaxed text-landing-secondary">
                                {pillar.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </LandingSection>
    );
};

export default PillarsSection;
