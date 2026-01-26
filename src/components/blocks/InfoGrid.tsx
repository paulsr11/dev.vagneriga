import Image from 'next/image';

interface InfoCardProps {
  title: string;
  subtitle: string;
  image: string;
}

function InfoCard({ title, subtitle, image }: InfoCardProps) {
  return (
    <div 
      className="relative group h-full min-h-[320px] cursor-pointer overflow-hidden bg-black"
      style={{ borderRadius: 'var(--card-radius)' }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex h-full flex-col justify-end p-10 text-white">
        <h4 className="mb-2 tracking-wide max-w-[300px]">
          {title}
        </h4>
        <p className="font-medium tracking-wide text-gray-200 opacity-90" style={{ fontSize: 'var(--ui-nav)' }}>{subtitle}</p>
        <div className="mt-4 flex justify-end">
           <span className="text-[#af9f66] text-4xl leading-none">›</span>
        </div>
      </div>
    </div>
  );
}

export default function InfoGrid({ tiles, lang = 'lv' }: { tiles: InfoCardProps[], lang?: string }) {
  return (
    <section className="vag-container pb-16">
      <div className="grid gap-6 md:grid-cols-2">
        {tiles.map((tile, i) => (
          <InfoCard key={i} {...tile} />
        ))}
      </div>
    </section>
  );
}
