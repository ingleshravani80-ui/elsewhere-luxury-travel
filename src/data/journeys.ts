export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Journey {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  groupSize: string;
  startingFrom: string;
  image: string;
  galleryImages: string[];
  destinations: string[];
  description: string;
  longDescription: string;
  itinerary: ItineraryDay[];
  includes: string[];
  tags: string[];
  featured: boolean;
}

export const journeys: Journey[] = [
  {
    slug: 'mediterranean-arc',
    title: 'The Mediterranean Arc',
    subtitle: 'Italy · Greece · Morocco',
    duration: '16 days',
    groupSize: '2 – 8',
    startingFrom: '₹8,40,000 per person',
    image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80',
    ],
    destinations: ['amalfi-coast', 'santorini', 'marrakech'],
    description: 'Three civilisations, one sea. An arc from the Italian coast through the Greek Aegean and south to the Moroccan medina.',
    longDescription: 'The Mediterranean is not a single place but a family of places, each with its own light, language, and table. This journey traces its arc: begin on the Amalfi Coast, where cliffs meet the sea and every meal is a ceremony. Fly to Santorini, where the caldera below holds the last light of the day. End in Marrakech, where the ancient world smells of rose water and cumin. Sixteen days that feel like a lifetime.',
    itinerary: [
      { day: 1, title: 'Arrive Naples, transfer to Positano', description: 'Private transfer to your clifftop terrace suite. Sunset aperitivo on the balcony. First glimpse of the sea.' },
      { day: 2, title: 'Positano — the village and the water', description: 'Morning market, afternoon boat to hidden coves. Private dinner at a family trattoria above the village.' },
      { day: 3, title: 'Ravello and the garden estates', description: 'Private car along the corniche. Villa Cimbrone gardens. Lunch with a view across three countries.' },
      { day: 4, title: 'Capri day trip', description: 'Fast ferry to Capri. Grotta Azzurra by private boat. Lunch at a terrace restaurant. Return at dusk.' },
      { day: 5, title: 'Fly to Santorini', description: 'Morning flight to Santorini. Settle into your caldera-view villa in Oia. First swim in the Aegean.' },
      { day: 6, title: 'Santorini — slow discovery', description: 'Morning at Akrotiri archaeological site. Afternoon at the black sand beach. Oia sunset from the castle.' },
      { day: 7, title: 'Private catamaran day', description: 'Full day sailing the caldera. Swimming, snorkelling, lunch on deck. Return at golden hour.' },
      { day: 8, title: 'Wine country and hidden villages', description: 'Morning tasting at a volcanic vineyard. Afternoon in Pyrgos. Private dinner overlooking the Aegean.' },
      { day: 9, title: 'Fly to Marrakech', description: 'Morning flight via Athens. Transfer to your riad in the medina. Arrive to a courtyard of fountains and orange trees.' },
      { day: 10, title: 'The medina — a living museum', description: 'Private walking tour with a local guide. The tanneries, the spice souk, the dyers\' quarter. Tea on a rooftop at dusk.' },
      { day: 11, title: 'Djemaa el-Fna and the evening city', description: 'Free morning. Evening in the great square — storytellers, musicians, smoke from a hundred grills.' },
      { day: 12, title: 'Cooking class and hammam', description: 'Morning at a traditional hammam. Afternoon cooking class in a riad kitchen. Dinner you prepared yourself.' },
      { day: 13, title: 'Palmeraie sunrise balloon', description: 'Pre-dawn drive. Sunrise hot-air balloon over the Palmeraie. Champagne breakfast on landing.' },
      { day: 14, title: 'Day trip to the Atlas foothills', description: 'Private 4WD into the Atlas Mountains. Berber village lunch. Back to the medina by evening.' },
      { day: 15, title: 'Free day — the medina at your pace', description: 'Last shopping, final hammam, unhurried lunch at a courtyard café. Farewell dinner at a rooftop restaurant.' },
      { day: 16, title: 'Depart Marrakech', description: 'Transfer to Marrakech Menara. End of journey.' },
    ],
    includes: ['All accommodation (4 – 5 star)', 'Private airport transfers', 'Daily breakfast, select dinners', 'Private guides at each destination', 'Internal flights', 'All entrance fees and activities listed'],
    tags: ['coastal', 'culture', 'cuisine', 'romance'],
    featured: true,
  },
  {
    slug: 'far-east-reverie',
    title: 'Far East Reverie',
    subtitle: 'Japan · Maldives',
    duration: '14 days',
    groupSize: '2 – 6',
    startingFrom: '₹9,60,000 per person',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80',
    ],
    destinations: ['kyoto', 'maldives'],
    description: 'Ancient Japanese ritual followed by Indian Ocean solitude. Culture, then silence.',
    longDescription: 'Begin in Kyoto, where a thousand years of ritual have refined beauty into something almost unbearable. Walk the Philosopher\'s Path at dawn. Drink matcha in a private tearoom. Then fly south to the Maldives, where the sea is the colour of stained glass and the horizon is unbroken. Two worlds that have nothing in common except a standard of beauty that quiets the mind.',
    itinerary: [
      { day: 1, title: 'Arrive Osaka, shinkansen to Kyoto', description: 'Meet your host at Kansai Airport. Bullet train to Kyoto. Check in to your ryokan in Higashiyama. Evening walk through lantern-lit alleys.' },
      { day: 2, title: 'Fushimi Inari at sunrise', description: 'Pre-dawn departure. The gates before the crowds arrive. Breakfast back at the ryokan. Afternoon free.' },
      { day: 3, title: 'Tea ceremony and Gion', description: 'Private tea ceremony in a historic machiya. Gion in the evening — your best chance of seeing a geisha.' },
      { day: 4, title: 'Arashiyama', description: 'Bamboo grove at dawn. Tenryūji garden. Boat ride on the Ōi River. Lunch at a riverside restaurant.' },
      { day: 5, title: 'Nishiki Market and temples', description: 'Morning at Nishiki — the kitchen of Kyoto. Afternoon temples at your own pace. Farewell kaiseki dinner.' },
      { day: 6, title: 'Nara day trip', description: 'Morning to Nara — deer, Tōdai-ji, afternoon light through cedar. Return to Kyoto for the last night.' },
      { day: 7, title: 'Fly to Malé, seaplane to resort', description: 'Morning flight via Tokyo or Kuala Lumpur. Seaplane transfer over the atolls. Arrive at your overwater villa at sunset.' },
      { day: 8, title: 'The lagoon — your first full day', description: 'No itinerary. The sea is right there. Snorkel from the villa steps. Read. Eat when you\'re hungry.' },
      { day: 9, title: 'Marine biology guided reef dive', description: 'Morning reef dive with a marine biologist. Coral identification. Hawksbill turtles in their feeding grounds.' },
      { day: 10, title: 'Sandbank excursion and fishing', description: 'Private sandbank picnic. Afternoon traditional line fishing on a dhoni. Catch cooked for dinner.' },
      { day: 11, title: 'Manta ray snorkel', description: 'Early morning manta ray snorkel at a known feeding station. Afternoon free — the hammock calls.' },
      { day: 12, title: 'Sunset cruise and stargazing', description: 'Evening catamaran. Champagne at sunset. Return after dark for stargazing on the villa deck.' },
      { day: 13, title: 'Last full day', description: 'Your choice. The spa, a second dive, a kayak at dawn. Dinner on the beach.' },
      { day: 14, title: 'Depart Malé', description: 'Seaplane to Malé. Connecting flight home. End of journey.' },
    ],
    includes: ['All accommodation', 'Ryokan dinners and breakfasts in Japan', 'All meals at resort in the Maldives', 'Seaplane transfers', 'All guided activities listed', 'Private guides in Kyoto'],
    tags: ['culture', 'ocean', 'zen', 'luxury'],
    featured: true,
  },
  {
    slug: 'southern-wilds',
    title: 'Southern Wilds',
    subtitle: 'Patagonia — Argentina & Chile',
    duration: '12 days',
    groupSize: '2 – 10',
    startingFrom: '₹7,20,000 per person',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    ],
    destinations: ['patagonia'],
    description: 'Torres del Paine, the Perito Moreno Glacier, and the silence of the southern steppe. Wild in every sense.',
    longDescription: 'Patagonia is one of those places that changes what travel means. At the base of Torres del Paine, with the three granite towers turning pink in the first light, you understand that most of what you thought was important is not. This journey takes you into the heart of the southern wilds: the glaciers, the steppe, the condors, and the estancias where gauchos still live as they have for two centuries.',
    itinerary: [
      { day: 1, title: 'Arrive Punta Arenas, transfer south', description: 'Meet your guide at Punta Arenas. Transfer to Puerto Natales. Dinner and briefing at the lodge.' },
      { day: 2, title: 'Enter Torres del Paine', description: 'Morning drive to the park. First views of the Cuernos. Afternoon hike to Lago Grey. Glacier camp check-in.' },
      { day: 3, title: 'Base of the Towers', description: 'Full day hike to the mirador at the base of Las Torres. The lakes change colour as you climb. Return by dusk.' },
      { day: 4, title: 'Valle del Francés', description: 'Trek through the French Valley. Hanging glaciers overhead. Lunch at the mountain hut. Return to camp.' },
      { day: 5, title: 'Grey Glacier zodiac cruise', description: 'Morning boat on Lago Grey among floating icebergs. Glacier face up close. Afternoon rest.' },
      { day: 6, title: 'Milodon Cave and condors', description: 'Visit the Cueva del Milodón. Condor sighting on the afternoon trail. Last sunset in the park.' },
      { day: 7, title: 'Cross to Argentina — El Calafate', description: 'Border crossing. Transfer to El Calafate. Patagonian estancia lunch en route. Check in to estancia lodge.' },
      { day: 8, title: 'Perito Moreno Glacier', description: 'Full day at the glacier. Walkways above the calving face. Afternoon ice trekking on the glacier surface.' },
      { day: 9, title: 'Estancia life', description: 'Wake on the steppe. Gaucho breakfast. Horse riding across Patagonian grassland. Asado lunch.' },
      { day: 10, title: 'Los Glaciares national park', description: 'Hike to Cerro Torre viewpoint. Condors. Wind. Silence. Return for Malbec and a fire.' },
      { day: 11, title: 'El Chaltén — the trekking capital', description: 'Day in El Chaltén. Fitz Roy trail to the viewpoint. Last Patagonian dinner.' },
      { day: 12, title: 'Depart El Calafate', description: 'Flight home. End of journey.' },
    ],
    includes: ['Lodge and estancia accommodation', 'All meals', 'Park entrance fees', 'Guided treks', 'Zodiac glacier cruise', 'Ice trek equipment', 'Internal transfers and transport'],
    tags: ['adventure', 'wilderness', 'trekking', 'nature'],
    featured: true,
  },
  {
    slug: 'india-sublime',
    title: 'India Sublime',
    subtitle: 'Rajasthan · Kerala · Andaman',
    duration: '18 days',
    groupSize: '2 – 8',
    startingFrom: '₹5,80,000 per person',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    destinations: [],
    description: 'Desert palaces, backwater silence, and a coral sea. Three Indias in eighteen days.',
    longDescription: 'India is not one country but several. This journey finds three of its most distinct souls. Begin in Rajasthan, where desert forts rise from golden sand and dinner is served in a maharaja\'s courtyard. Then south to Kerala, where the backwaters move so slowly you lose track of time on a houseboat under palm trees. End in the Andaman Islands, where the sea is a shade of blue that exists nowhere else in the country and the coral reefs are still close to pristine.',
    itinerary: [
      { day: 1, title: 'Arrive Jaipur', description: 'Transfer to your heritage haveli. Evening rooftop dinner above the Pink City.' },
      { day: 2, title: 'Jaipur — fort and bazaar', description: 'Amber Fort at dawn before crowds. City Palace. Afternoon in the bazaar with a local guide.' },
      { day: 3, title: 'Drive to Pushkar', description: 'Desert highway. Pushkar lake and ghats. Sunset at the Brahma temple. Stay in a camp at the dunes.' },
      { day: 4, title: 'Jaisalmer', description: 'Fly to Jodhpur, transfer to Jaisalmer. The Golden Fort at dusk. Dinner in a rooftop haveli.' },
      { day: 5, title: 'Desert camp', description: 'Camel ride at sunset to the dune camp. Dinner under an unclouded sky. Sleep in a luxury desert tent.' },
      { day: 6, title: 'Jodhpur — the Blue City', description: 'Mehrangarh Fort. The blue houses below. Lunch with a local family. Evening train to Udaipur.' },
      { day: 7, title: 'Udaipur — the lake city', description: 'Lake Pichola at sunrise. City Palace. Boat to the island palace restaurant. Last Rajasthan sunset.' },
      { day: 8, title: 'Fly to Kochi', description: 'Morning flight. Arrive Kochi. Fort Kochi walk. Chinese fishing nets at dusk. Spice market dinner.' },
      { day: 9, title: 'Munnar tea estates', description: 'Drive into the highlands. Tea estate walk with a guide. Mist in the valleys. Hill station dinner.' },
      { day: 10, title: 'Periyar wildlife reserve', description: 'Boat safari on Periyar lake. Elephant sighting. Spice plantation walk. Forest lodge.' },
      { day: 11, title: 'Alleppey — begin the backwaters', description: 'Transfer to your private houseboat. Cast off through the palm-lined canals. Lunch made on board.' },
      { day: 12, title: 'Backwater silence', description: 'A full day on the water. Village stops. Small temples. Swimming at a quiet bend.' },
      { day: 13, title: 'Kovalam beach', description: 'Disembark at Alleppey. Transfer to Kovalam. Afternoon on the beach. Ayurvedic treatment at the resort.' },
      { day: 14, title: 'Fly to Port Blair, Andaman', description: 'Morning flight. Reach Havelock Island by ferry. First look at the sea.' },
      { day: 15, title: 'Radhanagar Beach and reef', description: 'Morning snorkel on Neel Island reef. Afternoon on Radhanagar Beach. Sunset bonfire.' },
      { day: 16, title: 'Scuba at Elephant Beach', description: 'Guided dive at Elephant Beach reef. Afternoon free. Last Andaman dinner by the water.' },
      { day: 17, title: 'Ross Island and North Bay', description: 'Morning boat to abandoned colonial ruins. Afternoon at North Bay. Final evening on the island.' },
      { day: 18, title: 'Depart Port Blair', description: 'Transfer to airport. End of journey.' },
    ],
    includes: ['All accommodation throughout', 'Private houseboat for two nights', 'All meals in Rajasthan, houseboat and Andaman', 'Internal flights', 'Private guides throughout', 'All entrance fees and activities listed'],
    tags: ['culture', 'adventure', 'cuisine', 'ocean', 'heritage'],
    featured: false,
  },
];

export const getJourneyBySlug = (slug: string) =>
  journeys.find((j) => j.slug === slug);

export const getFeaturedJourneys = () =>
  journeys.filter((j) => j.featured);
