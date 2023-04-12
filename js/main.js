const $urlInput = document.querySelector('#img-url');
const $img = document.querySelector('img');

$urlInput.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

const $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const entry = {
    title: $form.elements.title.value,
    imgURL: $form.elements.url.value,
    notes: $form.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId += 1;
  data.entries.unshift(entry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});

function renderEntry(entry) {
  const listEl = document.createElement('li');

  const outerDiv = document.createElement('div');
  outerDiv.setAttribute('class', 'row');

  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'column-half');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', entry.imgURL);
  imgEl.setAttribute('alt', 'image of entry #' + entry.entryId);
  imgEl.setAttribute('class', 'border-radius entry-img');

  const txtDiv = document.createElement('div');
  txtDiv.setAttribute('class', 'column-half');

  const entryTitle = document.createElement('h3');
  entryTitle.textContent = entry.title;

  const entryTxt = document.createElement('p');
  entryTxt.textContent = entry.notes;

  listEl.appendChild(outerDiv);
  outerDiv.appendChild(imgDiv);
  imgDiv.appendChild(imgEl);
  outerDiv.appendChild(txtDiv);
  txtDiv.appendChild(entryTitle);
  txtDiv.appendChild(entryTxt);

  return listEl;
}

const $uList = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const entries = renderEntry(data.entries[i]);
    $uList.appendChild(entries);
  }
});

const $noEntries = document.querySelector('#no-entries');

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntries.classList.remove('hidden');
  } else {
    $noEntries.classList.add('hidden');
  }
}

toggleNoEntries();
// To bypass linter; delete after function is called.

const $entryForm = document.querySelector('#form');
const $entries = document.querySelector('.entries');

function viewSwap(event) {
  if (event.target.id === 'new-entry') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  } else {
    $entries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  }
  data.view = event.target.id;
}
// viewSwap function being called in event listeners. Button New with the ID='new-entry' will trigger if statement.

const $navEntries = document.querySelector('#entries');
$navEntries.addEventListener('click', viewSwap);
// Listening for click event on Entries navbar to switch view to Entries page.

const $newEntry = document.querySelector('#new-entry');
$newEntry.addEventListener('click', viewSwap);
// Listening for click event on NEW anchor to switch view to New Entry page.
