import { get } from 'axios';
import fs from 'fs';
import jsdom from "jsdom";

const { JSDOM } = jsdom;

const addNewsToList = (element) => {
  const newBlock = document.querySelector('.experience__list--articles');

  const addNews = () => (
    `<li>
      <span>Статьи</span>
      ${element}
      <div class="expirience__card-type"><span>articles.arpicon</span></div>
    </li>`
  );

  newBlock.appendChild(addNews());
}

const baseLink = 'http://www.liftinform.ru/2023/';

function paginator() {
  var link = baseLink;

  get(link)
    .then(response => {
      var currentPage = response.data;
      const dom = new JSDOM(currentPage);

      var linksLength = 6;

      for (i = 0; i < linksLength; i++) {
        var newLink = dom.window.document.getElementById('main').getElementsByTagName('article')[i].getElementsByClassName('entry-title title-font')[0].getElementsByTagName('a')[0].outerHTML;

        addNewsToList(newLink);
      };
    });
};

export {paginator};
