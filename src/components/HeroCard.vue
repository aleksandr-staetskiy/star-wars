<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        dsfbdfbse
      </p>
    </v-card-text>
    <v-row >
      <v-col :cols="6">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
               <td>Gender</td>
                <td>{{ character }}</td>
              </tr>
              <tr>
               <td>Height</td>
                <td>{{ character }}</td>
              </tr>
              <tr>
               <td>Mass</td>
                <td>{{ character }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col :cols="4">
        <p>starships</p>
        <v-chip-group
            active-class="primary--text"
            column
          >
            <v-chip
              v-for="tag in tags"
              x-small
              :key="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
      </v-col>
    </v-row>
    <v-divider />
    <v-card-actions>
      <v-btn
        class="ml-auto"
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
      ],
    };
  },
};
</script>
