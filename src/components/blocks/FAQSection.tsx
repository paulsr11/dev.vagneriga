'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getTranslatedField } from '@/lib/wp';

interface FAQItem {
  id?: number;
  question: string;
  answer: string;
  image?: string;
  [key: string]: any;
}

const labels: Record<string, { [key: string]: string }> = {
  title: { lv: 'Biežāk uzdotie jautājumi', en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen' },
  q1: { lv: 'Kas izveidoja Rīgas Vāgnera biedrību?', en: 'Who established the Riga Vagner Association?', de: 'Wer hat den Rigaer Wagner-Verein gegründet?' },
  a1: { 
    lv: 'Biedrība “Rīgas Riharda Vāgnera biedrība” (turpmāk – “Biedrība”) ir dibināta 2014.gada nogalē ar mērķi rekonstruēt Rīgas Pilsētas teātri...', 
    en: 'The "Riga Richard Wagner Association" was established in late 2014 with the goal of reconstructing the Riga City Theater...',
    de: 'Der „Rigaer Richard-Wagner-Verein“ wurde Ende 2014 mit dem Ziel gegründet, das Rigaer Stadttheater zu rekonstruieren...'
  },
  info_tiks_papildinata: { lv: 'Informācija tiks papildinata.', en: 'Information will be updated.', de: 'Informationen werden aktualisiert.' },
};

export default function FAQSection({ items, lang = 'lv' }: { items?: FAQItem[], lang?: string }) {
  const [openId, setOpenId] = useState<number | string | null>(0);

  const defaultFAQs: FAQItem[] = [
    {
      id: 0,
      question: labels.q1[lang],
      answer: labels.a1[lang],
      image: "https://dev2.vagneriga.lv/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
    },
    {
      id: 1,
      question: labels.q1[lang],
      answer: labels.info_tiks_papildinata[lang]
    }
  ];

  const rawItems = items && items.length > 0 ? items : defaultFAQs;
  
  // Apply translation helper to each item
  const faqItems = rawItems.map((item, index) => ({
    id: item.id || index,
    question: getTranslatedField(item, 'question', lang, item.question),
    answer: getTranslatedField(item, 'answer', lang, item.answer),
    image: item.image
  }));

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="vag-container">
        <h2 className="text-3xl font-serif mb-16 text-center text-black uppercase tracking-[0.2em]">{labels.title[lang]}</h2>
        
        <div className="max-w-4xl mx-auto border-t border-black">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-black">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full py-6 flex justify-between items-center text-left group transition-all"
              >
                <span className={`text-lg font-bold tracking-tight text-black group-hover:text-gray-600 ${openId === item.id ? 'text-gray-600' : ''}`}>
                  {item.question}
                </span>
                <span className={`transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10 10L19 1" stroke="#af9f66" strokeWidth="3"/>
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-[800px] pb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className={`${item.image ? 'md:col-span-8' : 'md:col-span-12'} text-gray-700 leading-relaxed`}>
                    <p className="whitespace-pre-line text-lg">
                      {item.answer}
                    </p>
                  </div>
                  {item.image && (
                    <div className="md:col-span-4 relative aspect-[4/3] rounded-[var(--card-radius-sm)] overflow-hidden shadow-md">
                      <Image 
                        src={item.image} 
                        alt={item.question}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
