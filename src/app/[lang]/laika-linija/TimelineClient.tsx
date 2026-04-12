'use client';

import { useEffect } from 'react';

type TimelineItem = {
  id: string;
  side: 'left' | 'right' | 'none';
  title?: string;
  text?: string;
  image?: string;
  date?: string;
  year: string;
  highlightYear?: boolean;
  finalNote?: string;
};

const ITEMS: TimelineItem[] = [
  {
    id: '1782',
    side: 'left',
    title: 'The Riga City Theatre opens',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings. Link',
    date: '15th September',
    year: '1782',
  },
  {
    id: '1787-1939',
    side: 'right',
    title: 'The Musse Society operates in the building',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    year: '1787-1939',
  },
  {
    id: '1837-1839',
    side: 'left',
    title: 'Richard Wagner works as Kapellmeister',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    year: '1837-1839',
  },
  {
    id: '1945-1992',
    side: 'right',
    title: 'Chamber Music Hall is used for concerts',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    image: 'https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png',
    year: '1945-1992',
  },
  {
    id: '2015',
    side: 'left',
    title: 'The Riga Richard Wagner Society is founded',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    year: '2015',
  },
  {
    id: '2017',
    side: 'right',
    title: 'Eva Wagner-Pasquier becomes patron',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    year: '2017',
  },
  {
    id: '2019',
    side: 'left',
    title: 'Egils Levits becomes patron',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    image: 'https://dev.vagneriga.lv/wp-content/uploads/2025/09/maris_gailis_intervija_grenardi_digitalais_zurnals_grenazine_lv.jpg',
    year: '2019',
  },
  {
    id: '2020-oct',
    side: 'right',
    title: 'Latvian Parliament backs transfer',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    date: 'October',
    year: '2020',
  },
  {
    id: '2020-dec',
    side: 'left',
    title: 'German Parliament allocates 5.2 million',
    text: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    date: 'December',
    year: '2020',
  },
  {
    id: '2027',
    side: 'right',
    title: 'Opening of the Wagner Theatre in Riga',
    text: 'Latest news here',
    year: '2027',
    highlightYear: true,
    finalNote: 'done',
  },
];

export default function TimelineClient() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline-item]'));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white py-16 md:py-20">
      <section className="vag-container">
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="mb-12 text-black tracking-tight uppercase">Laika līnija</h1>
          <p className="mx-auto mb-2 max-w-3xl text-base leading-relaxed text-gray-700">
            Šī ir demonstrācijas rindkopa zem virsraksta, lai parādītu lapas teksta stilu un atstarpes.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[1100px]">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              data-timeline-item
              className="timeline-item mb-12 md:mb-16 grid grid-cols-[1fr_3fr] md:grid-cols-[minmax(0,1fr)_170px_minmax(0,1fr)] items-start gap-5 md:gap-10"
            >
              <div className="hidden md:block md:col-start-1 min-h-[1px] self-start">
                {item.side === 'left' ? (
                  <div className="text-left md:pr-4">
                    <h3 className="text-black font-serif font-bold text-xl md:text-[28px] leading-tight">{item.title}</h3>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || 'Timeline image'}
                        className="mt-3 h-36 w-full rounded-[var(--card-radius)] object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{item.text}</p>
                  </div>
                ) : null}
              </div>

              <div className="col-start-1 md:col-start-2 w-full text-left md:text-center md:flex md:flex-col md:items-center">
                {item.date ? <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">{item.date}</p> : null}
                <p
                  className={`font-semibold leading-none ${
                    item.highlightYear ? 'text-accent' : 'text-black'
                  } whitespace-nowrap text-2xl md:text-[38px]`}
                >
                  {item.year}
                </p>
                {item.finalNote ? null : (
                  <p className="mt-1 md:mt-2 text-2xl md:text-5xl leading-none text-black" aria-hidden>
                    ↓
                  </p>
                )}
              </div>

              <div className="hidden md:block md:col-start-3 min-h-[1px] self-start">
                {item.side === 'right' ? (
                  <div className="text-left md:pl-4">
                    <h3 className="text-black font-serif font-bold text-xl md:text-[28px] leading-tight">{item.title}</h3>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || 'Timeline image'}
                        className="mt-3 h-36 w-full rounded-[var(--card-radius)] object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{item.text}</p>
                  </div>
                ) : null}
              </div>

              <div className="col-start-2 md:hidden min-h-[1px] self-start">
                <div className="text-left">
                  <h3 className="text-black font-serif font-bold text-xl leading-tight">{item.title}</h3>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title || 'Timeline image'}
                      className="mt-3 h-28 w-full rounded-[var(--card-radius)] object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <p className="mt-2 text-base leading-relaxed text-gray-700">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .timeline-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}