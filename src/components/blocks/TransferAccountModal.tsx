'use client';

import React, { useState, useEffect } from 'react';

interface TransferAccountModalProps {
  lang: string;
  buttonText?: string;
  customClass?: string;
}

export default function TransferAccountModal({ lang, buttonText, customClass }: TransferAccountModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Translations
  const t = {
    btn: buttonText || (lang === 'lv' ? 'Rādīt konta datus' : lang === 'de' ? 'Kontodaten anzeigen' : 'Show account details'),
    modalTitle: lang === 'lv' ? 'Bankas konta rekvizīti' : lang === 'de' ? 'Bankverbindung' : 'Bank Account Details',
    close: lang === 'lv' ? 'Aizvērt' : lang === 'de' ? 'Schließen' : 'Close',
    copy: lang === 'lv' ? 'Kopēt IBAN' : lang === 'de' ? 'IBAN kopieren' : 'Copy IBAN',
    copied: lang === 'lv' ? 'Nokopēts!' : lang === 'de' ? 'Kopiert!' : 'Copied!',
    regNo: lang === 'lv' ? 'Reģistrācijas Nr.' : lang === 'de' ? 'Reg.-Nr.' : 'Registration No.',
    bank: lang === 'lv' ? 'Banka' : lang === 'de' ? 'Bank' : 'Bank',
    swift: 'SWIFT / BIC',
    iban: 'IBAN',
    ref: lang === 'lv' ? 'Maksājuma mērķis' : lang === 'de' ? 'Verwendungszweck' : 'Payment reference',
    
    // Org 1
    org1Title: 'Rigas Riharda Vagnera biedriba',
    org1Ref: lang === 'lv' ? 'Ziedojums Vāgnera teātrim' : lang === 'de' ? 'Spende für das Wagner-Theater' : 'Donation for the Wagner Theatre',

    // Org 2 (Germany)
    germanyHeading: lang === 'lv' ? 'Ziedotājiem Vācijā (Nodokļu atvieglojumiem)' : lang === 'de' ? 'Für Spender in Deutschland' : 'For Donors in Germany',
    germanyText: lang === 'lv' 
      ? 'Ja esat Vācijas nodokļu maksātājs un vēlaties saņemt nodokļu atvieglojumus, varat ziedot caur mūsu atbalsta organizāciju Richard-Wagner-Verband International e.V.'
      : lang === 'de'
      ? 'Wenn Sie in Deutschland steuerpflichtig sind und Ihre Spende steuerlich geltend machen möchten, können Sie über unseren Förderverein Richard-Wagner-Verband International e.V. spenden.'
      : 'If you are a German taxpayer and would like to claim your donation for tax purposes, you can donate through our supporting organization Richard-Wagner-Verband International e.V.',
    germanyReceipt: lang === 'lv'
      ? 'Richard-Wagner-Verband International e.V. izsniegs oficiālu Vācijas ziedojuma kvīti (Spendenbescheinigung), un 100% no jūsu ziedojuma tiks pārskaitīti Vāgnera teātra restaurācijas projektam Rīgā.'
      : lang === 'de'
      ? 'Der Richard-Wagner-Verband International e.V. stellt die offizielle Spendenbescheinigung aus, und 100 % Ihrer Spende werden an das Wagner-Theater-Projekt in Riga weitergeleitet.'
      : 'Richard-Wagner-Verband International e.V. will issue the official German donation receipt (Spendenbescheinigung), and 100% of your donation will be transferred to the Wagner Theatre restoration project in Riga.',
    org2Title: 'Richard-Wagner-Verband International e.V.',
    org2Bank: 'Sparkasse Bayreuth',
    org2Iban: 'DE71 7735 0110 0009 0946 81',
    org2Bic: 'BYLADEM1SBT',
    org2Ref: 'Wagner Theatre Riga'
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={customClass || "btn-flood inline-flex items-center justify-center border border-[#002142] px-8 font-bold uppercase tracking-wider text-[#002142] hover:bg-[#002142] hover:text-white transition-all flex-shrink-0 cursor-pointer"}
        style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
      >
        {t.btn}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Box */}
          <div className="relative bg-white w-full max-w-3xl rounded-[var(--card-radius)] shadow-2xl border border-gray-200 z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#002142] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#B49661]/40 shrink-0">
              <div>
                <p className="text-[#B49661] uppercase tracking-[0.2em] font-sans font-bold text-xs mb-1">
                  VAGNERIGA
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white uppercase tracking-wider m-0">
                  {t.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-lg"
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto font-sans">

              {/* CARD 1: Rigas Riharda Vagnera biedriba */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-4">
                  <h4 className="font-serif font-bold text-[#002142] text-lg sm:text-xl m-0">
                    {t.org1Title}
                  </h4>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('LV85HABA0551039565078', 1)}
                    className="inline-flex items-center justify-center bg-[#002142] hover:bg-[#001730] text-white text-xs font-bold px-4 py-2 rounded transition-all shrink-0 cursor-pointer"
                  >
                    {copiedIndex === 1 ? t.copied : t.copy}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 block text-xs uppercase tracking-wider">{t.regNo}</span>
                    <span className="font-bold text-gray-900">40008232307</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs uppercase tracking-wider">{t.bank}</span>
                    <span className="font-bold text-gray-900">Swedbank Latvia</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs uppercase tracking-wider">{t.swift}</span>
                    <span className="font-bold text-gray-900">HABALV22</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs uppercase tracking-wider">{t.iban}</span>
                    <span className="font-mono font-bold text-[#002142] text-base select-all">LV85HABA0551039565078</span>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-gray-200/60 mt-1">
                    <span className="text-gray-400 block text-xs uppercase tracking-wider">{t.ref}</span>
                    <span className="font-bold text-[#B49661] text-sm">{t.org1Ref}</span>
                  </div>
                </div>
              </div>

              {/* CARD 2: For Donors in Germany */}
              <div className="bg-[#F0F4F8] border-2 border-[#B49661]/40 rounded-xl p-6 shadow-sm space-y-4">
                <div className="border-b border-[#B49661]/20 pb-3">
                  <h4 className="font-serif font-bold text-[#002142] text-lg sm:text-xl m-0 mb-2">
                    {t.germanyHeading}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0 mb-2">
                    {t.germanyText}
                  </p>
                  <p className="text-xs text-gray-600 italic leading-relaxed m-0 bg-white/60 p-3 rounded border border-gray-200">
                    {t.germanyReceipt}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <h5 className="font-sans font-bold text-gray-900 text-base m-0">
                    {t.org2Title}
                  </h5>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('DE71773501100009094681', 2)}
                    className="inline-flex items-center justify-center bg-[#B49661] hover:bg-[#9F834F] text-white text-xs font-bold px-4 py-2 rounded transition-all shrink-0 cursor-pointer"
                  >
                    {copiedIndex === 2 ? t.copied : t.copy}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 block text-xs uppercase tracking-wider">{t.bank}</span>
                    <span className="font-bold text-gray-900">{t.org2Bank}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs uppercase tracking-wider">{t.swift}</span>
                    <span className="font-bold text-gray-900">{t.org2Bic}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-gray-500 block text-xs uppercase tracking-wider">{t.iban}</span>
                    <span className="font-mono font-bold text-[#002142] text-base select-all">{t.org2Iban}</span>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-gray-200/80">
                    <span className="text-gray-500 block text-xs uppercase tracking-wider">{t.ref}</span>
                    <span className="font-bold text-[#B49661] text-sm">{t.org2Ref}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-right shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-[#002142] hover:bg-[#001730] text-white font-sans font-bold text-xs uppercase tracking-wider rounded transition-colors"
              >
                {t.close}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
