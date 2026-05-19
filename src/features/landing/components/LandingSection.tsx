import React, { forwardRef } from 'react';

interface LandingSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'surface' | 'background';
    id?: string;
    backgroundElement?: React.ReactNode;
}

const LandingSection = forwardRef<HTMLElement, LandingSectionProps>(
    ({ children, className = '', background = 'white', id, backgroundElement, ...props }, ref) => {
        let bgClass = 'bg-landing-background';
        if (background === 'white') bgClass = 'bg-landing-background';
        if (background === 'surface') bgClass = 'bg-landing-surface';
        if (background === 'background') bgClass = 'bg-landing-background';
        if (className?.includes('bg-')) bgClass = ''; // Do not append bg if user passed their own

        return (
            <section
                ref={ref}
                id={id}
                className={`relative w-full py-24 ${bgClass} ${className}`}
                {...props}
            >
                {backgroundElement}
                <div className="relative z-10 mx-auto max-w-[1280px] px-6">{children}</div>
            </section>
        );
    }
);

LandingSection.displayName = 'LandingSection';

export default LandingSection;
