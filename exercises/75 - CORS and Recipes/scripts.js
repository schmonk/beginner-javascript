const proxy = `https://proxy.cors.sh/`;
const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  console.log('query: ', query);
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const element = event.currentTarget;
  console.log(element.query.value);
  fetchAndDisplay(element.query.value);
}

async function fetchAndDisplay(query) {
  // disable submit button
  form.submit.disabled = true;
  //submit search
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}
function displayRecipes(recipes) {
  const html = recipes.map((recipe) => {
    return `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"></img>`}
    <a href="${recipe.href}">View recipe</a>
    </div>`;
  });
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('click', handleSubmit);
fetchAndDisplay('pizza');
