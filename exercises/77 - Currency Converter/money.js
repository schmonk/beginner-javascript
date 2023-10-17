const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endPoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {}; // will store all rates

const myHeaders = new Headers();
const apiKey = 'OcmU1xlxSaMjGFkX91f6TS0dx3I8PJep';
myHeaders.append('apikey', apiKey);
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => {
      // console.log(currencyCode, currencyName);
      return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
    })
    .join('');
}

async function fetchRates(base = 'CHF') {
  try {
    const response = await fetch(`${endPoint}?base=${base}`, requestOptions);
    const result = await response.json();
    console.log('result: ', result);
    return result;
  } catch (error) {
    console.log('error: ', error);
    throw error; // You can choose to handle the error or rethrow it
  }
  /*   fetch(`${endPoint}?base=${base}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error: ', error)); */
}

async function convert(amount, from, to) {
  // we could fetch the rates each time
  // but this could be slow
  // so instead: create baseRates object
  // first check if we have from rate
  if (!ratesByBase[from]) {
    console.log(`Oh no, we dont have ${from} to convert to ${to}. So lets go and get that!`);
  }
  const rates = await fetchRates(from);
  console.log('rates: ', rates);
  //store for next time
  ratesByBase[from] = rates;
}

async function someFunction() {
  // Call the 'convert' function and await its result
  try {
    const convertedAmount = await convert(amount, from, to);
    console.log('Converted amount: ', convertedAmount);
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

// Call someFunction to start the conversion process
someFunction();

const optionsHTML = generateOptions(currencies);
//populate options
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
