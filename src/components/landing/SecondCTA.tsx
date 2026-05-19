import { motion } from 'framer-motion';
import { EmailForm } from './EmailForm';

export const SecondCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-landing-accent/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Be first. Spots are limited.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-landing-secondary max-w-xl mx-auto mb-10"
        >
          We're onboarding businesses one by one to ensure quality. Reserve your spot today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <EmailForm />
        </motion.div>
      </div>
    </section>
  );
};
