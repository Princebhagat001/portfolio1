import { useEffect, useRef, useState } from "react";
import { navigation, whatsAppUrl } from "../data/site";
import Brand from "./Brand";
import Icon from "./Icon";
import { motion } from "../utilis/motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnScroll = () => setOpen(false);

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [open]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/95 text-base-content backdrop-blur">
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, id]) => (
            <a key={id} className={`nav-link ${motion.link}`} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a className={`btn btn-primary btn-sm rounded-full px-5 ${motion.button}`} href={whatsAppUrl} target="_blank" rel="noreferrer">
            Contact us <Icon name="arrow" size={16} />
          </a>
        </div>
        <button
          className="nav-menu-toggle lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >{open ? "CLOSE" : "MENU"}</button>
        {open && (
          <div className="nav-menu-panel lg:hidden" id="site-menu">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="nav-menu-contact" href={whatsAppUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
