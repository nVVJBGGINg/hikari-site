import { createFileRoute } from "@tanstack/react-router";
import { Plus, ShieldCheck, Check, Sparkles } from "lucide-react";
import { INVITE_URL, INVITE_BETA_URL } from "@/lib/site";


export const Route = createFileRoute("/adicionar")({
  head: () => ({
    meta: [
      { title: "Adicionar ao Discord — Hikari" },
      {
        name: "description",
        content:
          "Adicione o Hikari ao seu servidor do Discord e leve ferramentas de segurança, moderação e gerenciamento para sua comunidade.",
      },
      { property: "og:title", content: "Adicionar ao Discord — Hikari" },
      {
        property: "og:description",
        content:
          "Leve ferramentas de segurança, moderação e gerenciamento para sua comunidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Adicionar,
});

const PERMISSION_TIPS = [
  "Revise as permissões solicitadas na tela de autorização do Discord.",
  "Selecione o servidor correto antes de confirmar.",
  "Você pode ajustar as permissões do bot depois, nas configurações do servidor.",
];

function Adicionar() {
  return (
    <main className="hero-glow">
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <div className="animate-fade-in mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/12 text-primary">
          <ShieldCheck className="h-8 w-8" strokeWidth={1.7} />
        </div>
        <h1 className="animate-fade-in-up delay-100 mt-7 text-3xl font-bold tracking-tight sm:text-5xl">
          Adicione o <span className="text-gradient">Hikari</span> ao seu servidor
        </h1>
        <p className="animate-fade-in-up delay-200 mx-auto mt-5 max-w-xl text-muted-foreground sm:text-lg">
          Leve ferramentas de segurança, moderação e gerenciamento para sua comunidade.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 py-4.5 text-base font-bold text-primary-foreground transition-all hover:brightness-110 hover:shadow-glow"
          >
            <Plus className="h-5 w-5" strokeWidth={2.5} />
            Adicionar Hikari
          </a>
          <a
            href={INVITE_BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-glow"
          >
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
            Testar versão beta
          </a>
        </div>

        {/* Permissões */}
        <div className="animate-fade-in-up delay-400 mx-auto mt-14 max-w-lg rounded-2xl border border-border bg-card p-6 text-left sm:p-8">
          <h2 className="text-base font-semibold">Antes de autorizar</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Revise as permissões solicitadas pelo Hikari com atenção:
          </p>
          <ul className="mt-4 space-y-3">
            {PERMISSION_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2.5} />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
