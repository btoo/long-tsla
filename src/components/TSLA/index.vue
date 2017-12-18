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
import renderChart from './chart'
import { metaData } from './data'

export default {
  name: 'TSLA',
  mounted () {
    renderChart(this.$el)
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

</style>

<style lang="scss" scoped>
  .tsla {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    margin: 0;
  }
</style>
