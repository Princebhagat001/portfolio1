import { email, phone, whatsAppUrl } from "../data/site";
import Icon from "./Icon";

// Contact component displaying contact options (Phone, Email, Map, WhatsApp)
export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="contact-panel">
        {/* Left Side: Contact Information Text */}
        <div>
          <p className="eyebrow text-primary">Start a conversation</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-base-content md:text-5xl">
            Tell us where you need to go.
          </h2>
          <p className="mt-5 max-w-md leading-7 opacity-70">
            For bookings or a quotation, call or WhatsApp Bhagat Tour and
            Travels. We’ll help arrange your vehicle hire.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a className="contact-tile" href={"tel:" + phone}>
            <Icon name="phone" />
            <span>
              <small>Call us</small>
              <b>9804732000</b>
            </span>
          </a>
          <a className="contact-tile" href={"mailto:" + email}>
            <Icon name="mail" />
            <span>
              <small>Email</small>
              <b>{email}</b>
            </span>
          </a>
          <a
            className="contact-tile"
            href="https://maps.app.goo.gl/W3RgoCQpAV2Kjr776"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="pin" />
            <span>
              <small>Office</small>
              <b>Gamaharaya-2, Bhagawanpur</b>
            </span>
          </a>
          <a
            className="contact-tile whatsapp-tile"
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-primary">◉</span>
            <span>
              <small className="normal-label">Contact us</small>
              <small className="hover-label">Chat on WhatsApp</small>
              <b>9804732000</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
