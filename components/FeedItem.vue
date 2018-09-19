<template>
    <li class="feeditem">
      New player
      <a class="player" href="http://localhost:3000/index1">
        Bone_Crusher24
      </a>
      join
      <a class="name_action" href="http://localhost:3000/index1">
        CS:Go League
      </a>
      <time class="time">
        1m ago
      </time>
    </li>
</template>


<script>
	export default {
		props: ['text']
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
  }
  .feeditem {
    display: table-row;
  }
  .time {
    display: table-cell;
    vertical-align: bottom;
  }
</style>
