<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <HeroCard />
      </v-col>
      <v-col cols="6">
        <HeroCard />
      </v-col>
      <v-col cols="6">
        <HeroCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroCard from './HeroCard.vue';

export default {
  components: { HeroCard },
  name: 'CardList',

  data() {
    return {
    };
  },
};
</script>
