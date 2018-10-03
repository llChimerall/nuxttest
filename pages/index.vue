<template>
    <div class="container">
      <div class="header-wrapper">
        <Header />
      </div>
      <div class="join-wrapper">
        <Join />
      </div>
      <div class="choose-wrapper">
        <Choose />
      </div>
      <div class="feed-wrapper">
        <Feed />
      </div>
    </div>


</template>

<script>
import Feed from '~/components/Feed.vue';
import Join from '~/components/Join.vue';
import Header from '~/components/Header.vue';
import Choose from '~/components/Choose.vue';

export default {
  components: {
    Feed, 
    Join,
    Header,
    Choose
  }
}

</script>

<style>
.container {
  background-color: #333333;
}

.feed-wrapper {
  width: 33%;
  margin-left: 67%;
}


</style>

