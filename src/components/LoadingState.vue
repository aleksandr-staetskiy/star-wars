<template>
  <v-overlay :value="isLoading">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay>
</template>

<script>

export default {
  name: 'CardList',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
};
</script>
