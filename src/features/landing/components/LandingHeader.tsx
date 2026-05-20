import LogoTextLight from '@/assets/logo-text-light.svg';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LandingButton from './LandingButton';

const LandingHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled || isMobileMenuOpen
                    ? 'border-b border-landing-border bg-landing-background/95 backdrop-blur-xl'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-[1280px] items-center px-6">
                <div className="flex flex-1 items-center justify-start">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
                            scrollToTop();
                        }}
                        className="group flex items-center transition-transform group-hover:scale-105"
                    >
                        <img src={LogoTextLight} alt="Freelancyfy" className="h-10 sm:h-12" />
                    </a>
                </div>

                <nav className="hidden items-center justify-center gap-8 md:flex">
                    {[
                        { label: 'Features', href: '#features' },
                        { label: 'How it works', href: '#how-it-works' },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector(item.href);
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-[13px] font-medium text-landing-secondary transition-colors hover:text-landing-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end gap-4">
                    <div className="hidden sm:block">
                        <LandingButton onClick={scrollToTop} className="h-8 px-4 text-xs">
                            Join Waitlist
                        </LandingButton>
                    </div>
                    <button
                        className="flex items-center text-landing-secondary transition-colors hover:text-landing-primary md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-16 flex w-full flex-col gap-6 border-b border-landing-border bg-landing-background/95 p-6 shadow-xl backdrop-blur-xl duration-200 animate-in slide-in-from-top-4 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {[
                            { label: 'Features', href: '#features' },
                            { label: 'How it works', href: '#how-it-works' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    const target = document.querySelector(item.href);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="text-sm font-medium text-landing-secondary transition-colors hover:text-landing-primary"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <LandingButton
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            scrollToTop();
                        }}
                        className="h-10 w-full justify-center sm:hidden"
                    >
                        Join Waitlist
                    </LandingButton>
                </div>
            )}
        </header>
    );
};

export default LandingHeader;
