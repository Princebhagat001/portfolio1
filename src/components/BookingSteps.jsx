import { motion } from "../utilis/motion";

const steps = [
  {
    text: "Choose your vehicle and rental package.",
    icon: <><path d="M5 17h14l1.5-6-2-5h-11l-2 5L4 13v4h1Z"/><path d="M7 17v2m10-2v2M6 11h12M7.5 14h.01M16.5 14h.01"/></>,
  },
  {
    text: "Select the pickup location and share it with us.",
    icon: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  },
  {
    text: "Confirm the booking by paying an advance deposit online or in cash.",
    icon: <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18m-13 5h3"/></>,
  },
  {
    text: "Our driver will be at your choice of location. Enjoy your ride!",
    icon: <><circle cx="12" cy="8" r="3"/><path d="M6 20v-1a6 6 0 0 1 12 0v1m-3.5-7 1.5 2 3-3"/></>,
  },
];

export default function BookingSteps() {
  return (
    <section id="booking-steps" className="section-wrap bg-base-200/50" aria-labelledby="booking-steps-title">
      <div className="mx-auto max-w-6xl text-center">
        <h2 id="booking-steps-title" className="section-title">
          How to book a rental vehicle in Nepal?
        </h2>
        <p className="mt-4 leading-7 opacity-75">
          To book a vehicle with us in Nepal, you can follow these steps:
        </p>

        <ol className="mt-12 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              className={`rounded-2xl border border-base-300 bg-base-100 px-6 py-7 shadow-lg ${motion.card}`}
              key={step.text}
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {step.icon}
                </svg>
              </span>
              <p className="mt-5 leading-7">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-4xl text-sm leading-6 opacity-80">
          <strong>Note:</strong> Please note that if you cancel your vehicle booking,{" "}
          <strong>50% of your advance payment will be deducted</strong> as a cancellation fee.
        </p>
      </div>
    </section>
  );
}
