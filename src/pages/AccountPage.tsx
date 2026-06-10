import { useState } from "react";
import { Link } from "react-router-dom";
import { DemoNotice } from "../components/DemoNotice";
import { DemoToast } from "../components/DemoToast";

export function AccountPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="page-section max-w-3xl">
      <p className="section-kicker">Konto</p>
      <h1 className="section-title mt-2">Mein Konto</h1>
      <div className="mt-8 border border-line bg-white p-6">
        <dl className="grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="form-label">E-Mail</dt>
            <dd className="mt-2 text-lg font-semibold text-ink">demo@unter-emmentaler.ch</dd>
          </div>
          <div>
            <dt className="form-label">Abo-Status</dt>
            <dd className="mt-2 text-lg font-semibold text-brand-700">Kein aktives Abo</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/abo">
            Abo ansehen
          </Link>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() =>
              setMessage(
                "Dies ist ein Prototyp. In der echten Version würde hier die Stripe-Aboverwaltung geöffnet.",
              )
            }
          >
            Abo verwalten
          </button>
        </div>
      </div>
      <div className="mt-5">
        <DemoNotice>
          In der echten Version wären hier Stripe-Abo-Status, Rechnungen und
          Kündigung verknüpft.
        </DemoNotice>
      </div>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </main>
  );
}
