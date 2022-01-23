export const toCurrency = (value: number, currency = 'BRL') =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency
  })
