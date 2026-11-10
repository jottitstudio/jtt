import { ComingSoon } from "@/components/home/ComingSoon";
import { Marquee } from "@/components/home/Marquee";
import { getServices } from "@/lib/cms";
import { site } from "@/content/site";

export default async function HomePage() {
  const services = await getServices();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    description: site.description,
    knowsAbout: services.map((s) => s.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComingSoon />
      <Marquee />
    </>
  );
}
