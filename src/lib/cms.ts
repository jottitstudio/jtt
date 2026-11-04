/**
 * Data-access layer.
 *
 * Components never import content files directly — they call these async
 * functions. To move to a headless CMS, replace the bodies below with
 * fetches (e.g. Sanity GROQ, Contentful GraphQL) that return the same types.
 */
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import type { Project, Service, ServiceSlug } from "./types";

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getProjectsByService(slug: ServiceSlug): Promise<Project[]> {
  return projects.filter((p) => p.services.includes(slug));
}

export async function getAdjacentProject(slug: string): Promise<Project> {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return services.find((s) => s.slug === slug);
}

export function serviceTitle(slug: ServiceSlug): string {
  return services.find((s) => s.slug === slug)?.shortTitle ?? slug;
}
