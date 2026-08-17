"use client";

type VideoProps = {
  src?: string;
  poster?: string;
  className?: string;
};

export default function VideoSection({ src = "/videos/hero.mp4", poster, className = "" }: VideoProps) {
  if (!src) return null;

  return (
    <section id="video-section" className={`w-full overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        aria-hidden="true"
      />
    </section>
  );
}
