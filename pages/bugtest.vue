<template>
  <div class="gridwrapper">
    <div class="grid">
      <div class="header">
        <div class="logo">
          <Blogo />
        </div>
        <div class="search">
          <Bsearch />
        </div>
        <div class="menu">
          <Bmenu />
        </div>
        <div class="cart">
          <Bcart />
        </div>
      </div>
      <div class="main">
        <div class="describ">
          <div class="classification">
          classification
          </div>
          <Bdescrib />
        </div>
        <div class="buy">
          <Blot />
        </div>
      </div>
      <div class="footer">
        <div class="contact">
        --
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blogo from '~/components/Blogo.vue'
import Bsearch from '~/components/Bsearch.vue'
import Bmenu from '~/components/Bmenu.vue'
import Bcart from '~/components/Bcart.vue'
import Bdescrib from '~/components/Bdescrib.vue'
import Blot from '~/components/Blot.vue'

	export default {
		layout: 'bug',
    components: {
      Blogo,
      Bsearch,
      Bmenu,
      Bcart,
      Bdescrib,
      Blot
    }
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
@import url('https://code.iconify.design/1/1.0.2/iconify.min.js');

.gridwrapper {
  font-family: 'Montserrat', sans-serif;
  position: relative;

  &:before {
    content: '';
    height: 100%;
    width: 53%;
    right: 0;
    background-color: #e84e4e;
    position: absolute;
  }
}

.grid {
  position: relative;
}

.header, .main, .footer {
  display: flex;
}

.main {
  padding-top: 70px;
}

.header {
  height: 128px;
  font-size: 0.7em;
}

.logo {
  width: 22%;
}

.search {
  width: 25%;
}

.menu {
  width: 44%;
}

.cart {
  width: 9%;
}

.describ {
  width: 47%;
  position: relative;
}

.buy {
  width: 53%;
}

.contact {
  width: 53%;
  margin-left: auto;
}

.classification {
  position: absolute;
  transform: rotate(-90deg);
  top: 32%;
  left: -5%;
  color: #ffffff;
  font-size: 3em;
  text-shadow: #b3b3b3 1px 1px 0, #b3b3b3 -1px -1px 0, 
  #b3b3b3 -1px 1px 0, #b3b3b3 1px -1px 0;
}
</style>
