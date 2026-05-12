import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-3">
        <img src={logo} alt="Constelação Familiar Espiritual" className="h-48 w-auto" />
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} Vania Carteli · Constelação Espiritual · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
