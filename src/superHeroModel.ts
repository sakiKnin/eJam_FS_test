export interface SuperHero {
  id: number;
  name: string;
  superPower: string;
  humilityScore: number;
}

export let superHeroRules = {
  name: 'required',
  superPower: 'required',
  humilityScore: 'between:1,10',
};

export const superHeros: SuperHero[] = [
  {
    id: 1,
    name: 'Superman',
    superPower: 'Flight, Super Strength, Heat Vision',
    humilityScore: 90,
  },
  {
    id: 2,
    name: 'Batman',
    superPower: 'Genius Intelligence, Martial Arts, Stealth',
    humilityScore: 85,
  },
  {
    id: 3,
    name: 'Spider-Man',
    superPower: 'Wall-Crawling, Spider-Sense, Super Agility',
    humilityScore: 95,
  },
  {
    id: 4,
    name: 'Wonder Woman',
    superPower: 'Super Strength, Flight, Combat Mastery',
    humilityScore: 88,
  },
  {
    id: 5,
    name: 'Flash',
    superPower: 'Super Speed, Time Travel, Speed Healing',
    humilityScore: 80,
  },
  {
    id: 6,
    name: 'Iron Man',
    superPower: 'Genius Intellect, Advanced Armor Suit',
    humilityScore: 75,
  },
  {
    id: 7,
    name: 'Thor',
    superPower: 'Godlike Strength, Weather Control, Mjolnir',
    humilityScore: 70,
  },
  {
    id: 8,
    name: 'Hulk',
    superPower: 'Unlimited Strength, Regeneration',
    humilityScore: 60,
  },
  {
    id: 9,
    name: 'Doctor Strange',
    superPower: 'Sorcery, Time Manipulation, Multiverse Travel',
    humilityScore: 85,
  },
  {
    id: 10,
    name: 'Captain America',
    superPower: 'Super Soldier, Enhanced Agility, Shield Combat',
    humilityScore: 99,
  },
];
