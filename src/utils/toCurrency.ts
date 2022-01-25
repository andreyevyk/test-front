export function toCurrency(value?: number, currency = 'BRL') {
  if (value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency
    });
  }
  return value;
}
