<template>
  <div class="container">
    <Title text="Feed" />
    <Title text="Very long feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed" :newLabel="true"/>
    <Button text="Register" />

    <FeedItem
      v-for="(item, index) in feedItems"
      :key="index"
      :before="item.before"
    />
  </div>


</template>

<script>
import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';
import FeedItem from '~/components/FeedItem.vue';

const CSGO = {
  text: 'CS:GO league',
  href: 'http://blog.counter-strike.net/',
};

const Crusher = {
  text: 'Bone_Crusher24',
  href: 'http://yandex.ru'
};

export default {
  components: {
    FeedItem,
    Title,
    Button
  },

  data() {
    return {
      feedItems: [
        {
          before: 'New player',
          link1: Crusher,
          action: 'joins',
          link2: CSGO
        }, {
          before: 'Player',
          link1: Crusher,
          action: 'created team',
          link2: {
            text: 'BoneCrushers12',
            href: 'http://google.com'
          }
        }, {
          link1: {
            text: 'UK LoL League',
            href: '#'
          },
          action: "created new tournament",
          link2: {
            text: 'LoL2018',
            href: '#'
          }
        }, {
          before: 'Player',
          link1: {
            text: 'Bone_Destroyer_34'
          },
          action: 'join',
          link2: CSGO
        }
      ]
    }
  }
}


</script>

<style>
.container {
  background-color: #333333;
}

</style>

