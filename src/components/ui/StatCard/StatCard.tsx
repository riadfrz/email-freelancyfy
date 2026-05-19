export type StatCardColor = 'primary' | 'neutral';
export type StatCardLayout = 'vertical' | 'horizontal';

export interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    trend?: string;
    color?: StatCardColor;
    layout?: StatCardLayout;
}

export const StatCard = ({
    icon,
    label,
    value,
    trend,
    color = 'primary',
    layout = 'vertical',
}: StatCardProps) => {
    const bgClass =
        color === 'primary'
            ? 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]'
            : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300';

    if (layout === 'horizontal') {
        return (
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.04]">
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className={`inline-flex rounded-xl p-2.5 ${bgClass}`}>{icon}</div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {value}
                        </span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-500">
                        {label}
                    </p>
                    {trend && (
                        <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-600">{trend}</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.04]">
            <div className="p-5">
                <div className={`mb-3 inline-flex rounded-xl p-2.5 ${bgClass}`}>{icon}</div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {label}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                {trend && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{trend}</p>}
            </div>
        </div>
    );
};

export const StatCardSkeleton = ({ layout = 'vertical' }: { layout?: StatCardLayout }) => {
    if (layout === 'horizontal') {
        return (
            <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-gray-200 dark:bg-white/10" />
                    <div className="h-7 w-10 rounded bg-gray-200 dark:bg-white/10" />
                </div>
                <div className="mt-4 h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
            </div>
        );
    }

    return (
        <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.04]">
            <div className="mb-3 h-10 w-10 rounded-xl bg-gray-200 dark:bg-white/10" />
            <div className="h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
            <div className="mt-1 h-7 w-16 rounded bg-gray-200 dark:bg-white/10" />
            <div className="mt-1 h-3 w-20 rounded bg-gray-200 dark:bg-white/10" />
        </div>
    );
};
