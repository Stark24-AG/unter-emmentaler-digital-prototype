import { FormEvent, useState } from "react";
import { DemoToast } from "./DemoToast";

export function NewsletterBox() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demo-Anmeldung erfasst. In der echten Version wuerde diese Adresse an ein Newsletter-System uebergeben.",
    );
  }

  return (
    <section className="border-y border-line bg-moss-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="section-kicker">Newsletter</p>
          <h2 className="section-title mt-2">Das Wichtigste aus der Region</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/75">
            Ein kompakter Ueberblick ueber neue Artikel, Premium-Dossiers und
            Termine aus Huttwil, Langenthal und der Region.
          </p>
        </div>
        <form className="grid content-start gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            E-Mail-Adresse
          </label>
          <input
            className="form-input"
            id="newsletter-email"
            type="email"
            placeholder="ihre.email@example.ch"
            required
          />
          <button className="btn btn-primary justify-center" type="submit">
            Anmelden
          </button>
        </form>
      </div>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </section>
  );
}
