import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        '../Freelancyfy/shared-ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                'primary-foreground': '#000000',
                secondary: '#1C1C1F',
                'secondary-foreground': '#FFFFFF',
                muted: '#1E1E2E',
                'muted-foreground': '#A1A1AA',
                accent: '#27272A',
                'accent-foreground': '#FFFFFF',
                destructive: '#EF4444',
                'destructive-foreground': '#FFFFFF',
                border: 'rgba(255,255,255,0.08)',
                input: 'rgba(255,255,255,0.08)',
                ring: '#5A00FF',
                background: '#09090b',
                foreground: '#FAFAFA',
                landing: {
                    background: '#000000',
                    surface: '#0E0E10',
                    surfaceHighlight: '#1C1C1F',
                    primary: '#FFFFFF',
                    secondary: '#8A8F98',
                    border: 'rgba(255,255,255,0.08)',
                    accent: '#5E6AD2',
                },
            },
            backgroundImage: {
                'landing-gradient':
                    'radial-gradient(ellipse at center, rgba(94, 106, 210, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                'landing-text-gradient':
                    'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                'landing-card-gradient':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)',
            },
            borderRadius: {
                lg: 'var(--radius, 8px)',
                md: 'calc(var(--radius, 8px) - 2px)',
                sm: 'calc(var(--radius, 8px) - 4px)',
            },
            screens: {
                xs: '480px',
                phone: '600px',
                tablet: '768px',
                laptop: '992px',
                desktop: '1200px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'hero-enter': 'heroEnter 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                sheen: 'sheen 4s ease-in-out infinite',
                fadeIn: 'fadeIn 0.5s ease-in-out',
                wiggle: 'wiggle 0.8s ease-in-out',
                'line-through-hide': 'lineThroughHide 0.4s ease',
                lineGrow: 'lineGrow 0.5s ease-in-out',
            },
            keyframes: {
                heroEnter: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(40px) scale(0.95)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)',
                    },
                },
                sheen: {
                    '0%, 100%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(200%)' },
                },
                fadeInUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                lineGrow: {
                    '0%': { height: '0%' },
                    '100%': { height: '100%' },
                },
                wiggle: {
                    '0%': { transform: 'rotate(0deg)' },
                    '20%': { transform: 'rotate(-5deg)' },
                    '40%': { transform: 'rotate(5deg)' },
                    '60%': { transform: 'rotate(-3deg)' },
                    '80%': { transform: 'rotate(3deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                lineThroughHide: {
                    '0%': { transform: 'scaleX(1)' },
                    '100%': { transform: 'scaleX(0)' },
                },
                shine: {
                    from: { backgroundPosition: '0 0' },
                    to: { backgroundPosition: '-200% 0' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config
