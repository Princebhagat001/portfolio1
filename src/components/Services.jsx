import { services } from "../data/site";
import { motion, useReveal } from "../utilis/motion";
import { useState } from "react";
export default function Services() {
  const revealRef = useReveal();
  const cardsRef = useReveal({ stagger: true });
  const [openService, setOpenService] = useState(null);
  return (
    <section id="services" className="services-section relative isolate overflow-hidden">
      <video
        className="services-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 0.81;
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="services-overlay" aria-hidden="true" />
      <div className="section-wrap">
        <div ref={revealRef}>
          <p className="eyebrow">What we arrange</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="section-title services-title max-w-xl">
              Vehicle hire for the journeys that keep work and life moving.
            </h2>
            <a
              href="#contact"
              className="link link-hover font-medium text-primary"
            >
              Discuss your requirement <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div ref={cardsRef} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description], index) => (
            <article
              className={`service-card rounded-2xl border border-base-300 shadow-sm ${motion.card}`}
              key={title}
              data-motion-item
            >
              <h3>
                <button
                  className="service-toggle"
                  type="button"
                  aria-expanded={openService === index}
                  onClick={() => setOpenService(openService === index ? null : index)}
                >
                  {title}
                </button>
              </h3>
              <p className={openService === index ? "is-open" : ""}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
