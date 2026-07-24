'use client';

import { useState } from 'react';
import Image from 'next/image';
import FAQSection from '@/components/blocks/FAQSection';
import DonationPopup from '@/components/DonationPopup';

export default function ZiedojumiClient({ data }: { data: any }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'mazais' | 'partnera' | 'general'>('mazais');

  const openPopup = (level: 'mazais' | 'partnera' | 'general') => {
    setSelectedLevel(level);
    setIsPopupOpen(true);
  };

  const { heroData, doneContent, donationOptions, transparency, rekviziti, finalCta } = data;
  const paragraphs = Array.isArray(doneContent?.paragraphs) ? doneContent.paragraphs : [];
  const listItems = Array.isArray(doneContent?.listItems) ? doneContent.listItems : [];
  const options = Array.isArray(donationOptions) ? donationOptions : [];
  const usedFor = Array.isArray(transparency?.usedFor) ? transparency.usedFor : [];
  const notUsedFor = Array.isArray(transparency?.notUsedFor) ? transparency.notUsedFor : [];
  const rekvizitiList = Array.isArray(rekviziti) ? rekviziti : [];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* 1. Hero Section - Image on LEFT */}
        <section className="vag-container bg-white pb-6">
        <div className="flex flex-col md:flex-row-reverse items-stretch">
          <div className="w-full md:w-1/2 pt-12 pb-16 md:pt-16 md:pb-24 pl-6 md:pl-12 lg:pr-20 bg-white flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Rīgas Riharda Vāgnera nams</p>
            <h1 className="mb-12 text-black tracking-tight uppercase">{heroData.title}</h1>
              <div className="max-w-xl">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  {heroData.subtitle}
                </p>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => openPopup('mazais')}
                    className="bg-accent hover:bg-black hover:text-white text-black px-12 py-4 rounded-full font-bold transition-all w-fit uppercase tracking-widest text-sm"
                  >
                    {heroData.cta}
                  </button>
                  <p className="text-sm text-gray-400 font-medium">
                    {heroData.note}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[var(--card-radius)]">
              <Image
                src={heroData.image}
                alt="Vāgnera nams"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Ceļš uz Vāgnera nama atjaunošanu */}
        <section className="py-24 bg-white">
          <div className="vag-container">
            <div className="mb-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-black uppercase tracking-[0.2em]">{doneContent.title}</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/2 space-y-6">
                {paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-lg leading-relaxed text-gray-700">
                    {p}
                  </p>
                ))}
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-[#FBFBFB] p-10 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-black font-bold uppercase tracking-widest text-sm mb-6">{doneContent.listTitle}</h3>
                  <ul className="space-y-4">
                    {listItems.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-accent mt-1">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Ziedošanas iespējas */}
        <section className="py-24 bg-[#F9F9F9]">
          <div className="vag-container">
            <div className="mb-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-black uppercase tracking-[0.2em]">Izvēlies savu atbalsta veidu</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {options.map((option: any, i: number) => (
                <div key={i} className="flex flex-col p-10 bg-white rounded-xl border border-gray-100 hover:border-accent transition-all hover:shadow-md group">
                  <h3 className="text-black font-serif text-2xl mb-4">{option.name}</h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    {option.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Ziedojums</span>
                    <span className="text-black font-bold text-xl">{option.amount}</span>
                  </div>
                  <button
                    onClick={() => openPopup(i === 0 ? 'mazais' : i === 1 ? 'partnera' : 'general')}
                    className="w-full bg-accent group-hover:bg-black group-hover:text-white text-black py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs"
                  >
                    {option.cta}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-400 text-sm font-medium italic">
              Visas ziedošanas iespējas ir brīvprātīgas – vari izvēlēties arī citu summu.
            </p>
          </div>
        </section>

        {/* 4. Atklātība un atbildība */}
        <section className="py-24 bg-white">
          <div className="vag-container">
            <div className="mb-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-black uppercase tracking-[0.2em]">{transparency.title}</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700">
                {transparency.intro}
              </p>
            </div>

            <div className="grid gap-16 md:grid-cols-2">
            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-black font-bold uppercase tracking-widest text-sm mb-8">
                Izmanto:
              </h3>
              <ul className="space-y-4">
                {usedFor.map((item: string, i: number) => (
                  <li key={i} className="text-gray-600 flex items-start gap-3">
                    <span className="text-green-600 mt-1 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-black font-bold uppercase tracking-widest text-sm mb-8">
                Neizmanto:
              </h3>
              <ul className="space-y-4">
                {notUsedFor.map((item: string, i: number) => (
                  <li key={i} className="text-gray-600 flex items-start gap-3">
                    <span className="text-red-600 mt-1 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </div>
            <p className="text-center mt-12 text-gray-500 font-medium">
              {transparency.trustNoteLink?.href && transparency.trustNoteLink?.text ? (
                <>
                  Ar biedrības mērķiem var iepazīties biedrības{' '}
                  {transparency.trustNoteLink.openInNewTab ? (
                    <a
                      href={transparency.trustNoteLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      {transparency.trustNoteLink.text}
                    </a>
                  ) : (
                    <span className="text-accent">{transparency.trustNoteLink.text}</span>
                  )}
                  .
                </>
              ) : (
                transparency.trustNote
              )}
            </p>
          </div>
        </section>

        {/* 5. Rekvizīti */}
        <section className="py-24 bg-[#F9F9F9]">
          <div className="vag-container">
            <div className="mb-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-black uppercase tracking-[0.2em]">Rekvizīti ziedojumiem</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              {rekvizitiList.map((org: any, index: number) => (
                <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-black font-serif text-xl mb-8">{org.title}</h3>
                  <div className="space-y-4">
                    {(Array.isArray(org?.details) ? org.details : []).map((detail: any, i: number) => (
                      <div key={i} className="flex justify-between border-b border-gray-50 pb-2 last:border-0">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">{detail.label}</span>
                        <span className="text-black font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Noslēguma CTA */}
        <section className="py-32 bg-white">
          <div className="vag-container text-center">
            <h2 className="text-black font-serif text-[42px] mb-6 uppercase tracking-tight leading-tight max-w-2xl mx-auto">
              {finalCta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
              {finalCta.text}
            </p>
            <button
              onClick={() => openPopup('mazais')}
              className="bg-accent hover:bg-black hover:text-white text-black px-16 py-5 rounded-full font-bold transition-all uppercase tracking-[0.2em] text-sm"
            >
              {finalCta.button}
            </button>
          </div>
        </section>

        <FAQSection />
      </main>

      <DonationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        initialLevel={selectedLevel}
      />
    </>
  );
}
