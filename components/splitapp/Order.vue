<template>
  <table>
    <tbody>
      <tr v-for="food in items"
      :key="food.name">
      <td>
        <div class="foodpicture">
          <img 
          :src="food.picture" 
          class="picture"
          />
        </div>
      </td>
      <td class="quantity">
        {{ food.quantity }}
      </td>
      <td class="name">
        {{ food.name }}
      </td>
      <td class="price">
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

.foodpicture {
  max-height: 50px;
  width: 80px;
  border-radius: 10px;
  overflow: hidden;
}

.picture {
  max-width: 100%;
  display: block;
}

.quantity {
  padding: 30px 25px 30px 15px;
  position: relative;
  text-align: right;

  &:after {
    content: 'x';
    position: absolute;
    right: 10%;
    bottom: 40%;
  }
}

.name {
  padding-right: 70px;
}

.price {
  color: grey;
  text-align: right;
}

</style>