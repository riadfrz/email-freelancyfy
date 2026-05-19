import logoLight from '../../assets/logo-light.svg';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-landing-border">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoLight} alt="Freelancyfy" className="h-8 w-auto" />
        </div>
        <button className="bg-landing-accent hover:bg-landing-accent/90 text-white rounded-lg px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(94,106,210,0.35)] transition-all">
          Get Early Access
        </button>
      </div>
    </nav>
  );
};
