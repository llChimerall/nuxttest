<template>
    <h2 class="title">{{ text }} 
      <sup v-if="newLabel">new</sup>
    </h2>
</template>

<script>
	export default {
		props: ['text', 'newLabel']
	}
</script>

<style scoped>
  .title {
   color: white;
   font-size: 20px;
  }

  .title:after {
    margin-top: 8px;
    max-width: 300px;
    display: block;
    content: '';
    height: 7px;
    background: #691eaf;
    background: -moz-linear-gradient(left, #691eaf 0%, #711294 0%, #7e14a4 47%, #ba6ad9 100%);
    background: -webkit-linear-gradient(left, #691eaf 0%,#711294 0%,#7e14a4 47%,#ba6ad9 100%);
    background: linear-gradient(to right, #691eaf 0%,#711294 0%,#7e14a4 47%,#ba6ad9 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#691eaf', endColorstr='#ba6ad9',GradientType=1 );
  }
</style>
