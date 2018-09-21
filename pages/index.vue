<template>
    <div class="container">
      <div class="header-wrapper">
        <Header />
      </div>
      <div class="join-wrapper">
        <Join />
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

export default {
  components: {
    Feed, 
    Join,
    Header
  }
}

</script>

<style>
.container {
  background-color: #333333;
}

.feed-wrapper {
  width: 33%;
  margin-left: 66%;
}


</style>

