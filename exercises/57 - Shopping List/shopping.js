const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold our items/state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  //if empty, dont run rest of function
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    completed: false,
  };
  items.push(item);
  //clear the form
  e.currentTarget.reset();
  //having the display here is tight coupling, not so great practice
  // displayItems();
  // fire off a custom event instead
  // the custom event will tell all subscribers that items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);

  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input 
      value="${item.id}" 
      type="checkbox"
      ${item.completed ? 'checked' : ''}
      >
      <span class="itemName"> ${item.name} </span>
      <button 
      aria-label="Remove ${item.name}"
      value="${item.id}"
      >&times;</button>
  </li>`,
    )
    .join('');
  //   console.log(html);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving items to LocalStorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LocalStorage');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach((item) => items.push(item))
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log(`delete item with ${id}`);
  const newItems = items.filter((item) => item.id !== id);
  items = newItems;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markCompleted(id) {
  console.log(`mark element with ${id} as complete`);
  const itemReference = items.find((item) => item.id === id);
  itemReference.completed = !itemReference.completed;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event delegation: We listen for the click on the list <ul> but then delegate the event to the button
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markCompleted(id);
  }
});

restoreFromLocalStorage();
