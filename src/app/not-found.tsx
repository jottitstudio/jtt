import Link from "next/link";
import { KolamLattice } from "@/components/art/KolamLattice";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[80svh] items-center gap-12 pt-[calc(var(--header-h)+3rem)] pb-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="t-eyebrow">Error 404</p>
        <h1 className="t-h1 mt-6">
          This line
          <br />
          leads nowhere.
        </h1>
        <p className="t-lead mt-8 max-w-md text-ink/75">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get you back on the grid.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            See our work
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-stone">
          Or <Link href="/contact" className="underline underline-offset-4">get in touch</Link>.
        </p>
      </div>
      <div className="flex justify-center lg:col-span-5">
        <KolamLattice cells={5} className="w-full max-w-sm text-ink" strokeWidth={1.25} />
      </div>
    </section>
  );
}
