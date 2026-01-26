"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface HeroProps {
  slides: {
    title: string;
    subtitle: string;
    button_text: string;
    image: string;
  }[];
  lang?: string;
}

export default function Hero({ slides, lang = 'lv' }: HeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

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

  return (
    <section className="vag-container pb-6">
      <div 
        className="relative h-[60vh] min-h-[460px] w-full overflow-hidden"
        style={{ borderRadius: 'var(--card-radius)' }}
      >
        {/* Carousel Viewport */}
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="relative h-full min-w-full flex-shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.title.replace(/<br \/>/g, ' ')}
                  fill
                  className="object-cover object-bottom"
                  priority={index === 0}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />
                
                <div className="relative flex h-full flex-col justify-center px-[68px] text-left">
                  <div className="max-w-3xl">
                    <h1 
                      className="mb-[30px] uppercase text-white" 
                      dangerouslySetInnerHTML={{ __html: slide.title }} 
                    />
                    <div className="mb-10 font-medium tracking-wide text-white opacity-90" style={{ fontSize: 'var(--body)' }}>
                      {slide.subtitle}
                    </div>
                    <button 
                      className="btn-flood inline-flex items-center justify-center bg-[#af9f66] px-8 font-bold uppercase tracking-wider text-black transition-all"
                      style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                    >
                      {slide.button_text}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Indicators - Bars that fill up */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2 px-[68px]">
          <div className="flex w-full max-w-[400px] gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/30 transition-all"
              >
                <div 
                  className={`h-full bg-white transition-all ${
                    index === selectedIndex ? 'hero-progress-active' : 
                    index < selectedIndex ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
