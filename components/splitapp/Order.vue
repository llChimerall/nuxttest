<template>
  <table>
    <tbody>
      <tr v-for="food in items"
      :key="food.name">
      <td>
        <img 
        :src="food.picture" 
        class="picture"
        />
      </td>
      <td class="quantity">
        {{ food.quantity }}
      </td>
      <td>
        {{ food.name }}
      </td>
      <td>
        {{ food.price }}
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
 export default {
   props: ['items']
 }
</script>

<style scoped>

.picture {
  height: 55px;
  width: 80px;
  border-radius: 5%;
}

.quantity {
  padding: 0 25px;
  position: relative;
  text-align: center;

  &:after {
    content: 'x';
    position: absolute;
    right: 10%;
    bottom: 37%;
  }
}


</style>