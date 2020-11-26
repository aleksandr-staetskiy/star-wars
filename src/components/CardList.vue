<template>
  <v-container>
    <v-row v-if="heroes.heroes ">
      <v-col
        cols="6"
        v-for="(hero, index) in heroes.heroes.results"
        :key="hero.created"
        >
        <HeroCard
          :character="hero"
          :index="index + 1"
          />
      </v-col>
    </v-row>
    <v-pagination
      v-model="currPage"
      :length="pagination"
      @input="getHeroPage($event)"
    />
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
      currPage: 1,
    };
  },
  watch: {
    currPage(val) {
      this.$router.push({ query: { page: val } });
    },
  },
  computed: {
    ...mapState(['heroes', ['heroes']]),
    pagination() {
      if (this.heroes.heroes) {
        return Math.ceil(this.heroes.heroes.count / this.heroes.heroes.results.length);
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(['heros/fetchHeroes']),
    getHeroPage(page) {
      this.$store.dispatch('fetchHeroes', page);
    },
  },
  created() {
    if (this.$route.query.page) {
      this.$store.dispatch('fetchHeroes', this.$route.query.page);
    } else {
      this.$store.dispatch('fetchHeroes');
    }
  },
};
</script>
