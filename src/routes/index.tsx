import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Gavel, ScrollText, MessageSquare, Plus, Check } from "lucide-react";
import { INVITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hikari — Bot de Discord para Moderação e Segurança" },
      {
        name: "description",
        content:
          "Hikari é um bot de Discord completo para segurança, moderação e gerenciamento do seu servidor. Anti-raid, anti-spam, auditoria e muito mais.",
      },
      { property: "og:title", content: "Hikari — Bot de Discord para Moderação e Segurança" },
      {
        property: "og:description",
        content:
          "Ferramentas de moderação, sistemas de proteção e recursos para gerenciar comunidades no Discord.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteções contra raid, spam, links e bots não autorizados.",
  },
  {
    icon: Gavel,
    title: "Moderação",
    description: "Ferramentas para administrar e proteger a comunidade.",
  },
  {
    icon: ScrollText,
    title: "Auditoria",
    description: "Acompanhe atividades e alterações importantes no servidor.",
  },
  {
    icon: MessageSquare,
    title: "Mensagens",
    description: "DMs automáticas e personalizáveis para ações de moderação.",
  },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <p className="animate-fade-in mx-auto mb-6 w-fit rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            Moderação • Segurança • Gerenciamento
          </p>
          <h1 className="animate-fade-in-up delay-100 text-5xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">Hikari</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-5 max-w-2xl text-lg text-primary-soft sm:text-xl">
            Um bot de Discord completo para segurança, moderação e gerenciamento do seu servidor.
          </p>
          <p className="animate-fade-in-up delay-300 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ferramentas de moderação, sistemas de proteção e recursos para facilitar o
            gerenciamento da sua comunidade — tudo em um só bot.
          </p>
          <div className="animate-fade-in-up delay-400 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-glow sm:w-auto"
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
              Adicionar ao Discord
            </a>
            <Link
              to="/informacoes"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary sm:w-auto"
            >
              Conhecer o Hikari
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="recursos">
        <h2 id="recursos" className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Principais recursos
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
          Tudo o que seu servidor precisa para ficar protegido e organizado.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="card-interactive rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <feature.icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Destaque: /security */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6" aria-labelledby="security">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Comando em destaque
            </p>
            <h2 id="security" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              <code className="rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-primary">/security</code>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              O Hikari analisa a segurança do seu servidor: verifica proteções ativas,
              permissões e atividades suspeitas — e gera um score de segurança para você
              saber exatamente onde melhorar.
            </p>
            <Link
              to="/adicionar"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-glow"
            >
              Testar no meu servidor
            </Link>
          </div>

          {/* Exemplo visual */}
          <div className="rounded-2xl border border-border bg-background p-6 font-mono text-sm shadow-glow">
            <p className="font-semibold text-primary">🛡️ SEGURANÇA DO SERVIDOR</p>
            <div className="mt-4 space-y-1.5 text-muted-foreground">
              <p>
                Status: <span className="text-success">● Protegido</span>
              </p>
              <p>
                Score: <span className="font-semibold text-foreground">82/100</span>
              </p>
            </div>
            <p className="mt-5 font-semibold text-primary">🔐 PROTEÇÕES</p>
            <ul className="mt-3 space-y-1.5">
              {["Anti-Raid", "Anti-Spam", "Anti-Link", "Anti-Bot"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <Check className="h-4 w-4 text-success" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
