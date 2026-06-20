import { motion } from "framer-motion";
import { links, stats, stack, github } from "./data.js";

const ease = [0.2, 0.8, 0.2, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold">MH<span className="gradient-text">.</span></a>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="#github" className="hidden transition-colors hover:text-ink sm:block">Projets</a>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-violet to-fuchsia px-4 py-2 font-medium text-white transition-transform hover:-translate-y-0.5">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:px-6 sm:pt-20">
      <div className="grid auto-rows-[minmax(0,auto)] gap-4 sm:grid-cols-3">
        {/* Intro — large */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
          className="glass flex flex-col justify-between p-7 sm:col-span-2 sm:row-span-2 sm:p-9">
          <div>
            <span className="chip">disponible pour missions</span>
            <h1 className="font-display mt-5 text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.02]">
              Moustapha Hayas.<br /><span className="gradient-text">Je construis des produits qui tiennent.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Développeur full-stack — du front au back. Plateformes web, SaaS multi-tenant,
              microservices, dashboards. J'aime les projets exigeants où la fiabilité compte.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#github" className="rounded-full bg-gradient-to-r from-violet to-fuchsia px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">Voir mes projets</a>
            <a href={links.gh} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-violet/50">GitHub</a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}
          className="glass flex items-center justify-center p-8">
          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-violet via-fuchsia to-blue font-display text-4xl font-extrabold text-white shadow-2xl">MH</span>
        </motion.div>

        {/* Studio */}
        <motion.a href={links.studio} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease }}
          className="glass glass-hover flex flex-col justify-between p-6">
          <span className="font-mono text-xs text-faint">je dirige</span>
          <div>
            <p className="font-display text-xl font-bold">Governor Studio</p>
            <p className="mt-1 text-sm text-muted">Studio de livraison logicielle gouverné →</p>
          </div>
        </motion.a>
      </div>

      {/* Stats + stack */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="glass flex items-center justify-around p-5 sm:col-span-1">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="gradient-text font-display text-2xl font-extrabold">{s.v}</p>
              <p className="text-[11px] text-faint">{s.l}</p>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="glass flex flex-wrap items-center gap-2 p-5 sm:col-span-2">
          {stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </motion.div>
      </div>
    </section>
  );
}

function GitHub() {
  return (
    <section id="github" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue">Open source</span>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Sur mon GitHub</h2>
          <p className="mt-3 max-w-2xl text-muted">Un aperçu de mon travail public — du backend microservices aux interfaces web.</p>
        </div>
        <a href={links.gh} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-blue/50">Voir tous les repos →</a>
      </Reveal>

      <div className="mt-10 flex flex-col gap-8">
        {github.map((g) => (
          <div key={g.cat}>
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: g.color }} />
              <h3 className="font-display text-lg font-semibold">{g.cat}</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.repos.map((r, i) => (
                <motion.a key={r.name} href={`${links.gh}/${r.name}`} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass glass-hover flex flex-col p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-medium text-ink">{r.name}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-faint"><path d="M7 17L17 7M7 7h10v10" /></svg>
                  </div>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">{r.desc}</p>
                  {r.demo && <a href={`${links.demo}/${r.demo}/`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="mt-2 w-fit font-mono text-[11px] text-violet hover:underline">démo en ligne →</a>}
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-6">
      <Reveal className="glass p-8 text-center sm:p-14">
        <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-tight">
          On construit quelque chose <span className="gradient-text">ensemble</span> ?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">Mission, produit, ou idée à cadrer — écrivez-moi, je réponds vite.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
          <a href={`mailto:${links.email}`} className="rounded-full bg-gradient-to-r from-violet to-fuchsia px-6 py-3 font-medium text-white">{links.email}</a>
          <a href={links.gh} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-medium hover:border-violet/50">GitHub</a>
          <a href={links.studio} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-medium hover:border-violet/50">Governor Studio</a>
        </div>
      </Reveal>
      <p className="mt-10 text-center text-xs text-faint">© {new Date().getFullYear()} Moustapha Hayas · React · Tailwind · Framer Motion</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div className="mesh"><span className="blob blob-1" /><span className="blob blob-2" /><span className="blob blob-3" /></div>
      <Nav />
      <main>
        <Hero />
        <GitHub />
        <Contact />
      </main>
    </>
  );
}
