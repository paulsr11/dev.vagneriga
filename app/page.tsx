import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="animate-on-load space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Webwoork Preview
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Safer visual improvements, delivered in small steps.
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
            This site now uses an explicit media pipeline, smoother interaction timing, and reduced-motion-aware animations so improvements are stable and reversible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/sponsori"
              className="ui-transition rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:scale-[1.01] hover:bg-zinc-200"
            >
              Open Sponsori Page
            </Link>
            <a
              href="https://nextjs.org/docs"
              className="ui-transition rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold hover:border-zinc-500 hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framework Docs
            </a>
          </div>
        </div>

        <div className="animate-on-load relative overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/api/wp-media/2025/09/vagnera_nams-1.jpg"
            alt="Rigas Vagnera nams"
            width={900}
            height={700}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  );
}
