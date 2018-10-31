<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Choose your game" />
    </header>
      <ul class="choice">
        <li class="inlinechoice1"><Bsignup :blur="true" background="https://f4.bcbits.com/img/a0165407436_16.jpg"/></li>
        <li class="inlinechoice2">
        <button class="pointerleft"></button>
        <button class="pointerright"></button>
        <div class="content">
              <Bsignup background="https://image.ibb.co/hRg6Bp/image.jpg" />
        </div>
        </li>
        <li class="inlinechoice3"><Bsignup :blur="true" background="https://static.gamespot.com/uploads/scale_medium/536/5360430/3064592-square+league+of+legends+box+art.jpg"/></li>
        <li class="inlinechoice4"><Bsignup :blur="true" background="https://haste.net/wp-content/uploads/2017/11/Haste-Dota2-Cover.jpg"/></li>
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

.feed-title {
  margin-bottom: 30px;
}

.choice li {
  display: inline-block;
  vertical-align: top;
  position: relative;

}
.inlinechoice1, .inlinechoice2, .inlinechoice3, .inlinechoice4 {
  display: inline-block;
  width: 25%;

}

.pointerleft, .pointerright {
  width: 50px;
  height: 50px;
  border: 0;
  position: absolute;
  z-index: 1;
  margin-top: 100px;
  transform: scale(0.8);
  transition: transform 0.3s;
}

.pointerleft {
  background: url('https://image.ibb.co/fJ0q3e/l.png');
  background-size: cover;
  left: -60px;
}

.pointerright {
  background: url('https://image.ibb.co/ib7sGz/r.png');
  background-size: cover;
  left: 230px;
}

.pointerleft:hover, .pointerright:hover {
  transform: scale(1);
}

.pointerleft:focus, .pointerright:focus {
  transform: scale(1);
  filter: progid:DXImageTransform.Microsoft.Glow(color=#b464d5, strength=6);
}

.pointerleft:before, .pointerright:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  left: 0;
  top: 0;
  filter: blur(4px);
}

.pointerleft:before {
  background-image: url('https://image.ibb.co/fJ0q3e/l.png');
}

.pointerright:before {
  background-image: url('https://image.ibb.co/ib7sGz/r.png');
}
</style>
