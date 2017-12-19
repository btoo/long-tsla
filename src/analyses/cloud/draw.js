import * as d3 from 'd3'
import techan from 'techan'

export default ({svg, x, y, candlestick}) => {
  const ichimokuIndicator = techan.indicator.ichimoku()
  // Don't show where indicators don't have data
  const indicatorPreRoll = ichimokuIndicator.kijunSen() + ichimokuIndicator.senkouSpanB()

  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)
    .tickFormat(d3.format(',.3s'))

  const ichimoku = techan.plot.ichimoku()
    .xScale(x)
    .yScale(y)

  return slicedData => {
    const ichimokuData = ichimokuIndicator(slicedData)
    x.domain(slicedData.map(ichimokuIndicator.accessor().d))
    // Calculate the y domain for visible data points (ensure to include Kijun Sen additional data offset)
    y.domain(techan.scale.plot.ichimoku(ichimokuData.slice(indicatorPreRoll - ichimokuIndicator.kijunSen())).domain())

    // Logic to ensure that at least +KijunSen displacement is applied to display cloud plotted ahead of ohlc
    x.zoomable().clamp(false).domain([indicatorPreRoll, slicedData.length + ichimokuIndicator.kijunSen()])

    svg.selectAll('g.candlestick').datum(slicedData).call(candlestick)
    svg.selectAll('g.ichimoku').datum(ichimokuData).call(ichimoku)
    svg.selectAll('g.x.axis').call(xAxis)
    svg.selectAll('g.y.axis').call(yAxis)
  }
}
