import { motion } from "../utilis/motion";

const steps = [
  "Choose your vehicle and rental package.",
  "Select the pickup location and share it with us.",
  "Confirm the booking by paying an advance deposit online or by phone.",
  "Our driver will be at your choice of location. Enjoy your ride!",
];

export default function BookingSteps() {
  return (
    <section className="section-wrap bg-base-200/50" aria-labelledby="booking-steps-title">
      <div className="mx-auto max-w-6xl text-center">
        <h2 id="booking-steps-title" className="section-title">
          How to book a rental vehicle in Nepal?
        </h2>
        <p className="mt-4 leading-7 opacity-75">
          To book a vehicle with us in Nepal, you can follow these steps:
        </p>

        <ol className="mt-12 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              className={`rounded-2xl border border-base-300 bg-base-100 px-6 py-7 shadow-lg ${motion.card}`}
              key={step}
            >
              <span className="font-display text-7xl text-primary/80" aria-hidden="true">
                {index + 1}
              </span>
              <p className="mt-5 leading-7">{step}</p>
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
