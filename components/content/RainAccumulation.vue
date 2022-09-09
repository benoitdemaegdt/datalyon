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
  title: { text: 'Pluviométrie mensuelle à Lyon 2012-2022' },
  yAxis: { title: { text: 'Cumul pluie (mm)' } },
  xAxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Dec']
  },
  legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle' },
  series: [
    ...years.map(year => ({
      name: `${year}`,
      data: data.value.body
        .filter(item => item.year === year)
        .sort((a,b) =>  a.month - b.month)
        .map(item => item.rain_accumulation)
        .map((sum => value => sum = Math.round((sum + value) * 10) / 10  )(0))
    }))
  ],
  responsive: {
    rules: [
      {
        condition: { maxWidth: 500 },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }
}
</script>
