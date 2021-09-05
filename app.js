'use strict';
const apiURL = 'https://api.funtranslations.com/translate/minion.json';

const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const divOutput = document.querySelector('#div-output');

const constructUrl = text => apiURL + '?text=' + text;

const errorHandler = error => {
  console.log('An Error Occured! ', error);
  alert('An Error Occured! Please try after some time.');
};

const clickHandler = () => {
  let inputText = txtInput.value;
  fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {
      const translatedText = json.contents.translated;
      divOutput.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener('click', clickHandler);
