import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getVestureContent } from '@/data/vesture-page';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getVestureContent(lang);
  return { title: c.metaTitle, description: c.metaDescription };
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-6">
      <div className="h-px flex-1 bg-gray-200" />
      <h2 className="text-center uppercase tracking-[0.2em] text-black">{children}</h2>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default async function NamsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getVestureContent(lang);

  return (
    <>
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col items-stretch md:flex-row">
          <div className="flex w-full flex-col bg-white pb-16 pr-0 pt-12 md:w-1/2 md:pb-24 md:pr-12 md:pt-16 lg:pr-20">
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
              className="object-contain p-6 md:p-10"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {c.sections.map((s) => (
        <section key={s.title} className="bg-white py-12 md:py-20">
          <div className="vag-container">
            <SectionTitle>{s.title}</SectionTitle>
            <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
