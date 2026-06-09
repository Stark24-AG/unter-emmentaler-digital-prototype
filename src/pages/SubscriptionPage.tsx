import { useState } from "react";
import { DemoToast } from "../components/DemoToast";
import { PricingCard } from "../components/PricingCard";

export function SubscriptionPage() {
  const [message, setMessage] = useState("");
  const demoMessage =
    "Dies ist ein Prototyp. In der echten Version wuerde hier Stripe Checkout geoeffnet.";

  return (
    <main className="page-section">
      <div className="max-w-3xl">
        <p className="section-kicker">Digitalabo</p>
        <h1 className="section-title mt-2">Premium lesen und Lokaljournalismus unterstuetzen</h1>
        <p className="mt-4 text-sm leading-6 text-ink/75">
          Drei einfache Demo-Angebote zeigen, wie eine spaetere Abo-Seite fuer
          digitale Inhalte strukturiert werden koennte.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <PricingCard
          title="Monatsabo"
          price="CHF 9.90 / Monat"
          features={[
            "Zugriff auf alle Premium-Artikel",
            "Jederzeit kuendbar",
            "Geeignet zum Ausprobieren",
          ]}
          buttonLabel="Demo: Monatsabo starten"
          onClick={() => setMessage(demoMessage)}
        />
        <PricingCard
          title="Jahresabo"
          price="CHF 99.- / Jahr"
          label="Bester Preis"
          emphasized
          features={[
            "Zugriff auf alle Premium-Artikel",
            "Ca. 2 Monate guenstiger",
            "Jaehrliche Abrechnung",
          ]}
          buttonLabel="Demo: Jahresabo starten"
          onClick={() => setMessage(demoMessage)}
        />
        <PricingCard
          title="Print + Digital"
          price="Preis auf Anfrage"
          features={[
            "Fuer bestehende Abonnentinnen und Abonnenten",
            "Kombination von Zeitung und Digitalzugang",
            "Kontakt mit der Administration",
          ]}
          buttonLabel="Kontakt aufnehmen"
          onClick={() =>
            setMessage(
              "Dies ist ein Prototyp. In der echten Version wuerde hier ein Kontaktformular oder die Aboverwaltung geoeffnet.",
            )
          }
        />
      </div>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </main>
  );
}
