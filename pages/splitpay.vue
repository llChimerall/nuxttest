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
      <ul class="ulpeople">
        <li 
          v-for="(client, index) in people"
          :key="client.name"
          class="lipeople"
        >
          <Client
            :avatar="client.avatar"
            :name="client.name"
            :order="client.order"
            :me="index === 0"
          />
        </li>
        <li class="lipeople">
          <Client/>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Heading from '~/components/splitapp/Heading.vue'
import Order from '~/components/splitapp/Order.vue'
import Client from '~/components/splitapp/Client.vue'

export default {
  layout: 'split',
  components: {
    Heading,
    Order,
    Client
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
    }
    ],
    people: [{
      avatar: 'http://placekitten.com/143/234',
      name: 'Jeck',
      order: [{
        picture: '/pics/food4.jpg',
        quantity: 1,
        name: 'Hot cheese burito',
        price: 800,
      },
      {
        picture: '/pics/food3.jpg',
        quantity: 15,
        name: 'Croissant',
        price: 750,
      }],
    },
    {
      avatar: 'http://placekitten.com/152/201',
      name: 'Tom',
      order: [{
        picture: '/pics/food1.jpg',
        quantity: 1,
        name: 'Le Pigeon Burger',
        price: 950,
      }],

    }]
  })
}
</script>

<style>
.ulpeople {
  list-style: none;
  display: flex;
  padding: 0;
}

.lipeople {
  width: 25%;
  margin: 0 10px;
}
</style>

