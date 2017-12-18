import * as d3 from 'd3'
import rawData from '@/assets/tsla-demo-size.json' // obtained from alpha vantage (check lastpass for your api key)

export const metaData = rawData['Meta Data']

const dataMap = rawData['Time Series (Daily)']
const data = []
let minPilot = Number.POSITIVE_INFINITY
let maxPilot = Number.NEGATIVE_INFINITY

const parseDate = d3.timeParse('%Y-%m-%d')

for (const date in dataMap) {
  const datum = dataMap[date]
  const d = {
    date: parseDate(date),
    open: +datum['1. open'],
    high: +datum['2. high'],
    low: +datum['3. low'],
    close: +datum['4. close'],
    volume: +datum['5. volume']
  }

  data.push(d)

  if (d.close < minPilot) minPilot = d.close
  if (d.close > maxPilot) maxPilot = d.close
}

export default data
export const min = minPilot
export const max = maxPilot
