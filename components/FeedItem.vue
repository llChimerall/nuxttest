<template>
      <li class="feeditem">
        <div class="feedcell">
          <p class ="feedcell2">
          {{ before }}
          <a class="player" v-if="link1" :href="link1.href">
            {{ link1.text }}
          </a>
          {{ action }}
          <a class="name_action" v-if="link2" :href="link2.href">
            {{ link2.text }}
          </a>
        </p>
        <time class="time">
          1m ago
        </time>
      </div>
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
    font-size: 0.7em;
    font-weight: bold; 
    display: table-cell;
    vertical-align: bottom;
    width: 15%;
    padding-bottom: 20px;
  }
  .feeditem {
    display: table-row;
    color: white;
    width: 80%;
    border-bottom: 1px solid grey;
    list-style: none;
    line-height: 2em;
  }
  .feedcell2 {
    display: table-cell;
    padding-bottom: 15px;
    padding-top: 15px;
  }
</style>
