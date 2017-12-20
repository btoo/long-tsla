import * as d3 from 'd3'
// import {event as currentEvent} from 'd3-selection'
import techan from 'techan'
import draw from './draw'

const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 50
}

export default (el, data) => { // this function initalizes the chart and only executes once
  const width = Math.min(960, document.documentElement.clientWidth * 0.88) - margin.left - margin.right
  const height = 500 - margin.top - margin.bottom

  const x = techan.scale.financetime()
    .range([0, width])

  const y = d3.scaleLinear()
    .range([height, 0])

  const candlestick = techan.plot.candlestick()
    .xScale(x)
    .yScale(y)

  const svg = d3.select(el).append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  svg.append('clipPath')
    .attr('id', 'clip')
    .append('rect')
    .attr('x', 0)
    .attr('y', y(1))
    .attr('width', width)
    .attr('height', y(0) - y(1))

  const accessor = candlestick.accessor()

  data.sort((a, b) => d3.ascending(accessor.d(a), accessor.d(b)))

  svg.append('g')
    .attr('class', 'ichimoku')
    .attr('clip-path', 'url(#clip)')

  svg.append('g')
    .attr('class', 'candlestick')
    .attr('clip-path', 'url(#clip)')

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')

  svg.append('g')
    .attr('class', 'y axis')
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Ichimoku')

  return (indexRange = [data.length - 222, data.length]) => { // this function updates the chart and gets executed multiple times
    // data to display initially
    draw({svg, x, y, candlestick})(
      data.slice(...indexRange) // render the chart with the last 222 data points (trading days)
    )
  }
}
