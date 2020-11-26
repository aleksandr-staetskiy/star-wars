import axios from 'axios';

export default {
  state: {
    heroes: null,
    error: null,
  },
  mutations: {
    SET_HEROES(state, heroList) {
      state.heroes = heroList;
    },
    SET_ERROR(state, err) {
      state.error = err;
    },
  },
  actions: {
    async fetchHeroes(context) {
      try {
        const { data } = await axios.get('https://swapi.dev/api/people/');

        context.commit('SET_HEROES', data);
      } catch (err) {
        context.commit('SET_ERROR', err);
      }
    },
  },
};
