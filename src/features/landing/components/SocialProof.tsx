import LandingSection from './LandingSection';

const SocialProof = () => {
    // Placeholder logos
    const logos = ['OpenAI', 'Cash App', 'scale', 'ramp', 'Vercel', 'coinbase'];

    return (
        <LandingSection className="border-b border-landing-border/50 py-12" background="surface">
            <p className="mb-10 text-center text-sm font-medium text-landing-secondary">
                Powering the world's best product teams. <br />
                From next-gen startups to established enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                {logos.map((logo) => (
                    <div key={logo} className="flex items-center text-lg font-bold text-white">
                        {/* Replace with actual SVGs later */}
                        <span className="font-sans tracking-tight">{logo}</span>
                    </div>
                ))}
            </div>
        </LandingSection>
    );
};

export default SocialProof;
