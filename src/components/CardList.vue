<template>
  <v-container>
    <v-row v-if="heroes.heroes ">
      <v-col
        cols="6"
        v-for="hero in heroes.heroes.results"
        :key="hero.created"
        >
        <HeroCard :character="hero" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeroCard from './HeroCard.vue';

export default {
  components: { HeroCard },
  name: 'CardList',

  data() {
    return {
    };
  },
  computed: {
    ...mapState(['heroes', ['heroes']]),
  },
  methods: {
    ...mapActions(['heros/fetchHeroes']),
  },
  created() {
    this.$store.dispatch('fetchHeroes');
  },
};
</script>
