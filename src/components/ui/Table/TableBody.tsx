import type React from 'react';

interface TableBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, className = '' }) => {
    return (
        <tbody className={`divide-y divide-gray-100 dark:divide-white/10 ${className}`}>
            {children}
        </tbody>
    );
};
