import vaniaImg from "@/assets/vania-hero.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background gradient overlay - stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,25%,12%)] via-[hsl(25,25%,12%,0.7)] to-[hsl(25,25%,12%,0.15)] md:bg-gradient-to-r md:from-[hsl(25,25%,15%)] md:via-[hsl(25,25%,15%,0.7)] md:to-transparent z-10" />
      
      {/* Bottom fade removed */}
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={vaniaImg}
          alt=""
          className="w-full h-full object-cover object-[center_20%] md:object-top"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-24 pt-[60vh] md:py-20 relative z-30">
        <div className="max-w-xl flex flex-col gap-4 md:gap-6 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight text-[hsl(35,30%,96%)]">
            Descubra a origem dos padrões que se repetem na sua vida{" "}
            <span className="text-[hsl(40,65%,50%)]">
              e construa uma vida muito mais leve e próspera.
            </span>
          </h1>

          <p className="text-[hsl(35,20%,75%)] font-body text-base md:text-lg max-w-lg leading-relaxed">
            Para você que busca uma ferramenta terapêutica diferente das abordagens convencionais, com atuação em um nível mais profundo e efeitos que podem ser percebidos já na primeira sessão.
          </p>

          <div className="mt-4">
            <a
              id="btn-whatsapp"
              href="https://wa.me/5554991824779?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[hsl(40,65%,50%)] text-[hsl(40,65%,50%)] px-10 py-4 rounded-full font-body font-medium text-sm tracking-[0.2em] uppercase hover:bg-[hsl(40,65%,50%)] hover:text-[hsl(25,25%,15%)] transition-all duration-300"
            >
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
