import { useEffect, useRef, useState } from "react";

export function useWhyChooseUs(count) {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!wrapper || !sticky || reducedMotion.matches) return;

    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const stickyOffset = parseFloat(getComputedStyle(sticky).top) || 0;
        const start = wrapper.getBoundingClientRect().top + window.scrollY - stickyOffset;
        const distance = wrapper.offsetHeight - sticky.offsetHeight;
        if (distance <= 0) {
          setActiveIndex(0);
          return;
        }
        const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
        setActiveIndex(Math.round(progress * (count - 1)));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  return { wrapperRef, stickyRef, activeIndex };
}

export const whyChooseUsStyles = `.why-section {
  --why-nav-height: 72px;
  --why-count: 4;
  background: hsl(var(--b2) / 0.5);
  min-height: 100vh;
}

.why-mobile { display: none; }

.why-scroll {
  height: calc((var(--why-count) - 1) * 65vh);
  height: calc((var(--why-count) - 1) * 65svh);
  position: relative;
}

.why-sticky {
  position: sticky;
  top: var(--why-nav-height);
  height: calc(100vh - var(--why-nav-height));
  height: calc(100svh - var(--why-nav-height));
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(20rem, 0.85fr);
  grid-template-rows: auto minmax(0, 1fr);
  align-items: start;
  gap: 0 1.5rem;
  max-width: 92rem;
  margin-inline: auto;
  padding: 1rem 1rem 2rem;
}

.why-heading {
  grid-column: 1 / -1;
  grid-row: 1;
  width: 100%;
  max-width: none;
  margin: 0;
  padding-left: 6rem;
  text-align: left;
}

.why-list {
  grid-column: 1;
  grid-row: 2;
  margin: 7rem 0 0 calc(4.5rem + 0.75cm);
  padding: 0;
  list-style: none;
  counter-reset: why-point;
  display: grid;
  gap: 1rem;
}

.why-point {
  counter-increment: why-point;
  opacity: 0.76;
  transform: translateX(0);
  transition: opacity 220ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.why-point.is-active {
  opacity: 1;
  transform: translateX(0.2rem);
}

.why-point h3 {
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
  margin: 0;
  color: #6f7138;
  font-size: clamp(1rem, 1.35vw, 1.3rem);
  font-weight: 400;
  line-height: 1.35;
  transition: color 220ms ease, font-size 220ms cubic-bezier(0.22, 1, 0.36, 1), font-weight 220ms ease;
}

.why-point h3::before {
  content: counter(why-point, decimal-leading-zero);
  flex: none;
  color: hsl(var(--p));
  font-size: 0.78em;
  font-variant-numeric: tabular-nums;
}

.why-point.is-active h3 {
  color: #6f7138;
  font-size: clamp(1.25rem, 1.7vw, 1.55rem);
  font-weight: 700;
  animation: why-text-focus 280ms ease both;
}

.why-description {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-0.35rem);
  transition: max-height 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.why-point.is-active .why-description {
  max-height: 8rem;
  opacity: 1;
  transform: translateY(0);
  transition-delay: 45ms;
  animation: why-text-focus 320ms ease both;
}

@keyframes why-text-focus {
  from { filter: blur(1.4px); }
  to { filter: blur(0); }
}

.why-description p {
  max-width: 34rem;
  margin: 0.65rem 0 0 2.1rem;
  color: #111;
  font-size: 1rem;
  line-height: 1.7;
}

.why-window {
  grid-column: 2;
  grid-row: 2;
  width: min(100%, 27rem);
  height: min(52vh, 25rem);
  justify-self: start;
  margin: 2rem 0 0 -0.25cm;
  position: relative;
  overflow: hidden;
  border: 1px solid hsl(var(--bc) / 0.12);
  border-radius: 1rem;
  background: hsl(var(--b1));
  box-shadow: 0 1rem 2rem rgb(8 33 44 / 0.12);
}

.why-card-image {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  object-fit: contain;
  animation: why-image-enter 400ms ease both;
}

@keyframes why-image-enter {
  from { opacity: 0.6; transform: scale(0.985); }
  to { opacity: 1; transform: scale(1); }
}

.why-image-open {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border: 0;
  background: rgb(0 0 0 / 0.48);
  color: white;
  font: inherit;
  font-weight: 600;
  opacity: 0;
  cursor: zoom-in;
  transition: opacity 200ms ease;
}

.why-window:hover .why-image-open,
.why-image-open:focus-visible {
  opacity: 1;
}

@media (max-width: 800px) {
  .why-scroll {
    height: auto;
  }

  .why-sticky {
    display: none;
  }

  .why-mobile {
    display: grid;
    gap: 2rem;
    max-width: 42rem;
    margin-inline: auto;
    padding: 2rem 1rem 3rem;
  }

  .why-mobile-heading { margin-bottom: 0.5rem; }

  .why-mobile-point {
    display: grid;
    gap: 0.75rem;
    color: #111;
  }

  .why-mobile-title {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    color: #6f7138;
  }

  .why-mobile-title span { font-weight: 700; }

  .why-mobile-title h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .why-mobile-description {
    margin: 0 0 0 2rem;
    color: #111;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .why-mobile-image {
    position: relative;
    display: grid;
    min-height: 14rem;
    max-height: 24rem;
    place-items: center;
    overflow: hidden;
    border: 1px solid hsl(var(--bc) / 0.12);
    border-radius: 1rem;
    background: hsl(var(--b1));
    box-shadow: 0 0.75rem 1.5rem rgb(8 33 44 / 0.1);
    cursor: zoom-in;
  }

  .why-mobile-image img {
    display: block;
    width: 100%;
    height: 22rem;
    padding: 0.75rem;
    object-fit: contain;
  }

  .why-mobile * {
    animation: none !important;
    transition: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .why-scroll {
    height: auto;
  }

  .why-sticky {
    position: static;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .why-description {
    max-height: none;
    opacity: 0.75;
  }

  .why-point h3 {
    transition: none;
  }

  .why-point { transition: none; }

  .why-card-image { animation: none; }
  .why-point.is-active h3,
  .why-point.is-active .why-description { animation: none; }
  .why-image-open { transition: none; }

  .why-window { margin-bottom: 1rem; }
}
`;

