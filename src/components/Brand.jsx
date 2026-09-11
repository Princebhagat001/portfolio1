export default function Brand() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
      aria-label="Bhagat Tour and Travels home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
        BT
      </span>
      <span className="leading-none">
        <b className="block font-display text-lg tracking-tight">Bhagat</b>
        <small className="text-[10px] font-bold uppercase tracking-[.18em] opacity-60">
          Tour &amp; Travels
        </small>
      </span>
    </a>
  );
}
