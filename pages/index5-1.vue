<template>
    <div class="forms">
    <h2 tabindex="0">Calculate the cost</h2>
      <form action="/index5" method="get">
        <input name="movingfrom" type="text" placeholder="Moving from Zip Code" /><br />
        <input name="movingfrom" type="text" value="123" placeholder="Moving from Zip Code" /><br />
        <input name="movingfrom" type="text" value="123" class=":focus" placeholder="Moving from Zip Code" /><br />
        <input name="movingfrom" type="text" value="123" class=":hover" placeholder="Moving from Zip Code" /><br />
        <input name="movingfrom" type="text" value="123" disabled placeholder="Moving from Zip Code" /><br />
        <!-- <input name="movingto" type="text" placeholder="Moving to Zip Code" /><br />

        <input name="movesize" type="text" placeholder="Move Size" /><br /> -->
        <input name="submit" tabindex="-1" type="submit" class=":active" value="Calculate" />
        <button type="button" class="button">Calculate</button>
      </form>
    </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Oswald:400,600');

$bg: orange;
$buttonBg: green;
$space: 10px;
$shift: 5px;

.forms {
  background-color: $bg;
  color: white;
  font-family: 'Oswald', sans-serif;
  text-align: center;
}
h2 {
  padding-bottom: 2em;
}

[type=text] {
  background-color: $bg;
  color: white;
  border: none;
  border-bottom: 2px solid grey;
  line-height: 4;
  text-align: center;

  &:focus,
  &.\3a focus {
    outline: none;
    border-bottom-color: $buttonBg;
  }

  &:hover,
  &.\3a hover {
    background: rgb(0,0,0);
    background: -moz-linear-gradient(top, $bg 72%, $bg 81%, $buttonBg 94%);
    background: -webkit-linear-gradient(top, $bg 72%,$bg 81%,$buttonBg 94%);
    background: linear-gradient(to bottom, $bg 72%,$bg 81%,$buttonBg 94%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$bg', endColorstr='$buttonBg',GradientType=0 );
  }

  &[disabled],
  &:disabled {
    border: 2px solid pink;
    color: pink;

    &:hover {
      background: $bg;
    }
  }
}

[type=submit] {
  /*
  opacity: 0;
  position: absolute;
  */
}

.button, [type=submit] {
  margin-top: 2em;
  display: inline-block;
  padding: $space calc($space * 6);
  border: 0px solid red;
  background-color: $buttonBg;
  color: white;
  transition: all 0.3s;

  &:focus {
    transform: translate(0, -2px);
    outline: none;
  }

  &:active {
    box-shadow: inset 0 $shift calc($space / 2) $shift rgba(0,0,0,0.3);
    padding-top: calc($space + $shift);
    padding-bottom: calc($space - $shift);
  }
}

[type=text], .button, [type=submit] {
  font-family: 'Oswald', sans-serif;
  width: 90%;
  font-weight: bold;
}
</style>
