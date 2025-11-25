<template>
    <div class="post">
          <div class="postHead">
            <img :src="post.posterGender === 'Male' 
        ? require('../assets/img/male-icon-7907.jpg') 
        : post.posterGender === 'Female' 
        ? require('../assets/img/female-icon-7893.png')
        : require('../assets/img/userLogo.png')" class="UserLogo">
            <p>{{ post.posterName +' ('+post.posterAge+')'}}</p>
            <p>{{ post.postDate }}</p>
          </div>
          <img :src="post.image">
          <p>{{ post.postMessage }}</p>
          <button @click="addLike" alignment="middle">
                <img src="../assets/img/likeIcon.png" class="like">
                <text class="numberOfLikes">{{ post.postLikes }}</text>
          </button>      
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

<style>
</style>