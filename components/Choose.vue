<template>
  <section class="feed">
    <header class="feed-title">
      <Title text="Choose your game" />
    </header>
    <div class="back">
      <a class="more" href="#">Read more</a>
      <div class="morebutton">
      <a class="button" href="http://localhost:3000/index1">Sign up</a>
      </div>
    </div>

  </section>
</template>


<script>
import Title from '~/components/Title.vue';
import FeedItem from '~/components/FeedItem.vue';

 export default {
    components: {
      Title,
      FeedItem
    }
 }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

.more {
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 10px;
  text-decoration: underline;
  
}

.back {
  margin-top: 30px;
  background-image: url(https://image.ibb.co/hRg6Bp/image.jpg);
  height: 270px;
  width: 220px;
  background-position: center;
}

.button {
  font-size: 12px;
  display: inline-block;
  text-decoration: none;
  padding: 8px 42px 8px 42px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 20px;
  background: rgba(160,160,160,.75);
}
.morebutton {
  text-align: center;
  margin-top: 185px;
}
</style>
