<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Feed" />
    </header>

    <ul class="feed-items">
      <FeedItem
        v-for="(item, index) in feedItems"
        :key="index"
        :before="item.before"
        :link1='item.link1'
        :action='item.action'
        :link2='item.link2'
      />
    </ul>
  </section>
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

  const Seriy_Gom4 = {
    text: 'Seriy_Gom4',
    href: 'http://ya.ru'
  };

  const Sashka_34 = {
    text: 'Sashka_34',
    href: 'http://google.ru'
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
          }, {
            before: 'New player',
            link1: Seriy_Gom4,
            action: 'join',
            link2: CSGO
          }, {
            before: 'New player',
            link1: Sashka_34,
            action: 'join',
            link2: CSGO
          },
        ]
      }
    }
  }
</script>
