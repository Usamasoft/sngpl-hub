import Image from 'next/image';

interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  height?: number;
}

export default function SectionImage({ src, alt, caption, priority = false, className = '', height = 400 }: SectionImageProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ height }}>
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 800px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      {caption && <figcaption className="text-center text-sm text-gray-500 mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}
