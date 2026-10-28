export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  bestTime: string;
  climate: string;
  tags: string[];
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    slug: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    tagline: 'Where cliffs meet ceremony.',
    description: 'Pastel villages cling to limestone cliffs above a cobalt sea. Every curve of the road reveals another perfect frame.',
    longDescription: 'The Amalfi Coast has seduced painters, poets, and wanderers for centuries — and still does. Whitewashed terraces cascade down vertiginous cliffs to a sea that shifts between turquoise and deep violet. Positano, Ravello, Praiano: each village is its own world, small enough to feel intimate, beautiful enough to feel unreal. Come for the limoncello groves, the silent cathedrals, the boat trips to hidden sea caves. Stay because leaving feels impossible.',
    image: 'https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80',
      'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=80',
      'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80',
    ],
    highlights: ['Private boat to Grotta Azzurra', 'Ravello hilltop gardens', 'Positano sunset terrace dinner', 'Ceramic workshops in Vietri'],
    bestTime: 'May – June, September – October',
    climate: 'Mediterranean',
    tags: ['coastal', 'culture', 'romance', 'cuisine'],
    featured: true,
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    tagline: 'Ancient rituals. Living present.',
    description: 'Lantern-lit alleys, thousand-year-old temples, and a silence that makes the modern world feel very far away.',
    longDescription: 'Kyoto does not announce itself. It unfolds slowly — a gate glimpsed through cedar trees, the smell of incense at dusk, a geisha crossing a stone bridge. Seventeen UNESCO World Heritage Sites and countless smaller temples scatter through the city, but the real Kyoto lives in the details: morning tofu at a riverside restaurant, tea ceremony in a private tatami room, the sound of bamboo creaking in Arashiyama. Time moves differently here.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=1200&q=80',
    ],
    highlights: ['Private Fushimi Inari sunrise walk', 'Tea ceremony in Higashiyama', 'Ryokan stay in Gion', 'Arashiyama bamboo at dawn'],
    bestTime: 'March – April, October – November',
    climate: 'Temperate',
    tags: ['culture', 'temples', 'cuisine', 'zen'],
    featured: true,
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Nothing above you but sky.',
    description: 'A thousand coral islands. Water so clear the reef is visible from the air. Absolute quiet.',
    longDescription: 'The Maldives strips travel down to its essence: water, light, and time. Overwater villas hang above a lagoon you can see straight through. Beneath the surface, manta rays glide past coral gardens in silence. Above it, the sky transitions through shades that have no names. Here the itinerary is a suggestion — sunset snorkelling, reef fishing at midnight, breakfast brought by boat. You will do less and feel more.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80',
      'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    highlights: ['Overwater villa with glass floor', 'Night snorkelling with manta rays', 'Private sandbank picnic', 'Seaplane transfer at sunrise'],
    bestTime: 'November – April',
    climate: 'Tropical',
    tags: ['ocean', 'luxury', 'romance', 'marine'],
    featured: true,
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    tagline: 'The city that never quite lets go.',
    description: 'Rose-red medina walls, spice-scented souks, and riads that hide impossible gardens inside.',
    longDescription: 'Marrakech is a city built on contrast. Outside the medina walls: the modern world. Inside: a medieval labyrinth of dyers, weavers, and spice merchants whose families have held the same stalls for generations. Find your riad — buried in an alley with no number, a studded wooden door — and inside will be a courtyard of fountains, orange trees, and silence. In the evenings, Djemaa el-Fna becomes a theatre of acrobats, storytellers, and smoke rising from a hundred grills.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558642891-54be180ea339?w=1200&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80',
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80',
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=1200&q=80',
    ],
    highlights: ['Private medina walk with a local guide', 'Hammam at a historic riad', 'Sunrise hot-air balloon over Palmeraie', 'Cooking class in the souk'],
    bestTime: 'March – May, September – November',
    climate: 'Semi-arid',
    tags: ['culture', 'architecture', 'cuisine', 'adventure'],
    featured: true,
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    country: 'Argentina / Chile',
    region: 'South America',
    tagline: 'The end of the world. Worth every mile.',
    description: 'Granite peaks, glaciers the colour of turquoise glass, and wilderness on a scale that resets something in you.',
    longDescription: "Patagonia humbles you. Torres del Paine's three granite towers catch the first light of dawn in colours that seem painted. The Perito Moreno Glacier groans and calves into a steel-grey lake. Condors circle overhead, indifferent. In this landscape, human ambition feels smaller — which is, unexpectedly, a relief. Walk to the base of the towers at sunrise. Float past icebergs on a silent lake. Sit with a glass of Malbec and watch the wind move through an estancia's grass like water.",
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    ],
    highlights: ['Torres del Paine W-Trek sunrise', 'Perito Moreno glacier walk', 'Private estancia stay', 'Zodiac cruise past icebergs'],
    bestTime: 'November – March',
    climate: 'Sub-polar',
    tags: ['adventure', 'wilderness', 'trekking', 'glaciers'],
    featured: false,
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    tagline: 'Light that exists nowhere else on earth.',
    description: 'A caldera island carved from volcanic rock, crowned in white cubes and blue domes above a sea that remembers Atlantis.',
    longDescription: 'Santorini is a cliché — and then you arrive and understand why. The caldera view from Oia at sunset, with a glass of Assyrtiko and the Aegean three hundred metres below, is one of the few experiences that lives up to its reputation. But Santorini rewards those who look further: the black sand beaches of Perissa, the ancient ruins of Akrotiri, the vineyards cut into volcanic soil, the tavernas in Pyrgos where no tourist has found them yet. This island has layers.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80',
      'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=80',
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    highlights: ['Oia sunset from the castle', 'Private catamaran caldera cruise', 'Wine tasting at a volcanic vineyard', 'Akrotiri excavation at dawn'],
    bestTime: 'April – June, September – October',
    climate: 'Mediterranean',
    tags: ['coastal', 'romance', 'cuisine', 'culture'],
    featured: true,
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);

export const getFeaturedDestinations = () =>
  destinations.filter((d) => d.featured);
