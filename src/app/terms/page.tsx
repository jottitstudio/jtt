import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { Placeholder } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the JOTTIT website.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <h2>Using this website</h2>
      <p>
        This website presents the services and work of JOTTIT. By using it you agree to use it lawfully and not to
        interfere with its operation.
      </p>
      <h2>Concept projects</h2>
      <p>
        Projects labelled “Concept project” are self-initiated studies created by JOTTIT. The brands shown are
        fictional and are not presented as client work. Some imagery is AI-assisted visualisation created for concept
        purposes.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Unless stated otherwise, the content, design, hand-drawn JOTTIT wordmark and artwork on this site belong to
        JOTTIT and may not be reproduced without permission.
      </p>
      <h2>Liability</h2>
      <p>
        <Placeholder>[Limitation of liability wording to be provided after legal review]</Placeholder>
      </p>
      <h2>Governing law</h2>
      <p>
        <Placeholder>[Jurisdiction and governing law]</Placeholder>
      </p>
    </LegalPage>
  );
}
