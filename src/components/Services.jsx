import { services } from "../data/site";
export default function Services() {
  return (
    <section id="services" className="bg-base-200">
      <div className="section-wrap">
        <p className="eyebrow">What we arrange</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <h2 className="section-title max-w-xl">
            Vehicle hire for the journeys that keep work and life moving.
          </h2>
          <a
            href="#contact"
            className="link link-hover font-medium text-primary"
          >
            Discuss your requirement <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-base-300 bg-base-300 md:grid-cols-2">
          {services.map(([title, description], index) => (
            <article className="service-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
