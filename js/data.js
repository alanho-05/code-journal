/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  const entryJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', entryJSON);
});
