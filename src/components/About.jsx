import { imagePath } from "../data/site";
import { motion, useReveal } from "../utilis/motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function About() {
  const revealRef = useReveal();
  return (
    <>
      <section ref={revealRef} id="about" className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <ImageWithSkeleton
              className={`h-[440px] w-full object-cover ${motion.image}`}
              src={imagePath + "owner_image-optimized.jpg"}
              alt="Jeetendra Bhagat, owner of Bhagat Tour and Travels"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 bg-secondary/95 backdrop-blur px-6 py-4 text-secondary-content rounded-tr-2xl">
              <b className="block">Jeetendra Bhagat</b>
              <span className="text-sm opacity-80">
                Owner
              </span>
            </div>
          </div>
          <div>
            <p className="eyebrow">About the company</p>
            <h2 className="section-title mt-4">
              Local knowledge. Dependable movement.
            </h2>
            <p className="copy mt-6">
              Bhagat Tour and Travels is a vehicle hiring service established in
              2017. We support corporate, NGO, INGO, government and individual
              customers, including travel in remote areas.
            </p>
            <p className="copy mt-4">
              We aim to keep vehicles in good condition, provide trained drivers,
              and arrive before the agreed pick-up time.
            </p>
            <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-base-300 pt-6 sm:grid-cols-2">
              <div>
                <dt className="meta-label">Service area</dt>
                <dd className="mt-1 font-medium">
                  Koshi, Madhesh &amp; Bagmati Province
                </dd>
              </div>
              <div>
                <dt className="meta-label">Nationwide goal</dt>
                <dd className="mt-1 font-medium">Expanding across Nepal</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
