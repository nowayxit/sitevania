import { Star, Users, User, Video } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Constelação Individual",
    desc: "Sessão presencial ou online, focada em questões pessoais, familiares ou profissionais.",
  },
  {
    icon: Users,
    title: "Constelação em Grupo",
    desc: "Vivência coletiva que permite trabalhar questões de forma compartilhada e profunda.",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    desc: "Sessões à distância com a mesma profundidade e eficácia do presencial.",
  },
  {
    icon: Star,
    title: "Workshops e Vivências",
    desc: "Encontros temáticos para aprofundar o autoconhecimento e a cura interior.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
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
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 bg-background p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
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

export default Services;
