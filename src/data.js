const GH = "https://github.com/HayasMoustapha";
const DEMO = "https://hayasmoustapha.github.io";

export const links = { gh: GH, studio: "https://governor-studio.vercel.app", email: "governor-studio@gmail.com", demo: DEMO };

export const stats = [
  { v: "17+", l: "repos publics" },
  { v: "6", l: "démos en ligne" },
  { v: "Full-stack", l: "front → back" },
];

export const stack = ["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "PostgreSQL", "RabbitMQ", "Docker", "React Native", "Odoo"];

// Projets phares (repos privés clients) — anonymisés, vraies captures, données de démo

// GitHub présenté par catégorie (repos publics)
export const github = [
  { cat: "Microservices & APIs", color: "#22c55e", repos: [
    { name: "event-planner-auth", desc: "Service d'authentification (Node.js)." },
    { name: "payment-service", desc: "Service de paiement." },
    { name: "ticket-generator-service", desc: "Génération de billets." },
    { name: "notifivation-service", desc: "Service de notifications." },
    { name: "scan-validation-service", desc: "Validation de scan / contrôle." },
    { name: "event-management-api", desc: "API de gestion d'événements." },
  ]},
  { cat: "Applications & démos web", color: "#a855f7", repos: [
    { name: "shiny-agency", desc: "App de mise en relation freelance.", demo: "shiny-agency" },
    { name: "start-react-with-plant-store-project", desc: "Boutique e-commerce de plantes.", demo: "start-react-with-plant-store-project" },
    { name: "time-tracking-dashboard", desc: "Dashboard de suivi du temps.", demo: "time-tracking-dashboard" },
    { name: "stats-preview", desc: "Widget analytics.", demo: "stats-preview" },
    { name: "sign-up-form", desc: "Landing waitlist.", demo: "sign-up-form" },
    { name: "summary", desc: "Audit de présence en ligne.", demo: "summary" },
  ]},
  { cat: "ERP & systèmes", color: "#f59e0b", repos: [
    { name: "theme_liquid_glass_v2", desc: "Thème Odoo « liquid glass »." },
    { name: "ai-dev-system-web", desc: "Interface du système AI Dev (TypeScript)." },
    { name: "api-for-shiny-agency", desc: "API backend de Shiny." },
  ]},
];
