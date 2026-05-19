import { motion } from 'framer-motion';
import { Users, Zap, Shield } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Vetted Freelancers',
      description: 'Every freelancer is reviewed and verified before joining.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Matching',
      description: 'AI-powered matching gets you the right person in minutes.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'Escrow-based payments protect both sides, always.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-landing-accent uppercase">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
            Everything you need to scale your team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-landing-border bg-landing-surface/20 p-8 hover:border-landing-accent/40 hover:bg-landing-surface/40 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,1)] transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-landing-accent/10 text-landing-accent mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-landing-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
