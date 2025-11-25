<template>
    <div class="post">
          <div class="postHead">
            <img src="../assets/img/userLogo.png" class="UserLogo">
            <p>{{ post.posterName +' ('+post.posterAge+')'}}</p>
            <p>{{ post.postDate }}</p>
          </div>
          <img :src="post.image">
          <p>{{ post.postMessage }}</p>
          <button @click="addLike">
                <img src="../assets/img/likeIcon.png" class="like">
          </button>
          <p class="numberOfLikes">{{ post.postLikes }}</p>          
        </div>
</template>

<script>
export default {
    props: {
    post: {
      type: Object,
    }
  },
  methods: {
    addLike() {
      this.$store.commit("addLike", this.post.id);
    },
  },
}        
</script>