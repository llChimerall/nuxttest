<template>
  <div class="blot">
    <h2>Pachyteria eguestris</h2>
    <div>
      <div class="bugsize">
        <img alt="Bug size" src="/pics/bugsize.png" />
      </div>
      <ul class="bugdescrib">
        <li>Locality:</li>
        <p>Malaysia</p>
        <li>Sex:</li>
        <p>Male</p>
        <li>$5/99</li>
      </ul>
      <button>1</button>
      <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
import Bcart from '~/components/Bcart.vue'

export default {
    components: {
      Bcart
    }
	}
</script>

<style>
.blot {
  color: white;
  border: 1px solid black;
}

.bugsize {
}
</style>