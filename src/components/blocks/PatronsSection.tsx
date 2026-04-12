"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getTranslatedField } from '@/lib/translations';

interface Patron {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function PatronsSection({ lang = 'lv', acf }: { lang?: string; acf?: Record<string, unknown>[] | null }) {
  const [mounted, setMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const items: Patron[] = [
    {
      name: getTranslatedField(acf?.[0] ?? null, 'name', lang, "Egils Levits") as string,
      role: getTranslatedField(acf?.[0] ?? null, 'role', lang, "Kādreizējais Latvijas Valsts prezidents") as string,
      quote: getTranslatedField(acf?.[0] ?? null, 'quote', lang, "Vācijas, Latvijas un pasaules kultūras vēsturē īpašu lappusi ir ierakstījis Rihards Vāgners...") as string,
      image: "/images/patrons/levits.webp"
    },
    {
      name: getTranslatedField(acf?.[1] ?? null, 'name', lang, "Franks Valters Šteinmeiers") as string,
      role: getTranslatedField(acf?.[1] ?? null, 'role', lang, "Vācijas Federatīvās Republikas prezidents") as string,
      quote: getTranslatedField(acf?.[1] ?? null, 'quote', lang, "Ar projektu \"Riharda Vāgnera nams\" Rīgā pasaules līmeņa kultūrvietai tiek dota jauna elpa...") as string,
      image: "/images/patrons/steinmeier.webp"
    },
    {
      name: getTranslatedField(acf?.[2] ?? null, 'name', lang, "Eva Vāgnere-Paskjē") as string,
      role: getTranslatedField(acf?.[2] ?? null, 'role', lang, "Riharda Vāgnera mazmazmeita") as string,
      quote: getTranslatedField(acf?.[2] ?? null, 'quote', lang, "Kad esi nokļuvis ēkā un iztēlojies, kā tā atdzīvosies un to piepildīs mūzika, no šīm sajūtām vairs nevar atbrīvoties...") as string,
      image: "/images/patrons/wagner.webp"
    }
  ];

  const onSelect = useCallback((emblaApi: { selectedScrollSnap: () => number }) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const slideContent = (patron: Patron, index: number) => (
    <>
      {/* Image: 1/3 on desktop, full width on mobile. Always square via grid column width + aspect-ratio. */}
      <div className="md:col-span-1 min-w-0">
        <div className="w-full overflow-hidden" style={{ aspectRatio: '1' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={patron.image}
            alt={patron.name}
            className="block w-full h-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      </div>
      {/* Text: 2/3 on desktop, full width on mobile. */}
      <div className="md:col-span-2 p-5 pb-16 md:p-12 lg:p-20 flex flex-col justify-center min-w-0">
        <blockquote className="mb-3 md:mb-8 italic leading-snug md:leading-relaxed text-gray-700 text-xs md:text-[15px]">
          &quot;{patron.quote}&quot;
        </blockquote>
        <div className="font-serif text-sm md:text-2xl font-bold text-black">– {patron.name}</div>
        <div className="mt-0.5 md:mt-1 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#af9f66]">{patron.role}</div>
      </div>
    </>
  );

  if (!mounted) {
    const patron = items[0];
    return (
      <section className="vag-container py-20">
        <div className="mb-12 text-center"><h2 className="text-black uppercase">Patroni</h2></div>
        <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-gray-50 border border-gray-100" data-patroni-card>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {slideContent(patron, 0)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="vag-container py-20">
      <div className="mb-12 text-center">
        <h2 className="text-black uppercase">Patroni</h2>
      </div>

      <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-gray-50 border border-gray-100" data-patroni-card>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((patron, index) => (
              <div key={index} className="min-w-full w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                  {slideContent(patron, index)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 md:bottom-8 right-0 z-10 flex justify-end px-5 md:px-[68px]">
          <div className="flex w-full max-w-[400px] gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-black/10 transition-all"
              >
                <div
                  className={`h-full bg-[#af9f66] transition-all ${
                    index === selectedIndex ? 'hero-progress-active' :
                    index < selectedIndex ? 'w-full' : 'w-0'
                  }`}
                  style={{ animationDuration: '8000ms' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
