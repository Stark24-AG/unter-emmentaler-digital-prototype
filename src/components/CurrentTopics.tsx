import { currentTopics } from "../data/currentTopics";

export function CurrentTopics() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Aktuell inspiriert</p>
            <h2 className="section-title">
              Themen aus der heutigen Unter-Emmentaler-Welt
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">
              Neu formulierte Demo-Teaser, angelehnt an aktuelle regionale
              Themen. Die Kacheln zeigen, wie solche Inhalte digital stärker
              inszeniert werden könnten.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group grid overflow-hidden border border-line bg-paper sm:grid-cols-[1fr_1fr]">
            <img
              alt={currentTopics[0].imageAlt}
              className="h-full min-h-72 w-full object-cover"
              src={currentTopics[0].image}
            />
            <div className="p-6 sm:p-8">
              <p className="section-kicker">{currentTopics[0].label}</p>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink">
                {currentTopics[0].title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/75">
                {currentTopics[0].teaser}
              </p>
              <p className="mt-6 text-xs font-bold uppercase text-ink/55">
                Demo-Stand: 9. Juni 2026
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            {currentTopics.slice(1).map((topic) => (
              <article
                className="group grid grid-cols-[112px_1fr] overflow-hidden border border-line bg-paper"
                key={topic.title}
              >
                <img
                  alt={topic.imageAlt}
                  className="h-full min-h-32 w-full object-cover"
                  src={topic.image}
                />
                <div className="p-4">
                  <p className="text-xs font-bold uppercase text-brand-700">
                    {topic.label}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/70">
                    {topic.teaser}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
