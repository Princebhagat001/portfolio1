import { useState } from "react";
import { navigation, whatsAppUrl } from "../data/site";
import Brand from "./Brand";
import Icon from "./Icon";
function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="btn btn-ghost btn-circle btn-sm"
      onClick={() => setTheme(theme === "bhagat" ? "night" : "bhagat")}
      aria-label="Switch color theme"
    >
      <Icon name={theme === "bhagat" ? "moon" : "sun"} />
    </button>
  );
}
export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/95 text-base-content backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, id]) => (
            <a key={id} className="nav-link" href={"#" + id}>
              {label}
            </a>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            className="btn btn-primary btn-sm rounded-sm px-4"
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            Contact us <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={() => setOpen(!open)}
            aria-label="Open navigation"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-base-300 bg-base-100 px-5 py-4 lg:hidden">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              onClick={() => setOpen(false)}
              className="block border-b border-base-300 py-3 font-medium"
              href={"#" + id}
            >
              {label}
            </a>
          ))}
          <a
            className="btn btn-primary mt-4 w-full rounded-sm"
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
}
