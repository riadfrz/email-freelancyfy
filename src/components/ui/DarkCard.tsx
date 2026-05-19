import React from 'react';

interface DarkCardProps {
    children: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}

export const DarkCard: React.FC<DarkCardProps> = ({
    children,
    selected = false,
    onClick,
    className = '',
}) => {
    return (
        <div
            onClick={onClick}
            className={`rounded-lg border bg-[#1a1a1a] p-6 transition-all duration-200 ${
                selected
                    ? 'border-[#5b6df5] shadow-lg shadow-[#5b6df5]/20'
                    : 'border-[#2a2a2a] hover:border-[#3a3a3a]'
            } ${onClick ? 'cursor-pointer' : ''} ${className} `}
        >
            {children}
        </div>
    );
};
