/**
 * Configurações globais do site do Hikari.
 */

export const SITE = {
  name: "Hikari",
  tagline: "Bot de Discord",
} as const;

/** URL oficial de autorização OAuth2 do Hikari (versão de produção). */
export const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1541048595682295838&permissions=8&integration_type=0&scope=bot+applications.commands";

/** URL de autorização OAuth2 do Hikari (versão beta). */
export const INVITE_BETA_URL =
  "https://discord.com/oauth2/authorize?client_id=1542808601452879872&permissions=8&integration_type=0&scope=bot+applications.commands";

/** Links de suporte — facilmente substituíveis. */
export const SUPPORT_LINKS = {
  server: "https://discord.gg/Ft6Zw7TDss",
  docs: "https://docs.hikari.bot",
  report: "https://github.com/hikari-bot/issues",
  suggestions: "https://github.com/hikari-bot/discussions",
} as const;
