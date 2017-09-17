const baseApi: string = '/api';

const HeroService = {
  get(): Promise<HeroModel[]> {
    return new Promise((resolve, reject) => {
      fetch(`${baseApi}/heroes`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  },
  create(hero: HeroModel): Promise<HeroModel> {
    return new Promise((resolve, reject) => {
      fetch(`${baseApi}/hero`, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  },
  update(hero: HeroModel): Promise<HeroModel> {
    return new Promise((resolve, reject) => {
      fetch(`${baseApi}/hero`, {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  },

  destroy(hero: HeroModel) {
    return new Promise((resolve, reject) => {
      fetch(`${baseApi}/hero/${hero.id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  },
};

export default HeroService;
