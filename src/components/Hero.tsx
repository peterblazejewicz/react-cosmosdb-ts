import './HeroModel';
import React, { SFC } from 'react';

interface HeroProp {
  hero: HeroModel;
  selectedHero?: SelectedHero;
  onSelect: (hero: HeroModel) => void;
}

const Hero: SFC<HeroProp> = props => (
  <li
    className={props.hero === props.selectedHero ? 'selected' : ''}
    onClick={() => props.onSelect(props.hero)}
  >
    <button className="delete-button">Delete</button>
    <div className="hero-element">
      <div className="badge">{props.hero.id}</div>
      <div className="name">{props.hero.name}</div>
      <div className="saying">{props.hero.saying}</div>
    </div>
  </li>
);

export default Hero;
