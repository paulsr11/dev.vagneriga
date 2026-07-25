'use client';

import React, { useState } from 'react';

interface FriendDonationWidgetProps {
  lang: string;
  translations: {
    subheading: string;
    title: string;
    text: string;
    buttonText: string;
    step1Title: string;
    step2Title: string;
    monthlyLabel: string;
    oneTimeLabel: string;
    monthSuffix: string;
    oneTimeSuffix: string;
    benefitsHeading?: string;
    benefits: string[];
  };
}

const STRIPE_MONTHLY_LINKS: Record<string, string> = {
  '€10': 'https://donate.stripe.com/aFacN73HR43IgYi25m5ZC02',
  '€25': 'https://donate.stripe.com/5kQbJ30vF8jY23o9xO5ZC01',
  '€50': 'https://buy.stripe.com/14A4gB1zJ2ZEfUeeS85ZC00',
};

const STRIPE_ONETIME_LINK = 'https://buy.stripe.com/4gM7sN2DNcAe4bwcK05ZC06';

export default function FriendDonationWidget({ lang, translations: t }: FriendDonationWidgetProps) {
  // Default selected amount is €25 per user requirement
  const [selectedAmount, setSelectedAmount] = useState<string>('€25');
  const [frequency, setFrequency] = useState<'monthly' | 'oneTime'>('monthly');

  const amounts = ['€10', '€25', '€50'];

  const stripeUrl = frequency === 'oneTime'
    ? STRIPE_ONETIME_LINK
    : (STRIPE_MONTHLY_LINKS[selectedAmount] || STRIPE_MONTHLY_LINKS['€25']);

  return (
    <div className="w-full">
      <div
        className="border-2 border-[#B49661] p-6 sm:p-10 lg:p-12 bg-[#002142] text-white shadow-xl rounded-[var(--card-radius)]"
      >
        {/* Header */}
        <div className="mb-8 text-left max-w-3xl">
          <p className="text-[#B49661] uppercase tracking-[0.2em] font-sans font-bold text-xs mb-2">
            {t.subheading}
          </p>
          <h2 className="text-[#B49661] uppercase tracking-wider font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-200 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            {t.text}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-[#B49661]/30">
          {/* Left Column: 2-Step Donation Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-[#001830] p-6 sm:p-8 rounded-xl border border-[#B49661]/20 shadow-md">
            
            {/* STEP 1: Frequency & Amount */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B49661] text-[#002142] text-xs font-bold font-sans flex-shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B49661] font-sans">
                  {t.step1Title}
                </span>
              </div>

              {/* Frequency Switcher Pills */}
              <div className="grid grid-cols-2 gap-2 bg-[#000d1c] p-1.5 rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-3 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans rounded-md transition-all text-center ${
                    frequency === 'monthly'
                      ? 'bg-[#B49661] text-[#002142] shadow-sm'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.monthlyLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('oneTime')}
                  className={`py-3 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans rounded-md transition-all text-center ${
                    frequency === 'oneTime'
                      ? 'bg-[#B49661] text-[#002142] shadow-sm'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.oneTimeLabel}
                </button>
              </div>

              {/* Preset Amounts Grid (Only visible when Monthly is selected) */}
              {frequency === 'monthly' && (
                <div className="flex items-center gap-3 flex-wrap pt-2">
                  {amounts.map((amount) => {
                    const isSelected = selectedAmount === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount)}
                        className={`font-sans font-bold text-sm sm:text-base px-6 py-3 transition-all rounded-lg ${
                          isSelected
                            ? 'bg-[#B49661] text-[#002142] shadow-md ring-2 ring-[#B49661]/50'
                            : 'bg-white/10 text-white border border-white/20 hover:border-[#B49661]'
                        }`}
                      >
                        {amount}
                      </button>
                    );
                  })}
                  <span className="text-gray-300 font-sans text-sm font-medium ml-1">
                    {t.monthSuffix}
                  </span>
                </div>
              )}
            </div>

            <div className="h-px bg-white/10" />

            {/* STEP 2: Confirm & Donate */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B49661] text-[#002142] text-xs font-bold font-sans flex-shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B49661] font-sans">
                  {t.step2Title}
                </span>
              </div>

              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#B49661] hover:bg-[#9F834F] text-[#002142] font-sans font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-2 shadow-md group cursor-pointer"
              >
                <span>
                  {t.buttonText} {frequency === 'monthly' ? `(${selectedAmount} ${t.monthSuffix})` : `(${t.oneTimeLabel})`}
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Supporter Benefits List (5 cols) */}
          <div className="lg:col-span-5 space-y-4 pt-2">
            <p className="text-xs font-bold font-sans uppercase tracking-wider text-[#B49661] m-0">
              {t.benefitsHeading || (lang === 'en' ? 'Supporter Benefits' : lang === 'de' ? 'Vorteile für Unterstützer' : 'Priekšrocības atbalstītājiem')}
            </p>
            <ul className="space-y-4 p-0 m-0 list-none">
              {t.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-gray-200 text-sm sm:text-base leading-relaxed">
                  <svg className="w-5 h-5 text-[#B49661] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
