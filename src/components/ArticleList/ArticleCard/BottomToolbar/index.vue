<template>
  <v-toolbar>
    <v-btn
      icon
      :class="{'liked': liked}"
      @click="onLikeIconClick"
    >
      <v-icon>fa-heart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BottomToolbar',
  data: function() {
    return {
      liked: false
    }
  },

  methods: {
    onLikeIconClick() {
      this.liked = !this.liked;
    }
  }
}
</script>
<style scoped>
.liked {
  color: red;
}
</style>
