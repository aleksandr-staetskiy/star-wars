import axios from 'axios';

export default {
  state: {
    hero: null,
    error: null,
    films: null,
  },
  mutations: {
    SET_HEROES(state, hero) {
      state.hero = hero;
    },
    SET_ERROR(state, err) {
      state.error = err;
    },
    SET_FILMS(state, films) {
      state.films = films;
    },
  },
  actions: {
    async getHero({ commit }, id) {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);

        commit('SET_HEROES', data);
      } catch (err) {
        commit('SET_ERROR', err);
      }
    },
    async getHeroFilms({ commit, state }) {
      const filmArr = [];
      try {
        state.hero.films.forEach(async (item) => {
          const { data } = await axios.get(item);
          filmArr.push(data);
        });

        commit('SET_FILMS', filmArr);
      } catch (err) {
        commit('SET_ERROR', err);
      }
    },
  },
};
