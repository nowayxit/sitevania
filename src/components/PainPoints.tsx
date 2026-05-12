import { CalendarHeart } from "lucide-react";

const feelings = [
  "Você sente que está cansada e sobrecarregada, mas não sabe explicar o motivo",
  "Você sente que faz tudo, mas nunca é suficiente para a sua mãe ou para a sua filha?",
  "Você se sente travada e bloqueada na vida amorosa, profissional e financeira, mesmo tentando fazer dar certo",
  "Você se sente sozinha, com vazio, tristeza, medo, ansiedade, perdida e com vontade de desistir de tudo",
];

const closingLines = [
  "Se você respondeu “sim” para algumas dessas perguntas…",
  "isso não é por acaso.",
  "Isso não começou em você",
  "e também não precisa continuar assim.",
  "Você não precisa mais carregar isso sozinha.",
];

type NarrativeBlock = {
  kind: "question" | "highlight" | "text" | "soft" | "cta";
  lines: string[];
};

const narrative: NarrativeBlock[] = [
  {
    kind: "question",
    lines: [
      "Até quando você vai fingir que está tudo bem…",
      "quando por dentro você está cansada?",
    ],
  },
  {
    kind: "question",
    lines: [
      "Até quando vai continuar repetindo essa dor…",
      "achando que um dia vai mudar sozinha?",
    ],
  },
  {
    kind: "highlight",
    lines: [
      "Quanto mais você segura,",
      "mais isso cresce dentro de você.",
    ],
  },
  {
    kind: "text",
    lines: [
      "Isso não é fraqueza.",
      "Não é falta de controle.",
      "É algo mais profundo:",
    ],
  },
  {
    kind: "highlight",
    lines: [
      "um padrão que vem do seu sistema familiar",
      "e que continua se repetindo… até ser olhado.",
    ],
  },
  {
    kind: "text",
    lines: [
      "Eu acesso o seu campo familiar e espiritual",
      "e te ajudo a enxergar o que está por trás",
      "do que você está vivendo hoje.",
    ],
  },
  {
    kind: "soft",
    lines: ["De forma respeitosa, profunda e no seu tempo."],
  },
  {
    kind: "cta",
    lines: [
      "Você não precisa mais viver assim.",
      "Se você sentiu que isso é sobre você,",
      "é porque já está na hora de olhar.",
    ],
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-[hsl(25,25%,12%)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[hsl(35,30%,96%)]">
            Você sente que certas coisas na sua vida{" "}
            <em className="text-[hsl(40,65%,55%)] not-italic font-semibold">simplesmente se repetem?</em>
          </h2>
        </div>

        <p className="text-center text-[hsl(35,20%,75%)] font-body text-lg mb-10">
          Talvez você já tenha percebido que:
        </p>

        {/* Feelings list */}
        <div className="max-w-2xl mx-auto mb-12 flex flex-col gap-4">
          {feelings.map((f) => (
            <div
              key={f}
              className="flex items-center gap-4 bg-white/5 rounded-xl px-6 py-4 border-l-4 border-[hsl(40,65%,55%)] backdrop-blur-sm"
            >
              <p className="font-body text-[hsl(35,30%,96%)] text-base">{f}</p>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="max-w-2xl mx-auto mb-20 flex flex-col gap-3 text-center">
          {closingLines.map((line, idx) => (
            <p
              key={line}
              className={
                idx === 0
                  ? "font-body text-[hsl(35,30%,96%)] text-lg md:text-xl mb-2"
                  : idx === closingLines.length - 1
                  ? "font-heading text-[hsl(40,65%,55%)] text-xl md:text-2xl font-semibold mt-2"
                  : "font-body text-[hsl(35,20%,75%)] text-base md:text-lg"
              }
            >
              {line}
            </p>
          ))}
        </div>

        {/* Narrative: frases em destaque */}
        <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-10">
          {narrative.map((block, idx) => {
            const text = block.lines.join(" ");

            if (block.kind === "question") {
              return (
                <blockquote
                  key={idx}
                  className="relative bg-white/5 rounded-2xl px-6 py-6 md:px-10 md:py-8 border-l-4 border-[hsl(40,65%,55%)] shadow-lg backdrop-blur-sm"
                >
                  <p className="font-heading text-xl md:text-2xl text-[hsl(35,30%,96%)] leading-snug italic">
                    {block.lines.map((l, i) => (
                      <span key={i} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                </blockquote>
              );
            }

            if (block.kind === "highlight") {
              return (
                <p
                  key={idx}
                  className="text-center font-heading text-2xl md:text-3xl font-semibold text-[hsl(40,65%,55%)] leading-snug px-2"
                >
                  {block.lines.map((l, i) => (
                    <span key={i} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              );
            }

            if (block.kind === "soft") {
              return (
                <p
                  key={idx}
                  className="text-center font-body italic text-[hsl(35,20%,75%)] text-base md:text-lg"
                >
                  {text}
                </p>
              );
            }

            if (block.kind === "cta") {
              return (
                <div
                  key={idx}
                  className="text-center bg-[hsl(40,65%,55%)]/10 rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-[hsl(40,65%,55%)]/30"
                >
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-[hsl(40,65%,55%)] mb-3 leading-snug">
                    {block.lines[0]}
                  </p>
                  <p className="font-body text-[hsl(35,30%,96%)] text-base md:text-lg leading-relaxed mb-8">
                    {block.lines.slice(1).map((l, i) => (
                      <span key={i} className="block">
                        {l}
                      </span>
                    ))}
                  </p>

                  <a
                    id="btn-whatsapp-painpoints"
                    href="https://wa.me/5554991824779?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[hsl(40,65%,55%)] text-[hsl(25,25%,15%)] px-10 py-4 rounded-full font-body font-semibold text-sm tracking-[0.2em] uppercase hover:bg-[hsl(40,65%,50%)] hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <CalendarHeart className="w-5 h-5" />
                    Agendar Sessão
                  </a>
                </div>
              );
            }

            // text
            return (
              <p
                key={idx}
                className="text-center font-body text-[hsl(35,30%,96%)] text-lg md:text-xl leading-relaxed"
              >
                {block.lines.map((l, i) => (
                  <span key={i} className="block">
                    {l}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
