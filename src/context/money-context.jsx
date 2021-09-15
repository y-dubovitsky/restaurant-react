import { createContext, useState } from 'react';

export const MoneyContext = createContext();

export const currencyArr = [
  { name: 'RUB', rate: 1, },
  { name: 'USD', rate: 1/70, },
  { name: 'EUR', rate: 1/80, },
]

export default function MoneyProvider({ children }) {
  const [currentCurrency, setCurrentСurrency] = useState('RUB');

  const recalculatePrice = (price) => {
    return currencyArr.filter(currency => currency.name === currentCurrency)
      .map(currency => (price * currency.rate).toFixed(2) + currency.name);
  }

  return (
    <MoneyContext.Provider value={{ currentCurrency, setCurrentСurrency, recalculatePrice }}>
      {children}
    </MoneyContext.Provider>
  )
}
