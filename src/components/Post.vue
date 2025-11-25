<template>
    <div class="post">
          <div class="postHead">
            <img :src="post.posterGender === 'Male' 
        ? require('../assets/img/male-icon-7907.jpg') 
        : post.posterGender === 'Female' 
        ? require('../assets/img/female-icon-7893.png')
        : require('../assets/img/userLogo.png')" class="UserLogo">
            <p>{{ post.posterName +' ('+post.posterAge+')'}}</p>
            <p class="postDate">{{ post.postDate }}</p>
          </div>
          <img :src="post.image">
          <p>{{ post.postMessage }}</p>
          <button @click="addLike">
                <img src="../assets/img/likeIcon.png" class="like">
                <text class="numberOfLikes"> {{ post.postLikes }}</text>
          </button>
          <div v-if="post.posterTransport == 'no'"  class="carIconDiv" style="color:red;">
              <img class="carIcon" src="../assets/img/carIcon.png" >
              <p>{{ post.posterDesignation }}</p>
          </div>
          <div v-if="post.posterTransport == 'yes'"  class="carIconDiv">
              <img class="carIcon" src="../assets/img/carIcon.png" style="background:green;" >
              <p class="carIconDesignation">{{ post.posterDesignation }}</p>
            </div>
              
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
button {
  align-items: left;
  align-self: self-start;
}
</style>