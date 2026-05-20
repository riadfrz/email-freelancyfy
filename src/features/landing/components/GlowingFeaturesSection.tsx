import { Bot, FileText, LayoutDashboard, MessageSquare } from 'lucide-react';

import { GlowingEffect } from '@/components/ui/glowing-effect';

import { cn } from '@/lib/utils';

export default function GlowingFeaturesSection() {
    return (
        <section className="relative bg-[#0E0E10] py-24 sm:py-32">
            {/* Smooth fade from AISection black (#050505) into this grey (#0E0E10) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl sm:text-center">
                    <h2 className="text-base/7 font-semibold text-landing-primary">
                        Why Freelancyfy?
                    </h2>
                    <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-white sm:text-balance sm:text-4xl md:text-5xl">
                        Everything you need to scale your independent career
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-300">
                        Join thousands of top-tier freelancers and businesses building the future of
                        work together.
                    </p>
                </div>

                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                    <GridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<LayoutDashboard className="h-4 w-4 text-landing-primary" />}
                        title="Dedicated Client Portals"
                        description="Offer your clients a premium, tailored experience. Give them a dedicated dashboard to track progress, view documents, and communicate seamlessly."
                    />
                    <GridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<FileText className="h-4 w-4 text-landing-primary" />}
                        title="Professional Quoting & Invoicing"
                        description="Generate professional quotes (devis) and handle all your invoicing directly within your workspace for a streamlined end-to-end billing process."
                    />
                    <GridItem
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<MessageSquare className="h-4 w-4 text-landing-primary" />}
                        title="Real-Time Communication"
                        description="Stay in sync instantly. Built-in chat keeps your conversations organized per project without relying on scattered third-party messaging apps."
                    />
                    <GridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<LayoutDashboard className="h-4 w-4 text-landing-primary" />}
                        title="Visual Project Management"
                        description="Organize your workflow intuitively with Kanban boards, tracking every phase of your project from conception right through to final delivery."
                    />
                    <GridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<Bot className="h-4 w-4 text-landing-primary" />}
                        title="AI Productivity Assistant (Coming Soon)"
                        description="Leverage our built-in AI assistant to help you draft messages, structure your projects effectively, and keep your workflow moving efficiently."
                    />
                </ul>
            </div>
        </section>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={cn('min-h-[14rem] list-none', area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-balance pt-0.5 font-sans text-xl font-semibold leading-[1.375rem] tracking-[-0.04em] text-foreground md:text-2xl md:leading-[1.875rem]">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
