import { motion } from "../utilis/motion";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-4 font-display text-5xl">This page isn’t here.</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 opacity-70">
          The link may be incorrect or the page may have moved.
        </p>
        <a className={`btn btn-primary mt-7 rounded-full px-7 ${motion.button}`} href="/">
          Go to the home page
        </a>
      </div>
    </main>
  );
}
