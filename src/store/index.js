import Vue from 'vue';
import Vuex from 'vuex';
import heroes from './heroes';
import hero from './hero';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    heroes,
    hero,
  },
});
