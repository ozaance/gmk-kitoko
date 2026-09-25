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
    nom: "Fulani Braids",
    prix: 90,
    duree: "4 h",
    description:
      "Tresses collées façon fulani sur le dessus, prolongées en nattes libres et bouclées.",
    image: "/images/prestations/fulani-braids.jpg",
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
    nom: "Braided Ponytail",
    prix: 70,
    duree: "3 h",
    description:
      "Tresses collées ramenées en queue-de-cheval haute, motif du cuir chevelu dessiné sur mesure.",
    image: "/images/prestations/braided-ponytail.jpg",
  },
  {
    slotId: "gmk-p5",
    categorie: "Femmes",
    nom: "Faux Locs",
    prix: 90,
    duree: "4 h",
    description:
      "Locs souples et légères pour un port longue durée, sans l'engagement de vraies locs.",
    image: "/images/prestations/faux-locs.jpg",
  },
  {
    slotId: "gmk-p6",
    categorie: "Femmes",
    nom: "Twists Sénégalaises",
    prix: 80,
    duree: "3 h 30",
    description:
      "Torsades fines et régulières, légères sur le cuir chevelu, pour un rendu soyeux et intemporel.",
    image: "/images/prestations/twists-senegalaises.jpg",
  },
  {
    slotId: "gmk-p7",
    categorie: "Femmes",
    nom: "Freestyle Braids",
    prix: 85,
    duree: "3 h 30",
    description:
      "Tracés libres et perles au choix, pour une tresse signature qui sort des sentiers battus.",
    image: "/images/prestations/freestyle-braids.jpg",
  },
  {
    slotId: "gmk-p8",
    categorie: "Soins",
    nom: "Tissage Ouvert",
    prix: 65,
    duree: "2 h",
    description:
      "Pose de tissage à cheveux naturels laissés visibles, brushing lisse et brillant en finition.",
    image: "/images/prestations/tissage-ouvert.jpg",
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
    slotId: "gmk-pr5",
    categorie: "Cheveux",
    nom: "Hair Wax Stick",
    prix: 18,
    contenance: "2.7 oz",
    description:
      "Stick coiffant tenue forte pour discipliner les baby hairs et sublimer les finitions de tressage.",
    image: "/images/produits/hair-wax-stick.jpg",
  },
  {
    slotId: "gmk-pr6",
    categorie: "Cheveux",
    nom: "Hold & Shine Wrap/Set Mousse",
    prix: 21,
    contenance: "200 ml",
    description:
      "Mousse à l'huile de coco pour un wrap net, un séchage rapide et une brillance sans effet gras.",
    image: "/images/produits/wrap-set-mousse.jpg",
  },
  {
    slotId: "gmk-pr7",
    categorie: "Perruques",
    nom: "Ghost Bond",
    prix: 26,
    contenance: "1.3 oz / 38 ml",
    description:
      "Colle lace invisible et longue tenue pour une pose de perruque ou de frontale indétectable.",
    image: "/images/produits/ghost-bond.jpg",
  },
  {
    slotId: "gmk-pr8",
    categorie: "Perruques",
    nom: "Ease Off Lace Removal",
    prix: 14,
    contenance: "1 oz",
    description:
      "Dissolvant doux pour retirer colle et bande adhésive sans abîmer la lace ni le cuir chevelu.",
    image: "/images/produits/ease-off-lace-removal.jpg",
  },
  {
    slotId: "gmk-pr9",
    categorie: "Cheveux",
    nom: "Bonnet en satin GMK",
    prix: 16,
    contenance: "Taille unique",
    description:
      "Bonnet 100 % satin pour protéger tresses, twists et perruques pendant le sommeil.",
    image: "/images/produits/bonnet-satin.jpg",
  },
  {
    slotId: "gmk-pr10",
    categorie: "Perruques",
    nom: "Bande de maintien perruque",
    prix: 12,
    contenance: "Taille ajustable",
    description:
      "Bande élastique adhésive GMK Paris pour sécuriser toute pose de perruque ou de lace, jour et nuit.",
    image: "/images/produits/bande-maintien-perruque.jpg",
  },
  {
    slotId: "gmk-pr12",
    categorie: "Extensions",
    nom: "Extension Brésilienne Body Wave",
    prix: 65,
    contenance: "Lot de 3, 100 % naturel",
    description:
      "Cheveux naturels vierges ondulés body wave, pour un tissage ou une extension à la texture homogène.",
    image: "/images/produits/extension-bresilienne-body-wave.jpg",
  },
  {
    slotId: "gmk-pr13",
    categorie: "Extensions",
    nom: "Tissage Brésilienne Deep Wave",
    prix: 70,
    contenance: "Lot de 3, 100 % naturel",
    description:
      "Cheveux naturels vierges bouclés deep wave, tenue longue durée et brillance naturelle.",
    image: "/images/produits/tissage-bresilienne-deep-wave.jpg",
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
  { slotId: "gmk-g1", label: "Fulani Braids perlées", image: "/images/gallery/fulani-braids-2.jpg" },
  { slotId: "gmk-g2", label: "Fulani Braids Jayda Wayda", image: "/images/gallery/fulani-braids-jayda-wayda.jpg" },
  { slotId: "gmk-g3", label: "Braided Ponytail", image: "/images/gallery/braided-ponytail-face.jpg" },
  { slotId: "gmk-g4", label: "Knotless vue de dessus", image: "/images/gallery/knotless-vue-dessus.jpg" },
  { slotId: "gmk-g5", label: "Knotless lisses", image: "/images/gallery/knotless-lisse.jpg" },
  { slotId: "gmk-g6", label: "Twists sénégalaises", image: "/images/gallery/twists-realisation.jpg" },
  { slotId: "gmk-g7", label: "Twists bouclées", image: "/images/gallery/twists-bouclees.jpg" },
  { slotId: "gmk-g8", label: "Faux Locs profil", image: "/images/gallery/faux-locs-profil.jpg" },
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
