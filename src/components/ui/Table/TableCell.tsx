import type React from 'react';

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    truncate?: boolean;
    colSpan?: number;
}

export const TableCell: React.FC<TableCellProps> = ({
    children,
    className = '',
    align = 'left',
    truncate = false,
    colSpan,
}) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <td
            className={`px-6 py-4 ${alignClasses[align]} ${truncate ? 'max-w-xs truncate' : ''} ${className}`}
            colSpan={colSpan}
        >
            {children}
        </td>
    );
};

export const LoadingTableCell: React.FC = () => {
    return (
        <td className="px-6 py-4">
            <div className="h-6 w-full animate-pulse rounded bg-gray-200 dark:bg-white/10" />
        </td>
    );
};
