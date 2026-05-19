'use client';

import { useRef, useState } from 'react';

import { formatSeconds } from '@/lib/timeUtils';
import { cn } from '@/lib/utils';

interface MiniChartDataPoint {
    label: string;
    value: number; // in seconds
}

interface MiniChartProps {
    data: MiniChartDataPoint[];
}

export function MiniChart({ data }: MiniChartProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const maxValue = Math.max(...data.map((d) => d.value), 1);

    const hoveredItem = hoveredIndex !== null ? data[hoveredIndex] : null;

    return (
        <div
            ref={containerRef}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative w-full"
        >
            {/* Value display */}
            <div className="mb-4 flex items-baseline gap-2">
                <span
                    className={cn(
                        'font-mono text-2xl font-bold tabular-nums transition-all duration-200',
                        hoveredItem
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-300 dark:text-gray-600'
                    )}
                >
                    {hoveredItem && hoveredItem.value > 0
                        ? formatSeconds(hoveredItem.value, 'short')
                        : '—'}
                </span>
                {hoveredItem && (
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                        {hoveredItem.label}
                    </span>
                )}
            </div>

            {/* Bars */}
            <div className="flex h-28 items-end gap-1.5">
                {data.map((item, index) => {
                    const heightPct =
                        item.value > 0 ? Math.max((item.value / maxValue) * 100, 4) : 4;
                    const isHovered = hoveredIndex === index;
                    const isAnyHovered = hoveredIndex !== null;
                    const isNeighbor =
                        hoveredIndex !== null &&
                        (index === hoveredIndex - 1 || index === hoveredIndex + 1);
                    const isEmpty = item.value === 0;

                    return (
                        <div
                            key={item.label}
                            className="relative flex h-full flex-1 flex-col items-center justify-end gap-2"
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            {/* Bar */}
                            <div
                                className={cn(
                                    'w-full origin-bottom rounded-sm transition-all duration-200 ease-out',
                                    isEmpty
                                        ? 'bg-gray-100 dark:bg-white/[0.04]'
                                        : isHovered
                                          ? 'bg-[#0F172A] dark:bg-white'
                                          : isNeighbor
                                            ? 'bg-gray-300 dark:bg-white/30'
                                            : isAnyHovered
                                              ? 'bg-gray-100 dark:bg-white/[0.06]'
                                              : 'bg-gray-200 group-hover:bg-gray-200 dark:bg-white/10 dark:group-hover:bg-white/10'
                                )}
                                style={{
                                    height: `${heightPct}%`,
                                    transform: isHovered ? 'scaleX(1.1)' : 'scaleX(1)',
                                }}
                            />

                            {/* Label */}
                            <span
                                className={cn(
                                    'whitespace-nowrap text-[10px] font-medium transition-colors duration-200',
                                    isHovered
                                        ? 'text-gray-900 dark:text-white'
                                        : 'text-gray-400 dark:text-gray-600'
                                )}
                            >
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
