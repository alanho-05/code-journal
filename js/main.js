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

  $uList.prepend(renderEntry(entry));
  viewSwap('entries');
  toggleNoEntries();
});

function renderEntry(entry) {
  const listEl = document.createElement('li');
  listEl.setAttribute('data-entry-id', entry.entryId);

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

  const titleDiv = document.createElement('div');
  titleDiv.setAttribute('class', 'entry-title-alignment');

  const entryTitle = document.createElement('h3');
  entryTitle.textContent = entry.title;

  const editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fa-solid fa-pen');

  const entryTxt = document.createElement('p');
  entryTxt.textContent = entry.notes;

  listEl.appendChild(outerDiv);
  outerDiv.appendChild(imgDiv);
  imgDiv.appendChild(imgEl);
  outerDiv.appendChild(txtDiv);
  txtDiv.appendChild(titleDiv);
  titleDiv.appendChild(entryTitle);
  titleDiv.appendChild(editIcon);
  txtDiv.appendChild(entryTxt);

  return listEl;
}
// Creating the DOM tree layouts for entries. Ready to be appended to unordered list.

const $uList = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const entries = renderEntry(data.entries[i]);
    $uList.appendChild(entries);
  }
  viewSwap(data.view);
  toggleNoEntries();
});
// Loops through data.entries array and uses renderEntry() to generate a DOM tree with content and append it to the unordered list ($uList).

const $noEntries = document.querySelector('#no-entries');

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntries.classList.remove('hidden');
  } else {
    $noEntries.classList.add('hidden');
  }
}

const $entryForm = document.querySelector('#form');
const $entries = document.querySelector('.entries');

function viewSwap(pageName) {
  if (pageName === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  } else {
    $entries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  }
  data.view = pageName;
}
// viewSwap function is being passed a string in order to decide which page to show.

const $navEntries = document.querySelector('#entries');
$navEntries.addEventListener('click', function (event) {
  viewSwap(event.target.id);
});
// Listening for click event on Entries navbar to switch view to Entries page. Calls the viewSwap function with the argument 'entries'.

const $newEntry = document.querySelector('#entry-form');
$newEntry.addEventListener('click', function (event) {
  viewSwap(event.target.id);
});
// Listening for click event on NEW anchor to switch view to New Entry page. Calls the viewSwap function with the argument 'entry-form'
