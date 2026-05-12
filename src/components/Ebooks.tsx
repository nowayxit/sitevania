import { ShoppingCart } from "lucide-react";

import ebookCuraAlma from "@/assets/ebook-cura-alma.png";
import ebookAmorVerdadeiro from "@/assets/ebook-amor-verdadeiro.png";
import ebookLacos from "@/assets/ebook-lacos-pais-filhos.png";
import ebook365 from "@/assets/ebook-365-dias.png";
import ebookRecomecar from "@/assets/ebook-recomecar-dois.png";
import ebookAnsiedade from "@/assets/ebook-ansiedade.png";
import ebookVocacao from "@/assets/ebook-desperte-vocacao.png";
import ebookAmorProprio from "@/assets/ebook-amor-proprio.png";

const ebooks = [
  {
    title: "Exercícios de Força e Poder na Cura da Alma",
    desc: "Como usar seus pensamentos e palavras de força e poder como ferramenta para transformar sua vida e recuperar sua alma.",
    image: ebookCuraAlma,
    link: "https://hotmart.com/pt-br/marketplace/produtos/e-book-exercicios-de-forca-e-poder-na-cura-da-alma/F86468895H",
  },
  {
    title: "Desperte a Energia do Amor Verdadeiro",
    desc: "Exercícios sistêmicos para dar um novo rumo aos seus relacionamentos e liberar o que está impedindo a sua felicidade.",
    image: ebookAmorVerdadeiro,
    link: "https://hotmart.com/pt-br/marketplace/produtos/bonus-desperte-a-energia-do-amor-verdadeiro/V100255973K",
  },
  {
    title: "Desvendando Laços Invisíveis de Pais e Filhos",
    desc: "Exercícios e meditações de Constelação Familiar Sistêmica para transformar seus relacionamentos e curar vínculos familiares.",
    image: ebookLacos,
    link: "https://hotmart.com/pt-br/marketplace/produtos/e-book-desvendando-lacos-invisiveis-de-pais-e-filhos/T86254814E",
  },
  {
    title: "365 Dias de Meditação e Exercícios",
    desc: "Práticas diárias de Constelação Familiar para curar padrões, liberar bloqueios e fortalecer sua jornada de autoconhecimento.",
    image: ebook365,
    link: "https://hotmart.com/pt-br/marketplace/produtos/365-dias-de-meditacao-e-exercicios/E99425518I",
  },
  {
    title: "Recomeçar a Dois: Um Caminho Sistêmico para Casais",
    desc: "Um guia prático e profundo para casais que ainda se amam, com exercícios, rituais e reflexões para restaurar o vínculo.",
    image: ebookRecomecar,
    link: "https://hotmart.com/pt-br/marketplace/produtos/recomecar-a-dois-um-caminho-sistemico-para-casais/K100580237K",
  },
  {
    title: "Ansiedade: Um Caminho Sistêmico de Cura e Reconexão",
    desc: "Exercícios, frases de cura e práticas de autorregulação para acalmar a mente e reencontrar o seu centro.",
    image: ebookAnsiedade,
    link: "https://hotmart.com/pt-br/marketplace/produtos/ansiedade-um-caminho-sistemico-de-cura-e-reconexao/O100521514Q",
  },
  {
    title: "Desperte Sua Vocação",
    desc: "Uma jornada sistêmica para liberar bloqueios, reconhecer talentos e se reconectar com a missão que dá sentido à sua vida.",
    image: ebookVocacao,
    link: "https://hotmart.com/pt-br/marketplace/produtos/desperte-sua-vocacao-um-caminho-sistemico-de-proposito-e-realizacao/R102350883Y",
  },
  {
    title: "10 Passos para o Amor Próprio",
    desc: "Reflexões, exercícios e práticas para reconectar com sua essência, fortalecer a autoestima e viver com mais equilíbrio.",
    image: ebookAmorProprio,
    link: "https://hotmart.com/pt-br/marketplace/produtos/10-passos-para-o-amor-proprio/A98669730C",
  },
];

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Ebooks = () => {
  return (
    <section id="ebooks" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            E-books
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Materiais para sua Jornada
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.title}
              className="bg-card rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
                  {ebook.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed mb-4 flex-1">
                  {ebook.desc}
                </p>
                <a
                  id={`btn-ebook-${slugify(ebook.title)}`}
                  href={ebook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body font-medium text-sm hover:opacity-90 transition-opacity w-full"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ebooks;
