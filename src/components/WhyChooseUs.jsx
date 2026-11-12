import { useWhyChooseUs, whyChooseUsStyles } from "../utilis/useWhyChooseUs.js";
import { imageLightbox, useImageLightbox } from "../utilis/motion";

const points = [
  {
    title: "Registered with the Government of Nepal",
    description: "We are a legally registered company with the Government of Nepal, so every booking is safe and accountable.",
    image: "/Doccument/regeterationCertificate.png",
    alt: "Bhagat Tour and Travels registration certificate from the Government of Nepal",
  },
  {
    title: "10+ Years of Experience",
    description: "More than a decade of reliable vehicle rental and travel service across Nepal.",
    image: "/Doccument/10year.png",
    alt: "10+ Years of Experience placeholder graphic",
  },
  {
    title: "Served 2000+ Happy Customers",
    description: "Thousands of travellers, families and groups trust us and come back.",
    image: "/Doccument/2000customers.png",
    alt: "2000+ Happy Customers placeholder graphic",
  },
  {
    title: "Recognized by Leading NGOs & INGOs",
    description: "Many well-known NGOs and INGOs rely on our vehicles and drivers for field work and events.",
    image: "/Cert/save-the-children-recommendation-optimized.jpg",
    alt: "Recommendation letter from Save the Children",
  },
];

export default function WhyChooseUs() {
  const { wrapperRef, stickyRef, activeIndex } = useWhyChooseUs(points.length);
  const { selectedImage, openImage, closeImage, overlayProps } = useImageLightbox();

  return (
    <section id="why-choose-us" className="why-section" aria-labelledby="why-title">
      <style>{whyChooseUsStyles}</style>
      <div className="why-scroll" ref={wrapperRef}>
        <div className="why-sticky" ref={stickyRef}>
          <div className="why-heading">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-title" className="section-title mt-4">A trusted local travel partner.</h2>
          </div>
          <ol className="why-list" aria-label="Reasons to choose Bhagat Tour and Travels">
            {points.map((point, index) => (
              <li className={`why-point${activeIndex === index ? " is-active" : ""}`} key={point.title}>
                <h3 aria-current={activeIndex === index ? "step" : undefined}>{point.title}</h3>
                <div className="why-description"><p>{point.description}</p></div>
              </li>
            ))}
          </ol>
          <div className="why-window">
            <img
              key={points[activeIndex].image}
              src={points[activeIndex].image}
              alt={points[activeIndex].alt}
              loading="lazy"
              className="why-card-image"
            />
            <button
              className="why-image-open"
              onClick={() => openImage(points[activeIndex])}
              aria-label={`View full image: ${points[activeIndex].alt}`}
            >
              Click to view full image
            </button>
          </div>
        </div>
      </div>
      <div className="why-mobile">
        <header className="why-mobile-heading">
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-title mt-4">A trusted local travel partner.</h2>
        </header>
        {points.map((point, index) => (
          <article className="why-mobile-point" key={point.title}>
            <div className="why-mobile-title">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
            </div>
            <p className="why-mobile-description">{point.description}</p>
            <button
              className="why-mobile-image"
              onClick={() => openImage(point)}
              aria-label={`View full image: ${point.alt}`}
            >
              <img src={point.image} alt={point.alt} loading="lazy" />
            </button>
          </article>
        ))}
      </div>
      {selectedImage && (
        <div
          className={imageLightbox.overlayClassName}
          {...overlayProps}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            className="relative flex max-h-[90vh] max-w-full items-center justify-center rounded-2xl bg-base-100 p-2 shadow-2xl md:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="btn btn-circle btn-sm btn-neutral absolute -right-3 -top-3 z-10 border-2 border-base-100 shadow-md"
              onClick={closeImage}
              aria-label="Close image"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
