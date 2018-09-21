<template>
  <div class='join'>
      <span class="bigtitle">
        Choose on the tournament with the team of a dream!
      </span>
      <span class="smiletitle">
        Tournaments, teams, players search - all in a single platform!
      </span>
      <a class="button" href="http://localhost:3000/index1">Join</a>
  </div>
</template>

<script>

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald:400,600');

.join {
  background-image: url(https://www.wallpaperup.com/uploads/wallpapers/2015/02/20/626689/61f9c4f1d69fb7adb0f55b39c94f93d9-1000.jpg);
  background-size: cover;
  padding: 150px 0px 100px 75px;
}
.bigtitle, .smiletitle {
  font-family: 'Oswald', sans-serif;
  display: block;
  color: white;
  font-weight: bold;
  width: 50%;
}
.bigtitle {
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 50px;
}
.smiletitle {
  margin-top: 10px;
  font-size: 20px;
}
.button {
    margin-top: 40px;
    display: inline-block;
    text-decoration: none;
    padding: 8px 50px 8px 50px ;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
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
