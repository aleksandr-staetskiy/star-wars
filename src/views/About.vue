<template>
  <v-container>
    <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-toolbar-title>{{ hero.hero.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        primary
        @click="$router.go(-1)"
      >
        back to list
      </v-btn>
    </v-toolbar>
  </v-card>
    <v-row>
      <v-col :cols="6">
        <v-simple-table>
          <template v-slot:default v-if="hero.hero">
            <tbody>
              <tr>
               <td>Birth Year</td>
                <td>{{ hero.hero.birth_year }}</td>
              </tr>
              <tr>
               <td>Gender</td>
                <td>{{ hero.hero.gender }}</td>
              </tr>
              <tr>
               <td>Height</td>
                <td>{{ hero.hero.height }}</td>
              </tr>
              <tr>
               <td>Mass</td>
                <td>{{ hero.hero.mass }}</td>
              </tr>
              <tr>
               <td>Hair Color</td>
                <td>{{ hero.hero.hair_color }}</td>
              </tr>
              <tr>
               <td>Skin Color</td>
                <td>{{ hero.hero.skin_color }}</td>
              </tr>
              <tr>
               <td>Eye Color</td>
                <td>{{ hero.hero.eye_color }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col :cols="6">
        <h2>Films</h2>
        <v-chip-group
            active-class="primary--text"
            column
          >
            <v-chip
              v-for="item in hero.films"
              :key="item.created"
            >
              {{ item.title }}
            </v-chip>
          </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'About',

  data() {
    return {
      films: null,
    };
  },
  computed: {
    ...mapState(['hero', ['hero']]),
  },
  methods: {
    ...mapActions(['heros/getHero', 'heros/getHeroFilms']),
  },
  async created() {
    const { id } = this.$route.params;
    if (id) {
      await this.$store.dispatch('getHero', id);
      await this.$store.dispatch('getHeroFilms');
    }
  },
  mounted() {
  },
};
</script>
