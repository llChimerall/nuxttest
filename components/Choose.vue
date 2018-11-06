<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Choose your game" />
    </header>
      <ul class="choice">
        <li class="inlinechoice">
        <button
          class="pointerleft"
          v-if="current === 0"
          @click="prev"
        ></button>
        <button
          class="pointerright"
          v-if="current === 0"
          @click="next"
          >
        </button>
          <div class="content">
            <Bsignup
            :blur="current !== 0"
            background="https://f4.bcbits.com/img/a0165407436_16.jpg"/>
          </div>
        </li>
        <li class="inlinechoice">
        <button
          class="pointerleft"
            v-if="current === 1"
              @click="prev"
        ></button>
        <button
          class="pointerright"
            v-if="current === 1"
              @click="next"
        >
        </button>
        <div class="content">
              <Bsignup
              :blur="current !== 1"
               background="https://image.ibb.co/hRg6Bp/image.jpg" />
        </div>
        </li>
        <li class="inlinechoice">
        <button
          class="pointerleft"
            v-if="current === 2"
              @click="prev"
        ></button>
        <button
          class="pointerright"
          v-if="current === 2"
            @click="next"
        >
        </button>
          <div class="content">
            <Bsignup
            :blur="current !== 2"
            background="https://static.gamespot.com/uploads/scale_medium/536/5360430/3064592-square+league+of+legends+box+art.jpg"/>
          </div>
        </li>
        <li class="inlinechoice">
        <button
          class="pointerleft"
            v-if="current === 3"
              @click="prev"
        ></button>
        <button
          class="pointerright"
          v-if="current === 3"
            @click="next"
          >
        </button>
          <div class="content">
            <Bsignup
            :blur="current !== 3"
            background="https://haste.net/wp-content/uploads/2017/11/Haste-Dota2-Cover.jpg"/>
          </div>
        </li>
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
    },

    data() {
      return {
        current: 1
      };
    },

    methods: {
      next() {
        this.current = this.current + 1;

        if (this.current > 3) {
          this.current = 0;
        }
      },

      prev() {
        this.current = this.current - 1;

        if (this.current < 0) {
          this.current = 3;
        }
      }
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
.inlinechoice {
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
  outline: none;
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
