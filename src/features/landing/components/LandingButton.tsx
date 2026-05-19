import React from 'react';

import { cn } from '@/lib/utils';

// Assuming cn exists, otherwise I'll use template literals

interface LandingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
}

const LandingButton = React.forwardRef<HTMLButtonElement, LandingButtonProps>(
    ({ className, variant = 'primary', ...props }, ref) => {
        const baseStyles =
            'inline-flex items-center justify-center h-[40px] px-6 text-[14px] font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-landing-border disabled:opacity-50 disabled:pointer-events-none tracking-wide';

        const variants = {
            primary:
                'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]',
            secondary:
                'bg-landing-surface border border-landing-border text-landing-primary hover:bg-landing-surfaceHighlight hover:border-landing-secondary/40',
            ghost: 'text-landing-secondary hover:text-landing-primary hover:bg-landing-surface/50',
            outline: 'bg-transparent border border-white/10 text-white hover:bg-white/5',
        };

        return (
            <button ref={ref} className={cn(baseStyles, variants[variant], className)} {...props} />
        );
    }
);

LandingButton.displayName = 'LandingButton';

export default LandingButton;
