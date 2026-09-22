export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#prestations", label: "Prestations" },
  { href: "#boutique", label: "Boutique" },
  { href: "#galerie", label: "Galerie" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const siteCopy = {
  heroEyebrow: "Coiffure afro & soins capillaires en région parisienne",
  slogan: "Sublimer votre beauté, une tresse à la fois.",
  ctaPrimary: "Prendre rendez-vous",
  ctaSecondary: "Découvrir nos produits",
};

export const marqueeItems: string[] = [
  "Boutique GMK : huiles, soins, perruques",
  "·",
  "Livraison offerte dès 60 €",
  "·",
  "Formules maison, sans silicones",
  "·",
];

export type Prestation = {
  slotId: string;
  categorie: string;
  nom: string;
  prix: number;
  duree: string;
  description: string;
  image?: string;
};

export const prestations: Prestation[] = [
  {
    slotId: "gmk-p1",
    categorie: "Femmes",
    nom: "Knotless Braids",
    prix: 95,
    duree: "4 h 30",
    description:
      "Départ sans nœud, racines libres de toute tension. Le rendu le plus naturel de nos tresses longue durée.",
    image: "/images/prestations/knotless-braids.jpg",
  },
  {
    slotId: "gmk-p2",
    categorie: "Femmes",
    nom: "Box Braids",
    prix: 85,
    duree: "5 h",
    description:
      "Le classique intemporel, calibré section par section pour un tombé net et régulier.",
    image: "/images/prestations/box-braids.jpg",
  },
  {
    slotId: "gmk-p3",
    categorie: "Femmes",
    nom: "Cornrows",
    prix: 60,
    duree: "2 h 30",
    description:
      "Tracés graphiques collés au cuir chevelu, du motif épuré au dessin sur mesure.",
    image: "/images/prestations/cornrows.jpg",
  },
  {
    slotId: "gmk-p4",
    categorie: "Femmes",
    nom: "Stitch Braids",
    prix: 75,
    duree: "3 h",
    description:
      "Effet couture millimétré, lignes creusées à la perfection pour un résultat éditorial.",
  },
  {
    slotId: "gmk-p5",
    categorie: "Hommes",
    nom: "Tresses & Cornrows homme",
    prix: 45,
    duree: "1 h 30",
    description:
      "Coupe nette, tracés précis et finitions barbe en option. Entretien rapide, tenue impeccable.",
    image: "/images/prestations/tresses-homme.jpg",
  },
  {
    slotId: "gmk-p6",
    categorie: "Perruques",
    nom: "Pose & entretien perruque",
    prix: 70,
    duree: "2 h",
    description:
      "Customisation, pose invisible et remise en forme de vos closures et frontales.",
    image: "/images/prestations/perruque.jpg",
  },
];

export type Produit = {
  slotId: string;
  categorie: string;
  nom: string;
  prix: number;
  contenance: string;
  description: string;
  image?: string;
};

export const produits: Produit[] = [
  {
    slotId: "gmk-pr1",
    categorie: "Cheveux",
    nom: "Huile de pousse GMK",
    prix: 24,
    contenance: "100 ml",
    description:
      "Ricin noir, nigelle et menthe poivrée. Une application sur cuir chevelu propre, deux fois par semaine, pour densifier les zones fragilisées.",
    image: "/images/produits/huile-de-pousse.jpg",
  },
  {
    slotId: "gmk-pr2",
    categorie: "Barbe",
    nom: "GMK Repair Barbe",
    prix: 22,
    contenance: "50 ml",
    description:
      "Sérum réparateur pour barbe sèche et poils incarnés. Discipline le poil sans effet gras.",
    image: "/images/produits/huile-de-barbe.jpg",
  },
  {
    slotId: "gmk-pr3",
    categorie: "Cheveux",
    nom: "Masque hydratation profonde",
    prix: 28,
    contenance: "250 ml",
    description:
      "Beurre de karité brut et protéines de riz. Vingt minutes suffisent à retrouver de la souplesse avant tressage.",
    image: "/images/produits/masque-hydratation.jpg",
  },
  {
    slotId: "gmk-pr4",
    categorie: "Perruques",
    nom: "Spray revitalisant perruque",
    prix: 19,
    contenance: "150 ml",
    description:
      "Démêle, rafraîchit et redonne du mouvement aux fibres naturelles comme synthétiques.",
    image: "/images/produits/spray-perruque.jpg",
  },
];

export type Review = {
  nom: string;
  presta: string;
  note: number;
  texte: string;
};

export const reviews: Review[] = [
  {
    nom: "Aminata D.",
    presta: "Knotless Braids, 3 semaines après",
    note: 5,
    texte:
      "Trois semaines plus tard, mes racines sont intactes et mes tresses tiennent encore comme au premier jour. C'est la première fois que je ne dors pas avec un mal de tête.",
  },
  {
    nom: "Chloé M.",
    presta: "Stitch Braids",
    note: 5,
    texte:
      "Un accueil d'une douceur rare, un diagnostic sérieux et un résultat d'une netteté incroyable. Le studio est devenu mon rendez-vous fixe.",
  },
  {
    nom: "Sarah K.",
    presta: "Cornrows & soin",
    note: 5,
    texte:
      "Je suis venue avec des cheveux abîmés, je repars avec un protocole clair et des produits qui fonctionnent vraiment. Du travail de professionnelle.",
  },
  {
    nom: "Yannick B.",
    presta: "Tresses homme + barbe",
    note: 5,
    texte:
      "Précision chirurgicale sur les tracés et un vrai conseil sur l'entretien. Rien à voir avec ce que j'avais connu avant.",
  },
];

export type Engagement = {
  num: string;
  titre: string;
  texte: string;
};

export const engagements: Engagement[] = [
  {
    num: "01",
    titre: "Confort",
    texte:
      "Aucune tension sur le cuir chevelu : nos départs sans nœud et nos sections calibrées respectent la ligne frontale.",
  },
  {
    num: "02",
    titre: "Durabilité",
    texte:
      "Des poses pensées pour tenir six à huit semaines, avec un protocole d'entretien remis à chaque rendez-vous.",
  },
  {
    num: "03",
    titre: "Raffinement",
    texte:
      "Finitions au millimètre, ambiance de studio et produits sélectionnés pour leur composition, pas leur parfum.",
  },
];

export type GalleryItem = {
  slotId: string;
  label: string;
  image?: string;
};

export const galerie: GalleryItem[] = [
  { slotId: "gmk-g1", label: "Knotless Braids", image: "/images/prestations/knotless-braids.jpg" },
  { slotId: "gmk-g2", label: "Box Braids", image: "/images/prestations/box-braids.jpg" },
  { slotId: "gmk-g3", label: "Cornrows", image: "/images/prestations/cornrows.jpg" },
  { slotId: "gmk-g4", label: "Tresses homme", image: "/images/prestations/tresses-homme.jpg" },
  { slotId: "gmk-g5", label: "Pose perruque", image: "/images/prestations/perruque.jpg" },
];

export const founder = {
  eyebrow: "La fondatrice",
  title: "Un savoir-faire transmis, un geste précis.",
  text: "Formée aux techniques de tressage sans tension, la fondatrice de GMK Kitoko Paris a bâti son studio autour d'une conviction simple : une coiffure réussie se juge trois semaines plus tard. Chaque rendez-vous commence par un diagnostic du cuir chevelu et se termine par un protocole d'entretien personnalisé.",
  cta: "Découvrir son histoire",
  image: "/images/founder.jpg",
};

export const reservation = {
  eyebrow: "Réservation",
  title: "Votre prochaine coiffure commence ici.",
  text: "Acompte de 30 % à la réservation, solde réglé au salon. Annulation gratuite jusqu'à 48 h avant le rendez-vous.",
  secondaryCta: "Poser une question",
  newsletterLabel: "Rituels, nouveautés & créneaux libérés",
  newsletterCta: "S'inscrire",
};

export const footer = {
  navigation: [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#boutique", label: "Boutique" },
    { href: "#prestations", label: "Prestations" },
    { href: "#reservation", label: "Réservation" },
  ],
  informations: [
    { href: "#contact", label: "Mentions légales" },
    { href: "#contact", label: "CGV" },
    { href: "#contact", label: "Confidentialité" },
    { href: "#contact", label: "Cookies" },
    { href: "#contact", label: "Politique d'annulation" },
  ],
  phone: "+33 6 00 00 00 00",
  phoneHref: "tel:+33600000000",
  email: "bonjour@gmkkitoko.paris",
  location: "Région parisienne, sur rendez-vous",
  social: [
    { href: "#contact", label: "Instagram" },
    { href: "#contact", label: "TikTok" },
  ],
  copyright: "© 2026 GMK Kitoko Paris",
};

export function formatPrice(amount: number): string {
  return `${amount.toFixed(2).replace(".", ",")} €`;
}
