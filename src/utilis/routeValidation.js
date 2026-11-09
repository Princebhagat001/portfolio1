import { navigation } from "../data/site";

const validPaths = new Set(["/", "/index.html"]);
const validSections = new Set(navigation.map(([, id]) => id));

export function isValidRoute(pathname, hash = "") {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  if (!validPaths.has(normalizedPath)) return false;
  if (!hash || hash === "#") return true;

  try {
    return validSections.has(decodeURIComponent(hash.slice(1)));
  } catch {
    return false;
  }
}
