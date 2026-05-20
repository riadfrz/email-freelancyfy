import { ArrowRight, Command, Layers, Zap } from 'lucide-react';

import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';

const SkeletonsLayout = () => (
    <div className="flex w-full items-center justify-center p-6">
        <div className="flex w-full max-w-[200px] flex-col gap-4">
            {/* Header bar */}
            <div className="flex h-2 w-full items-center gap-2">
                <div className="h-2 w-3/4 rounded-full bg-[#8b5cf6]" />
                <div className="h-2 w-1/4 rounded-full bg-white/10" />
            </div>

            {/* Content cards */}
            <div className="flex gap-2">
                <div className="flex flex-1 flex-col gap-2 rounded border border-white/5 bg-white/5 p-3">
                    <div className="h-1.5 w-1/3 rounded-full bg-white/20" />
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                </div>
                <div className="flex flex-1 flex-col gap-2 rounded border border-white/5 bg-white/5 p-3 opacity-50">
                    <div className="h-1.5 w-1/3 rounded-full bg-white/20" />
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                </div>
            </div>
        </div>
    </div>
);

const KeyboardLayout = () => (
    <div className="flex w-full items-center justify-center gap-2">
        <div className="flex h-10 w-10 rotate-[-8deg] items-center justify-center rounded-lg border border-white/10 bg-[#161618] text-xs font-medium text-white/50 shadow-sm transition-transform hover:rotate-0 hover:scale-110">
            ⌘K
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#161618] text-xs font-medium text-white/50 shadow-sm transition-transform hover:-translate-y-1 hover:scale-110">
            C
        </div>
        <div className="flex h-10 w-10 rotate-[8deg] items-center justify-center rounded-lg border border-[#3b82f6]/30 bg-[#1e3a8a]/40 text-xs font-medium text-[#60a5fa] shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-transform hover:rotate-0 hover:scale-110">
            ↵
        </div>
    </div>
);

const RingsLayout = () => (
    <div className="relative flex h-full min-h-[140px] w-full items-center justify-center">
        <div className="absolute h-10 w-10 rounded-full border border-[#fb7185]/20" />
        <div className="absolute h-20 w-20 rounded-full border border-[#fb7185]/10" />
        <div className="absolute h-32 w-32 rounded-full border border-[#fb7185]/5" />
        <div className="absolute h-48 w-48 rounded-full border border-[#fb7185]/5" />
    </div>
);

const featureItems: BentoItem[] = [
    {
        title: 'Purpose-built for freelancers',
        description: 'Designed to help you move fast and stay organized.',
        icon: <Layers className="h-4 w-4 text-[#a78bfa]" />,
        header: <SkeletonsLayout />,
    },
    {
        title: 'Designed to move fast',
        description: 'Keyboard shortcuts, instant loading, and zero clutter.',
        icon: <Zap className="h-4 w-4 text-[#60a5fa]" />,
        header: <KeyboardLayout />,
    },
    {
        title: 'Crafted to perfection',
        description: 'A tool that feels as premium as the work you deliver.',
        icon: <Command className="h-4 w-4 text-[#fb7185]" />,
        header: <RingsLayout />,
    },
];

export default function BentoGridSection() {
    return (
        <section className="bg-gradient-to-b from-[#0E0E10] to-[#050505] py-24 sm:py-32">
            <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="text-pretty text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                            Made for modern
                            <br />
                            freelance businesses
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Freelancyfy is shaped by the practices and principles that distinguish
                            world-class founders from the rest: relentless focus, fast execution,
                            and a commitment to the quality of craft.
                        </p>
                        <a
                            href="/register"
                            className="group mt-6 inline-flex items-center text-[15px] font-medium text-[#60a5fa] hover:text-[#93c5fd]"
                        >
                            Make the switch
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>

            <BentoGrid items={featureItems} />
        </section>
    );
}
