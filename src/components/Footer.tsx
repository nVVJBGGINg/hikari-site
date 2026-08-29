import { Link } from "@tanstack/react-router";
import { Flower2 } from "lucide-react";
import { INVITE_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Flower2 className="h-4 w-4 text-primary" strokeWidth={1.8} />
            Hikari • Bot de Discord
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" aria-label="Rodapé">
            <Link to="/informacoes" className="text-muted-foreground transition-colors hover:text-primary">
              Informações
            </Link>
            <Link to="/suporte" className="text-muted-foreground transition-colors hover:text-primary">
              Suporte
            </Link>
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Adicionar ao Discord
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
