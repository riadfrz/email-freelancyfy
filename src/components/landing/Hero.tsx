import { motion } from 'framer-motion';
import { EmailForm } from './EmailForm';

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full border border-landing-border bg-landing-surface/50 px-4 py-1 text-xs text-landing-secondary mb-8"
        >
          🚀 Now accepting early access
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl animate-hero-enter"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The smarter way to hire freelancers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-landing-secondary max-w-xl mx-auto mb-10"
        >
          Connect with vetted freelancers, manage projects, and pay securely — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md"
        >
          <EmailForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-landing-secondary">Join 2,000+ businesses already on the waitlist</p>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full ring-2 ring-black bg-landing-surface flex items-center justify-center text-xs text-landing-secondary font-medium"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
