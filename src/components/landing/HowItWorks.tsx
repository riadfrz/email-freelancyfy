import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Post a Project',
      description: 'Tell us what you need done and your budget.',
    },
    {
      title: 'Get Matched',
      description: 'We connect you with the best available talent instantly.',
    },
    {
      title: 'Start Working',
      description: 'Collaborate and pay securely through our platform.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-white mb-16"
        >
          Go from idea to done in 3 steps
        </motion.h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4 max-w-4xl mx-auto">
          {/* Dashed connecting line for desktop */}
          <div className="hidden md:block absolute top-4 left-10 right-10 border-t border-dashed border-landing-border z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/3"
            >
              <div className="w-8 h-8 rounded-full bg-landing-accent/10 border border-landing-accent/30 text-landing-accent text-sm font-bold flex items-center justify-center mb-6">
                {index + 1}
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-landing-secondary text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
