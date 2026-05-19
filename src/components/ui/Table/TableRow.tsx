import type React from 'react';

interface TableRowProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
    selected?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
    children,
    onClick,
    className = '',
    hover = true,
    selected = false,
}) => {
    return (
        <tr
            className={`group transition-colors ${hover ? 'hover:bg-gray-50/80 dark:hover:bg-white/5' : ''} ${selected ? 'bg-gray-50 dark:bg-white/5' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </tr>
    );
};
