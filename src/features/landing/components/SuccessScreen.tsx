import { CheckCircle, ArrowLeft } from 'lucide-react';
import { InteractiveStarfield } from '@/components/ui/InteractiveStarfield';
import { useRef, useState } from 'react';

interface SuccessScreenProps {
    onClose: () => void;
}

export const SuccessScreen = ({ onClose }: SuccessScreenProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<{
        x: number | null;
        y: number | null;
    }>({ x: null, y: null });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: null, y: null })}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-landing-background overflow-hidden animate-in fade-in duration-500"
        >
            <div className="absolute inset-0 z-0">
                <InteractiveStarfield mousePosition={mousePosition} containerRef={containerRef as React.RefObject<HTMLDivElement>} />
                <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-landing-gradient opacity-50 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-2xl px-6 text-center animate-fade-in-up">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-landing-accent/30 bg-landing-accent/10 shadow-[0_0_40px_rgba(94,106,210,0.3)]">
                    <CheckCircle className="h-10 w-10 text-landing-accent" />
                </div>
                
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Welcome to Freelancyfy
                </h1>
                
                <p className="mx-auto mb-10 max-w-lg text-lg text-landing-secondary">
                    Thanks for joining! We will be in touch. You will soon receive a promo code once the app is launched.
                </p>

                <button 
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-landing-secondary transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </button>
            </div>
        </div>
    );
};
