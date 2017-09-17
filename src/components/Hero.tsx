import './HeroModel';
import React, { SFC } from 'react';

interface HeroProp {
  hero: HeroModel;
}

const Hero: SFC<HeroProp> = ({ hero }) => (
  <li>
    <button className="delete-button">Delete</button>
    <div className="hero-element">
      <div className="badge">{hero.id}</div>
      <div className="name">{hero.name}</div>
      <div className="saying">{hero.saying}</div>
    </div>
  </li>
);

export default Hero;
