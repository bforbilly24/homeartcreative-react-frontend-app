interface FooterLinkBase {
  label: string
  href: string
}

interface FooterLinkWithIcon extends FooterLinkBase {
  icon: string
  alt: string
}

interface FooterSection {
  title: string
  links: FooterLinkBase[];
}

export type { FooterLinkBase, FooterLinkWithIcon, FooterSection }
