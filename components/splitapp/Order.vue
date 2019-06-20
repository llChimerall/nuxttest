<template>
  <table>
    <tbody>
      <tr v-for="food in items"
      :key="food.name">
      <td><img :src="food.picture"></td>
      <td>{{ food.quantity }}</td>
      <td>{{ food.name }}</td>
      <td>{{ food.price }}</td>
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
</style>