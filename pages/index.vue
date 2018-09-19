<template>
  <div class="container">
    <Title text="Feed" />
    <Title text="Very long feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed" :newLabel="true"/>
    <Button text="Register" />
    <FeedItem/>
  </div>


</template>

<script>
import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';
import FeedItem from '~/components/FeedItem.vue';

export default {
  components: {
    FeedItem,
    Title,
    Button
  }
}


</script>

<style>
.container {
  background-color: #333333;
}

</style>

