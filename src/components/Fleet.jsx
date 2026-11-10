import { imagePath, whatsAppUrl } from "../data/site";
import Icon from "./Icon";
import { motion, useReveal } from "../utilis/motion";
import ImageWithSkeleton from "./ImageWithSkeleton";
export default function Fleet() {
  const revealRef = useReveal();
  return (
    <section ref={revealRef} id="fleet" className="section-wrap">
      <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
        <div>
          <p className="eyebrow">Our fleet</p>
          <h2 className="section-title mt-4">
            Well-maintained vehicles, ready for the road.
          </h2>
        </div>
        <p className="copy self-end">
          We arrange vehicle hire with a driver in Koshi, Madhesh, and Bagmati
          provinces. Contact us to discuss a suitable vehicle and the current
          rate for your journey.
        </p>
      </div>
      <div className="fleet-grid mt-10">
        <ImageWithSkeleton
          wrapperClassName="fleet-main"
          src={imagePath + "vehicle_image2-optimized.jpg"}
          alt="Two Bhagat Tour and Travels vehicles"
          loading="lazy"
        />
        <ImageWithSkeleton
          src={imagePath + "vehicle_image3-optimized.jpg"}
          alt="Bhagat Tour and Travels vehicle at night"
          loading="lazy"
        />
        <ImageWithSkeleton
          src={imagePath + "vehicle_image8-optimized.jpg"}
          alt="Bhagat Tour and Travels vehicle on a hill road"
          loading="lazy"
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-outline rounded-full px-8 ${motion.button}`}
        >
          Ask about vehicle availability <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  );
}
