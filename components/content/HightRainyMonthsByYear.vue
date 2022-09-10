<template>
  <ClientOnly>
    <highcharts :options="chartOptions"></highcharts>
  </ClientOnly>
</template>

<script setup>
const { data } = await useAsyncData(() => {
  return queryContent('pluviometrie').where({ _type: 'json' }).findOne()
})

const years = [...new Set(data.value.body.map(item => item.year))].sort();

const chartOptions = {
  chart: { type: 'column' },
  title: { text: 'Nombre de mois où le cumul de pluie est > 100mm' },
  yAxis: { title: { text: 'mois avec cumul pluie > 100mm' } },
  xAxis: { type: 'category', categories: years },
  legend: { enabled: false },
  series: [
    {
      name: 'Nb mois avec cumul pluie > 100mm',
      data: years.map(year => {
        return data.value.body
          .filter(item => item.year === year)
          .map(item => item.rain_accumulation)
          .filter(item => item > 100)
          .length
      })
    },
  ],
  responsive: {
    rules: [
      { condition: { maxWidth: 500 } }
    ]
  }
}
</script>
