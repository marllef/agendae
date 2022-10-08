import currency from 'currency.js';

export const BRL = (value: number) => {
  return currency(value, {
    decimal: ',',
    separator: '.',
    symbol: 'R$ ',
  }).format();
};
