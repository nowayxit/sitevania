import { Heart, Sparkles, Eye, Star, Users, User, Video } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Quem é Vania */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Sobre
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Quem é Vania Carteli
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col gap-4">
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Vânia Carteli é Consteladora Familiar Espiritual e guia mulheres em
            processos profundos de transformação sistêmica, emocional e espiritual.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Durante o atendimento, é possível identificar a origem de conflitos e padrões
            que se repetem nos relacionamentos, no trabalho, na vida financeira ou no
            bem-estar emocional, muitas vezes ligados a dinâmicas familiares inconscientes.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Ao tornar essas dinâmicas visíveis, você ganha clareza sobre os vínculos que a
            influenciam, amplia sua consciência e abre espaço para fazer escolhas diferentes,
            construir relações mais saudáveis e viver com mais equilíbrio e leveza.
          </p>
        </div>


        {/* Serviços */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Serviços
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Como Posso Ajudar
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: User,
              title: "Constelação Individual",
              desc: "Uma sessão de Constelação Familiar Espiritual e um atendimento terapêutico, presencial ou online de uma hora, focada em questões pessoais, familiares, profissional e espiritual.",
            },
            {
              icon: Users,
              title: "Constelação em Grupo",
              desc: "Na constelação em grupo presencial ou online você acessa algo mais profundo. O campo mostra a raiz. E o que estava preso… começa a se liberar. É um encontro de cura, consciência e transformação.",
            },
            {
              icon: Star,
              title: "Mentoria Profunda",
              desc: "Um processo de mudança e transformação:\n\n6 Sessões de Constelação Familiar\n3 Encontros de terapia sistêmica (a cada 15 dias)\n\nTrabalharemos as principais áreas da sua vida para você alcançar a transformação, leveza e tomada de decisões.",
            },
            {
              icon: Video,
              title: "Vivências Exercícios Sistêmicos Online",
              desc: "Essa vivência é um espaço de acolhimento e verdade. Com exercícios sistêmicos simples e profundos, você começa a olhar para sua história e liberar o que não é seu. Você não precisa carregar tudo sozinha.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="flex gap-5 bg-card p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
