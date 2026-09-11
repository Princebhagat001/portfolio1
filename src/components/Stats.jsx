const stats = [
  ["1000+", "customers served"],
  ["Whole Nepal", "cities and districts covered"],
  ["20+", "drivers and staff"],
];
export default function Stats() {
  return (
    <section className="border-y border-base-300 bg-base-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center sm:grid-cols-3 lg:px-8">
        {stats.map(([value, label]) => (
          <div key={label}>
            <b className="block font-display text-4xl text-primary">{value}</b>
            <span className="mt-1 block text-sm opacity-70">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
