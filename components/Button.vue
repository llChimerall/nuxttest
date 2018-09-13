<template>
    <a class="button" href="http://localhost:3000/index1">{{ text }}</a>
</template>

<script>
	export default {
		props: ['text',]
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
    border-radius: 15px;
    background: #9a51e0;
    background: -moz-linear-gradient(left, #9a51e0 0%, #c857f1 100%);
    background: -webkit-linear-gradient(left, #9a51e0 0%,#c857f1 100%);
    background: linear-gradient(to right, #9a51e0 0%,#c857f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9a51e0', endColorstr='#c857f1',GradientType=1 );
  }
</style>
