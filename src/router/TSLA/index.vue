<template>
  <Chart :raw="raw" />
</template>

<script>
  import Chart from '@/components/Chart'
  import raw from './data/full'

  export default {
    name: 'TSLA',
    components: {
      Chart
    },
    data () {
      return {
        raw
      }
    }
  }
</script>
