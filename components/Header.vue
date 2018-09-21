<template>
  <div class='header'>
    <a class='logo' href="#">ScoutUp</a>
    <div class='menu'>
      <a href="#">Home</a>
      <a href="#">Teams</a>
      <a href="#">Players</a>
      <a href="#">Tournaments</a>
    </div>
    <div class='login'>
      <a href="#">Sign In</a>
    </div>
    <div class='button'>
      <a href="#">Register</a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli');

a {
  text-decoration: none;
  color: white;
}
.menu a:hover {
  color: white;
}
.header, .menu, .login, .button, .logo {
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
  font-family: 'Muli', sans-serif;
}
.header {
  height: 50px;
}
.logo {
  font-size: 20px;
  color: white;
}
.login a {
  color: #c758f2;
}
.menu a {
  color: #8a8a8a;
  margin: 0px 20px 0px 20px;
}
.button {
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
</style>
