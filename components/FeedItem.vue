<template>
    <li class="feeditem">
      {{ before }}
      <a class="player" v-if="link1" :href="link1.href">
        {{ link1.text }}
      </a>
      {{ action }}
      <a class="name_action" v-if="link2" :href="link2.href">
        {{ link2.text }}
      </a>
      <time class="time">
        1m ago
      </time>
    </li>
</template>


<script>
	export default {
		props: ['before', 'link1', 'action', 'link2']
	}
</script>

<style scoped>
  .name_action {
    text-decoration: none;
    color: #bb6cd9;
    font-weight: bold;
  }
  .player {
    text-decoration: none;
    color: white;
    font-weight: bold;    
  }
  .time {
    color: #4f4f4f;
    font-size: 0.5em;
    font-weight: bold; 
    display: table-cell;
    vertical-align: bottom;
    width: 20%;
  }
  .feeditem {
    display: table-row;
    color: white;
    width: 80%;
  }
</style>
