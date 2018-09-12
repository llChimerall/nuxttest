<template>
  <div class="container">
    <Title text="Feed" />
    <Title text="Very long feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed" :newLabel="true"/>
  </div>
</template>

<script>
import Title from '~/components/Title.vue';

export default {
  components: {
    Title
  }
}

</script>

<style>
.container {
  background-color: #333333;
}

</style>

