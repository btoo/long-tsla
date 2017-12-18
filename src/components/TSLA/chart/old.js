import * as d3 from 'd3'
import data, { min, max } from './data'

false && console.log(data, min, max)

const demoData = [99, 71, 78, 25, 36, 92]

const chartWidth = document.documentElement.clientWidth / 2
const chartHeight = document.documentElement.clientHeight / 2

export default $el => {
  const svg = d3.select($el)
    .append('svg')
    // .attr('width', document.documentElement.clientWidth)
    // .attr('height', document.documentElement.clientHeight)
    .attr('width', chartWidth)
    .attr('height', chartHeight)
    .append('g')
    // .attr('transform', 'translate(0, 10)')

  const x = d3.scaleLinear()
    // .domain([]) // dates
    .range([0, chartWidth])
  const y = d3.scaleLinear()
    // .domain([min, max])
    .range([chartHeight, 0])

  d3.axisLeft().scale(x)
  d3.axisTop().scale(y)
  x.domain(d3.extent(demoData, (d, i) => i))
  y.domain([0, d3.max(demoData, d => d)])

  const createPath = d3.line()
    .x((d, i) => x(i))
    .y(d => y(d))

  svg.append('path').attr('d', createPath(demoData))
}
