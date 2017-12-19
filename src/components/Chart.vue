<template>
  <article>

    <close-button />

    <h1 class="symbol">
      {{ meta['2. Symbol'] }}
    </h1>

    <vue-slider ref="slider" v-bind="sliderConfig" @callback="renderCloud">
      <template slot="tooltip" slot-scope="tooltip">
        {{ tooltip.value // wait for init
          // ? $options.filters.formatTime(tooltip.value.date)
          ? tooltip.value.date
          : tooltip.value
        }}
      </template>
    </vue-slider>

    <!-- d3 chart will get attached to this space (this.$el) -->

  </article>
</template>

<script>
  import cloud from '@/analyses/cloud'
  import VueSlider from 'vue-slider-component'
  import CloseButton from '@/components/CloseButton'

  export default {
    name: 'Chart',
    components: { VueSlider, CloseButton },
    props: ['raw', 'meta', 'timeSeries', 'min', 'max'],
    data () {
      return {
        sliderConfig: {
          value: [this.timeSeries[0], this.timeSeries[this.timeSeries.length - 1]],
          width: '88%',
          height: 4,
          dotSize: 14,
          min: 1,
          max: 100,
          interval: 3,
          disabled: false,
          show: true,
          reverse: false,
          tooltip: 'always',
          piecewise: false,
          data: this.timeSeries
        }
      }
    },
    mounted () {
      this.cloud = cloud(this.$el, this.timeSeries)
      this.renderCloud()
    },
    methods: {
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
