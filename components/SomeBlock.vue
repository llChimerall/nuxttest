<template>
<div class="Italy">
  <div class="Italy__main">
    <p class="Italy__rating">
    Overall rating:
    </p>
      <div class="rating">
        <div class="rating__empty"> 
          <div class="rating__full rating__full_stars_4">   
            4/5
          </div>
        </div>
      </div>
    <h1 class="Italy__name">
    {{ name }}
    </h1>
  </div>
</div>
</template>

<script>
export default {
     props:  ['name', 'rating']
}
</script>

<style>
 .Italy {
    background-image: url(https://placekitten.com/g/500/600);
    background-color: black;
    display: block;
  }
    
  .Italy__main {
    text-transform: uppercase;
    color: white;
    margin: 7%;
  }
    
  .Italy__rating {
    font-family: 'Oswald';
    font-size: 12px;
    margin: 0;
    padding-bottom: 5px;
  }
  
  .Italy__name {
    font-family: 'Raleway';
    font-weight: 900;
    font-size: 120px;
    margin: 0;
  }

  .Italy__main, .Italy__rating {
    display: inline-block;
  }

  .rating__empty {
    background-image: url(https://placekitten.com/g/200/300);
    background-size: 22px 22px;
    width: 110px;
    height: 22px;
  }

 .rating__empty {
    background-image: url(https://placekitten.com/g/200/300);
    background-size: 22px 22px;
    width: 110px;
    height: 22px;
  }

  .rating__full_stars_4 {
    width: 80%;
  }
</style>