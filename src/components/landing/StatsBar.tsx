import { motion } from 'framer-motion';

export const StatsBar = () => {
  const stats = [
    { value: '2,000+', label: 'Businesses on waitlist' },
    { value: '500+', label: 'Vetted freelancers' },
    { value: '< 24h', label: 'Average match time' },
  ];

  return (
    <section className="border-y border-landing-border bg-landing-surface/30 py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-landing-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
