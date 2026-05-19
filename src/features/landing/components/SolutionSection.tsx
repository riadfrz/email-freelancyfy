import { Check } from 'lucide-react';

const SolutionSection = () => {
    return (
        <section className="mx-auto max-w-7xl bg-gray-50/50 px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <p className="font-semibold text-indigo-600">THE SOLUTION</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    One platform to run your entire business.
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Freelancyfy replaces your fragmented stack with a single, cohesive operating
                    system.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
                {[
                    {
                        title: 'Get Paid Faster',
                        desc: 'Automated invoicing and payment reminders so you never have to chase a client again.',
                    },
                    {
                        title: 'Centralized Command Center',
                        desc: 'Manage projects, clients, and files in one place. No more context switching.',
                    },
                    {
                        title: 'Predictable Growth',
                        desc: 'Real-time pipeline analytics help you spot cash flow gaps before they happen.',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Check className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionSection;
