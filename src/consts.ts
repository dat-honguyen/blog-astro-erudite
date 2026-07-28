import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "Dat Ho",
  description: "Notes on shipping full-stack, event-sourced, and micro-frontend systems.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const PORTFOLIO_URL = "https://datisa.dev"

export const NAVIGATION = [{ href: "/blog", label: "Blog" }]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/dat-honguyen", label: "GitHub", icon: GitHub },
  { href: "mailto:hntidat@gmail.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
