<template>
  <div class='header'>
    <div class='flex'>
      <div class='flexitem'><a class='logo' href="#">ScoutUp</a></div>
      <div class='flexitem'>
      <ul class='navigation'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Teams</a></li>
        <li><a href="#">Players</a></li>
        <li><a href="#">Tournaments</a></li>
      </ul>
      </div>
      <div class='flexitem'>
      <div class='login'>
        <a href="#">Sign In</a>
      </div>
      </div>
      <div class='flexitem'>
      <div class='button'>
        <Button text="Register" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue';

export default {
  components: {
    Button
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

a {
  text-decoration: none;
  color: white;
}
.navigation a:hover {
  color: white;
}
.header, .navigation, .login, .button, .logo {
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
  font-family: 'Muli', sans-serif;
}
.navigation {
  vertical-align: middle;
}
.navigation li {
  display: inline;
}
.header {
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 1150px;
  margin: 0 auto;
}
.logo {
  font-size: 20px;
  color: white;
}
.login {
  
}
.login a {
  color: #c758f2;
}
.navigation a {
  color: #8a8a8a;
  margin: 0px 20px 0px 20px;
}
.butto {
    padding: 8px 35px 8px 35px ;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    border: 0px solid #691eaf;
    border-radius: 20px;
    background: #9a51e0;
    background: -moz-linear-gradient(left, #9a51e0 0%, #c857f1 100%);
    background: -webkit-linear-gradient(left, #9a51e0 0%,#c857f1 100%);
    background: linear-gradient(to right, #9a51e0 0%,#c857f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9a51e0', endColorstr='#c857f1',GradientType=1 );
  }
  .flex {
    display: box;
    display: flex;
  }
</style>
