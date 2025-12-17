<template>
    <div class="mainPage">
      <aside></aside>
      <div id="posts">
          <div v-if="posts.length == 0"  class="loading">
                    Loading posts...
            </div>
            <div v-else v-for="post in posts" :key="post.id" class="postinfo">
                <Post :post="post" />
            </div>
            <button @click="resetLikes" class="resetButton">Reset Likes</button>
      </div>
      <aside></aside>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
    components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },

  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
}   
</script>