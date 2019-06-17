<template>
  <div class="bcart">
    <button 
      class="bcarticon"
      :class="{bcarticon_add: add, bcarticon_small: small}"
      >
      <svg 
      class="carticon"
      :class="{carticon_small: small}" 
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M405.3 192L320 0h-42.7l85.3 192h42.7zM234.7 0H192l-85.3 192h42.7L234.7 0zm-192 469.3c0 23.5 19.1 42.7 42.7 42.7h341.3c23.5 0 42.7-19.1 42.7-42.7l21.3-192H21.3l21.4 192zm320-149.3h42.7L384 469.3h-42.7L362.7 320zm-128 0h42.7v149.3h-42.7V320zm-85.4 0l21.3 149.3H128L106.7 320h42.6zm341.4-106.7H21.3C9.5 213.3 0 222.9 0 234.7V256h512v-21.3c0-11.8-9.5-21.4-21.3-21.4z"/></svg>
    </button>
  </div>
</template>

<script>
export default {
		props: ['add', 'small']
	}
</script>

<style scoped>
.bcart {
  text-align: center;
  display: inline-block;
}

.bcarticon {
  border: 0px solid yellow;
  border-radius: 50%;
  padding: 9px 12px;
  background: #ffffff;
  position: relative;
}

.bcarticon_small {
  padding: 6px 8px;
}

.bcarticon_add:before {
  content: '';
  position: absolute;
  border: 2px solid #ffffff;
  border-radius: 50%;
  padding: 5px 5px;
  background: #ebb679;
  right: 0;
  top: 0;
}

.carticon {
  fill: #217e80;
  width: 1.5em;
  height: 1.5em;
}

.carticon_small {
  width: 1.5em;
  height: 1.5em;
  fill: black;
}
</style>