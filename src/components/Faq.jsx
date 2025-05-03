'use client';
import { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: 'Is NewStudio free?',
    answer:
      'Yes, for now all features in NewStudio are fully free — no login required!',
  },
  {
    question: 'Does NewStudio collect or store my data?',
    answer:
      'No — all processing happens locally in your browser/extension. We don’t collect, store, or transmit any of your data to our servers.',
  },
  {
    question: 'Where is my data processed?',
    answer:
      'All operations run entirely client-side in the extension; nothing ever leaves your device.',
  },
  {
    question: 'When can I expect new features?',
    answer:
      'We aim to ship updates roughly every month. Keep an eye on our <a href="https://discord.newstudio.app" target="_blank" rel="noopener noreferrer">Discord</a> for the latest announcements!',
  },
  {
    question: 'Can I customize NewStudio?',
    answer:
      'WIP: Absolutely—open the settings panel to toggle features, switch themes, and adjust preferences. All your settings are saved locally.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can email us anytime at <a href="mailto:support@newstudio.app">support@newstudio.app</a> or join our <a href="https://discord.newstudio.app" target="_blank" rel="noopener noreferrer">Discord</a>.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">Have any questions?</h2>

      {faqData.map((item, idx) => (
        <div
          key={idx}
          className={`faq-item${openIndex === idx ? ' open' : ''}`}
        >
          <button className="faq-question" onClick={() => toggle(idx)}>
            <span>{item.question}</span>
            <i className={`fas ${openIndex === idx ? 'fa-minus' : 'fa-plus'}`} />
          </button>

          <div className="faq-answer">
            <p
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </div>
      ))}

      <div className="faq-footer">
        <p>
          More questions? Check out our discord{' '}
          <a
            href="https://discord.newstudio.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </div>
    </div>
  );
}