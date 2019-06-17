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
          <Bcart add="+" />
        </div>
      </div>
      <div class="main">
        <div class="describ">
          <div class="classification">
          classification
          </div>
          <Bdescrib />
        </div>
        <div class="bugimage">
          <img class="bugimagepic" src="/pics/Pachyteria_equestris.png">
        </div>
        <div class="buy">
          <Blot
            v-if="currentBug"
            v-bind="currentBug"
           />
          <div class="select">
            <button @click="bug = 0" class="selectbutton">
              <span v-if="bug === 0" class="thisselect">
                <div class="thisselect"></div>
              </span>
                <div class="notthisselect"></div>
            </button>
            <button @click="bug = 1" class="selectbutton">
              <span v-if="bug === 1" class="thisselect">
                <div class="thisselect"></div>
              </span>
                <div class="notthisselect"></div>
            </button>
            <button @click="bug = 2" class="selectbutton">
              <span v-if="bug === 2" class="thisselect">
                <div class="thisselect"></div>
              </span>
                <div class="notthisselect"></div>
            </button>
            <button @click="bug = 3" class="selectbutton">
              <span v-if="bug === 3" class="thisselect">
                <div class="thisselect"></div>
              </span>
                <div class="notthisselect"></div>
            </button>
          </div>
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
    },
  data: () => ({
    bug: 0,
      bugs: [{
        name: 'Pachyteria equestris',
        pic: '/pics/bugsize.png',
        sex: 'male',
        locality: 'Malaysia',
        price: '$5.99'
      },
      {
        name: 'Pachyteria equestris',
        pic: '/pics/bugsize4.png',
        sex: 'female',
        locality: 'India',
        price: '$4.56'
      },
      {
        name: 'Pachyteria equestris',
        pic: '/pics/bugsize2.png',
        sex: 'female',
        locality: 'Laos',
        price: '$7.04'
      },
      {
        name: 'Pachyteria equestris',
        pic: '/pics/bugsize3.png',
        sex: 'male',
        locality: 'Vietnam',
        price: '$3.73'
      },
      ]
  }), 

  computed: {
    currentBug() {
     // return this.bugs[0];

      return this.bugs[this.bug];
    }
  }
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:700&display=swap');
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
  padding-top: 26px;
  text-align: center;
}

.describ {
  width: 47%;
  position: relative;
}

.buy {
  width: 53%;
  position: relative;
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

.select {
  position: absolute;
  top: 90px;
  right: 0;
}

.selectbutton {
  border: none;
  background: none;
  display: block;
  padding: 14px 30px;
  margin-top: 14px;
  margin-bottom: 14px;
}

.thisselect {
  height: 30px;
  width: 2px;
  border: none;
  background: #fff;
  margin-top: 0;
  margin-bottom: 0;
}

.notthisselect {
  height: 2px;
  width: 2px;
  background: #fff;
}

.bugimage {
  margin-top: -30px;
  margin-left: -123px;
  margin-right: -128px;
}

.bugimagepic {
  width: 250px;
}
</style>
