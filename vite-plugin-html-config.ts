import type { Plugin } from "vite"
import { SITE_CONFIG } from "./site.config"

/**
 * Vite plugin to inject site configuration into HTML
 * Replaces {{BASE_URL}} placeholder with the actual base URL
 */
export function htmlConfigPlugin(): Plugin {
  return {
    name: "html-config",
    transformIndexHtml(html: string) {
      return html.replace(/\{\{BASE_URL\}\}/g, SITE_CONFIG.BASE_URL)
    },
  }
}
