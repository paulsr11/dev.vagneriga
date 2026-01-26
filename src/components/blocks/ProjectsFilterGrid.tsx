'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConcertCard } from './ConcertsSection';

interface ProjectsFilterGridProps {
  initialProjects: any[];
  initialTotalPages: number;
  initialTema: string;
  initialKartot: string;
  title?: string;
  subtitle?: string;
  lang: string;
}

const labels: Record<string, { [key: string]: string }> = {
  tema: { lv: 'Tēma:', en: 'Topic:', de: 'Thema:' },
  kartot: { lv: 'Kārtot:', en: 'Sort by:', de: 'Sortieren:' },
  visi: { lv: 'Visi', en: 'All', de: 'Alle' },
  koncerti: { lv: 'Koncerti', en: 'Concerts', de: 'Konzerte' },
  operas: { lv: 'Operas', en: 'Operas', de: 'Opern' },
  izstades: { lv: 'Izstādes', en: 'Exhibitions', de: 'Ausstellungen' },
  jaunakais: { lv: 'Jaunākais', en: 'Latest', de: 'Neueste' },
  vecakais: { lv: 'Vecākais', en: 'Oldest', de: 'Älteste' },
  alfabetiski: { lv: 'Alfabētiski', en: 'Alphabetical', de: 'Alphabetisch' },
  popularakais: { lv: 'Populārākais', en: 'Popular', de: 'Beliebt' },
  pasakums: { lv: 'Pasākums', en: 'Event', de: 'Veranstaltung' },
};

export default function ProjectsFilterGrid({ 
  initialProjects, 
  initialTotalPages,
  initialTema,
  initialKartot,
  title,
  subtitle,
  lang = 'lv'
}: ProjectsFilterGridProps) {
  const [activeTema, setActiveTema] = useState(initialTema);
  const [activeSort, setActiveSort] = useState(initialKartot);
  const [projects, setProjects] = useState(initialProjects);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const temaOptions = [
    { label: labels.visi[lang], slug: 'visi' },
    { label: labels.koncerti[lang], slug: 'koncerti' },
    { label: labels.operas[lang], slug: 'operas' },
    { label: labels.izstades[lang], slug: 'izstades' },
  ];

  const kartotOptions = [
    { label: labels.jaunakais[lang], value: 'jaunakais' },
    { label: labels.vecakais[lang], value: 'vecakais' },
    { label: labels.alfabetiski[lang], value: 'alfabetiski' },
    { label: labels.popularakais[lang], value: 'popularakais' },
  ];

  const handleTemaChange = (slug: string) => {
    setActiveTema(slug);
    setCurrentPage(1);
    updateFilters(slug, activeSort, 1);
  };

  const handleSortChange = (value: string) => {
    setActiveSort(value);
    setCurrentPage(1);
    updateFilters(activeTema, value, 1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    updateFilters(activeTema, activeSort, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFilters = async (tema: string, sort: string, page: number) => {
    setIsLoading(true);
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('tema', tema);
      searchParams.set('kartot', sort);
      searchParams.set('page', page.toString());
      searchParams.set('lang', lang);
      
      const response = await fetch(`/api/projects?${searchParams.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch filtered projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="vag-container">
      {/* Header */}
      <div className="pt-12 pb-8 md:pt-16 md:pb-12 flex flex-col">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{subtitle}</p>
        <h1 className="mb-12 text-black tracking-tight uppercase">{title}</h1>
      </div>

      {/* Filters and Sorting */}
      <div className="mb-12 border-b border-gray-200 pb-6">
        <div className="flex flex-col gap-4">
          {/* Tēma Filter */}
          <div className="flex items-center gap-6 text-[14px]">
            <span className="font-bold text-black min-w-[60px]">{labels.tema[lang]}</span>
            <div className="flex flex-wrap items-center gap-x-3">
              {temaOptions.map((option, index) => (
                <div key={option.slug} className="flex items-center">
                  <button 
                    onClick={() => handleTemaChange(option.slug)}
                    className={`transition-colors hover:text-accent font-medium ${activeTema === option.slug ? 'text-black underline decoration-1 underline-offset-8' : 'text-gray-400'}`}
                  >
                    {option.label}
                  </button>
                  {index < temaOptions.length - 1 && (
                    <span className="ml-3 text-gray-300">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kārtot Filter */}
          <div className="flex items-center gap-6 text-[14px]">
            <span className="font-bold text-black min-w-[60px]">{labels.kartot[lang]}</span>
            <div className="flex flex-wrap items-center gap-x-3">
              {kartotOptions.map((option, index) => (
                <div key={option.value} className="flex items-center">
                  <button 
                    onClick={() => handleSortChange(option.value)}
                    className={`transition-colors hover:text-accent font-medium ${activeSort === option.value ? 'text-black underline decoration-1 underline-offset-8' : 'text-gray-400'}`}
                  >
                    {option.label}
                  </button>
                  {index < kartotOptions.length - 1 && (
                    <span className="ml-3 text-gray-300">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid with Shuffle Animation */}
      <div className="relative min-h-[400px]">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-50">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
          </div>
        )}
        
        <motion.div 
          layout
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode='popLayout'>
            {projects.map((project: any) => {
              const featuredImage = project._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/20210830_VacijasVestnieciba_VagneraZale_039-650x433-1.jpg";
              const categories = project._embedded?.['wp:term']?.[0] || [];
              
              const translatedTitle = project[`title_${lang}`] || project.title.rendered;
              const translatedCategory = categories[0]?.[`name_${lang}`] || categories[0]?.name || labels.pasakums[lang];

              // Use custom meta fields if available, otherwise fallback to post date
              let date = "";
              let time = "";
              
              if (project.meta?.vag_event_date) {
                date = project.meta.vag_event_date;
                time = project.meta.vag_event_time || "";
              } else {
                const dateObj = new Date(project.date);
                date = dateObj.toLocaleDateString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                });
                time = dateObj.toLocaleTimeString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
                  hour: '2-digit',
                  minute: '2-digit'
                });
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ConcertCard 
                    slug={project.slug}
                    title={translatedTitle}
                    category={translatedCategory}
                    date={date}
                    time={time}
                    image={featuredImage}
                    lang={lang}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pagination */}
      {totalPages >= 1 && (
        <div className="mt-16 flex justify-center items-center gap-4">
           <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-1 transition-colors ${currentPage === pageNum ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                if (
                  (pageNum === 2 && currentPage > 3) || 
                  (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNum} className="text-gray-400">...</span>;
                }
                return null;
              })}
              
              {currentPage < totalPages && (
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="text-black ml-2 hover:text-accent transition-colors"
                >
                  ›
                </button>
              )}
           </div>
        </div>
      )}
    </div>
  );
}
