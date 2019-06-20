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
  components: {
    Heading,
    Order
  },

  data: () => ({
    food: [{
      picture: '/pics/502.jpeg',
      quantity: 1,
      name: 'Le Pigeon Burger',
      price: '$9.50'
    },
    {
      picture: '/pics/502.jpeg',
      quantity: 1,
      name: 'Roasted potato Salad',
      price: '$15.00'
    },
    {
      picture: '/pics/502.jpeg',
      quantity: 1,
      name: 'Croissant',
      price: '$7.50'
    },
    {
      picture: '/pics/502.jpeg',
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

