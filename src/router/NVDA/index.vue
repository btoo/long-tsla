<template>
  <Chart :time-series="timeSeries" :meta-data="metaData" />
</template>

<script>
  import Chart from '@/components/Chart'
  import { formatRawData } from '@/utils'
  import rawData from './data.json'

  export default {
    name: 'NVDA',
    components: {
      Chart
    },
    data () {
      return {
        ...formatRawData(rawData)
      }
    }
  }
</script>
