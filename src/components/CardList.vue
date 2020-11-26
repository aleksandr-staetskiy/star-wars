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
    <loading-state :isLoading="heroes.isLoading" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeroCard from './HeroCard.vue';
import LoadingState from './LoadingState.vue';

export default {
  components: { HeroCard, LoadingState },
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
      this.$vuetify.goTo(0);
    },
  },
  async created() {
    if (this.$route.query.page) {
      await this.$store.dispatch('fetchHeroes', this.$route.query.page);
    } else {
      await this.$store.dispatch('fetchHeroes');
    }
  },
};
</script>
