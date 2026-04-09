export type NavItem = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  icon: string
}

export type Highlight = {
  title: string
  description: string
  icon: string
}

export type Stat = {
  value: string
  label: string
}

export type ContactMethod = {
  title: string
  value: string
  href?: string
  icon: string
}

export const navigation: NavItem[] = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over mij', href: '#over-mij' },
  { label: 'Contact', href: '#contact' },
]

export const highlights: Highlight[] = [
  {
    title: 'Snel ter plaatse',
    description: 'Ook bij spoed sta ik klaar om snel te helpen.',
    icon: 'clock',
  },
  {
    title: 'Betrouwbaar advies',
    description: 'Heldere afspraken en werk dat vakkundig wordt afgewerkt.',
    icon: 'shield',
  },
  {
    title: 'Dag en nacht bereikbaar',
    description: 'Voor noodopeningen en dringende interventies.',
    icon: 'phone',
  },
]

export const services: Service[] = [
  {
    title: 'Sloten plaatsen',
    description:
      'Nieuwe cilinders, veiligheidssloten en meerpuntssluitingen professioneel geplaatst met oog voor afwerking en veiligheid.',
    icon: 'lock',
  },
  {
    title: 'Deuren openen',
    description:
      'Buitengesloten? Ik open deuren zo schadevrij mogelijk en help u snel weer binnen, ook bij dringende oproepen.',
    icon: 'door',
  },
  {
    title: 'Sleutels maken',
    description:
      'Extra sleutels of een snelle vervanging nodig? Ik zorg voor nette, nauwkeurige duplicaten voor verschillende types sloten.',
    icon: 'key',
  },
]

export const stats: Stat[] = [
  { value: '10+', label: 'Jaar ervaring' },
  { value: '24/7', label: 'Bereikbaar' },
  { value: '100%', label: 'Focus op tevreden klanten' },
]

export const contactMethods: ContactMethod[] = [
  {
    title: 'Telefoon',
    value: '+32 479 46 03 66',
    href: 'tel:+32479460366',
    icon: 'phone',
  },
  {
    title: 'E-mail',
    value: 'Bernard@telenet.be',
    href: 'mailto:Bernard@telenet.be',
    icon: 'mail',
  },
  {
    title: 'Werkgebied',
    value: 'Regio Heers en omstreken beschikbaar',
    icon: 'pin',
  },
]
