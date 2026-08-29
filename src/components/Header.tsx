import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Início" },
  { to: "/informacoes", label: "Informações" },
  { to: "/adicionar", label: "Adicionar" },
  { to: "/suporte", label: "Suporte" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Flower2 className="h-4.5 w-4.5" strokeWidth={1.8} />
          </span>
          Hikari
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "bg-primary/10 text-primary",
              }}
              inactiveProps={{
                className: "text-muted-foreground hover:text-foreground hover:bg-secondary",
              }}
              className="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          className="animate-fade-in border-t border-border/60 bg-background px-4 pb-4 pt-2 md:hidden"
          aria-label="Navegação mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="block rounded-lg px-3 py-3 text-base font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
