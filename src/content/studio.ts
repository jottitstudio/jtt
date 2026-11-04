/** Studio-level content: process, approach pillars, value propositions, experiments, team. */
import type { TeamMember } from "@/lib/types";

export const approachPillars = [
  {
    index: "01",
    title: "Research",
    subtitle: "Understand the market before spending a rupee",
    body: "We study your business model, customer behaviour, category gaps and competitors so every decision is grounded in commercial reality rather than guesswork.",
  },
  {
    index: "02",
    title: "Strategy",
    subtitle: "Set a clear direction and measurable targets",
    body: "We define your positioning, value proposition, channel priorities and KPIs — creating a single roadmap that aligns your brand and marketing spend.",
  },
  {
    index: "03",
    title: "Creativity",
    subtitle: "Craft work people notice, feel and remember",
    body: "From brand identity and packaging to campaign films and social storytelling, we design distinctive creative assets that earn attention and build trust.",
  },
  {
    index: "04",
    title: "Execution",
    subtitle: "Launch seamlessly across every touchpoint",
    body: "Our in-house designers, writers, filmmakers, media buyers and developers roll the work out across web, social, search and print without handoff delays.",
  },
  {
    index: "05",
    title: "Optimisation",
    subtitle: "Measure, test and compound what works",
    body: "We track real enquiries, conversions and audience response — refining ad hooks, landing pages and content monthly so results keep improving.",
  },
] as const;

export const processSteps = [
  {
    key: "discover",
    title: "Discover",
    tamilNumeral: "௧",
    body: "We audit your current brand, website and marketing channels, interview stakeholders, and study your customers and competitors to uncover what is holding growth back.",
    deliverable: "Diagnostic audit & opportunity brief",
  },
  {
    key: "define",
    title: "Define",
    tamilNumeral: "௨",
    body: "We lock in your positioning, target audience segments, messaging hierarchy, channel plan and success metrics — so everyone agrees on the goal before production starts.",
    deliverable: "Strategic roadmap & creative brief",
  },
  {
    key: "design",
    title: "Design",
    tamilNumeral: "௩",
    body: "Our team crafts your visual identity, website UX/UI, campaign concepts, video storyboards and content systems — presented with clear rationale at every milestone.",
    deliverable: "Identity, creative assets & prototypes",
  },
  {
    key: "deliver",
    title: "Deliver",
    tamilNumeral: "௪",
    body: "We shoot, build, QA and launch across your website, social channels and ad platforms — handing over organised master files, guidelines and tracking dashboards.",
    deliverable: "Full rollout, live campaigns & asset kit",
  },
  {
    key: "develop",
    title: "Develop",
    tamilNumeral: "௫",
    body: "Post-launch, we monitor conversion data, test new creative angles and refine campaigns month after month to turn initial momentum into sustained business growth.",
    deliverable: "Monthly reporting & growth optimisation",
  },
] as const;

export const reasons = [
  {
    title: "One creative partner, zero vendor friction",
    outcome: "Save management time & launch faster",
    body: "Most businesses waste hours coordinating a branding studio, a social agency, a media buyer, a production crew and a web developer. With jottitstudio, you brief once and work with one integrated team.",
  },
  {
    title: "Brand consistency that compounds trust",
    outcome: "Every touchpoint reinforces the last",
    body: "Because the people designing your identity also build your website, shoot your films and run your ads, your brand looks and sounds unmistakable everywhere a customer meets you.",
  },
  {
    title: "Strategy and commercial accountability",
    outcome: "Creative tied directly to business goals",
    body: "We don't make art for art's sake or chase vanity metrics. Every identity, website and campaign is scoped around clear commercial outcomes — awareness, qualified leads, conversion rate and retention.",
  },
  {
    title: "Distinctive South Indian contemporary craft",
    outcome: "Stand apart from cookie-cutter templates",
    body: "In crowded categories, looking generic is expensive. Our editorial design sensibility — informed by structural geometry, bold colour and restraint — gives your business an internationally premium presence.",
  },
  {
    title: "Complete transparency & 100% ownership",
    outcome: "No lock-in or hidden black boxes",
    body: "You own your ad accounts, analytics data, domain, website codebase and design source files from day one — supported by honest, plain-English reporting on what is working and what comes next.",
  },
] as const;

export const trustStandards = [
  {
    index: "01",
    title: "100% client ownership",
    body: "Every ad account, analytics property, website repository and master design file belongs to your business — never held hostage.",
  },
  {
    index: "02",
    title: "Direct access to the makers",
    body: "You collaborate directly with the strategists, designers, filmmakers and marketers doing the work, ensuring nothing gets lost in translation.",
  },
  {
    index: "03",
    title: "Clear scopes & milestones",
    body: "Every project starts with a written scope, fixed deliverables, transparent pricing and scheduled review stages before you commit.",
  },
  {
    index: "04",
    title: "Honest, plain-English reporting",
    body: "We report on metrics that matter to business owners — qualified enquiries, cost per acquisition, conversion rate and revenue impact.",
  },
] as const;

export const experiments = [
  {
    src: "/images/art/studio-kolam.jpg",
    alt: "A continuous interlaced kolam line looping around a grid of dots, in black on ivory, with a turmeric circle.",
    title: "Kolam as a system",
    note: "One unbroken line, one dot grid — exploring kolam rules as a framework for logos and layouts.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-textile.jpg",
    alt: "Bold flat bands in maroon, turmeric and black, abstracted from handloom saree temple borders.",
    title: "Border studies",
    note: "Handloom korvai borders reduced to bands and angles for a contemporary pattern library.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-architecture.jpg",
    alt: "Thin-line architectural abstraction of stepped temple tiers and pillar rhythms in ivory and terracotta.",
    title: "Tier & pillar",
    note: "Temple architecture as rhythm: stepped tiers and colonnades studied as grids.",
    w: 896,
    h: 1200,
  },
  {
    src: "/images/art/studio-leaf.jpg",
    alt: "Graphic abstraction of banana-leaf veins in green and black crossing a turmeric circle.",
    title: "Leaf geometry",
    note: "The parallel veins of a banana leaf as a study in repetition and direction.",
    w: 1024,
    h: 1024,
  },
  {
    src: "/images/art/studio-popart.jpg",
    alt: "Pop-art poster of a filter-coffee davara and tumbler reduced to geometric shapes and halftone dots in turmeric and terracotta on black.",
    title: "Kaapi pop",
    note: "Everyday objects through a pop-art lens: halftone, flat colour and confident silhouettes.",
    w: 1024,
    h: 1024,
  },
] as const;

/** PLACEHOLDER: replace with real team members, roles and bios. */
export const team: TeamMember[] = [
  {
    name: "[Founder name]",
    role: "[Founder — role to be confirmed]",
    bio: "[Short bio to be added: background, focus and what they bring to the studio.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Creative direction — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Marketing & growth — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Film & photography — to be confirmed]",
    bio: "[Short bio to be added.]",
    isPlaceholder: true,
  },
];
