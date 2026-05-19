import LegalPageSection from './LegalPageSection';

const PrivacyPageContent = () => {
    return (
        <>
            <p>
                This Privacy Policy explains how Freelancyfy collects, uses, stores, and protects
                personal information when you visit our website, create an account, or use our
                products and services.
            </p>
            <p>
                We aim to keep this policy practical and readable. If you have questions about how
                your information is handled, contact us at{' '}
                <a href="mailto:privacy@freelancyfy.com">privacy@freelancyfy.com</a>.
            </p>

            <LegalPageSection
                title="1. Scope"
                paragraphs={[
                    'This policy applies to information we collect through the Freelancyfy website, application, customer support interactions, and related communications.',
                    'It does not apply to third-party services that you access through Freelancyfy or that we link to from our website.',
                ]}
            />

            <LegalPageSection
                title="2. Information We Collect"
                bullets={[
                    <span key="account-information">
                        <strong>Account information:</strong> name, email address, password hash,
                        profile details, and workspace settings.
                    </span>,
                    <span key="billing-information">
                        <strong>Billing information:</strong> subscription status, invoices, and
                        payment metadata processed by our payment provider. We do not store full
                        payment card details.
                    </span>,
                    <span key="usage-information">
                        <strong>Usage information:</strong> log data, browser type, device
                        information, referring pages, and interactions with product features.
                    </span>,
                    <span key="customer-content">
                        <strong>Customer content:</strong> files, messages, project data, client
                        records, and other information you choose to upload or create in the
                        product.
                    </span>,
                    <span key="support-communications">
                        <strong>Support communications:</strong> messages, screenshots, and context
                        you share when asking for help or reporting an issue.
                    </span>,
                ]}
            />

            <LegalPageSection
                title="3. How We Use Information"
                bullets={[
                    'Provide, maintain, and improve the product.',
                    'Authenticate users and protect accounts.',
                    'Process subscriptions, invoices, and service communications.',
                    'Respond to support requests and troubleshoot issues.',
                    'Monitor performance, reliability, and abuse prevention.',
                    'Comply with legal obligations and enforce our terms.',
                ]}
            />

            <LegalPageSection
                title="4. Legal Bases For Processing"
                paragraphs={[
                    'Where required by applicable law, we process personal information on the basis of contract performance, legitimate interests, legal obligations, and consent when consent is specifically requested.',
                ]}
            />

            <LegalPageSection
                title="5. How We Share Information"
                bullets={[
                    'With infrastructure, analytics, email, support, and payment vendors that help us operate the service.',
                    'With professional advisers or authorities when disclosure is legally required.',
                    'As part of a merger, financing, acquisition, or sale of assets, subject to standard confidentiality and notice obligations where applicable.',
                    'With your direction or consent.',
                ]}
            />

            <LegalPageSection
                title="6. Data Retention"
                paragraphs={[
                    'We keep personal information for as long as needed to provide the service, maintain legitimate business records, resolve disputes, and comply with legal obligations.',
                    'When accounts are deleted, we remove or anonymize personal information within a reasonable period unless a longer retention period is required by law or necessary for security, fraud prevention, or financial recordkeeping.',
                ]}
            />

            <LegalPageSection
                title="7. Cookies And Similar Technologies"
                bullets={[
                    'Essential cookies used for sign-in, session continuity, and security.',
                    'Preference cookies used to remember product settings.',
                    'Analytics technologies used to understand product usage and improve performance.',
                ]}
            />
            <p>
                For more detail about categories, choices, and how we handle consent, see our{' '}
                <a href="/cookies">Cookie Policy</a>.
            </p>

            <LegalPageSection
                title="8. International Transfers"
                paragraphs={[
                    'Your information may be processed in countries other than your own. When required, we use appropriate contractual or technical safeguards for cross-border transfers.',
                ]}
            />

            <LegalPageSection
                title="9. Your Rights"
                bullets={[
                    'Request access to the personal information we hold about you.',
                    'Request correction or deletion of your information.',
                    'Request restriction of processing or object to certain uses.',
                    'Request export of your data where applicable.',
                    'Withdraw consent when processing is based on consent.',
                ]}
            />

            <p>
                To exercise these rights, email{' '}
                <a href="mailto:privacy@freelancyfy.com">privacy@freelancyfy.com</a>. We may need to
                verify your identity before completing your request.
            </p>

            <LegalPageSection
                title="10. Security"
                paragraphs={[
                    'We use reasonable technical and organizational safeguards designed to protect personal information. No method of transmission or storage is perfectly secure, so we cannot guarantee absolute security.',
                ]}
            />

            <LegalPageSection
                title="11. Children’s Privacy"
                paragraphs={[
                    'Freelancyfy is not intended for children under 16, and we do not knowingly collect personal information from children.',
                ]}
            />

            <LegalPageSection
                title="12. Changes To This Policy"
                paragraphs={[
                    'We may update this Privacy Policy from time to time. If we make material changes, we will update the effective date on this page and provide additional notice when appropriate.',
                ]}
            />

            <LegalPageSection
                title="13. Contact"
                paragraphs={[
                    'For privacy questions or requests, contact privacy@freelancyfy.com.',
                    'Freelancyfy / P&Z Corp',
                    'Paris, France',
                ]}
            />
        </>
    );
};

export default PrivacyPageContent;
