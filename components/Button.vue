<template>
    <a class="button" :class="{'m-big': big, 'm-gray': gray}" href="http://localhost:3000/index1">{{ text }}</a>
</template>

<script>
	export default {
		props: ['text', 'big', 'gray']
	}
</script>

<style scoped>
  .button {
    display: inline-block;
    text-decoration: none;
    padding: 6px 35px 8px 35px ;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    border: 0px solid #691eaf;
    border-radius: 25px;
    background: #9a51e0;
    background: -moz-linear-gradient(left, #9a51e0 0%, #c857f1 100%);
    background: -webkit-linear-gradient(left, #9a51e0 0%,#c857f1 100%);
    background: linear-gradient(to right, #9a51e0 0%,#c857f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9a51e0', endColorstr='#c857f1',GradientType=1 );
  }

  .m-big {
    font-size: 20px;
    margin-top: 40px;
    padding: 10px 60px 10px 60px;
  }

  .m-gray {
    font-size: 12px;
    padding: 8px 42px 8px 42px;
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    background: rgba(160,160,160,.75);
  }
</style>
