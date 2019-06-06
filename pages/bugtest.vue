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
        3
        </div>
        <div class="cart">
        <Bcart />
        </div>
      </div>
      <div class="main">
        <div class="describ">
        ab
          <div>
          Test
          </div>
        </div>
        <div class="buy">
        ac
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
import Bcart from '~/components/Bcart.vue'

	export default {
		layout: 'bug',
    components: {
      Blogo,
      Bsearch,
      Bcart
    }
	}
</script>

<style>
.gridwrapper {
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

.header {
  height: 128px;
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
}

.buy {
  width: 53%;
}

.contact {
  width: 53%;
  margin-left: auto;
}
</style>
