import LogoTextLight from '@/assets/logo-text-light.svg';
import { useEffect, useState } from 'react';
import LandingButton from './LandingButton';

const LandingHeader = () => {
    const [scrolled, setScrolled] = useState(false);

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
                scrolled
                    ? 'border-b border-landing-border bg-landing-background/80 backdrop-blur-xl'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-[1280px] items-center px-6">
                <div className="flex flex-1 items-center justify-start">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                        className="group flex items-center transition-transform group-hover:scale-105"
                    >
                        <img src={LogoTextLight} alt="Freelancyfy" className="h-12" />
                    </a>
                </div>

                <nav className="hidden items-center justify-center gap-8 md:flex">
                    {[
                        { label: 'Features', href: '#' },
                        { label: 'How it works', href: '#' },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[13px] font-medium text-landing-secondary transition-colors hover:text-landing-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end gap-4">
                    <LandingButton onClick={scrollToTop} className="h-8 px-4 text-xs">Join Waitlist</LandingButton>
                </div>
            </div>
        </header>
    );
};

export default LandingHeader;
