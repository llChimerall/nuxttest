<template>
  <div class='header'>
    <div class='inline1'><a class='logo' href="#">ScoutUp</a></div>
    <div class='inline2'><ul class='navigation'>
      <li><a href="#">Home</a></li>
      <li><a href="#">Teams</a></li>
      <li><a href="#">Players</a></li>
      <li><a href="#">Tournaments</a></li>
    </ul></div>
    <div class='inline3'><div class='login'>
      <a href="#">Sign In</a>
    </div>
    <div class='button'>
      <Button text="Register" />
    </div></div>
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
  margin: 0px 10px 0px 10px;
  padding: 10px 10px 10px 10px;
}
  .inline1, .inline2, .inline3, .inline4 {
    display: inline-block;
  }
  .inline1 {
    width: 10%;
  }
  .inline2 {
    width: 72%;
    text-align: center;
  }
  .inline3 {
    width: 18%;
  }
  .button {
    margin-left: 10px;
  }

/*
@media (min-width: 1000px) {
  .inline3 {
    width: 50%;
  }
}
*/
</style>
