import { faqs } from "../data/site";

export default function FAQs() {
  return (
    <section id="faqs" className="section-wrap">
      <p className="eyebrow">FAQs</p>
      <h2 className="section-title mt-4">Frequently asked questions.</h2>
      <div className="mt-10 divide-y divide-base-300 border-y border-base-300">
        {faqs.map(([question, answer]) => (
          <details className="faq-item py-5" key={question}>
            <summary className="cursor-pointer font-display text-lg font-semibold marker:text-primary">
              {question}
            </summary>
            <p className="copy mt-3">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
