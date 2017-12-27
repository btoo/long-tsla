<template>
  <article>

    <close-button />

    <template v-if="formatted">

      <h1 class="symbol">
        {{ formatted.meta['2. Symbol'] }}
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

    </template>

    <template v-else-if="symbol">
      <h1 class="symbol">
        {{ symbol }}
      </h1>
    </template>

    <!-- d3 chart will get attached to this figure -->
    <figure />

  </article>
</template>

<script>
  import cloud from '@/analyses/cloud'
  import VueSlider from 'vue-slider-component'
  import CloseButton from '@/components/CloseButton'
  import NProgress from 'nprogress'
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
        : { formatted: null }
    },
    created () { // fetch the raw data if you werent provided with it already
      if (!this.formatted) {
        this.fetchSymbolHistory(this.symbol, raw => this.setData(raw))
      }
    },
    mounted () { // now that the DOM element exists, you can use d3 to render the chart
      this.renderCloud()
    },
    methods: {
      setCloudRenderer () {
        if (this.formatted && this.formatted.timeSeries && this.formatted.timeSeries.length) {
          this.cloud = cloud(this.$el.querySelector('figure'), this.formatted.timeSeries)
        }
      },
      fetchSymbolHistory (symbol, callback) {
        return fetchSymbolHistory(globalData.apiKey)(symbol, callback)
      },
      setData (raw) {
        const generatedData = generateData(raw)
        for (const key in generatedData) {
          this[key] = generatedData[key]
        }

        this.renderCloud()
      },
      renderCloud () {
        if (!this.cloud) this.setCloudRenderer()

        this.cloud(this.indexRange)
        NProgress.done()
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

<style lang="scss" scoped>
  article {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  figure {
    height: 500px;
  }
</style>

<style lang="scss" src="./index.scss" />
