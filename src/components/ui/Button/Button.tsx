import type React from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'ghost'
    | 'outline';

interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<'button'>>,
        HTMLMotionProps<'button'> {
    variant?: ButtonVariant;
    isLoading?: boolean;
    loadingText?: string;
    children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 focus:ring-secondary/50 text-white',
    tertiary: 'bg-gray-50 hover:bg-gray-100 text-gray-600 focus:ring-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
    success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 text-black',
    ghost: 'bg-transparent hover:bg-gray-50 focus:ring-gray-200 text-gray-600',
    outline:
        'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 focus:ring-gray-200',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading = false,
    loadingText = 'Chargement...',
    disabled,
    className = '',
    ...props
}) => {
    const baseStyle =
        'group relative w-auto flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
    const disabledStyle = 'opacity-50 cursor-not-allowed';

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={disabled || isLoading}
            className={cn(
                baseStyle,
                variantStyles[variant],
                (disabled || isLoading) && disabledStyle,
                className
            )}
            {...props}
        >
            {isLoading && (
                <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {isLoading ? loadingText : children}
        </motion.button>
    );
};
