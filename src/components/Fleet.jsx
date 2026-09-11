import { imagePath, whatsAppUrl } from "../data/site";
import Icon from "./Icon";
export default function Fleet() {
  return (
    <section id="fleet" className="section-wrap">
      <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
        <div>
          <p className="eyebrow">Our fleet</p>
          <h2 className="section-title mt-4">
            Well-maintained vehicles, ready for the road.
          </h2>
        </div>
        <p className="copy self-end">
          We offer a fleet of 50+ vehicles and provide service throughout Nepal.
          Contact us to discuss the right vehicle and current rate for your
          journey.
        </p>
      </div>
      <div className="fleet-grid mt-10">
        <img
          className="fleet-main"
          src={imagePath + "vehicle_image2.jpg"}
          alt="Two Bhagat Tour and Travels vehicles"
        />
        <img
          src={imagePath + "vehicle_image3.jpg"}
          alt="Bhagat Tour and Travels vehicle at night"
        />
        <img
          src={imagePath + "vehicle_image8.jpg"}
          alt="Bhagat Tour and Travels vehicle on a hill road"
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline rounded-sm"
        >
          Ask about vehicle availability <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  );
}
