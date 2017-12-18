<template>
  <article>
    
    <h1 class="symbol">
      {{ metaData['2. Symbol'] }}
    </h1>

    <!-- d3 chart will get attached to this div (this.$el) -->

    <!-- <button @click="renderCloud()">
      click to render cloud
    </button> -->

  </article>
</template>

<script>
  import cloud from '@/analyses/cloud'

  export default {
    name: 'Chart',
    props: ['metaData', 'timeSeries'],
    mounted () {
      this.cloud = cloud(this.$el)
      this.renderCloud(this.timeSeries)
    },
    methods: {
      renderCloud (timeSeries) {
        this.cloud(timeSeries)
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
