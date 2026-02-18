export interface NamedReaction {
  title: string;
  slug: string;
  description: string;
  images: string[];
}

export const namedReactions: NamedReaction[] = [
  {
    title: 'Wurtz Reaction',
    slug: 'wurtz',
    description: 'A coupling reaction where two alkyl halides react with sodium metal in dry ether to form a higher alkane.',
    images: ['/assets/generated/note-wurtz.dim_1200x1600.png'],
  },
  {
    title: 'Fittig Reaction',
    slug: 'fittig',
    description: 'A coupling reaction where two aryl halides react with sodium metal in dry ether to form a biphenyl compound.',
    images: ['/assets/generated/note-fittig.dim_1200x1600.png'],
  },
  {
    title: 'Wurtz-Fittig Reaction',
    slug: 'wurtz-fittig',
    description: 'A mixed coupling reaction between an alkyl halide and an aryl halide with sodium metal in dry ether.',
    images: ['/assets/generated/note-wurtz-fittig.dim_1200x1600.png'],
  },
  {
    title: "Kolbe's Electrolysis",
    slug: 'kolbe',
    description: 'An electrolytic decarboxylation reaction where carboxylate salts are electrolyzed to produce alkanes.',
    images: ['/assets/generated/note-kolbe.dim_1200x1600.png'],
  },
  {
    title: 'Reimer–Tiemann Reaction',
    slug: 'reimer-tiemann',
    description: 'A reaction where phenol is treated with chloroform in the presence of a base to form ortho-hydroxybenzaldehyde.',
    images: ['/assets/generated/note-reimer-tiemann.dim_1200x1600.png'],
  },
  {
    title: 'Cannizzaro Reaction',
    slug: 'cannizzaro',
    description: 'A redox reaction where aldehydes without alpha-hydrogen undergo disproportionation in the presence of a strong base.',
    images: ['/assets/generated/note-cannizzaro.dim_1200x1600.png'],
  },
];
