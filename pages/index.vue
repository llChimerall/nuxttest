<template>
  <div class="container">
    <Title text="Feed" />
    <Title text="Very long feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed" :newLabel="true"/>
    <Button text="Register" />
  </div>


</template>

<script>
import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';

export default {
  components: {
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

