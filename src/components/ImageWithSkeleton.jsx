import { useState } from "react";

export default function ImageWithSkeleton({ className = "", wrapperClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`image-loading ${wrapperClassName}`}>
      {!loaded && <span className="image-skeleton" aria-hidden="true" />}
      <img
        {...props}
        className={`${className} ${loaded ? "image-loaded" : "image-pending"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </span>
  );
}
