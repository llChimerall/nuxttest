<template>
  <a class="card"
    :class="{
      'blue': blueGradient
    }"
    :style="{
      'background-image': `url(${background})`
      }"
    href="#"
  >
  <span class="text">
    {{text}}
  </span>
  </a>
</template>

<script>
export default {
  props: ['background', 'blueGradient', 'text'],
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli');

.card {
  color: white;
  display: block;
  padding: 200px 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  text-decoration: none;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  position: relative;
}


.card:before {
  content: "";
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

.blue:before {
  background: -moz-linear-gradient(top, rgba(30,87,153,0) 0%, rgba(68,126,185,0) 40%, rgba(125,185,232,1) 100%);
  background: -webkit-linear-gradient(top, rgba(30,87,153,0) 0%,rgba(68,126,185,0) 40%,rgba(125,185,232,1) 100%);
  background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(68,126,185,0) 40%,rgba(125,185,232,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#7db9e8',GradientType=0 );
}

.text {
  position: relative;
}
</style>
