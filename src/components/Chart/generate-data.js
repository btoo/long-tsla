import { formatRawData } from '@/utils'

export default raw => {
  const formattedData = formatRawData(this.raw)
  return {
    formattedData,
    sliderConfig: {
      value: formattedData.timeSeries ? [formattedData.timeSeries[0], formattedData.timeSeries[formattedData.timeSeries.length - 1]] : [0, 0],
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
      data: formattedData.timeSeries || []
    }
  }
}
