<template>
  <h1><span class="boldtext">{{ boldText }}</span> {{ otherText }}</h1>
</template>

<script>
 export default {
   props: ['text'],

   computed: {
     splitText() {
       return (this.text || '').split(' ');
     },

     boldText() {
       return this.splitText[0];
     },

     otherText() {
       return this.splitText.slice(1).join(' ');
     }
   }
 }
</script>

<style scoped>
h1 {
  font-weight: normal;
}

.boldtext {
  font-weight: bold;
}
</style>