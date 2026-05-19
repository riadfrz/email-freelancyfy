const WalkthroughSection = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
                <p className="mt-4 text-gray-600">From kickoff to cash in the bank.</p>
            </div>

            <div className="space-y-24">
                {/* Step 1 */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        {/* Mock UI: Client Portal Invite */}
                        <div className="mx-auto max-w-lg rotate-[-1deg] transform rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="h-4 w-32 rounded bg-gray-100" />
                                <div className="h-8 w-8 rounded-full bg-indigo-100" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-10 w-full rounded border border-gray-100 bg-gray-50" />
                                <div className="h-10 w-full rounded border border-gray-100 bg-gray-50" />
                                <div className="ml-auto h-10 w-24 rounded bg-indigo-600" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                                1
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Onboard your client
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Create a dedicated portal for your client. They get a professional
                            dashboard to view progress, approve assets, and pay invoices.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="order-1">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                                2
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">Manage the work</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Track tasks, milestones, and deadlines on a visual Kanban board. Keep
                            everything organized without the clutter of complex project management
                            tools.
                        </p>
                    </div>
                    <div className="order-2">
                        {/* Mock UI: Kanban Board */}
                        <div className="mx-auto max-w-lg rotate-[1deg] transform rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                            <div className="flex gap-4 overflow-hidden">
                                <div className="w-1/3 space-y-3 rounded-lg bg-gray-50 p-3">
                                    <div className="h-3 w-16 rounded bg-gray-200" />
                                    <div className="h-16 w-full rounded border border-gray-200 bg-white shadow-sm" />
                                    <div className="h-16 w-full rounded border border-gray-200 bg-white shadow-sm" />
                                </div>
                                <div className="w-1/3 space-y-3 rounded-lg bg-gray-50 p-3">
                                    <div className="h-3 w-16 rounded bg-gray-200" />
                                    <div className="h-16 w-full rounded border border-gray-200 bg-white shadow-sm" />
                                </div>
                                <div className="w-1/3 space-y-3 rounded-lg bg-gray-50 p-3">
                                    <div className="h-3 w-16 rounded bg-gray-200" />
                                    <div className="h-16 w-full rounded border border-gray-200 bg-white shadow-sm" />
                                    <div className="h-16 w-full rounded border border-gray-200 bg-white shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        {/* Mock UI: Invoice */}
                        <div className="mx-auto max-w-lg rotate-[-1deg] transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                            <div className="mb-8 flex items-center justify-between">
                                <div className="h-6 w-24 rounded bg-gray-200" />
                                <div className="flex h-6 w-16 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">
                                    PAID
                                </div>
                            </div>
                            <div className="mb-8 space-y-4">
                                <div className="h-4 w-full rounded bg-gray-50" />
                                <div className="h-4 w-2/3 rounded bg-gray-50" />
                            </div>
                            <div className="flex items-end justify-between border-t pt-4">
                                <div className="h-4 w-24 rounded bg-gray-100" />
                                <div className="h-8 w-32 rounded bg-gray-900" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                                3
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Get paid automatically
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Invoices are generated based on tracked time or milestones. Payments are
                            processed securely and deposited directly into your account.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WalkthroughSection;
