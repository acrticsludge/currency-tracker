import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/background.webp"
        alt="Currency background"
        fill
        quality={100}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
