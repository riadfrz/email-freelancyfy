import logoLight from '../../assets/logo-light.svg';

export const Footer = () => {
  return (
    <footer className="border-t border-landing-border py-8 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-landing-secondary text-sm">
          <img src={logoLight} alt="Freelancyfy" className="h-6 w-auto" />
          <span>© 2025 Freelancyfy. All rights reserved.</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-landing-secondary text-sm hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-landing-secondary text-sm hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
