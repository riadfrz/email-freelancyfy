import React from 'react';

interface DarkButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    className?: string;
}

export const DarkButton: React.FC<DarkButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = 'primary',
    type = 'button',
    className = '',
}) => {
    const baseStyles =
        'px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary: 'bg-[#5b6df5] hover:bg-[#4a5ce5] text-white',
        secondary: 'bg-transparent border border-[#2a2a2a] hover:border-[#3a3a3a] text-white',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};
