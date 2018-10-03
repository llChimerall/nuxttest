<template>
  <div>
  <a class="more" href="#">Read more</a>
  <Button text="Sign up" :gray="true" />
  </div>
</template>


<script>
import Button from '~/components/Button.vue';

 export default {
    components: {
      Button
    }
 }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

.more {
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 10px;
  text-decoration: underline;
}
</style>
