import AISection from './components/AISection';
import BentoGridSection from './components/BentoGridSection';
import CtaBanner from './components/CtaBanner';
import FoundationsSection from './components/FoundationsSection';
import GlowingFeaturesSection from './components/GlowingFeaturesSection';
import HeroSection from './components/HeroSection';
import LandingFooter from './components/LandingFooter';
import LandingHeader from './components/LandingHeader';

const Landing = () => {
    return (
        <div className="min-h-screen bg-landing-background font-sans text-landing-primary selection:bg-landing-primary/10">
            <LandingHeader />
            <main>
                <HeroSection />
                <div id="how-it-works">
                    <AISection />
                </div>
                <div id="features">
                    <GlowingFeaturesSection />
                </div>
                <BentoGridSection />
                <div id="resources">
                    <FoundationsSection />
                </div>
                <CtaBanner />
            </main>
            <LandingFooter />
        </div>
    );
};

export default Landing;
