<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div class="relative h-full max-w-7xl mx-auto">
          <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">La ville de Lyon</span>
              <span class="block text-amber-600">en données</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Visualisation de quelques jeux de données pour en savoir plus sur notre belle ville de Lyon. Projet indépendant et open source.</p>
          </div>
        </main>
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        <NuxtLink
          v-for="post in posts"
          :key="post.title"
          :to="post.path"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-amber-600">
                  {{ post.category }}
                </p>
                <div class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ post.description }}
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.datetime">{{ post.date }}</time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> {{ post.readingTime }} lecture </span>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const posts = [
  {
    title: 'Pluviométrie des 10 dernières années',
    category: 'Météo',
    path: '/pluviometrie',
    description: 'Visualisation des cumuls mensuels de pluie sur les 10 dernières années à la station météo de Lyon-Bron.',
    date: '7 sept 2020',
    datetime: '2020-09-07',
    imageUrl: 'https://source.unsplash.com/Bu1zj2WbjHE',
    readingTime: '6 min',
  },
  {
    title: 'Compteur de vélo du quai Augagneur',
    category: 'Vélo',
    path: '/velo',
    description:
      'Visualisation du nombre de cycliste qui passent devant le compteur du quai Augagneur à Lyon 3.',
    date: '7 sept 2020',
    datetime: '2020-09-07',
    imageUrl: 'https://source.unsplash.com/eDvG3IO8-Io',
    readingTime: '4 min',
  },
  {
    title: 'Gares accessibles en direct depuis Lyon Part-Dieu',
    category: 'Transport',
    path: '/gares-direct-lyon',
    description:
      'Visualisation de toutes les gares européennes qui sont accessibles en direct depuis Lyon.',
    date: '7 sept 2020',
    datetime: '2020-09-07',
    imageUrl: 'https://source.unsplash.com/H84rHbx7IP0',
    readingTime: '11 min',
  },
]
</script>
