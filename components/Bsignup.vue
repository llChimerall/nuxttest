<template>
  <div
    class='back'
    :class="{'m-blur': blur}"
    :style="{'background-image': `url(${background})`}"
  >
    <div class="gradient"></div>
    <div class="more"><a href="http://localhost:3000/index1">Read more</a></div>
    <div class="bchoose"><Button text="Sign up" :gray="true" /></div>
  </div>
</template>


<script>
import Button from '~/components/Button.vue';

 export default {
    props: ['blur', 'background'],
    components: {
      Button
    }
   }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

.more a {
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 10px;
  text-decoration: underline;
}
.more {
  text-align: right;
  margin-right: 15px;
}
.back {
  height: 270px;
  width: 220px;
  position: relative;
  background-position: center;
  border-radius: 10px;
  border: 0px solid #691eaf;
  background-size: cover;
}

.m-blur {
  filter: blur(2px);
  transform: scale(0.9);
  background-size: cover;
  transition: transform 0.3s
}
.m-blur:hover {
  transform: scale(1);
}
.m-blur .bchoose, .m-blur .more, .m-blur .gradient, .m-blur .pointerleft, .m-blur .pointerright {
   display: none;
}

.bchoose {
  display: block;
  margin-top: 195px;
  text-align: center;
  position: relative;
}
.gradient {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  border-radius: 10px;
  border: 0px solid #691eaf;
  background: -moz-linear-gradient(top, rgba(134,64,197,0) 2%, rgba(155,80,204,0) 46%, rgba(158,82,205,0) 52%, rgba(176,97,212,0.65) 91%, rgba(180,100,213,0.65) 100%);
  background: -webkit-linear-gradient(top, rgba(134,64,197,0) 2%,rgba(155,80,204,0) 46%,rgba(158,82,205,0) 52%,rgba(176,97,212,0.65) 91%,rgba(180,100,213,0.65) 100%);
  background: linear-gradient(to bottom, rgba(134,64,197,0) 2%,rgba(155,80,204,0) 46%,rgba(158,82,205,0) 52%,rgba(176,97,212,0.65) 91%,rgba(180,100,213,0.65) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#008640c5', endColorstr='#a6b464d5',GradientType=0 );
}
</style>
