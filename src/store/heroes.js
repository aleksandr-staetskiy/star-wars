import axios from 'axios';

export default {
  state: {
    heroes: null,
    error: null,
    isLoading: false,
  },
  mutations: {
    SET_HEROES(state, heroList) {
      state.heroes = heroList;
    },
    SET_ERROR(state, err) {
      state.error = err;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchHeroes({ commit }, page = 1) {
      try {
        commit('SET_LOADING', true);

        const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

        commit('SET_HEROES', data);
        commit('SET_LOADING', false);
      } catch (err) {
        commit('SET_ERROR', err);
      }
    },
  },
};
