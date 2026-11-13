import { useState } from "react";

type BrandImageProps = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  fallbackClassName?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
};

export function BrandImage({
  src,
  alt,
  fallback,
  className = "",
  fallbackClassName = "",
  width,
  height,
  loading,
}: BrandImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role="img"
        aria-label={alt}
        className={`inline-flex items-center justify-center rounded-lg border border-border bg-secondary/70 px-3 text-center font-display font-extrabold text-primary ${className} ${fallbackClassName}`}
      >
        {fallback}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...(width !== undefined ? { width } : {})}
      {...(height !== undefined ? { height } : {})}
      {...(loading !== undefined ? { loading } : {})}
    />
  );
}
