<template>
  <section class="background">
    <div class="container">
        <div class="content">
            <header class="head">
              <p>Спикер школы бизнеса Синергия</p>
              <h1 id="about">Котейка Котёночкин</h1>
            </header>
            <div class="shareblock">
              <figure>
                <img class="foto" alt="фото спикера" src="/pics/502.jpeg" />
                <figcaption>спикер</figcaption>
              </figure>
              <aside>
                <h4>Поделиться:</h4>
                <ul class="buttons">
                  <li><button><i class="fab fa-vk"></i></button></li>
                  <li><button><i class="fab fa-twitter"></i></button></li>
                  <li><button><i class="fab fa-facebook-f"></i></button></li>
                  <li><button><i class="fab fa-google-plus-g"></i></button></li>
                </ul>
              </aside>
            </div>
            <p class="description">Являясь одиночным охотником на&nbsp;грызунов и&nbsp;других мелких животных,
            кошка&nbsp;&mdash; социальное животное, использующее для общения широкий диапазон звуковых сигналов,
            а&nbsp;также феромоны и&nbsp;движения тела</p>
            <footer>
              <ul class="links">
                <li><a href="#about">о спикере</a></li>
                <li><a href="#events">события</a></li>
                <li><a href="#materials">материалы</a></li>
              </ul>
            </footer>
        </div>
    </div>
  </section>
</template>

<style>
.background {
  background-color: #1e1c34;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.background:before {
  content: '';
  background: url(/static/pics/sinergia.jpg) 50% 100% no-repeat;
  box-shadow: inset 0 0 1px 100000px rgba(30,28,52,0.95);
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px);
}

.head p {
  color: grey;
  text-transform: uppercase;
  font-size: 0.6em;
  font-weight: bold;
  padding-bottom: 1em;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
}

.content {
  position: relative;
  width: 70%;
}

.shareblock {
  position: absolute;
  left: 100%;
  top: 0;
  width: 42.8%;
  background-color: white;
  padding: 15px;
  box-shadow: 0 0 20px 10px rgba(0,0,0,0.3);
}

.shareblock h4 {
  color: gold;
  text-transform: uppercase;
  font-size: 0.6em;
  margin-bottom: 15px;
}

figure {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
}

figcaption {
  display: none;
}

.foto {
  max-width: 100%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.links li, .buttons li {
  display: inline-block;
}

.links {
  margin-left: -15px;
}

.links, .buttons {
  padding: 0;
}

.buttons {
  margin-left: -10px;
}

.buttons button {
  color: gold;
  background: none;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}

.links a {
  padding: 15px;
  display: inline-block;
  text-decoration: none;
  color: gold;
  text-transform: uppercase;
  font-size: 0.6em;
  font-weight: bold;
}

.description {
  padding-top: 15px;
  width: 80%;
}

footer {
  border-top: 1px solid gold;
  margin-top: 15px;
}

a:hover, a:focus, button:hover, button:focus {
  color: grey;
}

@media screen and (max-width: 520px) {
  .background:before {
    background: none;
  }

  .content {
    width: auto;
  }

  .shareblock {
    position: static;
    width: auto;
    background-color: inherit;
    padding: 0px;
    box-shadow: none;
  }

  .buttons, h4 {
    display: inline-block;
  }

  .buttons {
    margin-left: 0px;
  }

  figure {
    height: auto;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .foto {
    position: static;
    transform: none;
  }

  .description {
    padding-top: 0;
    width: auto;
  }
}
</style>
