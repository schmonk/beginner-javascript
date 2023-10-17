const last = 'sherman';
const middle = 'chnusti';

export function returnHi(name) {
  return `Hi ${name} ${last}!`;
}

const gugus = 'test';

// Named exports

export { last, middle };
export default gugus;
