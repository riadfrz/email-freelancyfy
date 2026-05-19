import LandingSection from './LandingSection';

const LandingFooter = () => {
    const columns = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '#' },
                { label: 'Pricing', href: '#' },
                { label: 'Roadmap', href: '#' },
                { label: 'Changelog', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Community', href: '#' },
                { label: 'Help Center', href: '#' },
                { label: 'Guides', href: '#' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy', href: '#' },
                { label: 'Cookies', href: '#' },
                { label: 'Terms', href: '#' },
                { label: 'Security', href: '#' },
            ],
        },
    ];

    return (
        <footer className="border-t border-landing-border bg-landing-background">
            <LandingSection className="py-16">
                <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
                    <div className="col-span-2 md:col-span-2">
                        <a href="#" className="mb-4 flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-xs font-bold text-black">
                                F
                            </div>
                            <span className="text-base font-bold text-white">Freelancyfy</span>
                        </a>
                        <p className="mb-4 max-w-xs text-sm text-landing-secondary">
                            Operating system for freelancers and agencies.
                            <br />
                            Calm control, clarity, reduced tool sprawl.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 text-sm font-medium text-white">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-landing-secondary transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-landing-border pt-8 md:flex-row">
                    <p className="text-xs text-landing-secondary">
                        &copy; 2025 Freelancyfy. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Socials placeholder */}
                        {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-xs text-landing-secondary transition-colors hover:text-white"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </LandingSection>
        </footer>
    );
};

export default LandingFooter;
