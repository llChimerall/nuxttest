<template>
  <div class="blot">
    <h2>{{ name }}</h2>
    <div>
      <div class="bugsizediv">
        <img alt="Bug size" class="bugsize" :src="pic" />
      </div>
      <div class="bugdescrib">
        <ul class="bugdescribul">
          <li>Locality: <span>{{ locality }}</span></li>
          <li>Sex: <span>{{ sex }}</span></li>
        </ul>
        <span class="price">{{ price }}</span>
      </div>
      <div>
        <Bcounter />
        <button class="addcart">Add to cart <span class="icon"><Bcart small="small" /></span></button>
      </div>
    </div>
  </div>
</template>

<script>
import Bcart from '~/components/Bcart.vue'
import Bcounter from '~/components/Bcounter.vue' 

export default {
  props: ['name', 'pic', 'sex', 'locality', 'price'],
    components: {
      Bcart,
      Bcounter
    }
	}
</script>

<style scoped>
.blot {
  color: white;
  border: 1px solid black;
  padding-left: 250px;
}

.bugsizediv {
  display: inline-block;
}

.bugsize {
  width: 100px;
}

.bugdescrib {
  display: inline-block;
  border: 1px solid black;
  vertical-align: top;
}

.addcart {
  border: 0px solid yellow;
  border-radius: 300px;
  padding: 6px 7px 6px 27px;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.6em;
  margin-left: 15px;
}

.icon {
  padding-left: 15px;
}
</style>