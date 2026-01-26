'use client';

import { useState } from 'react';

export default function FAQAdmin() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Kas izveidoja Rīgas Vāgnera biedrību?",
      answer: "Biedrība “Rīgas Riharda Vāgnera biedrība” ir dibināta 2014.gada nogalē..."
    },
    {
      id: 2,
      question: "Kādi ir biedrības mērķi?",
      answer: "Galvenais mērķis ir Vāgnera zāles atjaunošana un kultūras centra izveide."
    }
  ]);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("FAQ saturs saglabāts!");
    }, 1000);
  };

  const addFaq = () => {
    setFaqs([...faqs, { id: Date.now(), question: "", answer: "" }]);
  };

  const removeFaq = (id: number) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Biežāk uzdotie jautājumi</h1>
            <p className="text-zinc-400">Globālais FAQ saraksts visām lapām</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 shadow-lg"
          >
            {isSaving ? "Saglabā..." : "SAGLABĀT IZMAIŅAS"}
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">FAQ Saraksts</h2>
            <button 
              onClick={addFaq}
              className="text-accent font-bold text-sm uppercase tracking-widest hover:underline"
            >
              + Pievienot jautājumu
            </button>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 relative group">
                <button 
                  onClick={() => removeFaq(faq.id)}
                  className="absolute top-4 right-4 text-zinc-300 hover:text-red-500 transition-colors"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Jautājums ({index + 1})</label>
                    <input 
                      type="text" 
                      value={faq.question}
                      onChange={(e) => {
                        const newFaqs = [...faqs];
                        newFaqs[index].question = e.target.value;
                        setFaqs(newFaqs);
                      }}
                      className="w-full p-3 border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ievadiet jautājumu..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Atbilde</label>
                    <textarea 
                      rows={3}
                      value={faq.answer}
                      onChange={(e) => {
                        const newFaqs = [...faqs];
                        newFaqs[index].answer = e.target.value;
                        setFaqs(newFaqs);
                      }}
                      className="w-full p-3 border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ievadiet atbildi..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {faqs.length === 0 && (
            <div className="text-center py-12 border-2 border-dashed border-zinc-100 rounded-xl">
              <p className="text-zinc-400 italic">Nav pievienots neviens jautājums</p>
              <button onClick={addFaq} className="mt-4 text-accent font-bold uppercase text-sm">Pievienot pirmo</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
