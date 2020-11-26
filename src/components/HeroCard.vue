<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        {{ character.name }}
      </p>
    </v-card-text>
    <v-row >
      <v-col :cols="6">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
               <td>Gender</td>
                <td>{{ character.gender }}</td>
              </tr>
              <tr>
               <td>Height</td>
                <td>{{ character.height }}</td>
              </tr>
              <tr>
               <td>Mass</td>
                <td>{{ character.mass }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col :cols="4">
        <p>starships</p>
        <template v-if="tags">
          <v-chip-group
            v-if="tags.length"
            active-class="primary--text"
            column
          >
            <v-chip
              v-for="tag in tags"
              x-small
              :key="tag.created"
            >
              {{ tag.name }}
            </v-chip>
          </v-chip-group>
          <v-chip
            v-else
            x-small
            color="red"
            class="ma-2"
          >
            I haven't starship (
          </v-chip>
        </template>
      </v-col>
    </v-row>
    <v-divider />
    <v-card-actions>
      <v-btn
        class="ml-auto"
        text
        color="teal accent-4"
        @click="$router.push(`about/${index}`)"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardList',
  props: {
    character: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.getHeroStarship();
  },
  methods: {
    async getHeroStarship() {
      const ships = [];
      try {
        this.character.starships.forEach(async (item) => {
          const { data } = await axios.get(item);
          ships.push(data);
        });

        this.tags = ships;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
