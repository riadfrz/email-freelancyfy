'use client';

import { cn } from '@/lib/utils';

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    header?: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.title}
                    className={cn(
                        'group relative overflow-hidden rounded-2xl p-6 transition-all duration-300',
                        'border border-white/5 bg-[#0e0e11] text-left',
                        'hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]',
                        'will-change-transform hover:-translate-y-0.5',
                        item.colSpan || 'col-span-1',
                        item.colSpan === 2 ? 'md:col-span-2' : '',
                        {
                            '-translate-y-0.5 shadow-[0_2px_12px_rgba(255,255,255,0.03)]':
                                item.hasPersistentHover,
                            'dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]':
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100'
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex h-full flex-col space-y-3">
                        {item.header && (
                            <div className="mb-4 flex min-h-[150px] w-full flex-grow items-center justify-center">
                                {item.header}
                            </div>
                        )}

                        <div className="mt-auto">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-gradient-to-br">
                                    {item.icon}
                                </div>
                                {item.status && (
                                    <span
                                        className={cn(
                                            'rounded-lg px-2 py-1 text-xs font-medium backdrop-blur-sm',
                                            'bg-white/10 text-gray-300',
                                            'transition-colors duration-300 group-hover:bg-white/20'
                                        )}
                                    >
                                        {item.status}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-[17px] font-semibold tracking-tight text-gray-100">
                                    {item.title}
                                    {item.meta && (
                                        <span className="ml-2 text-xs font-normal text-gray-400">
                                            {item.meta}
                                        </span>
                                    )}
                                </h3>
                                <p className="text-[15px] font-normal leading-snug text-gray-400">
                                    {item.description}
                                </p>
                            </div>

                            {(item.tags || item.cta) && (
                                <div className="mt-4 flex items-center justify-between">
                                    {item.tags && (
                                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md bg-white/10 px-2 py-1 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {item.cta && (
                                        <span className="text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                                            {item.cta}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent p-px ${
                            item.hasPersistentHover
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100'
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
