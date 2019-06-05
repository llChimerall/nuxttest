<template>
  <div class='wrapper'>
    <div class='container'>
      <nuxt/>
    </div>
  </div>
</template>

<style lang="postcss">
@import url('https://necolas.github.io/normalize.css/8.0.1/normalize.css');

html, body, #__layout, #__nuxt {
  height: 100%;
}

.wrapper {
  padding: 85px 45px;
  background-color: #ebb679;
  position: relative;
  min-height: 100%;

  &:before {
    content: '';
    position: absolute;
    background-color: #e84e4e;
    width: calc(798 / 3200 * 100%);
    height: calc(1360 / 2400 * 100%);
    left: 0;
    top: 0;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #217e80;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
  }
}

.container {
  position: relative;
  background-color: #ffffff;
  margin: 0 auto;
  z-index: 1;
  min-height: 425px;
}
</style>

