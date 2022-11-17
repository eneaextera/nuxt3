// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      [
        '@storyblok/nuxt',
        {
            accessToken: 'h5ZfQNVS0C6xG4ArbdGxQwtt',
            // If Server Location === US then:
            // apiOptions: { region: 'us' }
        }
      ],
      '@nuxtjs/tailwindcss'
    ],
  })
