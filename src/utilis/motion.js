import { useLayoutEffect, useRef } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const motion = {
  button:
    "transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg",
  image:
    "transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105",
  card:
    "transition-all duration-300 motion-reduce:transition-none hover:shadow-xl hover:border-primary/40 active:shadow-xl active:border-primary/40",
  link: "transition-opacity duration-200 motion-reduce:transition-none",
  contact: "transition-colors duration-200 motion-reduce:transition-none",
};

export function setMotionPreferences() {
  document.documentElement.style.scrollBehavior = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
    ? "auto"
    : "smooth";
}

const transformFor = ({ x = 0, y = 0 }) => `translate(${x}px, ${y}px)`;
const easingFor = (ease) =>
  Array.isArray(ease) ? `cubic-bezier(${ease.join(",")})` : ease;

export function useReveal({ stagger = false, variant = fadeUp, enabled = true } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const container = ref.current;
    if (
      !enabled ||
      !container ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const items = stagger
      ? Array.from(container.querySelectorAll("[data-motion-item]"))
      : [container];
    if (!items.length) return;

    const itemVariant = stagger ? fadeUp : variant;
    items.forEach((item) => {
      item.style.opacity = itemVariant.hidden.opacity;
      item.style.transform = transformFor(itemVariant.hidden);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        items.forEach((item, index) => {
          const transition = itemVariant.visible.transition;
          if (typeof item.animate !== "function") {
            item.style.opacity = itemVariant.visible.opacity;
            item.style.transform = transformFor(itemVariant.visible);
            return;
          }
          const animation = item.animate(
            [
              {
                opacity: itemVariant.hidden.opacity,
                transform: transformFor(itemVariant.hidden),
              },
              {
                opacity: itemVariant.visible.opacity,
                transform: transformFor(itemVariant.visible),
              },
            ],
            {
              duration: transition.duration * 1000,
              delay: stagger
                ? (staggerContainer.visible.transition.delayChildren +
                    index * staggerContainer.visible.transition.staggerChildren) *
                  1000
                : 0,
              easing: easingFor(transition.ease),
              fill: "forwards",
            },
          );
          animation.onfinish = () => {
            item.style.opacity = itemVariant.visible.opacity;
            item.style.transform = transformFor(itemVariant.visible);
            animation.cancel();
          };
        });
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [enabled, stagger, variant]);

  return ref;
}
