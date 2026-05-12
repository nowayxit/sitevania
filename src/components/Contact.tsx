import { MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Contato
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Entre em Contato
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            <div className="flex items-start gap-4 bg-card p-6 rounded-xl">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Perimetral Leste, 2500 - São Cristóvão
                  <br />
                  Passo Fundo - RS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-xl">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Telefone
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  (54) 99182-4779
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              id="btn-whatsapp-contato"
              href="https://wa.me/5554991824779?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-medium text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
