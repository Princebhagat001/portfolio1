import { email, faqs, whatsAppUrl } from "../data/site";
import Icon from "./Icon";

export default function FAQs() {
  function sendQuote(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [...form.entries()]
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const url = new URL("https://mail.google.com/mail/");
    url.search = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: email,
      su: "Vehicle hire quote request",
      body,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="faqs" className="section-wrap">
      <p className="eyebrow">FAQs</p>
      <h2 className="section-title mt-4">Frequently asked questions.</h2>
      <div className="faqs-layout mt-10">
        <div className="divide-y divide-base-300 border-y border-base-300">
          {faqs.map(([question, answer], index) => (
            <details className="faq-item py-5" key={question} open={index === 0}>
              <summary className="cursor-pointer font-display text-lg font-semibold marker:text-primary">
                {question}
              </summary>
              <div className="faq-answer">
                <p className="copy">{answer}</p>
              </div>
            </details>
          ))}
        </div>
        <aside className="quote-card rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm md:p-5">
          <a className="whatsapp-quote-button mb-3" href={whatsAppUrl} target="_blank" rel="noreferrer">
            <span><Icon name="whatsapp" size={18} />Chat by WhatsApp</span>
          </a>
          <h3 className="font-display text-xl font-semibold">Get a quote</h3>
          <form className="mt-3 grid gap-2.5" onSubmit={sendQuote}>
            <label className="form-field"><span>Name <span aria-hidden="true">*</span></span>
              <input className="input input-bordered w-full" name="Name" autoComplete="name" required />
            </label>
            <label className="form-field"><span>Phone number <span aria-hidden="true">*</span></span>
              <input className="input input-bordered w-full" name="Phone" type="tel" autoComplete="tel" required />
            </label>
            <label className="form-field">Email
              <input className="input input-bordered w-full" name="Email" type="email" autoComplete="email" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="form-field"><span>From <span aria-hidden="true">*</span></span>
                <input className="input input-bordered w-full" name="From" required />
              </label>
              <label className="form-field"><span>To <span aria-hidden="true">*</span></span>
                <input className="input input-bordered w-full" name="To" required />
              </label>
            </div>
            <label className="form-field">Travel date
              <input className="input input-bordered w-full" name="Travel date" type="date" />
            </label>
            <label className="form-field"><span>Vehicle type <span aria-hidden="true">*</span></span>
              <input className="input input-bordered w-full" name="Vehicle type" placeholder="e.g. Scorpio 2x2" required />
            </label>
            <label className="form-field">Other requirements
              <textarea className="textarea textarea-bordered w-full" name="Other requirements" rows="3" />
            </label>
            <button className="btn btn-primary h-[2.4rem] min-h-0 w-full" type="submit">Send quote request</button>
            <p className="text-xs opacity-65">Opens a prefilled Gmail draft for you to review and send.</p>
          </form>
        </aside>
      </div>
    </section>
  );
}
