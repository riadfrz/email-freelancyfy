import { Lock, ShieldCheck, UserCheck } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Built for serious business.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We don't trade in hype. We built Freelancyfy to be the reliable backbone of
                        your operation.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Bank-level Security</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Your data is encrypted at rest and in transit. We use
                                    industry-standard protocols to keep your business safe.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                                <Lock className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Private by Design</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    We don't sell your data. Your client lists and financial records
                                    are yours alone.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                                <UserCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Founder-Led Support</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Need help? You'll talk to someone who actually builds the
                                    product, not a chatbot.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-2xl bg-gray-900 p-8 text-white shadow-xl">
                    <div className="relative z-10">
                        <p className="text-xl font-medium leading-relaxed text-gray-200">
                            "Freelancyfy has completely transformed how I run my design studio. It's
                            calm, reliable, and just works. I stopped worrying about admin and
                            started focusing on design."
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-gray-700" />
                            <div>
                                <p className="font-semibold text-white">Alex Chen</p>
                                <p className="text-sm text-gray-400">Founder, Studio Mono</p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative quote icon */}
                    <div className="absolute right-6 top-6 font-serif text-8xl text-gray-800 opacity-50">
                        "
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
