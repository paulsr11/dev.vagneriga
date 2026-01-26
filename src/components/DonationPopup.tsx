'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialLevel: 'mazais' | 'partnera' | 'general';
}

export default function DonationPopup({ isOpen, onClose, initialLevel }: DonationPopupProps) {
  const [level, setLevel] = useState(initialLevel);
  const [amount, setAmount] = useState<number | string>(
    initialLevel === 'mazais' ? 20 : initialLevel === 'partnera' ? 200 : ''
  );
  const [formData, setDonatorData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactMe: false,
    agreed: false
  });

  useEffect(() => {
    setLevel(initialLevel);
    if (initialLevel === 'mazais') setAmount(20);
    else if (initialLevel === 'partnera') setAmount(200);
    else setAmount('');
  }, [initialLevel, isOpen]);

  if (!isOpen) return null;

  const mazaisAmounts = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const partneraAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Lūdzu, apstipriniet noteikumus.");
      return;
    }
    // Redirect to Stripe or other platform logic would go here
    console.log("Submit donation:", { level, amount, formData });
    alert(`Paldies par gatavību ziedot ${amount}€! Šobrīd notiek novirzīšana uz maksājumu sistēmu.`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-zinc-900 p-6 text-white flex justify-between items-center shrink-0">
            <h2 className="text-xl font-bold uppercase tracking-tight">Ziedojums</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Category Switcher */}
          <div className="bg-zinc-100 p-2 flex gap-1 shrink-0">
            {[
              { id: 'mazais', label: 'Mazais atbalsts' },
              { id: 'partnera', label: 'Partnera atbalsts' },
              { id: 'general', label: 'Ģenerālpartnera' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setLevel(cat.id as any);
                  if (cat.id === 'mazais') setAmount(20);
                  else if (cat.id === 'partnera') setAmount(200);
                  else setAmount('');
                }}
                className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${level === cat.id ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto">
            {/* 1. Summa Section */}
            <section>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">1. Ziedojuma summa</h3>
              
              {level === 'mazais' && (
                <div className="grid grid-cols-5 gap-3">
                  {mazaisAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-3 rounded-xl font-bold transition-all border ${amount === val ? 'bg-accent border-accent text-black shadow-lg scale-105' : 'bg-zinc-50 border-zinc-100 text-zinc-600 hover:border-accent'}`}
                    >
                      {val} €
                    </button>
                  ))}
                </div>
              )}

              {level === 'partnera' && (
                <div className="grid grid-cols-5 gap-3">
                  {partneraAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-3 rounded-xl font-bold transition-all border ${amount === val ? 'bg-accent border-accent text-black shadow-lg scale-105' : 'bg-zinc-50 border-zinc-100 text-zinc-600 hover:border-accent'}`}
                    >
                      {val} €
                    </button>
                  ))}
                </div>
              )}

              {level === 'general' && (
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="Ievadi summu (€)"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none text-xl font-bold"
                      min="1000"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">€</span>
                  </div>
                  <p className="text-sm text-zinc-400 italic">Ieteicamais ziedojums no 1000 €.</p>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${formData.contactMe ? 'bg-accent border-accent' : 'border-zinc-300 group-hover:border-accent'}`}>
                      {formData.contactMe && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={formData.contactMe}
                      onChange={(e) => setDonatorData({...formData, contactMe: e.target.checked})}
                    />
                    <span className="text-sm font-medium text-zinc-700">Vēlos, lai ar mani sazinās par sadarbības iespējām</span>
                  </label>
                </div>
              )}
            </section>

            {/* 2. ZIEDOTĀJA DATI Section */}
            <section>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">2. Ziedotāja informācija</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">Vārds</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setDonatorData({...formData, firstName: e.target.value})}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">Uzvārds</label>
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setDonatorData({...formData, lastName: e.target.value})}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">E-pasts</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setDonatorData({...formData, email: e.target.value})}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                  <p className="text-[10px] text-zinc-400 mt-1 ml-1">E-pasts nepieciešams ziedojuma apstiprinājumam.</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1 ml-1">Tālrunis (nav obligāts)</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setDonatorData({...formData, phone: e.target.value})}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 3. APSTIPRINĀJUMS Section */}
            <section className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className={`mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${formData.agreed ? 'bg-accent border-accent' : 'border-zinc-300 group-hover:border-accent'}`}>
                  {formData.agreed && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setDonatorData({...formData, agreed: e.target.checked})}
                />
                <span className="text-sm font-medium text-zinc-700 leading-snug">
                  Es piekrītu, ka mans ziedojums tiek izmantots Vāgnera nama atjaunošanas mērķiem.
                </span>
              </label>
              <p className="text-xs text-zinc-400 leading-relaxed italic">
                Ziedojumi netiek izmantoti algām, prēmijām vai būvniecības darbiem.
              </p>
            </section>

            {/* CTA Button */}
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-black hover:text-white text-black py-5 rounded-full font-bold transition-all uppercase tracking-[0.2em] text-sm shadow-xl"
            >
              TURPINĀT APMAKSU
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
