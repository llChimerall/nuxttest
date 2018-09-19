<template>
  <div class="container">
    <div class="feed-wrapper">
      <Feed />
    </div>
  </div>


</template>

<script>
import Feed from '~/components/Feed.vue';

export default {
  components: {
    Feed
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

