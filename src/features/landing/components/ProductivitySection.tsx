import { XCircle } from 'lucide-react';

const ProductivitySection = () => {
    return (
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Freelancing is hard. Your tools shouldn't make it harder.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Most founders and freelancers waste 30% of their week just managing the business
                instead of doing the work.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                    {
                        title: 'Chasing Payments',
                        desc: 'Sending awkward "just checking in" emails and losing track of unpaid invoices.',
                    },
                    {
                        title: 'Fragmented Workflow',
                        desc: 'Jumping between Trello, Slack, Google Drive, and Excel just to manage one client.',
                    },
                    {
                        title: 'Feast or Famine',
                        desc: 'No clear visibility into your pipeline or cash flow, leading to anxious months.',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl bg-gray-50 p-6 text-left transition-all hover:bg-gray-100"
                    >
                        <div className="flex items-center gap-3">
                            <XCircle className="h-6 w-6 text-red-500" />
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductivitySection;
