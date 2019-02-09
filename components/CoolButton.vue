<template>
    <a class="button" href="http://localhost:3000/index6">
      <span class="buttonshadow">
        <span class="buttonwrap dark">
          <span class="buttonborder dark">
            A
          </span>
        </span>
        <span class="buttonwrap">
          <span class="buttonborder">
            <slot />
          </span>
        </span>
      </span>
    </a>
</template>

<style scoped lang="postcss">

$butlight: #ed8f84;
$butdark: #f2543c;

$lightButlight: color($butlight tint(15%));
$lightButdark: color($butdark tint(15%));

$darkButlight: color($butlight saturation(+10%) shade(5%));
$darkButdark: color($butdark saturation(+10%) shade(5%));

$DdarkButlight: color($darkButlight shade(10%));
$DdarkButdark: color($darkButdark shade(10%));


.button {
  display: inline-block;
  font-size: 1.2em;
  border-radius: 1.9em;
  background: linear-gradient(to bottom, #7abcff 0%,#4096ee 100%);
  padding: 0.5em;
  box-shadow: 0 1em 25px -3px rgba(0,0,0,0.2);
}

.buttonwrap {
  position: relative;
  display: flex;
  display: inline-block;
  padding: 0.4em 0.4em 0.4em 0;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0 1.4em 1.4em 0;
  background: $butlight;
  background: linear-gradient(to bottom, $butlight 0%,$butdark 100%);

  &.dark {
    border-radius: 1.4em 0 0 1.4em;
    padding: 0.4em 0 0.4em 0.4em;
    background: $darkButlight;
    background: linear-gradient(to bottom, $darkButlight 0%, $darkButdark 100%);

      &:before {
        right: 0;
        background: $DdarkButlight;
        background: linear-gradient(to bottom, $DdarkButlight 0%, $DdarkButdark 100%);
      }
  }

  &:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    top: 0;

    background: $lightButlight;
    background: linear-gradient(to bottom, $lightButlight 0%, $lightButdark 100%);
  }
}

.buttonborder {
  position: relative;
  height: 100%;
  display: inline-block;
  padding: 0.6em 1.2em;
  border-radius: 0 1em 1em 0;
  background: $butdark;
  background: linear-gradient(to bottom, $butdark 0%,$butlight 100%);

  &.dark {
  border-radius: 1em 0 0 1em;
  background: $darkButdark;
  background: linear-gradient(to bottom, $darkButdark 0%,$darkButlight 100%);

    &:before {
      right: 0;
      left: auto;
      background: $DdarkButdark;
      background: linear-gradient(to bottom, $DdarkButdark 0%, $DdarkButlight 100%);
    }
  }

    &:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 1px;
      top: 0;
      left: 0;
      background: $lightButdark;
      background: linear-gradient(to bottom, $lightButdark 0%, $lightButlight 100%);
    }
}

.buttonshadow {
  display: flex;
  border-radius: 1.4em;
  box-shadow: 0 0 1px 2px rgba(0,0,0,0.2);
}

</style>
