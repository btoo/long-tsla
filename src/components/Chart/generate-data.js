import { formatRawData } from '@/utils'

export default raw => {
  const formatted = formatRawData(raw)
  return {
    formatted,
    sliderConfig: {
      value: [formatted.timeSeries[0], formatted.timeSeries[formatted.timeSeries.length - 1]],
      width: '88%',
      height: 4,
      dotSize: 14,
      min: 1,
      max: 100,
      interval: 3,
      disabled: false,
      show: true,
      reverse: false,
      tooltip: 'always',
      piecewise: false,
      data: formatted.timeSeries || []
    }
  }
}
