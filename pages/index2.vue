<template>
  <main class="main">
    <div class="wrapper">
      <div class="container">
        Main
      </div>
    </div>
    <div class="wrapper yellow">
      <div class="container">
        <article class="article">
          <h2>Title</h2>
          <p>Text</p>
          <p>More Text</p>
          <p>More Text</p>

          <p>More Text</p>
          <p>More Text</p>

        </article>
        <article class="article">
          <h2>Title</h2>
          <p>Text</p>
        </article>
        <article class="article">
          <h2>Title</h2>
          <p>Text</p>
        </article>
        <article class="article">
          <h2>Title</h2>
          <p>Text</p>
        </article>
      </div>
    </div>

      <div class="wrapper green">
        <div class="container containerFixed2">
          <article class="article2">
            <h2>Title</h2>
            <p>Text</p>
            <p>More Text</p>
            <p>More Text</p>
            <p>More Text</p>
          </article>
          <article class="article2">
            <h2>Title</h2>
            <p>Text</p>
            <p>More Text</p>
          </article>
          <article class="article2">
            <h2>Title</h2>
            <p>Text</p>
          </article>
          <article class="article2">
            <h2>Title</h2>
            <p>Text</p>
          </article>
        </div>
      </div>

      <div class="wrapper orange">
        <div class="container containerFlex">
          <article class="article3">
            <h2>Title</h2>
            <p>Text</p>
            <p>More Text</p>
            <p>More Text</p>
            <p>More Text</p>
            <p>More Text</p>
          </article>
          <article class="article3">
            <h2>Title</h2>
            <p>Text</p>
          </article>
          <article class="article3">
            <h2>Title</h2>
            <p>Text</p>
            <p>More Text</p>
          </article>
          <article class="article3">
            <h2>Title</h2>
            <p>Text</p>
          </article>
          <article class="article3">
            <h2>Title</h2>
            <p>Text</p>
          </article>
        </div>
      </div>

  </main>
</template>

<style>
  .wrapper {
    background-color: red;
    padding: 100px 50px;
  }
  .container {
    border: 2px solid green;
    max-width: 800px;
    margin: 0 auto;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: #00ff00;
  }
  .article {
    display: inline-block;
    vertical-align: top;
    width: 25%;
    border: 1px solid violet;
  }
  .article2 {
    float: left;
    width: 33.3%;
    border: 1px solid violet;
  }
  .article3{
    width: 20%;
    border: 1px solid violet;
  }
  .containerFlex {
    display: flex;
    flex-wrap: wrap;
  }
  .containerFixed:after {
    clear: left;
    content: "";
    display: block;
  }
  .containerFixed2 {
    overflow: hidden;
  }

  @media screen and (max-width: 800px) {
    .article, .article2, .article3 {
      width: 50%;
    }
  }

  @media screen and (max-width: 400px) {
    .article, .article2, .article3 {
      width: 100%;
    }

    .wrapper {
      padding: 10px;
    }
  }

</style>
