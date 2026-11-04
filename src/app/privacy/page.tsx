import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { Placeholder } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How jottitstudio collects, uses and protects personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Information we collect</h2>
      <p>
        When you submit our project enquiry form we collect the details you provide: your name, email address, company
        name (optional), the services you are interested in, your timeline and your message.
      </p>
      <h2>How we use it</h2>
      <p>We use this information only to respond to your enquiry and to discuss a potential project with you.</p>
      <h2>Storage and retention</h2>
      <p>
        <Placeholder>[Where enquiry data is stored, which providers process it, and how long it is retained]</Placeholder>
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        <Placeholder>[Analytics or cookie tools in use, if any]</Placeholder>
      </p>
      <h2>Your rights</h2>
      <p>
        <Placeholder>[Applicable data-protection rights and how to exercise them]</Placeholder>
      </p>
      <h2>Contact</h2>
      <p>
        <Placeholder>[Privacy contact email and registered business details]</Placeholder>
      </p>
    </LegalPage>
  );
}
