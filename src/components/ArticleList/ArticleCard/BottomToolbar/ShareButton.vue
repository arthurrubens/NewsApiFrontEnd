<template>
    <v-speed-dial
      v-model="fab"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          small
          icon
        >
          <v-icon>fa-share</v-icon>
        </v-btn>
      </template>
      <v-btn
        icon
      >
        <v-icon color="#1da1f2">fab fa-twitter</v-icon>
      </v-btn>
      <v-btn
        icon
      >
        <v-icon color="#4267b2">fab fa-facebook-f</v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
  name: 'ShareButton',
  data() {
    return {
      fab: false
    }
  },

  methods: {
  }
}
</script>
<style scoped>
</style>
