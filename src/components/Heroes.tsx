import './HeroModel';
import autobind from 'autobind-decorator';
import Hero from './Hero';
import React, { Component, ChangeEvent } from 'react';
import EditHero from './EditHero';
import HeroService from '../service/heroes';

interface HeroesState {
  heroes: HeroModel[];
  selectedHero?: SelectedHero;
  addingHero: boolean;
}

class Heroes extends Component<{}, HeroesState> {
  state: HeroesState = {
    heroes: [],
    addingHero: false,
  };

  @autobind
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    let selectedHero = this.state.selectedHero;
    if (!selectedHero) {
      return;
    }
    selectedHero[event.target.name] = event.target.value;
    this.setState({
      selectedHero,
    });
  }

  @autobind
  handleEnableAddHero() {
    this.setState({
      addingHero: true,
      selectedHero: {
        id: 0,
        name: '',
        saying: '',
      },
    });
  }

  @autobind
  handleSave() {
    Math.random();
  }

  @autobind
  handleCancel() {
    this.setState({
      selectedHero: null,
      addingHero: false,
    });
  }

  @autobind
  handleSelect(hero: HeroModel) {
    this.setState({
      selectedHero: hero,
    });
  }

  componentDidMount() {
    HeroService.get().then(heroes => {
      this.setState({ heroes });
    });
  }
  render() {
    return (
      <div>
        <ul className="heroes">
          {this.state.heroes.map(hero => {
            return (
              <Hero
                key={hero.id}
                onSelect={this.handleSelect}
                hero={hero}
                selectedHero={this.state.selectedHero}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddHero}>Add New Hero</button>
          <EditHero
            addingHero={this.state.addingHero}
            selectedHero={this.state.selectedHero}
            onChange={this.handleChange}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Heroes;
