const siteUrl = "https://bhagattourandtravels.com.np/";
const socialImage = `${siteUrl}images/vehicle_image1-optimized.jpg`;

export function applyOpenGraph(metadata) {
  Object.entries(metadata).forEach(([property, content]) => {
    let tag = [...document.head.querySelectorAll("meta[property]")].find(
      (element) => element.getAttribute("property") === property,
    );

    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.append(tag);
    }

    tag.setAttribute("content", content);
  });
}

export function notFoundOpenGraph(pathname) {
  return {
    "og:type": "website",
    "og:url": `${window.location.origin}${pathname}`,
    "og:title": "Page Not Found | Bhagat Tour and Travels",
    "og:description": "This page could not be found on the Bhagat Tour and Travels website.",
    "og:image": socialImage,
    "og:image:alt": "Bhagat Tour and Travels vehicle on a road in Nepal",
  };
}
