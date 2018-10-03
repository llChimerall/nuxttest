<template>
  <div
    class='back'
    :class="{'m-blur': blur}"
    :style="{'background-image': `url(${background})`}"
  >
    <div class="more"><a href="#">Read more</a></div>
    <div class="bchoose"><Button text="Sign up" :gray="true" /></div>
    <div class="gradient"></div>
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
  margin-top: 30px;
  height: 270px;
  width: 220px;
  background-position: center;
  border-radius: 10px;
  border: 0px solid #691eaf;
}

.m-blur {
  filter: blur(2px);
}
.m-blur .bchoose {
   display: none; 
}
.m-blur .more {
   display: none; 
}
.m-blur .gradient {
   display: none; 
}
.bchoose {
  display: block;
  margin-top: 185px;
  text-align: center;
}
.gradient {
  display: inline-block;
  height: 270px;
  width: 220px;
  background-position: center;
  border-radius: 10px;
  border: 0px solid #691eaf;
  background: -moz-linear-gradient(top, rgba(134,64,197,0) 1%, rgba(134,64,197,0) 52%, rgba(134,64,197,0) 65%, rgba(134,64,197,0.63) 99%, rgba(134,64,197,0.65) 100%);
  background: -webkit-linear-gradient(top, rgba(134,64,197,0) 1%,rgba(134,64,197,0) 52%,rgba(134,64,197,0) 65%,rgba(134,64,197,0.63) 99%,rgba(134,64,197,0.65) 100%);
  background: linear-gradient(to bottom, rgba(134,64,197,0) 1%,rgba(134,64,197,0) 52%,rgba(134,64,197,0) 65%,rgba(134,64,197,0.63) 99%,rgba(134,64,197,0.65) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#008640c5', endColorstr='#a68640c5',GradientType=0 );
}
</style>
