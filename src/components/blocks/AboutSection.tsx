import Image from 'next/image';
import Link from 'next/link';

interface AboutSectionProps {
  data: {
    background: string;
    logo: string;
    title: string;
    items: {
      label: string;
      link: string;
    }[];
  };
  lang?: string;
}

const labels: Record<string, { [key: string]: string }> = {
  skatit: { lv: 'SKATĪT', en: 'VIEW', de: 'ANSEHEN' },
};

export default function AboutSection({ data, lang = 'lv' }: AboutSectionProps) {
  return (
    <section 
      className="relative w-full py-20 overflow-hidden"
      style={{ minHeight: '60vh' }}
    >
      <Image
        src={data.background}
        alt="Par biedrību background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="vag-container relative z-10 text-center text-white">
        <h2 className="mb-12 tracking-[0.1em]">{data.title}</h2>
        
        <div className="mb-16 flex justify-center">
          <div className="relative h-32 w-64">
            <Image
              src={data.logo}
              alt="Vagneriga Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          {data.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="mb-6 tracking-wider">{item.label}</h3>
              <Link 
                href={item.link}
                className="font-bold uppercase text-[#af9f66] tracking-widest transition-all hover:text-white" 
                style={{ fontSize: 'var(--ui-label)' }}
              >
                <span className="border-b-2 border-[#af9f66] pb-1">{labels.skatit[lang]}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
