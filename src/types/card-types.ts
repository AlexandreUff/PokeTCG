/* interface ISetImage {
    logo: string;
    symbol: string;
}

interface ISet {
    id: string;
    images: ISetImage;
    legalities: ILegality;
    name:  string;
    printedTotal: number;
    ptcgoCode: string;
    releaseDate: string;
    series:  string;
    total: number;
    updatedAt: string;
}

interface IWeakness {
    type: string;
    value: string;
}

interface IResistance {
    type: string;
    value: string;
}

interface IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}

interface IAbility {
    name: string;
    text: string;
    type: string;
}

export interface CardTypes {
    id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
  cardmarket?: ICardmarket;
} */

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string; // Pode ser uma string vazia ou um número
  text: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

interface Images {
  small: string;
  large: string;
}

interface TcgPlayer {
  url: string;
  updatedAt: string;
}

interface CardMarketPrices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}

interface CardMarket {
  url: string;
  updatedAt: string;
  prices: CardMarketPrices;
}

export enum ITypes {
  COLORLESS = "Colorless",
  DARKNESS = "Darkness",
  DRAGON = "Dragon",
  FAIRY = "Fairy",
  FIGHTING = "Fighting",
  FIRE = "Fire",
  GRASS = "Grass",
  LIGHTNING = "Lightning",
  METAL = "Metal",
  PSYCHIC = "Psychic",
  WATE = "Water",
}

enum IRarity {
  ACE_SPEC_RARE = "ACE SPEC Rare",
  AMAZING_RARE = "Amazing Rare",
  CLASSIC_COLLECTION = "Classic Collection",
  COMMON = "Common",
  DOUBLE_RARE = "Double Rare",
  HYPER_RARE = "Hyper Rare",
  ILLUSTRATION_RARE = "Illustration Rare",
  LEGEND = "LEGEND",
  PROMO = "Promo",
  RADIANT_RARE = "Radiant Rare",
  RARE = "Rare",
  RARE_ACE = "Rare ACE",
  RARE_BREAK = "Rare BREAK",
  RARE_HOLO = "Rare Holo",
  RARE_HOLO_EX = "Rare Holo EX",
  RARE_HOLO_GX = "Rare Holo GX",
  RARE_HOLO_LV_X = "Rare Holo LV.X",
  RARE_HOLO_STAR = "Rare Holo Star",
  RARE_HOLO_V = "Rare Holo V",
  RARE_HOLO_VMAX = "Rare Holo VMAX",
  RARE_HOLO_VSTAR = "Rare Holo VSTAR",
  RARE_PRIME = "Rare Prime",
  RARE_PRISM_STAR = "Rare Prism Star",
  RARE_RAINBOW = "Rare Rainbow",
  RARE_SECRET = "Rare Secret",
  RARE_SHINING = "Rare Shining",
  RARE_SHINY = "Rare Shiny",
  RARE_SHINY_GX = "Rare Shiny GX",
  RARE_ULTRA = "Rare Ultra",
  SHINY_RARE = "Shiny Rare",
  SHINY_ULTRA_RARE = "Shiny Ultra Rare",
  SPECIAL_ILLUSTRATION_RARE = "Special Illustration Rare",
  TRAINER_GALLERY_RARE_HOLO = "Trainer Gallery Rare Holo",
  ULTRA_RARE = "Ultra Rare",
  UNCOMMO = "Uncommon",
}

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: ITypes[];
  evolvesTo: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: IRarity;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
  };
  images: Images;
  tcgplayer: TcgPlayer;
  cardmarket: CardMarket;
}
