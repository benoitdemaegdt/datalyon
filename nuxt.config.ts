import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    htmlAttrs: { lang: 'fr' },
    title: 'Data Lyon',
    meta: [
      { hid: 'description', name: 'description', content: 'visualisation de quelques données sur la ville de lyon' },
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon'],
  tailwindcss: { viewer: false },
})
