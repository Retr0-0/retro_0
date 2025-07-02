// OptimizedImage.tsx - A reusable React component for optimized image loading with WebP and lazy loading
import * as React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Path to the original image (PNG/JPG)
  webp?: string; // Optional: path to the webp version (if different)
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, webp, alt, ...props }: OptimizedImageProps) => {
  // Derive webp path if not provided
  const webpSrc = webp || src.replace(/\.(png|jpe?g)$/i, ".webp");
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" {...props} />
    </picture>
  );
};

export default OptimizedImage; 