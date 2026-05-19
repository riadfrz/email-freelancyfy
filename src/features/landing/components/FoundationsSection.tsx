import LandingSection from './LandingSection';

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Stripe: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.976 9.15c-2.172-.806-3.029-1.377-3.029-2.241 0-1.023 1.148-1.589 2.55-1.589 1.675 0 3.123.559 3.123.559l.466-2.579S15.657 2.5 13.511 2.5c-3.666 0-5.903 2.019-5.903 5.438 0 2.21 1.615 3.763 5.158 5.068 2.454.901 2.92 1.615 2.92 2.639 0 1.274-1.46 1.957-3.137 1.957-1.802 0-3.884-.869-3.884-.869l-.621 2.765s1.957.994 4.505.994c3.977 0 6.275-1.957 6.275-5.592 0-2.827-2.05-4.008-4.848-5.05z" />
        </svg>
    ),
    Slack: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.52 2.52 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.52 2.52 0 0 1 2.521 2.52v6.313A2.52 2.52 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.52 2.52 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.52v2.52h-2.52zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.52 2.52 0 0 1-2.521 2.521H2.522A2.52 2.52 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.52 2.52 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.52 2.52 0 0 1-2.522-2.521V2.522A2.52 2.52 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.52 2.52 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.52 2.52 0 0 1 2.52-2.522h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z" />
        </svg>
    ),
    'Google Calendar': (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
        </svg>
    ),
    Zoom: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.5 7.5l-3.5 2.8v-2.8c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-2.8l3.5 2.8c.5.4 1.2 0 1.2-.6v-8c0-.6-.7-1-1.2-.6z" />
        </svg>
    ),
    Figma: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.5 2c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h3.5v-7h-3.5zm0 14c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5v-3.5h-3.5zm7-7c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5v3.5h3.5zm0 7c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-3.5v3.5c0 1.933 1.567 3.5 3.5 3.5zm-7-7c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h3.5v-7h-3.5z" />
        </svg>
    ),
};

const INTEGRATIONS = [
    { name: 'Stripe', available: false },
    { name: 'Slack', available: false },
    { name: 'Google Calendar', available: true },
    { name: 'Zoom', available: false },
    { name: 'Figma', available: false },
] satisfies { name: string; available: boolean }[];

const FoundationsSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#0E0E10] to-landing-background">
            {/* Background gradient */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-landing-surface to-transparent" />

            {/* Integrations Strip */}
            <div className="relative z-10">
                <LandingSection className="py-24">
                    <h3 className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-landing-secondary">
                        Works with your stack
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {INTEGRATIONS.map(({ name, available }) => {
                            const Icon = ICONS[name];
                            return (
                                <div
                                    key={name}
                                    className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-all duration-300 ${
                                        available
                                            ? 'border-white/15 bg-white/5 text-white shadow-[0_0_20px_rgba(255,255,255,0.04)]'
                                            : 'border-white/5 bg-white/[0.02] text-white/25 grayscale'
                                    }`}
                                >
                                    {Icon && <Icon className="h-4 w-4 shrink-0" />}
                                    <span className="text-sm font-medium">{name}</span>
                                    {!available && (
                                        <span className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white/30">
                                            Soon
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </LandingSection>
            </div>
        </div>
    );
};

export default FoundationsSection;
