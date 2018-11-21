<template>
  <section>
    <h2>Вещь в городе</h2>
    <ul>
      <li>
        <img alt="" src="/pics/500.jpeg" />
        <ol>
          <li>Афиша Город</li>
          <li>Красота</li>
        </ol>
        <a href="">
          Лучшее из&nbsp;лучшего: что на&nbsp;самом деле стоит покупать у&nbsp;Byredo, Vichy
        </a><span>🐱</span>
      </li>
      <li>
        <img alt="" src="/pics/501.jpeg" />
        <ol>
          <li>Афиша Город</li>
          <li>Новая русская мода</li>
        </ol>
        <a href="">
          9&nbsp;новых ювелирных марок из&nbsp;России
        </a><span>🐱</span>
      </li>
      <li>
        <img alt="" src="/pics/502.jpeg" />
        <ol>
          <li>Афиша Город</li>
        </ol>
        <a href="">
          <strong>Красивые вещи</strong> для&nbsp;дома
          <br />
          Подушки с&nbsp;яркими узорами
        </a><span>🐱</span>
      </li>
      <li>
        <img alt="" src="/pics/503.jpeg" />
        <ol>
          <li>Афиша Город</li>
          <li>Новый стиль</li>
        </ol>
        <a href="">
          Разбор коллекции сумок от&nbsp;ведущих сумкосоздателей
        </a><span>🐱</span>
      </li>

    </ul>
  </section>
</template>

<style>
section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}

h2 {
  margin: 1em 0;
  font-size: 2em;
}

ol {
  padding: 0;
}

ol,
ol li {
  display: inline;
}

ol li:first-child {
  display: block;
  font-size: 0.8em;
  margin-bottom: 0.3em;
  font-weight: bold;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

ul > li {
  width: 33.3%;
  margin: 0 10px;
  padding: 0;
  position: relative;
}

ul > li:first-child {
  margin-left: 0;
}

ul > li:nth-child(3) {
  margin-right: 0;
}

ul > li:last-child {
  display: none;
}

img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.8em;
}

a {
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  outline: none; /* собственное оформление focus */
}

a:hover, a:focus {
  color: orange;
}

a:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  left: -10px;
  top: -10px;
  box-sizing: content-box;
  padding: 10px;
  border-radius: 5px;
}

a:active {
  color: green;
}

a:focus:after {
  box-shadow: 0 0 10px rgba(0,0,0,0.3);

}

a + span {
  display: none;
}

a:hover + span, a:focus + span {
  display: inline;
}

ol li:nth-child(2), a strong {
  color: orange;
  font-style: italic;
  font-weight: normal;
}

ol li:nth-child(2) {
  font-size: 1.5em;
}

@media screen and (max-width: 960px) {

  ul > li {
    width: 50%;
    margin: 0;
    padding: 10px;
  }

  ul {
    flex-wrap: wrap;
  }

  ul > li:last-child {
    display: block;
  }

  ul > li:nth-child(odd) {
  padding-left: 0;
  }

  ul > li:nth-child(even) {
  padding-right: 0;
  }

  a:focus {
    outline: 1px dotted orange;
  }

  a:focus:after {
    box-shadow: none;
  }

}

@media screen and (max-width: 520px) {

  section {
    padding: 30px;
  }

  ul > li {
    width: 100%;
    margin-bottom: 1em;
    padding: 0;
  }

  a, ol li:nth-child(2) {
    font-size: 1em;
  }

}
</style>
