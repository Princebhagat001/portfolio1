import { whatsAppUrl } from "../data/site";
import Icon from "./Icon";

const dailyRates = [
  ["Scorpio", "NPR 8,000/-"],
  ["Car", "NPR 7,500/-"],
  ["EV", "NPR 7,400/-"],
];

const dailyTerms = [
  "Minimum hire: 1 day",
  "Fuel is provided by the client",
  "Mileage: 10 km per liter",
  "Maximum driving time: 9 hours per day",
  "Additional hours are charged accordingly",
];

export default function RentalPackages() {
  return (
    <section className="section-wrap" aria-labelledby="rental-packages-title">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="eyebrow">Clear rates, simple terms</p>
          <h2 id="rental-packages-title" className="section-title mt-4">
            Vehicle rental packages
          </h2>
          <p className="mt-4 leading-7 opacity-75">
            We have the following packages available for renting a vehicle.
          </p>
          <p className="mt-2 text-sm opacity-65">
            Prices last updated: November 2026. All prices include 13% VAT.
          </p>
        </header>

        <article className="mt-10">
          <h3 className="font-display text-2xl">Daily rental (per-day basis)</h3>
          <p className="mt-4 leading-7 opacity-75">
            If you want to hire a vehicle on a per-day basis, this package is a good fit. You can rent a vehicle for one day or multiple days to suit your requirements.
          </p>
          <p className="mt-4 leading-7 opacity-75">
            This package includes up to 9 hours of driving per day. Fuel costs are the client’s responsibility.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[18rem] border-collapse text-left">
              <caption className="sr-only">Daily rental prices by vehicle</caption>
              <thead>
                  <tr className="bg-base-100">
                    <th className="border border-base-content/60 px-3 py-2.5 font-bold" scope="col">Vehicle</th>
                    {dailyRates.map(([vehicle]) => (
                      <th className="border border-base-content/60 px-3 py-2.5 font-bold" scope="col" key={vehicle}>{vehicle}</th>
                    ))}
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-base-200">
                    <th className="border border-base-content/60 px-3 py-2.5 font-normal" scope="row">Daily</th>
                    {dailyRates.map(([vehicle, price]) => (
                      <td className="border border-base-content/60 px-3 py-2.5" key={vehicle}>{price}</td>
                    ))}
                  </tr>
              </tbody>
            </table>
          </div>

          <h4 className="mt-6">Terms:</h4>
          <ul className="mt-2 space-y-2 leading-6">
            {dailyTerms.map((term) => <li key={term}>*{term}</li>)}
          </ul>
        </article>

        <article className="mt-14">
          <h3 className="font-display text-2xl">Destination-based rental</h3>
          <p className="mt-4 leading-7 opacity-75">
            Destination-based rentals are ideal for trips to specific places in your city or another city. For example, travel from Lahan to Janakpur, Rajbiraj to Bardibas, Janakpur to Rajbiraj, or Pokhara to Kathmandu.
          </p>
          <p className="mt-6 font-semibold leading-7">
            <strong>Note:</strong> Each destination has a different price range based on distance and duration. Contact us with the vehicle you want to hire and your destination, and our team will provide the price.
          </p>
        </article>

        <div className="mt-8 text-center">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="btn rounded-full border-0 bg-[#25D366] px-7 text-white hover:bg-[#1fb955]"
          >
            <Icon name="whatsapp" size={18} /> Chat by WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
