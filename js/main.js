const $urlInput = document.querySelector('#img-url');

$urlInput.addEventListener('input', function (event) {
  const $img = document.querySelector('img');
  $img.setAttribute('src', event.target.value);
});
