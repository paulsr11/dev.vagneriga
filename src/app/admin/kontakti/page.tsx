'use client';

import { useState } from 'react';

export default function KontaktiAdmin() {
  const [content, setContent] = useState({
    title: "Kontakti",
    subtitle: "Rīgas Riharda Vāgnera nams",
    phone: "+371 26549664",
    address: "Riharda Vāgnera iela 4, Rīga, LV-1050",
    email: "info@vagneriga.lv",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.974644644124!2d24.10844431603244!3d56.94822298089024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd166000001%3A0x2600505500000000!2sRiharda%20V%C4%81gnera%20iela%204%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1690000000000!5m2!1slv!2slv"
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Satura izmaiņas saglabātas!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Kontaktu lapa</h1>
            <p className="text-zinc-400">Headless Admin Content Manager</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 shadow-lg"
          >
            {isSaving ? "Saglabā..." : "SAGLABĀT IZMAIŅAS"}
          </button>
        </div>

        <div className="p-8 space-y-10">
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Galvenā informācija</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.title}
                  onChange={(e) => setContent({...content, title: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Apakšvirsraksts</label>
                <input 
                  type="text" 
                  value={content.subtitle}
                  onChange={(e) => setContent({...content, subtitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Tālrunis</label>
                  <input 
                    type="text" 
                    value={content.phone}
                    onChange={(e) => setContent({...content, phone: e.target.value})}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">E-pasts</label>
                  <input 
                    type="text" 
                    value={content.email}
                    onChange={(e) => setContent({...content, email: e.target.value})}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Adrese</label>
                <input 
                  type="text" 
                  value={content.address}
                  onChange={(e) => setContent({...content, address: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Google Maps Embed URL</label>
                <input 
                  type="text" 
                  value={content.mapUrl}
                  onChange={(e) => setContent({...content, mapUrl: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
