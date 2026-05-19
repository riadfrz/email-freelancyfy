import LegalPageSection from './LegalPageSection';

const CookiePolicyContent = () => {
    return (
        <>
            <p>
                This Cookie Policy explains how Freelancyfy uses cookies and similar storage
                technologies on our website and product. It should be read together with our Privacy
                Policy.
            </p>
            <p>
                We are based in the European Union and treat non-essential cookies as opt-in. That
                means optional analytics, preference, or marketing cookies should remain off until
                you actively allow them.
            </p>

            <LegalPageSection
                title="1. What We Mean By Cookies"
                paragraphs={[
                    'When we say “cookies”, we also mean similar technologies that store or access information on your device, including browser storage where relevant.',
                ]}
            />

            <LegalPageSection
                title="2. Categories We Use"
                bullets={[
                    'Essential cookies: required for authentication, security, session continuity, and core product functionality.',
                    'Preference cookies: used to remember optional user settings or experience preferences.',
                    'Analytics cookies: used to understand product usage and improve the service.',
                    'Marketing cookies: used for attribution or future campaign measurement if enabled.',
                ]}
            />

            <LegalPageSection
                title="3. Legal Basis"
                paragraphs={[
                    'Essential cookies are used where necessary to provide the service you request.',
                    'Non-essential cookies are used only on the basis of your consent where required by law.',
                ]}
            />

            <LegalPageSection
                title="4. Current Default"
                paragraphs={[
                    'By default, only essential cookies should be active. Optional categories remain disabled until you accept them through our cookie manager.',
                ]}
            />

            <LegalPageSection
                title="5. How To Manage Your Choices"
                bullets={[
                    'Use the cookie banner when you first visit the site.',
                    'Open Cookie Settings at any time from the footer or floating settings button.',
                    'You can change your choices later and your updated preferences will replace the previous ones.',
                ]}
            />

            <LegalPageSection
                title="6. Retention"
                paragraphs={[
                    'We store your consent choice so we can remember your preferences and avoid prompting you repeatedly. We may refresh or update the record when our cookie setup or policy changes materially.',
                ]}
            />

            <LegalPageSection
                title="7. Third-Party Services"
                paragraphs={[
                    'If we add third-party analytics, advertising, or similar tools, they should only be activated in line with the category choices you have allowed.',
                ]}
            />

            <LegalPageSection
                title="8. Contact"
                paragraphs={[
                    'Questions about our cookie practices can be sent to privacy@freelancyfy.com.',
                    'Freelancyfy / P&Z Corp',
                    'Paris, France',
                ]}
            />
        </>
    );
};

export default CookiePolicyContent;
