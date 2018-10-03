<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Choose your game" />
    </header>
      <ul>
        <li><Bsignup text="Sign up" /></li>
        <li><Bsignup text="Sign up" /></li>
        <li><Bsignup text="Sign up" /></li>
        <li><Bsignup text="Sign up" /></li>
      </ul>
    

  </section>
</template>


<script>
import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';
import Bsignup from '~/components/Bsignup.vue';

 export default {
    components: {
      Title,
      Button,
      Bsignup
    }
 }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

</style>
