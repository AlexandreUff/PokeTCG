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

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesTo: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
  };
  images: Images;
  tcgplayer: TcgPlayer;
  cardmarket: CardMarket;
}
