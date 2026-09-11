import { email, navigation } from "../data/site";
import Brand from "./Brand";
import Icon from "./Icon";
export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100 text-base-content">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-6 opacity-65">
            Vehicle hiring services for travel across Nepal.
          </p>
        </div>
        <div>
          <b className="text-sm">Navigate</b>
          {navigation.slice(1).map(([label, id]) => (
            <a className="footer-link" key={id} href={"#" + id}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <b className="text-sm">Contact</b>
          <a className="footer-link" href="tel:9804732000">
            9804732000 / 9807755037
          </a>
          <a className="footer-link" href={"mailto:" + email}>
            {email}
          </a>
          <span className="footer-link">Lahan-8, Siraha</span>
        </div>
        <div>
          <b className="text-sm">Follow</b>
          <div className="mt-3 flex gap-2">
            <a
              className="btn btn-outline btn-circle btn-sm"
              aria-label="Facebook"
              href="https://www.facebook.com/bhagattourandtravels"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="facebook" />
            </a>
            <a
              className="btn btn-outline btn-circle btn-sm"
              aria-label="Instagram"
              href="https://www.instagram.com/j_eetendra030/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 py-5 text-center text-xs opacity-55">
        © {new Date().getFullYear()} Bhagat Tour and Travels. All rights
        reserved.
      </div>
    </footer>
  );
}
