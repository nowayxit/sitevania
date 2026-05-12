import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Cliente",
    text: "Ser atendido pela Vania é maravilhoso. O ambiente é aconchegante e acolhedor. Ela é uma profissional excelente, cuidadosa, amorosa, atenciosa, conduz com maestria os movimentos necessários vindos da constelação familiar, para restaurar o equilíbrio em nós, para nos libertarmos de padrões e crenças familiares e ressignificar nossas dores e traumas.",
  },
  {
    name: "Cliente",
    text: "Olá Vania. Estou me sentindo muito mais leve, confiante e motivada até ao me olhar no espelho. Tenho a sensação que agora sou \"vista\". O processo da constelação foi um divisor de águas na minha vida. E sei que o processo está agindo em meu meio, onde me trará grandes conquistas...",
  },
  {
    name: "Jessica Almeida",
    text: "É inexplicável a mudança que temos após as sessões de constelação, temos uma visão de fora dos acontecimentos que muitas vezes nos pesam e nem são pesos que devemos carregar. A Dona Vânia me deixou muito tranquila e soube me guiar para esses entendimentos. Agradeço de coração toda a ajuda, empatia e os ensinamentos que me passou. Você é uma pessoa iluminada!",
  },
  {
    name: "Beatriz Hasse Palharim",
    text: "Excelente atendimento! Na constelação com a Vânia Cartelli consegui compreender e administrar aspectos das questões emocionais, a ansiedade, as dores físicas. Minha vida se resume ao antes e depois do primeiro atendimento de constelação.",
  },
  {
    name: "Cliente",
    text: "Amei constelar com a Vania! Excelente profissional, conduz muito bem o trabalho de constelar! O resultado para mim foi excepcional, resolvido já no primeiro dia! E é incrível como a cura está em nós, e com a ajuda da Vania tudo ficou mais leve e curado. Gratidão!",
  },
  {
    name: "Thallys Nunes",
    text: "A Vânia foi uma pessoa essencial para a libertação de bloqueios em minha vida, gratidão!",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            O que dizem nossos clientes
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Carousel de texto */}
        <div className="relative flex items-stretch justify-center gap-4 md:gap-8 mb-12">
          {/* Left blurred */}
          <div className="hidden md:flex w-48 lg:w-72 flex-shrink-0 opacity-40 blur-[2px] transition-all duration-500">
            <div className="w-full bg-card border border-border rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed italic line-clamp-6">
                "{testimonials[getIndex(-1)].text}"
              </p>
              <p className="text-foreground font-heading text-sm font-semibold mt-3">
                {testimonials[getIndex(-1)].name}
              </p>
            </div>
          </div>

          {/* Center */}
          <div className="w-80 md:w-96 lg:w-[28rem] flex-shrink-0 transition-all duration-500">
            <div className="w-full bg-card border border-gold/30 rounded-2xl p-8 shadow-2xl flex flex-col justify-center min-h-[280px]">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <p className="text-foreground font-heading text-lg font-semibold mt-4">
                {testimonials[current].name}
              </p>
            </div>
          </div>

          {/* Right blurred */}
          <div className="hidden md:flex w-48 lg:w-72 flex-shrink-0 opacity-40 blur-[2px] transition-all duration-500">
            <div className="w-full bg-card border border-border rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed italic line-clamp-6">
                "{testimonials[getIndex(1)].text}"
              </p>
              <p className="text-foreground font-heading text-sm font-semibold mt-3">
                {testimonials[getIndex(1)].name}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground rounded-full p-2 hover:bg-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground rounded-full p-2 hover:bg-primary transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* Vídeo */}
        <div className="max-w-xl mx-auto mt-12">
          <div className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-6 text-center space-y-4">
            <p>Quero compartilhar com você um depoimento muito especial.</p>
            <p>
              A Bruna chegou até mim com dores profundas, sentimentos de bloqueio e situações que se repetiam na vida dela. Após apenas 3 a 4 sessões de Constelação Familiar Espiritual, ela vivenciou mudanças reais: emocionais, internas e também na forma como a vida começou a responder a ela.
            </p>
            <p>
              Hoje, ela relata mais leveza, clareza, força interior e abertura de caminhos que antes pareciam impossíveis.
            </p>
            <p>
              Cada processo é único, mas quando olhamos com coragem para o nosso sistema, algo começa a se reorganizar.
            </p>
            <p className="text-gold italic">
              Assista ao depoimento dela com o coração aberto.
            </p>
            <p>Se sentir que é o seu momento, estou aqui para te acolher. 💛</p>
          </div>
          <video
            controls
            preload="metadata"
            className="w-full rounded-2xl shadow-lg"
            playsInline
          >
            <source src="/video/depoimento.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        {/* Audio */}
        <div className="max-w-md mx-auto mt-8 text-center">
          <p className="text-muted-foreground font-body text-sm mb-3">
            🎧 Ouça também este depoimento em áudio:
          </p>
          <audio controls preload="metadata" className="w-full">
            <source src="/audio/depoimento.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            id="btn-whatsapp-depoimento"
            href="https://wa.me/5554991824779?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-medium text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Agendar Sessão
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
