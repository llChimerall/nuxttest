<template>
    <button 
      class="button"
      :class="{button_text: text}"
      >
      {{ text }}
      <span 
      class="iconify"
      data-icon="ant-design:check-outline" 
      data-inline="false">
      </span>
    </button>
</template>

<script>
export default {
		props: ['text']
	}
</script>

<style scoped>
.button {
  border: none;
  background: #fdbc41;
  padding: 25px 50px 20px 35px;
  border-radius: 15px;
  font-size: 1.8em;
}

.button_text {
  padding-left: 100px;
  padding-right: 100px;
}
</style>