import Link from "next/link";
import { KolamLattice } from "@/components/art/KolamLattice";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[80svh] items-center gap-12 pt-[calc(var(--header-h)+3rem)] pb-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="t-eyebrow text-purple">Error 404</p>
        <h1 className="t-h1 mt-6">
          THIS JOT
          <br />
          WENT OFF THE PAGE.
        </h1>
        <p className="t-lead mt-8 max-w-md text-ink/75">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get your idea back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="purple">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/work" variant="outline">
            Explore Our Work
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-stone">
          Or{" "}
          <Link href="/contact" className="underline underline-offset-4">
            start a project with JOTTIT
          </Link>
          .
        </p>
      </div>
      <div className="flex justify-center lg:col-span-5">
        <KolamLattice cells={5} className="w-full max-w-sm text-purple" strokeWidth={1.25} />
      </div>
    </section>
  );
}
