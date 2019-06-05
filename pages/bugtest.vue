<template>
  <div class="gridwrapper">
    <div class="grid">
      <div class="header">
        <div class="logo">
        <Blogo />
        </div>
        <div class="search">
        2
        </div>
        <div class="menu">
        3
        </div>
        <div class="cart">
        4
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

	export default {
		layout: 'bug',
    components: {
      Blogo
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
