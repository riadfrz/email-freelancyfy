import type React from 'react';

interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
    sticky?: boolean;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
    children,
    className = '',
    sticky = false,
}) => {
    return (
        <thead
            className={`bg-gray-50/50 text-xs font-semibold uppercase text-gray-500 dark:bg-white/5 dark:text-gray-400 ${sticky ? 'sticky top-0' : ''} ${className}`}
        >
            {children}
        </thead>
    );
};
