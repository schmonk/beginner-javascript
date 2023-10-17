const endpoint = 'https://icanhazdadjoke.com/';

export async function fetchJoke(loader) {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch(`${endpoint}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn loader off
  loader.classList.add('hidden');

  return data;
}
