const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress', (event) => {
  let key = event.which || event.keyCode;
  if (key === 13) { //código 13 es enter
    let movie = inputText.value;
    inputText.value = '';

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=951c7b7e`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderInfo(data);
    })
  }
})

const renderInfo = info => {
  containerTitle.innerHTML = info.Title;
  containerYear.innerHTML = info.Year;
  containerRuntime.innerHTML = info.Runtime;
  containerImage.innerHTML = `<img src="${info.Poster}">`;
}