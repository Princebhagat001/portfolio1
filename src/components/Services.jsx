import { services } from "../data/site";
import { motion, useReveal } from "../utilis/motion";
import { useEffect, useRef, useState } from "react";
export default function Services() {
  const revealRef = useReveal();
  const cardsRef = useReveal({ stagger: true });
  const videoRef = useRef(null);
  const [openService, setOpenService] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;

    const loadVideo = () => {
      video.src = "/videos/bg-video.mp4";
      video.load();
      video.play().catch(() => {});
    };

    if (!("IntersectionObserver" in window)) {
      loadVideo();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      loadVideo();
      observer.disconnect();
    }, { rootMargin: "200px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section relative isolate overflow-hidden">
      <video
        ref={videoRef}
        className="services-video"
        muted
        loop
        playsInline
        preload="none"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 0.81;
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
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
