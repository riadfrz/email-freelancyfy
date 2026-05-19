import React, { forwardRef, useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

interface LandingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    rightIcon?: React.ReactNode;
    isRequired?: boolean;
}

export const LandingInput = forwardRef<HTMLInputElement, LandingInputProps>(
    (
        {
            label,
            name,
            type = 'text',
            error,
            rightIcon,
            className = '',
            isRequired = false,
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPasswordField = type === 'password';
        const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type;

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-landing-secondary"
                    >
                        {label} {isRequired && <span className="text-red-500">*</span>}
                    </label>
                )}
                <div className="relative">
                    <input
                        id={name}
                        name={name}
                        type={inputType}
                        ref={ref}
                        className={`w-full rounded-lg border border-landing-border bg-landing-surface px-4 py-3 text-sm text-white placeholder-landing-secondary/50 transition-colors focus:border-landing-accent focus:outline-none focus:ring-1 focus:ring-landing-accent disabled:opacity-50 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'hover:border-white/10'} ${rightIcon || isPasswordField ? 'pr-10' : ''} ${className} `}
                        {...props}
                    />

                    {isPasswordField && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-landing-secondary hover:text-white focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}

                    {rightIcon && !isPasswordField && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-landing-secondary">
                            {rightIcon}
                        </div>
                    )}
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);

LandingInput.displayName = 'LandingInput';
