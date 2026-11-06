/**
 * Studio-level content for JOTTIT:
 * - The 7-Chapter Evolution of Ideas
 * - Natural trilogy: Jot it · Join it · Got it
 * - Section 07: Our Approach (Discover, Define, Design, Deliver, Develop)
 * - Section 09: Why JOTTIT (6 core reasons)
 * - Studio experiments & team placeholders
 */
import type { TeamMember } from "@/lib/types";

export interface EvolutionChapter {
  number: string;
  id: string;
  title: string;
  eraTag: string;
  headline: string;
  body: string;
  visualNote: string;
  palette: {
    bg: string;
    fg: string;
    accent: string;
    surface: string;
  };
}

export const evolutionChapters: EvolutionChapter[] = [
  {
    number: "01",
    id: "chapter-01",
    title: "THE FIRST MARK",
    eraTag: "Prehistoric Expression · Stone & Charcoal",
    headline: "Before writing, humans expressed themselves through marks, drawings and symbols on stone walls.",
    body: "A palm pressed against rough rock. A charcoal line tracing the curve of a running stag. Long before alphabets or screens, the first creative act was a human hand leaving a mark that said: I was here, and I saw this.",
    visualNote: "Prehistoric cave drawings · Handprints · Charcoal strokes · Rough stone textures",
    palette: {
      bg: "#17151B",
      fg: "#F4EBDD",
      accent: "#D96B42",
      surface: "#241F29",
    },
  },
  {
    number: "02",
    id: "chapter-02",
    title: "MARKS BECOME SYMBOLS",
    eraTag: "Petroglyphs & Pictograms · Carved Systems",
    headline: "Simple marks evolve into recognisable symbols and shared systems of communication.",
    body: "Isolated lines begin to repeat. Circles become suns, waves become water, and carved geometric patterns turn raw expression into shared meaning that a whole community can read at a glance.",
    visualNote: "Petroglyph-inspired symbols · Repeated shapes · Geometric pictograms · Primitive diagrams",
    palette: {
      bg: "#261B1A",
      fg: "#F4EBDD",
      accent: "#D96B42",
      surface: "#362522",
    },
  },
  {
    number: "03",
    id: "chapter-03",
    title: "SYMBOLS BECOME LANGUAGE",
    eraTag: "Scripts & Manuscripts · Ink & Reed",
    headline: "Human expression evolves into writing systems, manuscripts and recorded knowledge.",
    body: "Across civilisations, diverse scripts, glyphs and ink manuscripts emerge — each with its own rhythm and geometry. Thoughts can now travel across distance and generations without losing their voice.",
    visualNote: "Ancient writing · Hieroglyphic-inspired patterns · Manuscripts · Ink illustrations",
    palette: {
      bg: "#F4EBDD",
      fg: "#17151B",
      accent: "#D96B42",
      surface: "#E6D9C3",
    },
  },
  {
    number: "04",
    id: "chapter-04",
    title: "IDEAS ON PAPER",
    eraTag: "The Sketchbook Era · Pencil & Notes",
    headline: "Ideas become sketches, notes, drawings, plans and inventions.",
    body: "On sheets of paper, the messy magic of thinking becomes visible. Crossed-out words, arrows in the margin, quick napkin doodles and blueprints — where every invention is captured first as a little jot.",
    visualNote: "Handwritten notes · Sketchbooks · Pencil drawings · Doodles · Creative experimentation",
    palette: {
      bg: "#F8F3E8",
      fg: "#17151B",
      accent: "#5F2DB2",
      surface: "#EDE4D3",
    },
  },
  {
    number: "05",
    id: "chapter-05",
    title: "IDEAS COME TOGETHER",
    eraTag: "Collaboration & Collage · Studio Table",
    headline: "People collaborate, share ideas and develop creative possibilities.",
    body: "A lone sketch meets another mind. Cut-out shapes, pinned notes, overlapping layouts and bold typography experiments collide on the studio wall — joining perspectives until a small jot becomes a big concept.",
    visualNote: "Collages · Overlapping sketches · Creative brainstorming · Typography experiments",
    palette: {
      bg: "#FFFFFF",
      fg: "#17151B",
      accent: "#5F2DB2",
      surface: "#F4EBDD",
    },
  },
  {
    number: "06",
    id: "chapter-06",
    title: "THE CREATIVE AGE",
    eraTag: "Modern Design & Digital Systems",
    headline: "Ideas are transformed into brands, campaigns, digital experiences and businesses.",
    body: "In the modern creative age, strategy, identity, motion, film and code work as one language — turning raw human imagination into living brands and digital experiences that move people and markets.",
    visualNote: "Modern graphic design · Brand identities · Creative advertising · Digital experiences",
    palette: {
      bg: "#17151B",
      fg: "#FFFFFF",
      accent: "#D9E56B",
      surface: "#262130",
    },
  },
  {
    number: "07",
    id: "chapter-07",
    title: "JOTTIT",
    eraTag: "And Then Came JOTTIT · Think It. Jot It. Make It Matter.",
    headline: "AND THEN CAME JOTTIT.",
    body: "Every mark, symbol, sketch and collaborative spark converges into who we are today: a creative and marketing studio built to capture your boldest thoughts and make them matter in the real world.",
    visualNote: "The hand-drawn JOTTIT identity · Think It. Jot It. Make It Matter.",
    palette: {
      bg: "#5F2DB2",
      fg: "#FFFFFF",
      accent: "#D9E56B",
      surface: "#47218A",
    },
  },
];

export const jotJoinGot = [
  {
    step: "01",
    cue: "Jot it",
    title: "Capture the raw spark",
    body: "Every breakthrough starts as an imperfect scribble, a late-night voice note or a bold question. We help you catch the core idea before it gets watered down.",
  },
  {
    step: "02",
    cue: "Join it",
    title: "Connect minds & crafts",
    body: "When strategists, designers, writers, filmmakers, marketers and developers build around the same table, isolated thoughts connect into a complete creative system.",
  },
  {
    step: "03",
    cue: "Got it",
    title: "Turn it into reality",
    body: "The moment the concept clicks — and launches into the world as a memorable brand, a scroll-stopping campaign or a digital experience that moves your business forward.",
  },
] as const;

export const processSteps = [
  {
    key: "discover",
    title: "DISCOVER",
    tamilNumeral: "01",
    body: "Understand the business, audience and challenge.",
    detail:
      "We dig into your market, talk to your team, study your audience and audit where your brand stands today — finding the sharpest truth to build upon.",
    deliverable: "Research & challenge brief",
  },
  {
    key: "define",
    title: "DEFINE",
    tamilNumeral: "02",
    body: "Establish the strategy and creative direction.",
    detail:
      "We turn raw findings into a clear strategic direction, positioning, messaging framework and creative territory so every decision has a purpose.",
    deliverable: "Strategy & creative direction",
  },
  {
    key: "design",
    title: "DESIGN",
    tamilNumeral: "03",
    body: "Develop the idea into a compelling visual experience.",
    detail:
      "Sketches become identities, stories become films and wireframes become expressive interfaces — crafted with hand-drawn energy and editorial precision.",
    deliverable: "Identity, content & experience design",
  },
  {
    key: "deliver",
    title: "DELIVER",
    tamilNumeral: "04",
    body: "Execute and launch with attention to detail.",
    detail:
      "We produce, code, test and launch across every channel — handing over organised guidelines, master files and live campaigns ready to perform.",
    deliverable: "Production & multi-channel launch",
  },
  {
    key: "develop",
    title: "DEVELOP",
    tamilNumeral: "05",
    body: "Learn, improve and evolve.",
    detail:
      "A launch is only the first mark. We track real audience response, optimise performance and keep evolving your brand and campaigns as you grow.",
    deliverable: "Ongoing optimisation & growth",
  },
] as const;

export const reasons = [
  {
    title: "Creative thinking combined with business understanding",
    outcome: "Bold ideas grounded in commercial reality",
    body: "We love experimental craft and playful ideas, but we never lose sight of why you hired us: to help your business earn trust, win customers and grow.",
  },
  {
    title: "Multiple creative capabilities under one roof",
    outcome: "Branding, content, ads, film & web in sync",
    body: "No more playing messenger between five disconnected vendors. Our strategists, designers, writers, filmmakers, marketers and developers work as one studio.",
  },
  {
    title: "Strategy before execution",
    outcome: "Think It. Jot It. Make It Matter.",
    body: "We never jump straight into decoration. Every project begins by defining the problem, the audience and the strategic angle so the creative work hits home.",
  },
  {
    title: "Strong visual storytelling",
    outcome: "Work people stop for and remember",
    body: "From hand-drawn marks and bold typography to art-directed film and interactive web design, we build visual worlds that stand apart from generic templates.",
  },
  {
    title: "Collaboration and transparency",
    outcome: "Direct access to the people making the work",
    body: "We treat our clients as creative partners — sharing early sketches, clear timelines, honest advice and plain-English reporting at every stage.",
  },
  {
    title: "Work designed around the client's goals",
    outcome: "Tailored scopes, never cookie-cutter packages",
    body: "Whether you need a complete brand launch, a high-converting website or an ongoing content and performance engine, we shape the work around your objectives.",
  },
] as const;

export const approachPillars = processSteps.map((s, i) => ({
  index: `0${i + 1}`,
  title: s.title,
  subtitle: s.body,
  body: s.detail,
}));

export const trustStandards = [
  {
    index: "01",
    title: "100% client ownership",
    body: "Every ad account, analytics property, website repository and master design file belongs to your business.",
  },
  {
    index: "02",
    title: "Direct access to the makers",
    body: "You collaborate directly with the strategists, designers, filmmakers and developers building your project.",
  },
  {
    index: "03",
    title: "Clear scopes & milestones",
    body: "Every engagement starts with a written scope, fixed deliverables and scheduled review stages.",
  },
  {
    index: "04",
    title: "Honest reporting",
    body: "We measure what actually moves your business forward — never hiding behind vanity metrics.",
  },
] as const;

export const experiments = [
  {
    src: "/images/art/studio-kolam.jpg",
    alt: "Continuous hand-drawn line study exploring how a single unbroken stroke creates a symbol.",
    title: "Study 01 — The Unbroken Line",
    note: "Exploring how a single continuous mark can form an entire graphic system.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-textile.jpg",
    alt: "Bold colour-blocked bands and rhythmic geometric marks.",
    title: "Study 02 — Rhythm & Sign",
    note: "Repeating bands and carved angles translated into contemporary editorial layouts.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-architecture.jpg",
    alt: "Architectural line study of stepped structures and spatial grids.",
    title: "Study 03 — Structure & Grid",
    note: "How ancient structural proportions inform modern typographic grids.",
    w: 896,
    h: 1200,
  },
  {
    src: "/images/art/studio-leaf.jpg",
    alt: "Organic botanical lines crossing a bold geometric circle.",
    title: "Study 04 — Organic vs. Geometric",
    note: "Balancing imperfect hand-drawn strokes with sharp contemporary geometry.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-popart.jpg",
    alt: "Playful halftone and cut-out graphic poster experiment.",
    title: "Study 05 — Cut-Out & Pop",
    note: "Everyday objects reimagined through collage, halftone texture and bold silhouettes.",
    w: 1024,
    h: 1024,
  },
] as const;

/** PLACEHOLDER: replace with real team members, roles and bios. */
export const team: TeamMember[] = [
  {
    name: "[Founder name]",
    role: "[Founder & Creative Lead — to be confirmed]",
    bio: "[Short bio to be added: background, creative focus and what they bring to JOTTIT.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Brand & Art Direction — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Content & Performance Marketing — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Digital Experiences & Film — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
];
