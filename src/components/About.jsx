import { imagePath } from "../data/site";

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            className="h-[440px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imagePath + "owner_image.jpg"}
            alt="Jeetendra Bhagat, owner of Bhagat Tour and Travels"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 bg-secondary/95 backdrop-blur px-6 py-4 text-secondary-content rounded-tr-2xl">
            <b className="block">Jeetendra Bhagat</b>
            <span className="text-sm opacity-80">
              Owner · 15 years in the field
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
            Our approach is simple: maintain vehicles carefully, provide trained
            and well-behaved drivers, and arrive 10–15 minutes before the
            designated time.
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
  );
}
