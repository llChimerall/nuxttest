<template>
  <div class="bsearch">
    <span class="binput">
      <svg class="iconsearch" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="14" cy="14" r="12"/><path d="M23 23l7 7"/></g></svg>
      <input type="search" class="input" placeholder="Search...">
    </span>
  </div>
</template>

<script>
</script>

<style>
.bsearch {
  background-color: #ffffff;
  height: 100%;
  text-align: center;
}

.binput {
  border: 0px solid grey;
  border-radius: 20px;
  padding: 5px 2px;
  background-color: #f0f0f0;
}

.iconsearch {
  padding-left: 5px;
  padding-right: 10px;
  vertical-align: middle;
}

.input {
  border: none;
  background: none;
  border-radius: 20px;
  width: 50%;
}
</style>