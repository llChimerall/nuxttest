<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Choose your game" />
    </header>
      <ul class='choice'>
        <li><Bsignup text="Sign up" :blur="true" background="https://f4.bcbits.com/img/a0165407436_16.jpg"/></li>
        <li><Bsignup text="Sign up" background="https://image.ibb.co/hRg6Bp/image.jpg" /></li>
        <li><Bsignup text="Sign up" :blur="true" background="https://static.gamespot.com/uploads/scale_medium/536/5360430/3064592-square+league+of+legends+box+art.jpg"/></li>
        <li><Bsignup text="Sign up" :blur="true" background="https://haste.net/wp-content/uploads/2017/11/Haste-Dota2-Cover.jpg"/></li>
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


.choice li {
  display: inline-block;
  vertical-align: top;
}
</style>
