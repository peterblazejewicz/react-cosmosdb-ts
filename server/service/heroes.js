const Hero = require('../model/hero');
const ReadPreference = require('mongodb').ReadPreference;
const mongo = require('../mongo');
mongo
  .connect()
  .then(() => {
    console.log('connected');
  })
  .catch(error => {
    console.error(error.message);
  });

const get = (req, res) => {
  const heroes = [
    {
      id: 0,
      name: 'The Tick',
      saying: 'Spooon!',
    },
  ];
  res.json(heroes);
  return;
  const docquery = Hero.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(heroes => {
      res.json(heroes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const create = (req, res) => {
  const { id, name, saying } = req.body;

  const hero = new Hero({ id, name, saying });
  hero
    .save()
    .then(() => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const update = (req, res) => {
  const { id, name, saying } = req.body;

  Hero.findOne({ id })
    .then(hero => {
      hero.name = name;
      hero.saying = saying;
      hero.save().then(res.json(hero));
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const destroy = (req, res) => {
  const { id } = req.params;

  Hero.findOneAndRemove({ id })
    .then(hero => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = { get, create, update, destroy };
