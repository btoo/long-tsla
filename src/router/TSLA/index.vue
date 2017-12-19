<template>
  <Chart v-bind="formattedData" />
</template>

<script>
  import Chart from '@/components/Chart'
  import { formatRawData } from '@/utils'
  import raw from './data/full'

  export default {
    name: 'TSLA',
    components: {
      Chart
    },
    data () {
      return {
        formattedData: formatRawData(raw)
      }
    }
  }
</script>
