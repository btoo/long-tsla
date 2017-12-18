<template>
  <Chart :time-series="timeSeries" :meta-data="metaData" />
</template>

<script>
  import Chart from '@/components/Chart'
  import timeSeries, { metaData } from './data'

  export default {
    name: 'TSLA',
    components: {
      Chart
    },
    data () {
      return {
        timeSeries, metaData
      }
    }
  }
</script>
