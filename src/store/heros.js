import axios from 'axios';

export default {
  state: {
    heros: null,
    error: null,
  },
  mutations: {
    SET_HEROS(state, heroList) {
      state.heros = heroList;
    },
    SET_ERROR(state, err) {
      state.error = err;
    },
  },
  actions: {
    async fetchHeros(context) {
      try {
        const { data } = await axios.get('https://swapi.dev/api/people/');

        context.commit('SET_HEROS', data);
      } catch (err) {
        context.commit('SET_ERROR', err);
      }
    },
  },
};
