<template>
  <div class="bcounter">
    <button class="click" @click="minusone">&minus;</button>
    <span class="counter">{{ counter }}</span>
    <button class="click" @click="plusone">&plus;</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 1,
  }),

  methods: {
    plusone() {
      if (this.counter < 5) { 
        this.counter += 1
      }
    },
    minusone() {
      if (this.counter > 0) { 
        this.counter -= 1
      }
    } 
  }
}
</script>

<style scoped>
.bcounter {
  border: 1px solid #fff;
  border-radius: 300px;
  padding: 5px;
  display: inline-block;
  font-weight: bold;
}

.click {
  -webkit-appearance: none;
  border: none;
  background: none;
  color: #fff;
  font-weight: bold;
  padding: 4px 10px;
}

.counter {
  display: inline-block;
  min-width: 15px;
  text-align: center;
}
</style>