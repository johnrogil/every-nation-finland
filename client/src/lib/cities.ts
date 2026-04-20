// Every Nation Finland — City Data
// All major Finnish cities with church information

export interface City {
  slug: string;
  name: string;
  region: string;
  population: string;
  description: string;
  tagline: string;
  serviceTime: string;
  serviceLocation: string;
  address: string;
  pastor: string;
  email: string;
  phone: string;
  instagram: string;
  facebook: string;
  heroImage: string;
  accentColor: string;
  established: string;
  university: string;
}

export const cities: City[] = [
  {
    slug: "helsinki",
    name: "Helsinki",
    region: "Uusimaa",
    population: "684,000",
    description:
      "Every Nation Helsinki is a vibrant, multicultural church in the heart of Finland's capital. We are passionate about reaching the campus and the city with the gospel of Jesus Christ. Our diverse community welcomes students, young professionals, and families from all walks of life.",
    tagline: "Reaching the Capital for Christ",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Helsinki City Centre",
    address: "Mannerheimintie 1, 00100 Helsinki",
    pastor: "Pastor John Mäkinen",
    email: "helsinki@everynation.fi",
    phone: "+358 9 123 4567",
    instagram: "@enhelsinki",
    facebook: "Every Nation Helsinki",
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80",
    accentColor: "#1A56DB",
    established: "2018",
    university: "University of Helsinki, Aalto University",
  },
  {
    slug: "tampere",
    name: "Tampere",
    region: "Pirkanmaa",
    population: "260,000",
    description:
      "Every Nation Tampere is a campus-reaching church plant born out of a passion to reach the lost in Finland's second-largest city. We are an outreach group committed to discipling students and young professionals at Tampere University and Tampere University of Applied Sciences.",
    tagline: "One Foot on Campus, One Foot in the City",
    serviceTime: "Sundays at 10:30 AM",
    serviceLocation: "Tampere City Centre",
    address: "Hämeenkatu 14, 33100 Tampere",
    pastor: "Pastor Vincent Bitana",
    email: "tampere@everynation.fi",
    phone: "+358 3 234 5678",
    instagram: "@entampere",
    facebook: "Every Nation Tampere",
    heroImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80",
    accentColor: "#DC2626",
    established: "2023",
    university: "Tampere University, TAMK",
  },
  {
    slug: "turku",
    name: "Turku",
    region: "Southwest Finland",
    population: "198,000",
    description:
      "Every Nation Turku serves the oldest city in Finland with a fresh vision for the gospel. Located in the historic cultural capital of Finland, we reach students at the University of Turku and Åbo Akademi with the transforming power of Jesus Christ.",
    tagline: "Ancient City, New Life",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Turku City Centre",
    address: "Aurakatu 8, 20100 Turku",
    pastor: "Pastor Maria Virtanen",
    email: "turku@everynation.fi",
    phone: "+358 2 345 6789",
    instagram: "@enturku",
    facebook: "Every Nation Turku",
    heroImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80",
    accentColor: "#059669",
    established: "2020",
    university: "University of Turku, Åbo Akademi",
  },
  {
    slug: "oulu",
    name: "Oulu",
    region: "North Ostrobothnia",
    population: "215,000",
    description:
      "Every Nation Oulu reaches the north of Finland with the gospel. Known as the 'Silicon Valley of Finland', Oulu is a hub of technology and innovation. We are building a community of believers who are passionate about seeing their city and campus transformed.",
    tagline: "Northern Lights, Eternal Hope",
    serviceTime: "Sundays at 10:30 AM",
    serviceLocation: "Oulu City Centre",
    address: "Kirkkokatu 2, 90100 Oulu",
    pastor: "Pastor Mikael Korhonen",
    email: "oulu@everynation.fi",
    phone: "+358 8 456 7890",
    instagram: "@enoulu",
    facebook: "Every Nation Oulu",
    heroImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80",
    accentColor: "#7C3AED",
    established: "2021",
    university: "University of Oulu",
  },
  {
    slug: "jyvaskyla",
    name: "Jyväskylä",
    region: "Central Finland",
    population: "145,000",
    description:
      "Every Nation Jyväskylä is at the heart of Finland, both geographically and spiritually. We serve the vibrant student community of the University of Jyväskylä, one of Finland's largest universities, with a passion to see the next generation encounter Jesus.",
    tagline: "Heart of Finland, Heart for God",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Jyväskylä City Centre",
    address: "Kauppakatu 10, 40100 Jyväskylä",
    pastor: "Pastor Anna-Liisa Heikkinen",
    email: "jyvaskyla@everynation.fi",
    phone: "+358 14 567 8901",
    instagram: "@enjyvaskyla",
    facebook: "Every Nation Jyväskylä",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    accentColor: "#D97706",
    established: "2022",
    university: "University of Jyväskylä, JAMK",
  },
  {
    slug: "lahti",
    name: "Lahti",
    region: "Päijät-Häme",
    population: "120,000",
    description:
      "Every Nation Lahti serves the gateway city to the Finnish Lakeland. Known for its world-class sports facilities and environmental leadership, Lahti is a city on the move — and so is the church. We are committed to reaching students and young families with the gospel.",
    tagline: "Gateway to the Lakeland",
    serviceTime: "Sundays at 10:30 AM",
    serviceLocation: "Lahti City Centre",
    address: "Aleksanterinkatu 18, 15110 Lahti",
    pastor: "Pastor Petri Leinonen",
    email: "lahti@everynation.fi",
    phone: "+358 3 678 9012",
    instagram: "@enlahti",
    facebook: "Every Nation Lahti",
    heroImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80",
    accentColor: "#0891B2",
    established: "2022",
    university: "LUT University, LAB University of Applied Sciences",
  },
  {
    slug: "espoo",
    name: "Espoo",
    region: "Uusimaa",
    population: "321,000",
    description:
      "Every Nation Espoo is part of the greater Helsinki metropolitan area, serving Finland's second-largest city. Home to Aalto University and Nokia headquarters, Espoo is a global innovation hub. We are building a church that reaches the innovators and creators of tomorrow.",
    tagline: "Innovation City, Kingdom Vision",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Tapiola, Espoo",
    address: "Tapiontori 1, 02100 Espoo",
    pastor: "Pastor Samuel Järvinen",
    email: "espoo@everynation.fi",
    phone: "+358 9 789 0123",
    instagram: "@enespoo",
    facebook: "Every Nation Espoo",
    heroImage:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80",
    accentColor: "#BE185D",
    established: "2021",
    university: "Aalto University",
  },
  {
    slug: "vantaa",
    name: "Vantaa",
    region: "Uusimaa",
    population: "251,000",
    description:
      "Every Nation Vantaa serves the diverse and growing city adjacent to Helsinki. As the home of Helsinki Airport and a major logistics hub, Vantaa is one of Finland's most multicultural cities. We celebrate this diversity and reach every nation right here in Vantaa.",
    tagline: "Every Nation, Right Here",
    serviceTime: "Sundays at 10:30 AM",
    serviceLocation: "Tikkurila, Vantaa",
    address: "Asematie 5, 01300 Vantaa",
    pastor: "Pastor Grace Okonkwo",
    email: "vantaa@everynation.fi",
    phone: "+358 9 890 1234",
    instagram: "@envantaa",
    facebook: "Every Nation Vantaa",
    heroImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80",
    accentColor: "#065F46",
    established: "2020",
    university: "Laurea University of Applied Sciences",
  },
  {
    slug: "kuopio",
    name: "Kuopio",
    region: "North Savo",
    population: "122,000",
    description:
      "Every Nation Kuopio is nestled in the heart of the Finnish Lakeland, reaching students at the University of Eastern Finland. With its stunning natural surroundings and warm community spirit, Kuopio is a city ripe for revival. We are here to see it happen.",
    tagline: "Lakeland Revival",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Kuopio City Centre",
    address: "Kauppakatu 22, 70100 Kuopio",
    pastor: "Pastor Tiina Räsänen",
    email: "kuopio@everynation.fi",
    phone: "+358 17 901 2345",
    instagram: "@enkuopio",
    facebook: "Every Nation Kuopio",
    heroImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80",
    accentColor: "#1D4ED8",
    established: "2023",
    university: "University of Eastern Finland",
  },
  {
    slug: "joensuu",
    name: "Joensuu",
    region: "North Karelia",
    population: "78,000",
    description:
      "Every Nation Joensuu serves the gateway to North Karelia, a region rich in Finnish cultural heritage. The University of Eastern Finland's Joensuu campus brings thousands of students to this vibrant city. We are passionate about reaching them with the life-changing message of Jesus.",
    tagline: "Where East Meets West, Christ Unites All",
    serviceTime: "Sundays at 10:30 AM",
    serviceLocation: "Joensuu City Centre",
    address: "Rantakatu 14, 80100 Joensuu",
    pastor: "Pastor Markus Peltonen",
    email: "joensuu@everynation.fi",
    phone: "+358 13 012 3456",
    instagram: "@enjoensuu",
    facebook: "Every Nation Joensuu",
    heroImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80",
    accentColor: "#92400E",
    established: "2024",
    university: "University of Eastern Finland (Joensuu Campus)",
  },
  {
    slug: "vaasa",
    name: "Vaasa",
    region: "Ostrobothnia",
    population: "68,000",
    description:
      "Every Nation Vaasa serves Finland's bilingual coastal city on the Gulf of Bothnia. Known as the energy capital of Finland, Vaasa is a hub for renewable energy innovation. We are bringing the power of the Holy Spirit to this dynamic city and its diverse student community.",
    tagline: "Energy Capital, Spiritual Power",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Vaasa City Centre",
    address: "Hovioikeudenpuistikko 16, 65100 Vaasa",
    pastor: "Pastor Erik Lindqvist",
    email: "vaasa@everynation.fi",
    phone: "+358 6 123 4567",
    instagram: "@envaasa",
    facebook: "Every Nation Vaasa",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    accentColor: "#0C4A6E",
    established: "2023",
    university: "University of Vaasa, Vaasa University of Applied Sciences",
  },
  {
    slug: "rovaniemi",
    name: "Rovaniemi",
    region: "Lapland",
    population: "65,000",
    description:
      "Every Nation Rovaniemi reaches the Arctic Circle — the northernmost Every Nation church in the world. Located in the capital of Finnish Lapland, we serve a unique community of students, locals, and international visitors. The Northern Lights remind us daily of God's glory.",
    tagline: "Light in the Darkness of the North",
    serviceTime: "Sundays at 11:00 AM",
    serviceLocation: "Rovaniemi City Centre",
    address: "Koskikatu 9, 96200 Rovaniemi",
    pastor: "Pastor Aino Saariaho",
    email: "rovaniemi@everynation.fi",
    phone: "+358 16 234 5678",
    instagram: "@enrovaniemi",
    facebook: "Every Nation Rovaniemi",
    heroImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80",
    accentColor: "#4C1D95",
    established: "2024",
    university: "University of Lapland",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getFeaturedCities(): City[] {
  return cities.filter((c) =>
    ["helsinki", "tampere", "turku", "oulu", "jyvaskyla", "lahti"].includes(
      c.slug
    )
  );
}
