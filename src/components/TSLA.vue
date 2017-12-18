<template>
  <div class="tsla">
    <!-- {{ msg }} -->
    <h1 class="symbol">
      {{ metaData['2. Symbol'] }}
    </h1>
    <!-- d3 chart will get attached to this div (this.$el) -->
  </div>
</template>

<script>
import * as d3 from 'd3'
import rawData from '../assets/tsla-demo-size.json' // obtained from alpha vantage (check lastpass for your api key)

const metaData = rawData['Meta Data']

const data = Object.entries(rawData['Time Series (Daily)']) // may be costly on larger data sets, so find a better API provider

console.log(data)

const demoData = [99, 71, 78, 25, 36, 92]

export default {
  name: 'TSLA',
  mounted () {
    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', document.documentElement.clientWidth)
      .attr('height', document.documentElement.clientHeight)
      .append('g')
      // .attr('transform', 'translate(0, 10)')

    const x = d3.scaleLinear().range([0, 430])
    const y = d3.scaleLinear().range([210, 0])
    d3.axisLeft().scale(x)
    d3.axisTop().scale(y)
    x.domain(d3.extent(demoData, (d, i) => i))
    y.domain([0, d3.max(demoData, d => d)])

    const createPath = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d))

    svg.append('path').attr('d', createPath(demoData))
  },
  data () {
    return {
      msg: 'long tsla boi',
      metaData
    }
  }

}
</script>

<style lang="scss">
  svg {
    // margin: 25px;
    path {
      fill: none;
      stroke: #76BF8A;
      stroke-width: 3px;
    }
  }

  .tsla {
    height: 100%;
    overflow: hidden;
  }
</style>
