import { FormEvent, useState } from "react";
import { DemoNotice } from "../components/DemoNotice";
import { DemoToast } from "../components/DemoToast";

export function RegisterPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demo-Konto erstellt. In der echten Version würde hier ein Benutzerkonto angelegt.",
    );
  }

  return (
    <main className="page-section max-w-2xl">
      <p className="section-kicker">Konto</p>
      <h1 className="section-title mt-2">Registrieren</h1>
      <form className="mt-8 grid gap-5 border border-line bg-white p-6" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="register-email">
            E-Mail
          </label>
          <input className="form-input mt-2" id="register-email" type="email" required />
        </div>
        <div>
          <label className="form-label" htmlFor="register-password">
            Passwort
          </label>
          <input className="form-input mt-2" id="register-password" type="password" required />
        </div>
        <div>
          <label className="form-label" htmlFor="register-password-confirm">
            Passwort bestätigen
          </label>
          <input
            className="form-input mt-2"
            id="register-password-confirm"
            type="password"
            required
          />
        </div>
        <button className="btn btn-primary justify-center" type="submit">
          Konto erstellen
        </button>
      </form>
      <div className="mt-5">
        <DemoNotice>
          Dies ist nur ein Prototyp. Registrierung und E-Mail-Bestätigung sind
          noch nicht angebunden.
        </DemoNotice>
      </div>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </main>
  );
}
