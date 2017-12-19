<template>
  <Chart :raw="raw" />
</template>

<script>
  import Chart from '@/components/Chart'
  import raw from './data.json'

  export default {
    name: 'NVDA',
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
