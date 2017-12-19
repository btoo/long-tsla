import { timeParse } from 'd3'

export const formatRawData = raw => {
  if (raw['Meta Data']) {
    const meta = raw['Meta Data']

    const timeSeriesMap = raw['Time Series (Daily)']
    const timeSeries = []
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY

    const parseDate = timeParse('%Y-%m-%d')

    for (const date in timeSeriesMap) {
      const datum = timeSeriesMap[date]
      const d = {
        date: parseDate(date),
        open: +datum['1. open'],
        high: +datum['2. high'],
        low: +datum['3. low'],
        close: +datum['4. close'],
        volume: +datum['5. volume']
      }

      timeSeries.push(d)

      if (d.close < min) min = d.close
      if (d.close > max) max = d.close
    }

    return { raw, meta, timeSeries, min, max }
  } else {
    console.error('invalid raw data')
  }
}
