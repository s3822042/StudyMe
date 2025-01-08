export type SiteConfig = {
  name: string
  description: string
  url: string
  authors: {
    name: string
    url: string
  }[]
  links: {
    twitter: string
    github: string
  }
  mainNav: {
    title: string
    href: string
  }[]
}
