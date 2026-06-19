import { motion } from "framer-motion";

const GH = "https://github.com/HayasMoustapha";
const STUDIO = "https://governor-studio.vercel.app";
const EMAIL = "governor-studio@gmail.com";
const ease = [0.2, 0.8, 0.2, 1];

const stack = ["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "PostgreSQL", "Docker"];

const projects = [
  { title: "La Maison Jungle", tag: "E-commerce", color: "#22c55e", slug: "start-react-with-plant-store-project",
    desc: "Boutique de plantes : catalogue filtrable, fiches, panier animé avec persistance." },
  { title: "Shiny", tag: "Web app", color: "#7c5cff", slug: "shiny-agency",
    desc: "Mise en relation freelance : questionnaire animé → recommandations, dark/light." },
  { title: "Time Tracking", tag: "Dashboard", color: "#5747ea", slug: "time-tracking-dashboard",
    desc: "Suivi du temps : bascule jour/semaine/mois, chiffres animés par activité." },
  { title: "Lumen", tag: "Landing", color: "#a78bfa", slug: "sign-up-form",
    desc: "Landing waitlist : validation en direct, état de succès animé, social proof." },
  { title: "Analytics", tag: "Widget", color: "#38bdf8", slug: "stats-preview",
    desc: "Aperçu de performance : KPIs animés, sparkline, sélection de période." },
  { title: "Audit de présence", tag: "Composant", color: "#ec4899", slug: "summary",
    desc: "Score de présence en ligne : anneau animé, détail par canal, pistes d'action." },
];

export default function App() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Hero */}
      <header className="flex flex-col gap-6 pt-20 pb-14 sm:pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-[#04121a]">HM</span>
            <div>
              <p className="text-sm font-medium text-accent">Développeur web full-stack</p>
              <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Hayas Moustapha</h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Je conçois et je livre des applications web et des plateformes métier — du front au back —
            avec une exigence de fiabilité. Fondateur de{" "}
            <a href={STUDIO} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">Governor Studio</a>,
            studio de livraison logicielle gouverné.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projets" className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-[#04121a] transition-transform hover:-translate-y-0.5">Voir les projets</a>
            <a href={STUDIO} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/50">Governor Studio →</a>
            <a href={GH} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/50">GitHub</a>
          </div>
        </motion.div>

        {/* Stack strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-2 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-card px-3 py-1 text-xs text-white/60">{s}</span>
          ))}
        </motion.div>
      </header>

      {/* Projects */}
      <section id="projets" className="scroll-mt-16 border-t border-white/10 py-14">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-medium text-accent">Réalisations</span>
            <h2 className="font-display mt-1 text-2xl font-bold sm:text-3xl">Projets en ligne</h2>
          </div>
          <p className="hidden text-sm text-white/40 sm:block">Démos live · code sur GitHub</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-white/25">
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: p.color }} />
              <span className="w-fit rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: `${p.color}22`, color: p.color }}>{p.tag}</span>
              <h3 className="font-display mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
              <div className="mt-5 flex gap-3 text-sm font-medium">
                <a href={`https://hayasmoustapha.github.io/${p.slug}/`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Voir la démo →</a>
                <a href={`${GH}/${p.slug}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t border-white/10 py-12">
        <h2 className="font-display text-2xl font-bold">Travaillons ensemble.</h2>
        <p className="mt-2 max-w-md text-white/60">Un projet, une mission, une idée à cadrer ? Écrivez-moi.</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <a href={`mailto:${EMAIL}`} className="rounded-xl bg-accent px-5 py-3 font-medium text-[#04121a]">{EMAIL}</a>
          <a href={GH} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-5 py-3 font-medium hover:border-accent/50">GitHub</a>
          <a href={STUDIO} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-5 py-3 font-medium hover:border-accent/50">Governor Studio</a>
        </div>
        <p className="mt-10 text-xs text-white/30">© {new Date().getFullYear()} Hayas Moustapha · construit avec React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
