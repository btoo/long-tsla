import NProgress from 'nprogress'

export const fetchSymbolHistory = apiKey => async (symbol, callback) => {
  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${apiKey}`)
  const raw = await response.json()

  NProgress.done()

  callback(raw)
  return raw
}
