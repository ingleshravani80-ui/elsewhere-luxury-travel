export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  body: string[];
  tags: string[];
  featured: boolean;
}

export const articles: Article[] = [
  {
    slug: 'the-hour-before-dawn-in-kyoto',
    title: 'The Hour Before Dawn in Kyoto',
    subtitle: 'On walking Fushimi Inari before the world wakes up.',
    author: 'Mia Strand',
    date: 'October 2024',
    readTime: '6 min',
    category: 'Essay',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80',
    excerpt: 'The gates are orange. They have always been orange. But at 4:30 in the morning, with no one else on the mountain, they are something else entirely.',
    body: [
      'The gates are orange. They have always been orange. But at 4:30 in the morning, with no one else on the mountain, they are something else entirely.',
      'I had been told to go early. Everyone who has been to Kyoto says it: go to Fushimi Inari early. What they mean is nine o\'clock, perhaps eight. They do not mean 4:30. I know because at 4:30, I was the only person on the mountain.',
      'The gates — there are approximately ten thousand of them — form a tunnel that bends upward through the cedar trees. In the photographs, this tunnel is dense with tourists, shoulders nearly touching. At 4:30, it is a tunnel through which the darkness moves differently. The orange paint absorbs the last of the night and gives back something amber.',
      'Halfway up, a shrine cat appeared — grey, indifferent, ancient-looking — and walked with me for two gates before disappearing into the undergrowth. I did not take a photograph. I am still thinking about this.',
      'The summit reveals the city below, its grid still mostly dark, a few lights already on in the early-rising neighbourhoods of Fushimi. Somewhere below, the first train was already running. Up here, the foxes that guard Inari had not yet given way to the day.',
      'I came back down as the first tourists arrived, two German couples arguing cheerfully about which direction to walk. They looked very real and very kind. The mountain was no longer mine. I did not mind. I had already been given what I came for.',
    ],
    tags: ['Japan', 'Kyoto', 'dawn', 'temples'],
    featured: true,
  },
  {
    slug: 'how-to-disappear-in-the-maldives',
    title: 'How to Disappear in the Maldives',
    subtitle: 'The case for doing absolutely nothing in a place built for it.',
    author: 'James Osei',
    date: 'September 2024',
    readTime: '5 min',
    category: 'Dispatch',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    excerpt: 'I had planned to write every morning. I had a notebook, good intentions, and a sea view. I did not write a word.',
    body: [
      'I had planned to write every morning. I had a notebook, good intentions, and a sea view. I did not write a word.',
      'The Maldives is a place that neutralises ambition. This is, it turns out, its greatest gift. There is nothing to do and everything is perfect. The lagoon is thirty feet deep and so clear you can see the coral from your villa floor. The resort brings meals to you without asking what you want, because they have already understood what you want. The wifi is excellent but you do not use it.',
      'On the second day, I snorkelled for three hours without deciding to. I had put on the mask meaning to have a quick look, and when I surfaced again the light had moved and the chef was coming to ask about dinner.',
      'On the third day, a manta ray appeared thirty metres offshore. I watched it from the deck of my villa for twenty minutes. It circled slowly, feeding. It was not performing. It was simply there, and so was I.',
      'By the fourth day I had abandoned the notebook entirely. There was nothing to record. Or rather, everything that happened was happening inside — a very gradual unwinding that does not have a vocabulary. I was simply less tight than I had been.',
      'When I left, the seaplane lifted over the atoll and the lagoon turned from green to turquoise to deep blue in under a minute. I watched until the island disappeared. Then I opened my notebook and wrote: I should come back.',
    ],
    tags: ['Maldives', 'ocean', 'slow travel', 'solitude'],
    featured: true,
  },
  {
    slug: 'inside-a-marrakech-riad',
    title: 'Inside a Marrakech Riad',
    subtitle: 'A courtyard, an orange tree, and the sound of nothing in the centre of everything.',
    author: 'Leila Haroun',
    date: 'August 2024',
    readTime: '7 min',
    category: 'Place',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80',
    excerpt: 'The door has no number. You find it because your host described the neighbour\'s painted tile, the tarnished knocker, the smell of orange blossom at that particular corner.',
    body: [
      'The door has no number. You find it because your host described the neighbour\'s painted tile, the tarnished knocker, the smell of orange blossom at that particular corner. Or you get lost three times and a boy leads you to it for a dirham.',
      'Once inside, the medina disappears. Riads are designed for this: the entire building faces inward, toward a central courtyard, so the walls that face the alley are blank. All the windows open onto the interior. The world outside stays outside.',
      'The courtyard of this particular riad holds a single orange tree, a small fountain, and four rattan chairs. Breakfast is brought here every morning by Mohammed, who has worked at the riad since it opened and has strong opinions about which corner catches the best morning light. He is right.',
      'The architecture is designed for the Marrakech climate: thick walls that absorb the midday heat and release it slowly at night, keeping the courtyard comfortable through the afternoon and warm after sundown. The zellige tiles on the walls — geometric interlocking patterns in terracotta and cream — are cool to the touch even at noon. Every surface does something.',
      'In the evenings, with the call to prayer drifting over the rooftops and the sound of the medina muffled by the walls, the riad feels like a room outside of time. The 12th century and the present exist simultaneously in the same building without obvious tension. In Marrakech, this is normal.',
    ],
    tags: ['Morocco', 'Marrakech', 'architecture', 'culture'],
    featured: true,
  },
  {
    slug: 'the-light-on-the-amalfi-coast',
    title: 'The Light on the Amalfi Coast',
    subtitle: 'On why painters have been coming here for two hundred years.',
    author: 'Clara Renzi',
    date: 'July 2024',
    readTime: '5 min',
    category: 'Essay',
    image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1600&q=80',
    excerpt: 'The Amalfi light has a quality that is difficult to describe without sounding like someone who has never described anything before. It does something to colour.',
    body: [
      'The Amalfi light has a quality that is difficult to describe without sounding like someone who has never described anything before. It does something to colour.',
      'The sea is not simply blue. It is four or five different blues, stacked vertically by depth and refraction, moving between them as the clouds move. The lemons are not yellow — they are almost orange in this light, heavy, ridiculous, hanging off the trees above the coastal road like ornaments.',
      'Turner came. Goethe came. The Bloomsbury painters came. The light is why. It falls differently than northern European light — lower in angle even in summer, richer in warmth, and in the late afternoon it turns the limestone cliffs the colour of old gold.',
      'I spent three days in Positano trying to understand it. I ate at the same restaurant twice because the table faced the sea and caught the last hour of afternoon light in a way that made the food taste better. The proprietor noticed and asked if I was a photographer. I said no. He said: most people who come back for the light are photographers or painters. I felt I had been given a compliment.',
      'The light changes quickly. By 6:30 it is already different — cooler, moving toward the blue hour that falls over Italian fishing villages with particular gentleness. It is worth being awake for.',
    ],
    tags: ['Italy', 'Amalfi', 'light', 'art'],
    featured: false,
  },
  {
    slug: 'notes-on-patagonia',
    title: 'Notes on Patagonia',
    subtitle: 'What happens to the ego in a very large landscape.',
    author: 'Marco Villanueva',
    date: 'June 2024',
    readTime: '8 min',
    category: 'Essay',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
    excerpt: 'The wind is so constant in Patagonia that it changes your relationship to stillness. You begin to feel that stillness is the exception, not the rule.',
    body: [
      'The wind is so constant in Patagonia that it changes your relationship to stillness. You begin to feel that stillness is the exception, not the rule. On the three days it did not blow, the silence was louder than the wind had been.',
      'Torres del Paine at dawn. This is the photograph you have seen: the three granite towers, the lake below, the colour pink moving down the rock face as the sun rises. In the photograph, it looks composed, perfect, perhaps a little contrived. In person, it takes your voice away.',
      'I had been hiking for three hours in darkness to reach the mirador. The group I was with had gone mostly silent in the last hour, conserving energy, heads down. When we came over the ridge and saw the towers for the first time — they are invisible until you are directly below them — someone behind me said, quietly, in Spanish: I understand now.',
      'The glacier. You hear it before you see it: a deep, occasional crack, like a very large door being opened somewhere inside the ice. Then the face appears, sixty metres of compressed blue ice above the lake surface. The colour comes from compressed air: the older the ice, the deeper the blue. The oldest ice is nearly violet.',
      'A guanaco crossed the road in front of our vehicle on the way back. It stood in the middle of the road for a long moment, looking at us with an expression of total indifference, then moved off through the grass. The driver said: they have the right of way here. He was not joking.',
      'I came home smaller in the best possible sense. Some landscapes do this: reduce you to your correct size.',
    ],
    tags: ['Patagonia', 'wilderness', 'glaciers', 'essay'],
    featured: true,
  },
  {
    slug: 'the-philosophy-of-a-slow-journey',
    title: 'The Philosophy of a Slow Journey',
    subtitle: 'Why arriving somewhere is only the beginning.',
    author: 'Nadia Park',
    date: 'May 2024',
    readTime: '6 min',
    category: 'Ideas',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80',
    excerpt: 'The best travel I have done has always involved staying longer than I planned, going slower than I intended, and doing less than I prepared for.',
    body: [
      'The best travel I have done has always involved staying longer than I planned, going slower than I intended, and doing less than I prepared for.',
      'There is a kind of travel that is essentially a list. You arrive, you see the things on the list, you photograph them, you move on. The list is what travel magazines and optimised itineraries produce: maximum coverage, minimum dwell. You go home having seen everything and experienced nothing slowly enough to remember.',
      'Slow travel is an argument against the list. It says: stay in one neighbourhood long enough to have a favourite café. Learn two words in the language. Walk somewhere you have not planned to walk. Notice that the light changes at a certain hour and position yourself to be in it.',
      'The problem with slow travel is that it requires restraint. It means choosing one country over three, one city over five. It means leaving things unseen. This is the hardest part.',
      'But there is something you gain: the texture of a place. The noise of a specific market on a specific morning. The quality of the bread. The way people in that city dress for rain. These are the things you remember twenty years later when someone mentions the place — not the monument, not the view from the guidebook photograph, but the texture.',
      'The world, it turns out, does not reward speed. It rewards attention. And attention is not something you can rush.',
    ],
    tags: ['travel philosophy', 'slow travel', 'ideas'],
    featured: false,
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getFeaturedArticles = () =>
  articles.filter((a) => a.featured);
