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
        : { formatted: null }
    },
    created () {
      if (!this.formatted) {
        this.fetchSymbolHistory(this.symbol, raw => this.setData(raw))
      }
    },
    mounted () { this.renderCloud() },
    methods: {
      setCloudRenderer () {
        if (this.formatted && this.formatted.timeSeries && this.formatted.timeSeries.length) {
          this.cloud = cloud(this.$el, this.formatted.timeSeries)
          return true
        } else {
          return false
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
</style>

<style lang="scss" src="./index.scss" />
