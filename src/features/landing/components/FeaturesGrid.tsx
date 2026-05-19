import { features } from '../data';

const FeaturesGrid = () => {
    return (
        <section className="bg-landing-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        Everything you need to ship.
                    </h2>
                    <p className="mt-4 text-landing-secondary">
                        Powerful features without the bloat.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-landing-border bg-landing-surface/20 p-8 transition-all hover:border-landing-primary/50 hover:bg-landing-surface/40 hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-landing-primary/10 text-landing-primary">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                            <p className="mt-2 text-base leading-relaxed text-landing-secondary">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
