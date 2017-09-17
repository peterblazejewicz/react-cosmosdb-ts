import './HeroModel';
import React, { Component } from 'react';
import Hero from './Hero';

interface HeroesState {
  heroes: HeroModel[];
}

class Heroes extends Component<{}, HeroesState> {
  state: HeroesState = {
    heroes: [],
  };

  componentDidMount() {
    fetch('/api/heroes')
      .then(result => result.json())
      .then(json => {
        this.setState({ heroes: json });
      });
  }
  render() {
    return (
      <div>
        <ul className="heroes">
          {this.state.heroes.map(hero => {
            return <Hero key={hero.id} hero={hero} />;
          })}
        </ul>
        <div className="editarea" />
      </div>
    );
  }
}

export default Heroes;
