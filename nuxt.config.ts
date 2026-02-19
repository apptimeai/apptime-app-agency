// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'apptime',
      },
      title: 'Apptime | Todo mundo cria sites. Nós criamos resultados.',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Rápido atendimento, criação estratégica e foco em conversão para transformar o seu site em um sistema que funciona. Nós criamos resultados.',
        },
        {
          name: 'keywords',
          content:
            'Apptime, Criação de Sites, Branding, UX, SEO, Automação, Conversão, Landing Page, Tráfego Pago, Design Estratégico, Sistemas Web',
        },
        {
          property: 'og:title',
          content: 'Apptime | Todo mundo cria sites. Nós criamos resultados.',
        },
        {
          property: 'og:description',
          content:
            'Rápido atendimento, criação estratégica e foco em conversão para transformar o seu site em um sistema que funciona. Nós criamos resultados.',
        },
        {
          property: 'og:image',
          content: '/og-image.jpg',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Apptime | Todo mundo cria sites. Nós criamos resultados.',
        },
        {
          name: 'twitter:description',
          content:
            'Rápido atendimento, criação estratégica e foco em conversão para transformar o seu site em um sistema que funciona. Nós criamos resultados.',
        },
        {
          name: 'twitter:image',
          content: '/og-image.jpg',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200..700&family=Noto+Serif:wght@200..700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XNJN8N72CW',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-XNJN8N72CW');
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
});
