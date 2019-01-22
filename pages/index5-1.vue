<template>
    <div class="forms">
    <h2>Calculate the cost</h2>
      <form action="/index5" method="get">
        <input name="movingfrom" type="text" placeholder="Moving from Zip Code" /><br />
        <input name="movingto" type="text" placeholder="Moving to Zip Code" /><br />
        
        <input name="movesize" type="text" placeholder="Move Size" /><br />
        <input name="submit" type="submit" value="Calculate" />
        <button class="button">Calculate</button>
      </form>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:400,600');

.forms {
  background-color: black;
  color: white;
  font-family: 'Oswald', sans-serif;
  text-align: center;
}
h2 {
  padding-bottom: 2em;
}

[type=text] {
  background-color: black;
  border: none;
  border-bottom: 2px solid grey;
  line-height: 4;
  text-align: center;
}
[type=submit] {
  opacity: 0;
  position: absolute;
}
.button {
  margin-top: 2em;
  display: inline-block;
  padding: 10px 60px 10px 60px;
  border: 0px solid red;
  background-color: orange;
  color: white;
  }

[type=text], .button {
  font-family: 'Oswald', sans-serif;
  width: 90%;
  font-weight: bold;
}
</style>
