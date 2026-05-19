import LegalPageSection from './LegalPageSection';

const SecurityPageContent = () => {
    return (
        <>
            <p>
                Freelancyfy is designed to help freelancers and teams manage sensitive client,
                project, and billing information. We build with security in mind and continue to
                improve our controls as the product grows.
            </p>
            <p>
                This page provides a high-level overview of our current security practices. For
                security questions or responsible disclosure, contact{' '}
                <a href="mailto:security@freelancyfy.com">security@freelancyfy.com</a>.
            </p>

            <LegalPageSection
                title="1. Security Program"
                paragraphs={[
                    'We apply layered administrative, technical, and organizational safeguards designed to reduce security risk across our application, infrastructure, and operational workflows.',
                    'Security priorities are reviewed regularly as part of product development, incident response readiness, and vendor management.',
                ]}
            />

            <LegalPageSection
                title="2. Application Security"
                bullets={[
                    'Authentication and authorization controls are enforced for protected areas of the product.',
                    'Sensitive traffic is encrypted in transit using HTTPS.',
                    'Security-focused code review and testing are part of the development workflow.',
                    'Dependencies and critical services are monitored and updated as part of ongoing maintenance.',
                ]}
            />

            <LegalPageSection
                title="3. Access Controls"
                bullets={[
                    'Access to production systems is limited to authorized personnel with a business need.',
                    'Administrative access is reviewed and adjusted when roles change.',
                    'We aim to follow least-privilege principles for internal systems and third-party tools.',
                ]}
            />

            <LegalPageSection
                title="4. Data Protection"
                bullets={[
                    'We use service providers that support industry-standard security measures.',
                    'We take steps to protect data stored within the platform and to limit unnecessary access to customer information.',
                    'Backups and operational recovery procedures are maintained to support service resilience.',
                ]}
            />

            <LegalPageSection
                title="5. Monitoring And Response"
                paragraphs={[
                    'We monitor the platform for reliability and security issues and investigate suspected incidents in a timely manner.',
                    'If we confirm a security incident affecting personal information, we will notify impacted parties and relevant authorities as required by law.',
                ]}
            />

            <LegalPageSection
                title="6. Responsible Disclosure"
                bullets={[
                    <span key="send-reports">
                        Send reports to{' '}
                        <a href="mailto:security@freelancyfy.com">security@freelancyfy.com</a>.
                    </span>,
                    'Include a clear description, affected area, reproduction steps, and any supporting evidence.',
                    'Please avoid actions that could harm users, disrupt the service, or access data that is not your own.',
                ]}
            />

            <LegalPageSection
                title="7. Customer Responsibilities"
                bullets={[
                    'Choose strong passwords and protect your account credentials.',
                    'Review user access in your workspace regularly.',
                    'Use care when sharing client data or inviting collaborators.',
                    'Notify us promptly if you suspect unauthorized access to your account.',
                ]}
            />

            <LegalPageSection
                title="8. Contact"
                paragraphs={[
                    'Questions about our security practices or vulnerability reports can be sent to security@freelancyfy.com.',
                    'Last reviewed: April 5, 2026',
                ]}
            />
        </>
    );
};

export default SecurityPageContent;
