import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProjektsContent } from '@/data/projekts-page';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getProjektsContent(lang);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-6">
      <div className="h-px flex-1 bg-gray-200" />
      <h2 className="text-center text-black uppercase tracking-[0.2em]">{children}</h2>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default async function ProjektsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getProjektsContent(lang);
  const s = c.sections;

  return (
    <main className="min-h-screen bg-white">
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col items-stretch md:flex-row">
          <div className="flex w-full flex-col bg-white pb-16 pr-6 pt-12 md:w-1/2 md:pb-24 md:pr-12 md:pt-16 lg:pr-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{c.heroEyebrow}</p>
            <h1 className="mb-12 uppercase tracking-tight text-black">{c.heroTitle}</h1>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed text-gray-700">{c.heroLead}</p>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[var(--card-radius)] bg-[#F9F9F9] md:aspect-auto md:h-[600px] md:w-1/2">
            <Image
              src={c.heroImage}
              alt={c.heroTitle}
              fill
              className="object-contain object-center p-4 md:p-8"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-16 md:py-24">
        <div className="vag-container">
          <SectionTitle>{s.vizija.title}</SectionTitle>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
            {s.vizija.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="vag-container">
          <SectionTitle>{s.kulturas.title}</SectionTitle>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-700">{s.kulturas.intro}</p>
          <ul className="mx-auto mb-12 max-w-3xl list-disc space-y-4 pl-5 text-lg leading-relaxed text-gray-700 marker:text-accent">
            {s.kulturas.bullets.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.kulturas.thumbs.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] bg-[#F9F9F9]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain p-3 sm:p-4"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-16 md:py-24">
        <div className="vag-container">
          <SectionTitle>{s.ekas.title}</SectionTitle>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
            {s.ekas.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="vag-container">
          <SectionTitle>{s.avarijas.title}</SectionTitle>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] bg-[#F4F4F4]">
              <Image
                src={s.avarijas.photoInterior1}
                alt={s.avarijas.photoInterior1Alt}
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] bg-[#F4F4F4]">
              <Image
                src={s.avarijas.photoInterior2}
                alt={s.avarijas.photoInterior2Alt}
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mx-auto mb-10 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
            {s.avarijas.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-black">{s.avarijas.benefitsTitle}</p>
          <ul className="mx-auto mb-14 max-w-3xl list-disc space-y-3 pl-5 text-gray-700 marker:text-accent">
            {s.avarijas.benefits.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] bg-[#F4F4F4]">
              <Image
                src={s.avarijas.photo1877}
                alt={s.avarijas.photo1877Alt}
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] bg-[#F4F4F4]">
              <Image
                src={s.avarijas.photoFacade}
                alt={s.avarijas.photoFacadeAlt}
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="vag-container">
          <SectionTitle>{s.plani.title}</SectionTitle>
          <p className="mx-auto mb-4 max-w-3xl text-center text-lg text-gray-700">{s.plani.subtitle}</p>
          <p className="mx-auto mb-12 max-w-3xl text-center text-sm text-gray-600">{s.plani.authors}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.planFiles.map((src, i) => (
              <figure key={src} className="overflow-hidden rounded-[var(--card-radius)] border border-gray-100 bg-[#fafafa]">
                <div className="relative aspect-[1000/625] w-full bg-[#fafafa]">
                  <Image
                    src={src}
                    alt={s.plani.alts[i] ?? ''}
                    fill
                    className="object-contain p-2 sm:p-3"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="border-t border-gray-100 px-3 py-2 text-center text-xs text-gray-600">{s.plani.alts[i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
