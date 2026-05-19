import type React from 'react';

interface TableHeadProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    sortable?: boolean;
    sortDirection?: 'asc' | 'desc' | null;
    align?: 'left' | 'center' | 'right';
    icon?: React.ReactNode;
}

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    onClick,
    className = '',
    sortable = false,
    sortDirection,
    align = 'left',
    icon,
}) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <th
            className={`px-6 py-4 ${alignClasses[align]} ${sortable ? 'cursor-pointer select-none hover:bg-gray-100/50 dark:hover:bg-white/10' : ''} ${className}`}
            onClick={onClick}
        >
            <div
                className={`flex items-center ${align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : 'justify-start'} gap-2`}
            >
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
                {sortable && (
                    <>
                        {sortDirection === 'asc' ? (
                            <svg
                                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7l4-4m0 0l4 4m-4-4v18"
                                />
                            </svg>
                        ) : sortDirection === 'desc' ? (
                            <svg
                                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                            </svg>
                        )}
                    </>
                )}
            </div>
        </th>
    );
};
