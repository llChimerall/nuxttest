<template>
  <div
    class="client"
    :class="{client_me: me}"
  >
    <template 
      v-if="order && name"
    >
      <div 
        class="avatar" 
        :style="{
          'background-image': 'url(' + avatar + ')'
        }"
      >
      </div>
      <span
        class="name"
      >
        {{ showname }}
      </span> 
      <span class="bill">
        {{ bill }}
      </span>
      <ul class="ulfood">
        <li v-for="food in order"
        :key="food.picture"
        class="foodpicture"
        >
          <img class="orderpicture" :src="food.picture">
        </li>
      </ul>
    </template>
    <button
      v-else
    >
      icon
    </button>
  </div>
</template>

<script>
 export default {
   props: ['avatar', 'name', 'order', 'me'],

   computed: {
    bill() {
      const sum = this.order.reduce((sum, food) => sum + food.price, 0);

      return '$' + (sum / 100).toFixed(2);
    },
    showname() {
      if (this.me) {
        return 'You';
      }

      return this.name;
    }
   }
 }
</script>

<style scoped>
.client {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 30px 10px rgba(0,0,0,0.1);
}

.client_me {
  background: #000;
  color: #fff;
}

.avatar {
  height: 50px;
  width: 50px;
  overflow: hidden;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.avatarimg {
  max-width: 100%;
  height: auto;
}

.foodpicture {
  max-height: 40px;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px; 
}

.orderpicture {
  max-width: 100%;
  display: block;
}

.ulfood {
  list-style: none;
  padding: 0;
}

.bill {
  font-weight: bold;
  margin-bottom: 5px;
}

.name {
  margin: 10px 0;
  font-size: 0.9em;
}

.name, .bill {
  display: block;
  text-align: center;
}
</style>