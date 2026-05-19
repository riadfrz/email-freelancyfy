import React from 'react';

interface LegalSectionProps {
    title: string;
    paragraphs?: string[];
    bullets?: React.ReactNode[];
}

const LegalPageSection = ({ title, paragraphs = [], bullets = [] }: LegalSectionProps) => {
    return (
        <section className="space-y-4">
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
            {bullets.length > 0 && (
                <ul>
                    {bullets.map((bullet, index) => (
                        <li key={`${title}-${index}`}>{bullet}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default LegalPageSection;
