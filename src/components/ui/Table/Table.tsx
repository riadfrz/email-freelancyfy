import type React from 'react';

interface TableBaseProps {
    children: React.ReactNode;
    className?: string;
}

interface TableProps extends TableBaseProps {
    variant?: 'default' | 'striped';
    containerClassName?: string;
}

export const Table: React.FC<TableProps> = ({
    children,
    className = '',
    variant = 'default',
    containerClassName = '',
}) => {
    const variantClasses = {
        default: '',
        striped:
            '[&_tbody_tr:nth-child(odd)]:bg-gray-50/50 dark:[&_tbody_tr:nth-child(odd)]:bg-white/[0.02]',
    };

    return (
        <div
            className={`overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/5 ${containerClassName}`}
        >
            <div className="overflow-x-auto">
                <table
                    className={`w-full text-left text-sm text-gray-600 dark:text-gray-300 ${variantClasses[variant]} ${className}`}
                >
                    {children}
                </table>
            </div>
        </div>
    );
};
