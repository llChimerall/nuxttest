<template>
  <div class='back' :class="{'m-blur': blur}">
  <div class="more"><a href="#">Read more</a></div>
  <div class="bchoose"><Button text="Sign up" :gray="true" /></div>
  </div>
</template>


<script>
import Button from '~/components/Button.vue';

 export default {
    props: ['blur'],
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
  background-image: url(https://image.ibb.co/hRg6Bp/image.jpg);
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
.bchoose {
  display: block;
  margin-top: 185px;
  text-align: center;
  
}

</style>
