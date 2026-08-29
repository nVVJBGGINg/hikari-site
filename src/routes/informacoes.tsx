import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Gavel,
  MessageSquare,
  Sparkles,
  Ban,
  Timer,
  LogOut,
  AlertTriangle,
  ListChecks,
  ScrollText,
  Settings,
  Hash,
  Ticket,
  Trophy,
  Flag,
  LayoutTemplate,
} from "lucide-react";

export const Route = createFileRoute("/informacoes")({
  head: () => ({
    meta: [
      { title: "Informações — Hikari" },
      {
        name: "description",
        content:
          "Conheça o Hikari em detalhes: sistemas de segurança, ferramentas de moderação, mensagens automáticas e todos os recursos do bot.",
      },
      { property: "og:title", content: "Informações — Hikari" },
      {
        property: "og:description",
        content:
          "Conheça o Hikari em detalhes: segurança, moderação, mensagens e recursos do bot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Informacoes,
});

const SECURITY_ITEMS = [
  "Anti-Raid",
  "Anti-Spam",
  "Anti-Link",
  "Anti-Bot",
  "Sistema de auditoria",
  "Análise de segurança",
];

const MODERATION_ITEMS = [
  { icon: AlertTriangle, label: "Warn" },
  { icon: LogOut, label: "Kick" },
  { icon: Ban, label: "Ban" },
  { icon: Timer, label: "Timeout" },
  { icon: Hash, label: "Controle de canais" },
  { icon: ScrollText, label: "Logs" },
  { icon: Settings, label: "Ferramentas administrativas" },
];

const EXTRA_RESOURCES = [
  {
    icon: Ticket,
    title: "Tickets",
    description: "Sistema de tickets com painéis personalizáveis para atendimento da comunidade.",
  },
  {
    icon: Trophy,
    title: "XP e Níveis",
    description: "Sistema de experiência com recompensas por nível para engajar membros.",
  },
  {
    icon: Flag,
    title: "Denúncias",
    description: "Membros podem reportar problemas diretamente para a equipe de moderação.",
  },
  {
    icon: LayoutTemplate,
    title: "Embeds",
    description: "Crie mensagens embed personalizadas para anúncios e comunicação.",
  },
  {
    icon: ListChecks,
    title: "Auditoria detalhada",
    description: "Registro de eventos importantes: edições, exclusões, entradas e saídas.",
  },
  {
    icon: Sparkles,
    title: "Configuração guiada",
    description: "Assistente de configuração para deixar o bot pronto em poucos minutos.",
  },
];

function Informacoes() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Sobre */}
      <section className="animate-fade-in-up max-w-3xl" aria-labelledby="sobre">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Informações</p>
        <h1 id="sobre" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Sobre o Hikari
        </h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          O Hikari é um bot de Discord criado para ser a base de segurança e organização de
          qualquer comunidade. A proposta é simples: reunir em um único bot as ferramentas
          que antes exigiam vários — proteção automática, moderação completa, registros de
          auditoria e recursos de gerenciamento.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          O objetivo é permitir que administradores foquem na comunidade enquanto o Hikari
          cuida da proteção, mantendo o servidor seguro contra raids, spam, links maliciosos
          e bots não autorizados.
        </p>
      </section>

      {/* Segurança */}
      <section className="mt-16" aria-labelledby="seguranca">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
            <Shield className="h-5 w-5" strokeWidth={1.9} />
          </div>
          <h2 id="seguranca" className="text-2xl font-bold tracking-tight">Segurança</h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_ITEMS.map((item) => (
            <div
              key={item}
              className="card-interactive rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Moderação */}
      <section className="mt-16" aria-labelledby="moderacao">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
            <Gavel className="h-5 w-5" strokeWidth={1.9} />
          </div>
          <h2 id="moderacao" className="text-2xl font-bold tracking-tight">Moderação</h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MODERATION_ITEMS.map((item) => (
            <div
              key={item.label}
              className="card-interactive flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <item.icon className="h-4.5 w-4.5 shrink-0 text-primary" strokeWidth={1.9} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mensagens */}
      <section className="mt-16" aria-labelledby="mensagens">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <MessageSquare className="h-5 w-5" strokeWidth={1.9} />
            </div>
            <h2 id="mensagens" className="text-2xl font-bold tracking-tight">Mensagens</h2>
          </div>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            O Hikari pode enviar DMs personalizadas automaticamente durante ações de
            moderação. Quando um membro recebe um warn, timeout ou ban, ele é informado
            por mensagem direta com o motivo da ação — mantendo a comunicação clara e
            transparente entre a equipe e a comunidade.
          </p>
        </div>
      </section>

      {/* Recursos */}
      <section className="mt-16" aria-labelledby="recursos">
        <h2 id="recursos" className="text-2xl font-bold tracking-tight">Recursos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Outras ferramentas disponíveis no Hikari.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRA_RESOURCES.map((resource) => (
            <article
              key={resource.title}
              className="card-interactive rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <resource.icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{resource.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {resource.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <Link
          to="/adicionar"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-glow"
        >
          Adicionar o Hikari ao meu servidor
        </Link>
      </section>
    </main>
  );
}
