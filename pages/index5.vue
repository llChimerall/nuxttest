<template>
    <form action="/index4" method="get">
      <a href="/index4" target="_blank" >Спикер</a><br />
      <input name="search" type="text" value="Test" /><br />
      <input name="pass" type="password" value="Test" /><br />
      <textarea name="bigText" disabled>Какой-то текст</textarea>
      <br />
      <label>Текст
        <input name="anotherSearch" type="text" placeholder="Введите текст" />
      </label>
      <br />
      <input id="email" name="email" required type="email" value="123123123@gmail.com" /><br />
        <br />
      <select name="gender">
        <option value="1">Боевой вертолет</option>
        <option value="2" selected>Женский</option>
        <option value="3">Мужской</option>
      </select>
      <br />
      <select name="gender2" multiple>
        <option value="1">Боевой вертолет</option>
        <option value="2">Женский</option>
        <option value="3">Мужской</option>
      </select>
      <br />
      <label>
        <input type="checkbox" name="checkbox" /> Галочка поставлена
      </label><br />
      <label>
        <input type="radio" name="radio" value="1" > Выбран первый пункт
      </label><br />
      <label>
        <input type="radio" name="radio" value="2" > Выбран второй пункт
      </label><br />
      <label>
        <input type="radio" name="radio" value="3" > Выбран третий пункт
      </label><br />
      <br />
      <label class="for-file">
        <input type="file" accept="image/x-png,image/gif,image/jpeg" />
        <span class="imitation-button">Выбрать файл</span>
      </label>
      <br />
      <input type="image" name="image" src="/pics/502.jpeg" />
      <br />
      <input name="main-submit" type="submit" value="Основная отправка" />
      <button type="button">Отправить</button>
      <button>Отправить</button>
      <label for="email">Электронная почта</label>
    </form>
</template>

<style>
  .for-file {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }

  .for-file input{
    position: absolute;
    opacity: 0;
  }

  .imitation-button {
    position: relative;
  }

  input[type=text],
  input[type=password],
  input[type=email],
  input[type=text],
  button, select, textarea {
    appearance: none;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 3px;
  },

  input[type=text]:focus,
  input[type=password]:focus,
  input[type=email]:focus,
  input[type=text]:focus {
    border-color: green;
    box-shadow: 0 0 1px green;
  }
</style>
