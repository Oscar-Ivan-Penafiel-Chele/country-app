export interface Country{
  flags: Flag,
  name: string,
  nativeName: string,
  alpha3Code: string,
  population: number,
  region: string,
  subregion: string,
  capital: string,
  topLevelDomain: string[],
  currencies: Currency[],
  languages: Language[],
  borders: string[]
}

export interface Flag{
  svg: string;
  png: string;
}

export interface Currency{
  code: string,
  name: string,
  symbol: string,
}

export interface Language{
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}