import { createFileRoute } from "@tanstack/react-router";
import { MessagesSquare, BookOpen, Bug, Lightbulb, ArrowUpRight } from "lucide-react";
import { SUPPORT_LINKS } from "@/lib/site";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte — Hikari" },
      {
        name: "description",
        content:
          "Precisa de ajuda com o Hikari? Acesse o servidor de suporte, a documentação, relate problemas ou envie sugestões.",
      },
      { property: "og:title", content: "Suporte — Hikari" },
      {
        property: "og:description",
        content:
          "Servidor de suporte, documentação, relato de problemas e sugestões do Hikari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Suporte,
});

const SUPPORT_OPTIONS = [
  {
    icon: MessagesSquare,
    title: "Servidor de suporte",
    description: "Entre no servidor oficial e converse com a equipe e a comunidade.",
    href: SUPPORT_LINKS.server,
  },
  {
    icon: BookOpen,
    title: "Documentação",
    description: "Guias, comandos e tutoriais para configurar o Hikari no seu servidor.",
    href: SUPPORT_LINKS.docs,
  },
  {
    icon: Bug,
    title: "Relatar problema",
    description: "Encontrou um bug ou comportamento inesperado? Avise a equipe.",
    href: SUPPORT_LINKS.report,
  },
  {
    icon: Lightbulb,
    title: "Sugestões",
    description: "Tem uma ideia para melhorar o Hikari? Envie sua sugestão.",
    href: SUPPORT_LINKS.suggestions,
  },
];

function Suporte() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="animate-fade-in-up max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Suporte</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Precisa de ajuda?</h1>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Escolha uma das opções abaixo para falar com a equipe ou encontrar respostas.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {SUPPORT_OPTIONS.map((option, i) => (
          <a
            key={option.title}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-interactive animate-fade-in-up delay-${(i + 1) * 100} group rounded-2xl border border-border bg-card p-6 sm:p-7`}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <option.icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h2 className="mt-5 text-base font-semibold">{option.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {option.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
