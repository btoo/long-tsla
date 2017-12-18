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
import data, { metaData } from './data'
import cloud from './chart/cloud'

export default {
  name: 'TSLA',
  mounted () {
    cloud(this.$el)(data)
    console.log('in mounted', this.waza)
  },
  data () {
    return {
      msg: 'long tsla boi',
      metaData
    }
  },
  methods: {
    waza () {
      console.log('waza')
    }
  }
}
</script>

<style lang="scss">
  body {
      font: 10px sans-serif;
  }

  text {
      fill: #000;
  }

  .update-chart {
      position: absolute;
      right: 20px;
      top: 440px;
      display: none;
  }

  path.candle.body {
      stroke-width: 0;
  }

  path.candle.up {
      fill: #00AA00;
      stroke: #00AA00;
  }

  path.candle.down {
      fill: #FF0000;
      stroke: #FF0000;
  }

  .ichimoku path {
      fill: none;
      stroke-width: 0.8;
  }

  .ichimoku path {
      stroke: #000000;
  }

  .ichimoku path.chikouspan {
      stroke: #BF5FFF;
  }

  .ichimoku path.tenkansen {
      stroke: #0033FF;
  }

  .ichimoku path.kijunsen {
      stroke: #FBB117;
  }

  .ichimoku path.kumo {
      opacity: 0.1;
  }

  .ichimoku path.kumo.up {
      fill: #00AA00;
  }

  .ichimoku path.kumo.down {
      fill: #FF0000;
  }

  .ichimoku path.senkouspana {
      stroke: #006600;
  }

  .ichimoku path.senkouspanb {
      stroke: #FF0000;
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
