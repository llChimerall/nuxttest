<template>
  <main>
    <div class="back">
    </div>
    <div class="heading">
      <Heading
        text="Split order"
      />
    </div>
    <div class="table">
      <Order
        :items="food"
      />
    </div>
    <div class="people">
    </div>
  </main>
</template>

<script>
import Heading from '~/components/splitapp/Heading.vue'
import Order from '~/components/splitapp/Order.vue'

export default {
  layout: 'split',
  components: {
    Heading,
    Order
  },

  data: () => ({
    food: [{
      picture: '/pics/food1.jpg',
      quantity: 1,
      name: 'Le Pigeon Burger',
      price: '$9.50'
    },
    {
      picture: '/pics/food2.jpg',
      quantity: 999,
      name: 'Roasted potato Salad Croissant Croissant Croissan',
      price: '$15.00'
    },
    {
      picture: '/pics/food3.jpg',
      quantity: 15,
      name: 'Croissant',
      price: '$7.50'
    },
    {
      picture: '/pics/food4.jpg',
      quantity: 1,
      name: 'Hot cheese burito',
      price: '$8.00'
    },
    ]
  })
}
</script>

<style>
</style>

