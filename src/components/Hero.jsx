import { imagePath, phone, whatsAppUrl } from "../data/site";
import Icon from "./Icon";

export default function Hero() {
  const stats = [
    ["10+", "years in the field"],
    ["50+", "vehicles"],
    ["24/7", "availability"],
  ];
  
  return (
    <section id="home" className="hero-shell">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Vehicle hiring services · Nepal</p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-tight md:text-7xl">
            Travel with a service that arrives prepared.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 opacity-75">
            Bhagat Tour and Travels provides vehicle hiring services across
            Koshi, Madhesh & Bagmati Province, with trained drivers and a focus on punctual,
            well-maintained vehicles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary rounded-full px-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg"
            >
              <span className="contact-label">Contact us</span>
              <span className="whatsapp-label">Chat on WhatsApp</span>
              <Icon name="arrow" size={16} />
            </a>
            <a
              href={"tel:" + phone}
              className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg"
            >
              <Icon name="phone" size={16} /> Call 9804732000
            </a>
          </div>
          <div className="mt-11 grid max-w-md grid-cols-3 border-t border-base-300 pt-5 text-center">
            {stats.map(([value, label]) => (
              <div key={label}>
                <b className="block font-display text-2xl">{value}</b>
                <span className="text-xs opacity-65">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            className="hero-image"
            src={imagePath + "vehicle_image1.jpg"}
            alt="Bhagat Tour and Travels vehicle on a road in Nepal"
          />
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
            <span className="text-primary">
              <Icon name="clock" />
            </span>
            <span className="text-sm">
              <b className="block">Available 24/7</b>
              <span className="opacity-65">
                Call or WhatsApp to arrange travel
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
