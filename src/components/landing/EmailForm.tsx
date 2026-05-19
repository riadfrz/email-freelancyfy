import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';
import { SuccessScreen } from '@/features/landing/components/SuccessScreen';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);

    // Simulated delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        setError("You're already on the list!");
      } else {
        setError('Something went wrong. Please try again.');
      }
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    return <SuccessScreen onClose={() => setSuccess(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-sm w-full mx-auto md:mx-0">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={loading}
          className="bg-landing-surface border border-landing-border rounded-lg px-4 py-3 text-sm text-white placeholder-landing-secondary/50 focus:border-landing-accent focus:ring-1 focus:ring-landing-accent focus:outline-none w-full md:w-80 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-landing-accent hover:bg-landing-accent/90 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(94,106,210,0.35)] transition-all flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Get Early Access'}
        </button>
      </div>
      {error && (
        <p className="absolute -bottom-6 left-0 text-status-danger text-xs animate-fade-in-up">
          {error}
        </p>
      )}
    </form>
  );
};
