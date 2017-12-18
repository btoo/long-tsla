import rawData from '@/assets/tsla-demo-size.json' // obtained from alpha vantage (check lastpass for your api key)

export const metaData = rawData['Meta Data']

const getClosePrice = datum => datum['4. close']
const dataMap = rawData['Time Series (Daily)']
const data = []
let minPilot = Number.POSITIVE_INFINITY
let maxPilot = Number.NEGATIVE_INFINITY

for (const date in dataMap) {
  const datum = dataMap[date]
  data.push([date, datum])

  const closePrice = getClosePrice(datum)
  if (closePrice < minPilot) minPilot = closePrice
  if (closePrice > maxPilot) maxPilot = closePrice
}

export default data
export const min = minPilot
export const max = maxPilot
