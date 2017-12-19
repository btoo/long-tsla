<template>
  <article>

    <close-button />

    <template v-if="formattedData">

      <h1 class="symbol">
        {{ meta['2. Symbol'] }}
      </h1>

      <vue-slider ref="slider" v-bind="sliderConfig" @callback="renderCloud">
        <template slot="tooltip" slot-scope="tooltip">
          {{ tooltip.value // wait for init
            ? $options.filters.formatTime(tooltip.value.date)
            // ? tooltip.value.date
            : tooltip.value
          }}
        </template>
      </vue-slider>

      <!-- d3 chart will get attached to this space (this.$el) -->

    </template>

    <template v-else-if="symbol">
      <h1 class="symbol">
        {{ symbol }}
      </h1>
    </template>

  </article>
</template>

<script>
  import cloud from '@/analyses/cloud'
  import VueSlider from 'vue-slider-component'
  import CloseButton from '@/components/CloseButton'
  import NProgress from 'NProgress'
  import generateData from './generate-data'
  import { fetchSymbolHistory } from '@/utils'
  import { globalData } from '@/main'

  export default {
    name: 'Chart',
    components: { VueSlider, CloseButton },
    props: ['raw', 'symbol'],
    data () {
      return this.raw
        ? generateData(this.raw)
        : { formattedData: null }
    },
    created () {
      if (!this.formattedData) {
        console.log('fetching')
        this.fetchSymbolHistory(this.symbol, raw => {
          console.log('got em', raw)
        })
      }
    },
    mounted () {
      if (this.timeSeries) {
        console.log(this)
        this.cloud = cloud(this.$el, this.timeSeries)
        this.renderCloud()
        NProgress.done()
      }
    },
    methods: {
      fetchSymbolHistory (symbol, callback) {
        return fetchSymbolHistory(globalData.apiKey)(symbol, callback)
      },
      setData () {

      },
      renderCloud () {
        this.cloud(this.indexRange)
      }
    },
    computed: {
      indexRange: {
        get () {
          return this.$refs.slider.getIndex()
        }
      }
    }
  }
</script>

<style lang="scss">

  text {
    fill: #000;
  }

  .update-chart {
    position: absolute;
    right: 20px;
    top: 440px;
    display: none;
  }

  path {
    &.candle.body {
      stroke-width: 0;
    }
    &.candle.up {
      fill: #00AA00;
      stroke: #00AA00;
    }
    &.candle.down {
      fill: #FF0000;
      stroke: #FF0000;
    }
  }

  .ichimoku {

    path {
      fill: none;
      stroke-width: 0.8;
      stroke: #000000;

      &.chikouspan {
        stroke: #BF5FFF;
      }

      &.tenkansen {
        stroke: #0033FF;
      }

      &.kijunsen {
        stroke: #FBB117;
      }

      &.kumo {
        opacity: 0.1;
      }

      &.kumo.up {
        fill: #00AA00;
      }

      &.kumo.down {
        fill: #FF0000;
      }

      &.senkouspana {
        stroke: #006600;
      }

      &.senkouspanb {
        stroke: #FF0000;
      }

    }

  }

  .vue-slider-tooltip-wrap {
    width: 100px;
  }

</style>

<style lang="scss" scoped>
  article {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
