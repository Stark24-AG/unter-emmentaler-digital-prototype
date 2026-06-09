import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { DemoNotice } from "../components/DemoNotice";
import { DemoToast } from "../components/DemoToast";

export function LoginPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Dies ist nur ein Prototyp. Login-Funktion wird erst bei echter Umsetzung angebunden.",
    );
  }

  return (
    <main className="page-section max-w-2xl">
      <p className="section-kicker">Konto</p>
      <h1 className="section-title mt-2">Einloggen</h1>
      <form className="mt-8 grid gap-5 border border-line bg-white p-6" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="email">
            E-Mail
          </label>
          <input className="form-input mt-2" id="email" type="email" required />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Passwort
          </label>
          <input className="form-input mt-2" id="password" type="password" required />
        </div>
        <button className="btn btn-primary justify-center" type="submit">
          Einloggen
        </button>
        <Link className="text-sm font-bold text-brand-700 hover:text-brand-800" to="/register">
          Noch kein Konto? Registrieren
        </Link>
      </form>
      <div className="mt-5">
        <DemoNotice>
          Dies ist nur ein Prototyp. Login-Funktion wird erst bei echter
          Umsetzung angebunden.
        </DemoNotice>
      </div>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </main>
  );
}
