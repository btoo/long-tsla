import { formatRawData } from '@/utils'

export default raw => {
  const formatted = formatRawData(raw)
  return {
    formatted,
    sliderConfig: {
      value: [formatted.timeSeries[0], formatted.timeSeries[formatted.timeSeries.length - 1]],
      width: `${Math.min(960, document.documentElement.clientWidth * 0.88)}px`,
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
