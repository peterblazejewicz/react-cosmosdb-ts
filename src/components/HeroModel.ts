interface HeroModel {
  id: number;
  name: string;
  saying: string;
}

type SelectedHero = HeroModel | null | undefined;
