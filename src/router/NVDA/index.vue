<template>
  <Chart v-bind="formattedData" />
</template>

<script>
  import Chart from '@/components/Chart'
  import { formatRawData } from '@/utils'
  import raw from './data.json'

  export default {
    name: 'NVDA',
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
