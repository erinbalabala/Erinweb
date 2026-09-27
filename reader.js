document.querySelector('#page-select').addEventListener('change', event => {
  document.getElementById(event.target.value).scrollIntoView({behavior: 'instant', block: 'start'});
});
