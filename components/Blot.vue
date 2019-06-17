<template>
  <div class="blot">
    <div class="namebug">
      <h2>{{ name }}</h2>
    </div>
    <div>
      <div class="bugsizediv">
        <img alt="Bug size" class="bugsize" :src="pic" />
      </div>
      <div class="bugdescrib">
        <ul class="bugdescribul">
          <li>Locality: <span class="bugdescribul_describ">{{ locality }}</span></li>
          <li>Sex: <span class="bugdescribul_describ">{{ sex }}</span></li>
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
  padding-left: 250px;
}

.namebug {
  width: 75%;
  padding-bottom: 50px;
}

h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 3em;
  line-height: 1em;
  margin: 0;
}

.bugsizediv {
  display: inline-block;
  padding-right: 40px;
}

.bugsize {
  width: 100px;
}

.bugdescrib {
  display: inline-block;
  vertical-align: top;
  padding-bottom: 80px;
}

.bugdescribul {
  list-style: none;
  padding-left: 0;
  font-size: 0.9em;
}

.bugdescribul li {
  padding-bottom: 10px;
}

.bugdescribul_describ {
  font-weight: bold;
  text-transform: capitalize;
}

.price {
  font-size: 1.8em;
  font-weight: bold;
}

.addcart {
  border: 0px solid yellow;
  border-radius: 300px;
  padding: 6px 7px 10px 27px;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin-left: 15px;
}

.icon {
  padding-left: 15px;
}
</style>