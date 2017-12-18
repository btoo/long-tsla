import * as d3 from 'd3'
import techan from 'techan'

export default (svg, x, y, candlestick) => {
  var ichimokuIndicator = techan.indicator.ichimoku()
  // Don't show where indicators don't have data
  var indicatorPreRoll = ichimokuIndicator.kijunSen() + ichimokuIndicator.senkouSpanB()

  var xAxis = d3.axisBottom(x)

  var yAxis = d3.axisLeft(y)
    .tickFormat(d3.format(',.3s'))

  var ichimoku = techan.plot.ichimoku()
    .xScale(x)
    .yScale(y)

  return data => {
    var ichimokuData = ichimokuIndicator(data)
    x.domain(data.map(ichimokuIndicator.accessor().d))
    // Calculate the y domain for visible data points (ensure to include Kijun Sen additional data offset)
    y.domain(techan.scale.plot.ichimoku(ichimokuData.slice(indicatorPreRoll - ichimokuIndicator.kijunSen())).domain())

    // Logic to ensure that at least +KijunSen displacement is applied to display cloud plotted ahead of ohlc
    x.zoomable().clamp(false).domain([indicatorPreRoll, data.length + ichimokuIndicator.kijunSen()])

    svg.selectAll('g.candlestick').datum(data).call(candlestick)
    svg.selectAll('g.ichimoku').datum(ichimokuData).call(ichimoku)
    svg.selectAll('g.x.axis').call(xAxis)
    svg.selectAll('g.y.axis').call(yAxis)
  }
}
