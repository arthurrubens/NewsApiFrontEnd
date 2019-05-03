<template>
  <v-toolbar>
    <span class="likedCounter">{{likedCounter}}</span>
    <v-btn
      icon
      :class="{'liked': liked}"
      @click="onLikeIconClick"
      small
    >
      <v-icon small>fa-thumbs-up</v-icon>
    </v-btn>
    <span class="dislikedCounter">{{dislikedCounter}}</span>
    <v-btn
      icon
      :class="{'disliked': disliked}"
      @click="onDislikeIconClick"
      small
    >
      <v-icon small>fa-thumbs-down</v-icon>
    </v-btn>
    <v-spacer/>
    <ShareButton/>
    <v-btn
      icon
      :class="{'bookmarked': bookmarked}"
      @click="onBookmarkIconClick"
      small
    >
      <v-icon small>fa-bookmark</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import ShareButton from './ShareButton'
export default {
  name: 'BottomToolbar',
  components: {
    ShareButton
  },
  data() {
    return {
      likedCounter: Math.floor(Math.random() * 1000),
      liked: false,
      dislikedCounter: Math.floor(Math.random() * 1000),
      disliked: false,
      bookmarked: false
    }
  },

  methods: {
    onLikeIconClick() {
      this.liked = !this.liked;
      if(this.liked) {
        this.likedCounter++;
      } else {
        this.likedCounter--;
      }

      if(this.disliked) {
        this.dislikedCounter--;
      }
      this.disliked = false;
    },
    onDislikeIconClick() {
      this.disliked = !this.disliked;
      if(this.disliked) {
        this.dislikedCounter++;
      } else {
        this.dislikedCounter--;
      }
      
      if(this.liked) {
        this.likedCounter--;
      }
      this.liked = false;
    },
    onBookmarkIconClick() {
      this.bookmarked = !this.bookmarked;
    }
  }
}
</script>
<style scoped>
.liked,
.disliked,
.bookmarked {
  color: red;
}
</style>
