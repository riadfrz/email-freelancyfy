import LegalPageSection from './LegalPageSection';

const TermsPageContent = () => {
    return (
        <>
            <p>
                These Terms of Service govern your access to and use of the Freelancyfy website,
                applications, and related services. By using Freelancyfy, you agree to these Terms.
            </p>
            <p>
                If you are using Freelancyfy on behalf of a company or other entity, you represent
                that you have authority to bind that entity to these Terms.
            </p>

            <LegalPageSection
                title="1. Eligibility And Accounts"
                paragraphs={[
                    'You must be at least 16 years old and able to enter into a binding agreement to use Freelancyfy.',
                    'You are responsible for keeping your login credentials secure and for all activity that occurs under your account.',
                ]}
            />

            <LegalPageSection
                title="2. Your Use Of The Service"
                bullets={[
                    'Use the service only in compliance with applicable law.',
                    'Provide accurate registration and billing information.',
                    'Maintain the security of your devices, credentials, and connected integrations.',
                    'Use the service in a way that does not interfere with the platform or other users.',
                ]}
            />

            <LegalPageSection
                title="3. Prohibited Conduct"
                bullets={[
                    'Accessing or using the service to violate law or third-party rights.',
                    'Uploading malicious code or attempting to disrupt the service.',
                    'Bypassing authentication, authorization, rate limits, or other security controls.',
                    'Reverse engineering or attempting to extract source code except where permitted by law.',
                    'Scraping or harvesting data from the service without our written permission.',
                    'Using the service to send spam, phishing, or fraudulent communications.',
                ]}
            />

            <LegalPageSection
                title="4. Customer Content"
                paragraphs={[
                    'You retain ownership of the content you submit to Freelancyfy. You grant us a limited, non-exclusive right to host, process, transmit, and display that content only as needed to operate and improve the service for you.',
                    'You are responsible for ensuring that you have the necessary rights to upload and use any content you submit.',
                ]}
            />

            <LegalPageSection
                title="5. Subscription, Billing, And Cancellation"
                paragraphs={[
                    'Some features require a paid plan. Pricing, plan limits, and billing intervals are described at the time of purchase.',
                    'Unless stated otherwise, subscriptions renew automatically until canceled. You can cancel from your account settings, and the cancellation will take effect at the end of the current billing period.',
                    'Fees are non-refundable except where required by law or where we expressly state otherwise.',
                ]}
            />

            <LegalPageSection
                title="6. Product Changes"
                paragraphs={[
                    'We may update, modify, or discontinue features from time to time. We will try to provide reasonable notice for material changes when practical.',
                ]}
            />

            <LegalPageSection
                title="7. Intellectual Property"
                paragraphs={[
                    'Freelancyfy, including its software, design, branding, and related materials, is owned by P&Z Corp or its licensors and is protected by applicable intellectual property laws.',
                    'Except for the limited rights expressly granted in these Terms, no rights are transferred to you.',
                ]}
            />

            <LegalPageSection
                title="8. Privacy"
                paragraphs={[
                    'Our Privacy Policy explains how we collect, use, and protect personal information. By using Freelancyfy, you acknowledge that you have reviewed the Privacy Policy.',
                ]}
            />

            <LegalPageSection
                title="9. Termination"
                paragraphs={[
                    'You may stop using the service at any time. We may suspend or terminate access if we reasonably believe you have violated these Terms, created security or legal risk, or failed to pay applicable fees.',
                ]}
            />

            <LegalPageSection
                title="10. Disclaimers"
                paragraphs={[
                    'To the extent permitted by law, the service is provided on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted, secure, or error-free.',
                ]}
            />

            <LegalPageSection
                title="11. Limitation Of Liability"
                paragraphs={[
                    'To the fullest extent permitted by law, P&Z Corp and its affiliates will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, goodwill, or data.',
                    'Our aggregate liability for claims arising out of or relating to the service or these Terms will not exceed the amounts paid by you to Freelancyfy in the 12 months before the claim arose, or USD $100 if you have not paid us.',
                ]}
            />

            <LegalPageSection
                title="12. Indemnity"
                paragraphs={[
                    'You agree to defend, indemnify, and hold harmless P&Z Corp and its personnel from claims arising out of your content, your use of the service, or your violation of these Terms, to the extent permitted by law.',
                ]}
            />

            <LegalPageSection
                title="13. Governing Law"
                paragraphs={[
                    'These Terms are governed by the laws of the State of California, excluding its conflict of laws principles.',
                    'Any dispute that cannot be resolved informally will be brought in the state or federal courts located in San Francisco, California, unless applicable law requires otherwise.',
                ]}
            />

            <LegalPageSection
                title="14. Changes To These Terms"
                paragraphs={[
                    'We may update these Terms from time to time. If we make material changes, we will update the effective date and provide additional notice when appropriate.',
                ]}
            />

            <LegalPageSection
                title="15. Contact"
                paragraphs={[
                    'Questions about these Terms can be sent to legal@freelancyfy.com.',
                    'Freelancyfy / P&Z Corp',
                    'San Francisco, CA, United States',
                ]}
            />
        </>
    );
};

export default TermsPageContent;
