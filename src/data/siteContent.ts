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

export const companyInfo = {
  name: 'Slotenmaker Berco',
  phoneDisplay: '+32 479 46 03 66',
  phoneHref: 'tel:+32479460366',
  emailDisplay: 'bernard@telenet.be',
  emailHref: 'mailto:bernard@telenet.be',
  addressLineOne: 'Helena Wijnantslaan 6A',
  addressLineTwo: '3870 Heers',
  vatNumber: 'BE0641.456.248',
  coverageArea: 'Regio Heers en omstreken',
  pricingLine: 'Betaalbare prijzen en geen woekerprijzen.',
  availibilityLine: '24/7 hulp bij uitsluiting van een toegangsdeur.'
}

export const navigation: NavItem[] = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over mij', href: '#over-mij' },
  { label: 'Contact', href: '#contact' },
]

export const highlights: Highlight[] = [
  { title: 'Snel ter plaatse', icon: 'clock' },
  { title: 'Veiligheid op maat', icon: 'shield' },
  { title: 'Betrouwbaar advies', icon: 'handshake' },
  { title: companyInfo.coverageArea, icon: 'pin' },
]

export const services: Service[] = [
  {
    title: 'Toegangsdeur openen',
    description:
      '24/7 bereikbaar voor het openen van toegangsdeuren van woningen, met focus op snelle en zorgvuldige hulp.',
    icon: 'door',
  },
  {
    title: 'Veiligheidscilinders en beslag',
    description:
      'Plaatsen van veiligheidscilinders en veiligheidsbeslagen voor een sterkere en betrouwbaardere beveiliging.',
    icon: 'lock',
  },
  {
    title: 'Draadloze camera’s',
    description:
      'Plaatsen van draadloze beveiligingscamera’s voor extra controle en gemoedsrust rond woning of zaak.',
    icon: 'camera',
  },
  {
    title: 'Elektrische sloten',
    description:
      'Plaatsen van elektrische sloten en cilinders die geopend kunnen worden met gsm, fingerprint of touchscreen klavier.',
    icon: 'shield',
  },
  {
    title: 'Cilinders met sleutelplan',
    description:
      'Praktische oplossingen waarbij u met één sleutel toegang krijgt tot meerdere toegangsdeuren. Ideaal voor appartementen, bedrijven en scholen.',
    icon: 'key',
  },
]

export const stats: Stat[] = [
  { value: '10+', label: 'Jaar ervaring' },
  { value: 'Heers', label: 'Uitvalsbasis' },
  { value: '100%', label: 'Focus op tevreden klanten' },
]

export const contactMethods: ContactMethod[] = [
  {
    title: 'Telefoon',
    value: companyInfo.phoneDisplay,
    href: companyInfo.phoneHref,
    icon: 'phone',
  },
  {
    title: 'E-mail',
    value: companyInfo.emailDisplay,
    href: companyInfo.emailHref,
    icon: 'mail',
  },
]
