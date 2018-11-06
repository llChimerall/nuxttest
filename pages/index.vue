<template>
    <div class="container">
      <div class="header-wrapper">
        <Header />
      </div>
      <div class="join-wrapper">
        <Join />
      </div>
      <div class="choose-wrapper">
        <Choose />
      </div>
      <div class="card-wrapper">
        <div class="cards-layout">
          <div class="cards-column">
            <Card
              background="/pics/epic.jpg"
              blueGradient="true"
              text='Take part in an epic battle'
              class="card-main"
             />
          </div>
          <div class="cards-column">
           <Card
             background="/pics/epic.jpg"
             text='League of Legends Big Tournament'
             class="aux-card"
            />
            <Card
              background="/pics/epic.jpg"
              text='League of Legends Big Tournament'
             />
          </div>
          </div>
      </div>
      <div class="feed-wrapper">
        <Feed />
      </div>
    </div>


</template>

<script>
import Feed from '~/components/Feed.vue';
import Join from '~/components/Join.vue';
import Header from '~/components/Header.vue';
import Choose from '~/components/Choose.vue';
import Card from '~/components/Card.vue';

export default {
  components: {
    Feed,
    Join,
    Header,
    Choose,
    Card
  }
}

</script>

<style>
.container {
  background-color: #333333;
}

.feed-wrapper {
  width: 33%;
  margin-left: 67%;
}

.cards-layout {
  display: flex;
}

.card-main {
  height: 100%;
}

.cards-column {
 padding: 10px;
}

.aux-card {
 margin-bottom: 20px;
}

</style>
