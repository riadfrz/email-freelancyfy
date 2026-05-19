import { EmailForm } from '@/components/landing/EmailForm';

const CtaBanner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-neutral-950 py-32 text-center">
            <h2 className="mx-auto mb-8 max-w-2xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
                Get your work <br />
                under control.
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-landing-secondary">
                Join thousands of founders using Freelancyfy to manage their business with
                confidence.
            </p>
            <div className="flex items-center justify-center gap-4">
                <EmailForm />
            </div>
            <p className="mt-8 text-sm text-landing-secondary/60">No credit card required</p>
        </section>
    );
};

export default CtaBanner;
