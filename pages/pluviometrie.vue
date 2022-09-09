<template>
  <ContentFrame
    :header="data.type"
    :title="data.title"
    :description="data.description"
  >
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
