import { ShoppingCart } from "lucide-react";

const combos = [
  {
    title: "Combo O Amor ao Seu Alcance",
    price: "R$ 59,90",
    books: ["Desperte a Energia do Amor Verdadeiro", "Bônus: Desperte a Energia do Amor Verdadeiro", "10 Passos para o Amor Próprio"],
    link: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-tt-4lutf/K102353301R",
  },
  {
    title: "Combo Alcance o Seu Potencial",
    price: "R$ 39,90",
    books: ["Desperte Sua Vocação", "365 Dias de Meditação e Exercícios"],
    link: "https://hotmart.com/pt-br/marketplace/produtos/combo-alcance-o-seu-potencial/N102354242H",
  },
  {
    title: "Combo Casamento",
    price: "R$ 39,90",
    books: ["Desperte a Energia do Amor Verdadeiro", "Recomeçar a Dois", "Bônus: Desperte a Energia do Amor Verdadeiro"],
    link: "https://hotmart.com/pt-br/marketplace/produtos/combo-casamento/E102354400J",
  },
  {
    title: "Combo Sua Vida na Perfeita Ordem",
    price: "R$ 59,90",
    books: ["Desvendando Laços Invisíveis de Pais e Filhos", "Ansiedade", "Desperte a Energia do Amor Verdadeiro"],
    link: "https://hotmart.com/pt-br/marketplace/produtos/combo-sua-vida-na-perfeita-ordem/V102354602E",
  },
];

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Combos = () => {
  return (
    <section id="combos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Combos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Pacotes Especiais
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <div
              key={combo.title}
              className="bg-card rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow flex flex-col p-6 text-center"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 uppercase tracking-wide leading-snug">
                {combo.title}
              </h3>
              <ul className="text-muted-foreground font-body text-xs leading-relaxed mb-4 flex-1 space-y-1">
                {combo.books.map((book) => (
                  <li key={book}>• {book}</li>
                ))}
              </ul>
              <p className="font-heading text-2xl font-bold text-foreground mb-4">
                {combo.price}
              </p>
              <a
                id={`btn-combo-${slugify(combo.title)}`}
                href={combo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body font-medium text-sm hover:opacity-90 transition-opacity w-full"
              >
                <ShoppingCart className="w-4 h-4" />
                Peça Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
