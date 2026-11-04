/** Studio-level content: process, principles, experiments, team. */
import type { TeamMember } from "@/lib/types";

export const processSteps = [
  {
    key: "discover",
    title: "Discover",
    tamilNumeral: "௧",
    body: "We immerse ourselves in your business, audience, competitors and goals — through conversations, research and audits of what already exists.",
  },
  {
    key: "define",
    title: "Define",
    tamilNumeral: "௨",
    body: "We turn insight into direction: positioning, priorities, success measures and a clear creative brief everyone agrees on.",
  },
  {
    key: "design",
    title: "Design",
    tamilNumeral: "௩",
    body: "Ideas become identities, content, campaigns and experiences — explored widely, then refined with you until they are right.",
  },
  {
    key: "deliver",
    title: "Deliver",
    tamilNumeral: "௪",
    body: "We produce, build and launch with care, handing over every asset, file and guideline your team needs.",
  },
  {
    key: "develop",
    title: "Develop",
    tamilNumeral: "௫",
    body: "We measure what happens next, learn from real audience behaviour and keep improving — growth is a practice, not a launch day.",
  },
] as const;

export const reasons = [
  {
    title: "One creative partner",
    body: "Brand, content, ads, film and web under one roof. One team, one brief, one point of contact — and no ideas lost between agencies.",
  },
  {
    title: "Strategic thinking",
    body: "Every piece of work starts with a reason. We ask what your business needs before we decide what to make.",
  },
  {
    title: "Creative execution",
    body: "We care about the details — typography, light, pacing, copy — because craft is what makes people stop and notice.",
  },
  {
    title: "Commercial focus",
    body: "Beautiful work has to earn its keep. We design with measurable goals in mind and report honestly on what's working.",
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
