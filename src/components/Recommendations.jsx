import { useState } from "react";

const letters = [
  {
    id: 1,
    src: "/Cert/Bhagat Tours & Travels_page-0001.jpg",
    alt: "Recommendation Letter from Save the Children",
  },
  {
    id: 2,
    src: "/Cert/WhatsApp Image 2026-08-21 at 8.02.19 PM.jpeg",
    alt: "Recommendation Letter from World Vision",
  },
];

export default function Recommendations() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="recommendations" className="section-wrap bg-base-200/50 relative">
      <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
        <div>
          <p className="eyebrow">Recommendations</p>
          <h2 className="section-title mt-4">
            Trusted by our clients.
          </h2>
        </div>
        <p className="copy self-end">
          See what organizations have to say about our services, reliability, and commitment to excellence.
        </p>
      </div>

      {/* Scrollable Gallery */}
      <div className="flex gap-6 mt-12 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:px-0">
        {letters.map((letter) => (
          <div
            key={letter.id}
            onClick={() => setSelectedImage(letter)}
            className="w-72 md:w-80 shrink-0 snap-start bg-base-100 p-4 shadow-lg rounded-2xl border border-base-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 active:-translate-y-2 active:shadow-xl active:border-primary/40 cursor-zoom-in"
          >
            <img
              src={letter.src}
              alt={letter.alt}
              className="w-full h-auto rounded-xl pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-[2px] p-4 animate-zoom-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-full md:max-w-[800px] w-auto bg-base-100 p-2 md:p-3 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-circle btn-sm btn-neutral absolute -right-3 -top-3 shadow-md border-2 border-base-100"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
