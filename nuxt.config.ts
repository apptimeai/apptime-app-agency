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
        lang: 'en',
        'data-theme': 'apptime',
      },
      title: 'Apptime Agency | Do Site ao Resultado',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Chega de site bonito que não gera resultado. A Apptime cria sites de alta conversão integrados com automação para transformar visitantes em clientes.',
        },
        {
          name: 'keywords',
          content:
            'Apptime Agency, Criação de Sites, Agência de Marketing, Automação, Design Estratégico, Alta Conversão, CRM, Vendas',
        },
        {
          property: 'og:title',
          content: 'Apptime Agency | Do Site ao Resultado',
        },
        {
          property: 'og:description',
          content:
            'Chega de site bonito que não gera resultado. A Apptime cria sites de alta conversão integrados com automação para transformar visitantes em clientes.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Apptime Agency | Do Site ao Resultado',
        },
        {
          name: 'twitter:description',
          content:
            'Chega de site bonito que não gera resultado. A Apptime cria sites de alta conversão integrados com automação para transformar visitantes em clientes.',
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
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
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
