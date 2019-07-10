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
      </ul>
      <div class="addpeople">
          <div class="addbutton">
            <Client/>
          </div>
      </div>
      <div class="ok">
        <div class="hidden">
          <Button />
        </div>
      </div>
    </div>
    
    <div class="next">
      <Button text="text"></button>
    </div>
  </main>
</template>

<script>
import Heading from '~/components/splitapp/Heading.vue'
import Order from '~/components/splitapp/Order.vue'
import Client from '~/components/splitapp/Client.vue'
import Button from '~/components/splitapp/Button.vue'

export default {
  layout: 'split',
  components: {
    Heading,
    Order,
    Client,
    Button
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
    },
    {
      avatar: 'http://placekitten.com/143/234',
      name: 'Anna',
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
      avatar: 'http://placekitten.com/143/234',
      name: 'Stive',
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
    }]
  })
}
</script>

<style>
.people {
  margin-right: -35px;
  margin-left: -65px;
  position: relative;
}

.ulpeople {
  list-style: none;
  padding: 0;
  white-space: nowrap;
  overflow: auto;
  padding: 20px 140px 20px 65px;
}

.lipeople {
  width: 120px;
  margin: 0 15px;
  display: inline-block;
  vertical-align: top;
}

.lipeople:first-child {
  margin-left: 0;
  }

.addpeople {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 110px;
  padding-top: 20px;
  overflow: hidden;
  background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 54%, rgba(255,255,255,1) 100%);
  background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 54%,rgba(255,255,255,1) 100%);
  background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 54%,rgba(255,255,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 );

}

.addbutton {
  width: 100px;
  margin-left: auto;
  margin-right: -10px;
}

.ok {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90px;
}

.hidden {
  overflow: hidden;
}
</style>

