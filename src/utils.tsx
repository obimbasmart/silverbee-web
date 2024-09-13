const toCurrency = (value: number, local: string = "en-NG") => {
    const currency = new Intl.NumberFormat(local, {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      currencyDisplay: "narrowSymbol"
    });
    
    return currency.format(value)
  }
  
export {
    toCurrency
}