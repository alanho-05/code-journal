/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const previousEntryJSON = localStorage.getItem('javascript-local-storage');

window.addEventListener('beforeunload', function (event) {
  const entryJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', entryJSON);
});

if (previousEntryJSON !== null) {
  data = JSON.parse(previousEntryJSON);
}
