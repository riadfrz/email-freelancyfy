import React from 'react';

interface ProgressDotsProps {
    total: number;
    current: number;
}

export const ProgressDots: React.FC<ProgressDotsProps> = ({ total, current }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        index + 1 === current
                            ? 'w-6 bg-[#5b6df5]'
                            : index + 1 < current
                              ? 'bg-[#3a3a3a]'
                              : 'bg-[#2a2a2a]'
                    } `}
                />
            ))}
        </div>
    );
};
