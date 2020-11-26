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
    async fetchHeroes({ commit }, page = 1) {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

        commit('SET_HEROES', data);
      } catch (err) {
        commit('SET_ERROR', err);
      }
    },
  },
};
