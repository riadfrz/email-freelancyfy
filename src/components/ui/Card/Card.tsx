import type React from 'react';

import { type HTMLMotionProps, motion } from 'framer-motion';

interface CardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof HTMLMotionProps<'div'>>,
        HTMLMotionProps<'div'> {
    children: React.ReactNode;
    maxWidth?: string;
    padding?: string;
    backgroundColor?: string;
    initialAnimation?: HTMLMotionProps<'div'>['initial'];
    animateAnimation?: HTMLMotionProps<'div'>['animate'];
    transitionDuration?: number;
}

export const Card: React.FC<CardProps> = ({
    children,
    maxWidth = 'max-w-none',
    padding = 'p-6',
    backgroundColor = 'bg-white',
    initialAnimation,
    animateAnimation,
    transitionDuration,
    className = '',
    ...props
}) => {
    const animationProps =
        initialAnimation || animateAnimation || transitionDuration
            ? {
                  initial: initialAnimation,
                  animate: animateAnimation,
                  transition: transitionDuration ? { duration: transitionDuration } : undefined,
              }
            : {};

    return (
        <motion.div
            {...animationProps}
            className={`${maxWidth} w-full ${padding} ${backgroundColor} rounded-2xl border border-gray-100 shadow-sm dark:border-white/10 dark:bg-white/5 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};
