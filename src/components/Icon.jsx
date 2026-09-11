const paths = {
  phone: (
    <path d="M7.4 2.5l2.3 3.3-1.5 2.1c.9 1.9 2.3 3.3 4.2 4.2l2.1-1.5 3.3 2.3-.7 3.4c-.2.9-1 1.5-1.9 1.4C7.9 16.9 3.1 12.1 2.3 5.1 2.2 4.2 2.8 3.4 3.7 3.2l3.7-.7z" />
  ),
  mail: <path d="M3 5h18v14H3V5zm0 1.5 9 6 9-6M7 10l-4 4m14-4 4 4" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pin: (
    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  ),
  clock: <path d="M12 6v6l4 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  facebook: (
    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1z" />
  ),
  instagram: (
    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5-3.5h.01" />
  ),
  sun: (
    <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
  ),
  moon: <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5z" />,
};
export default function Icon({ name, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
