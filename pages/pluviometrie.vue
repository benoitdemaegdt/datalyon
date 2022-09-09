<template>
  <ContentFrame
    :header="data.type"
    :title="data.title"
    :description="data.description"
    :imageUrl="data.imageUrl"
  >
    <h2>Aperçu de la rando</h2>
    <ContentRenderer :value="data" />
  </ContentFrame>
</template>

<script setup>
const { data } = await useAsyncData('test', () => {
return queryContent('/pluviometrie')
  .where({ _type: 'markdown' })
  .findOne()
})
</script>
