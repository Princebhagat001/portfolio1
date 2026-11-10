import { imagePath, phone, whatsAppUrl } from "../data/site";
import Icon from "./Icon";
import { motion } from "../utilis/motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function Hero() {
  const stats = [
    ["Since 2017", "serving customers"],
    ["3 provinces", "service area"],
    ["With a driver", "vehicle hire"],
  ];
  
  return (
    <section id="home" className="hero-shell">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:pb-16 md:pt-12 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-14">
        <div>
          <p className="eyebrow">Vehicle hiring services · Nepal</p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-tight md:text-7xl">
            Vehicle hire for travel in Lahan and nearby provinces.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 opacity-75">
            Bhagat Tour and Travels arranges vehicle hire with a driver,
            pick-up and drop-off, and long-term transport in Koshi, Madhesh,
            and Bagmati provinces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary rounded-full px-7 ${motion.button}`}
            >
              <span className="contact-label">Contact us</span>
              <span className="whatsapp-label">Chat on WhatsApp</span>
              <Icon name="arrow" size={16} />
            </a>
            <a
              href={"tel:" + phone}
              className={`btn btn-outline rounded-full px-7 ${motion.button}`}
            >
              <Icon name="phone" size={16} /> Call 9804732000
            </a>
          </div>
          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-2 border-t border-base-300 px-2 pt-4 text-center sm:gap-4 sm:px-0">
            {stats.map(([value, label]) => (
              <div key={label} className="min-w-0 px-1">
                <b className="block font-display text-sm leading-tight sm:text-base md:text-lg md:whitespace-nowrap xl:text-xl">
                  {value}
                </b>
                <span className="mt-1 block text-[11px] leading-4 opacity-65 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <ImageWithSkeleton
            className="hero-image"
            src={imagePath + "vehicle_image1-optimized.jpg"}
            alt="Bhagat Tour and Travels vehicle on a road in Nepal"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
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
