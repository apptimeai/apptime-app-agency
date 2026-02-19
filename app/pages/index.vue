<template>
  <!-- Hero Section -->
  <section
    class="relative bg-gradient-to-b from-base-100 via-base-200 to-base-100 text-base-content pt-24 border-b border-base-content/5 overflow-hidden"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Glow Blobs -->
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-pulse"
        style="animation-delay: 2s"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(
              to right,
              var(--color-base-content) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--color-base-content) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          mask-image: radial-gradient(
            circle at center,
            var(--color-base-100) 40%,
            transparent 100%
          );
          -webkit-mask-image: radial-gradient(
            circle at center,
            var(--color-base-100) 40%,
            transparent 100%
          );
          animation: gridMove 20s linear infinite;
        "
      ></div>
    </div>

    <header
      class="relative z-10 w-full max-w-5xl mx-auto px-6 pt-12 pb-12 md:pt-20 md:pb-20 text-center"
    >
      <div
        class="badge badge-primary badge-outline mb-6 py-3 px-4 font-bold text-sm tracking-wider"
      >
        Processo rápido e sem burocracia 🚀
      </div>

      <h1
        class="text-3xl md:text-6xl font-black mb-6 leading-[1.1] md:leading-[1.1] tracking-tight"
      >
        Todo mundo cria sites. <br />
        <span
          class="block mt-2 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic text-3xl md:text-6xl pb-4 pr-4"
        >
          Nós criamos resultados.
        </span>
      </h1>

      <p
        class="text-base md:text-xl opacity-70 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
      >
        <strong class="text-base-content font-semibold"
          >Rápido atendimento</strong
        >
        +
        <strong class="text-base-content font-semibold"
          >criação estratégica</strong
        >
        +
        <strong class="text-base-content font-semibold"
          >foco em conversão</strong
        >
        para transformar o seu site em um sistema que funciona.
      </p>

      <div class="flex flex-col items-center justify-center gap-4">
        <a
          href="#cta"
          class="w-full md:w-auto btn rounded-full border-none bg-gradient-to-r from-primary to-info hover:brightness-110 text-white btn-lg px-2 md:px-12 text-base md:text-lg h-auto py-4 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]"
        >
          Quero um sistema que converte
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
        <p class="text-sm opacity-50 mt-4 md:mt-0 font-medium">
          Rápido, direto e sem tomar o seu tempo ⏰
        </p>
      </div>
    </header>
  </section>

  <!-- Clients Carousel -->
  <section
    class="py-10 bg-base-100/50 backdrop-blur-sm border-b border-base-content/5 overflow-hidden"
  >
    <div class="clients-carousel-wrapper">
      <div class="clients-carousel-track">
        <!-- First set -->
        <div class="clients-carousel-item">
          <img
            src="/images/logos/cns-logo.webp"
            alt="CNS"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/forus-logo.webp"
            alt="Forus"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/loupeloupe-logo.webp"
            alt="Loupe Loupe"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/souzalima-logo.webp"
            alt="Souza Lima"
            class="client-logo"
          />
        </div>
        <!-- Duplicated set for seamless loop -->
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/cns-logo.webp"
            alt="CNS"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/forus-logo.webp"
            alt="Forus"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/loupeloupe-logo.webp"
            alt="Loupe Loupe"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/souzalima-logo.webp"
            alt="Souza Lima"
            class="client-logo"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Cases Section -->
  <section
    class="py-20 md:py-32 bg-base-100 text-base-content relative z-10 border-b border-base-content/5 overflow-hidden"
  >
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <!-- Content List -->
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            O que fazemos <br />
            <span
              class="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic lowercase pb-2 pr-4 inline-block"
              >(de verdade)</span
            >
          </h2>
          <p class="text-base opacity-70 leading-relaxed mb-10">
            Do design ao processo completo: logo, branding, experiência do
            usuário, SEO, métricas, formulários, conversões, automações e
            processos.
          </p>

          <div class="space-y-6">
            <div
              v-for="(caseItem, index) in cases"
              :key="index"
              class="group flex gap-4 cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-base-200/50"
              :class="{
                'bg-base-200 shadow-sm ring-1 ring-base-content/5':
                  currentCaseIndex === index,
                'opacity-60 hover:opacity-100': currentCaseIndex !== index,
              }"
              @click="currentCaseIndex = index"
            >
              <div
                class="mt-1 w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300"
                :class="
                  currentCaseIndex === index
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-300/50 text-base-content/50 group-hover:text-primary group-hover:bg-primary/10'
                "
              >
                <i :class="caseItem.icon" class="text-lg"></i>
              </div>
              <div>
                <h3
                  class="text-xl font-bold mb-1 transition-colors duration-300"
                  :class="{ 'text-primary': currentCaseIndex === index }"
                >
                  {{ caseItem.case || caseItem.title }}
                </h3>
                <p class="opacity-70 text-base font-regular leading-relaxed">
                  {{ caseItem.description }}
                </p>
                <!-- Mobile Image Display -->
                <div
                  v-if="currentCaseIndex === index"
                  class="mt-4 relative rounded-xl overflow-hidden shadow-lg border border-base-content/10 bg-base-200 aspect-square md:hidden"
                >
                  <img
                    :src="caseItem.image"
                    :alt="caseItem.title"
                    class="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Display -->
        <div class="md:w-1/2 w-full hidden md:block">
          <div class="cases-switcher">
            <div
              v-for="(item, i) in cases"
              :key="i"
              class="cases-slide"
              :class="{ active: i === currentCaseIndex }"
            >
              <div
                class="relative rounded-2xl overflow-hidden shadow-2xl border border-base-content/10 bg-base-200 aspect-square"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <a
          href="#cta"
          class="btn border-none rounded-full bg-gradient-to-r from-primary to-info hover:brightness-110 text-white px-8 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
        >
          Quero um projeto de verdade <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- Processo Direto ao Ponto -->
  <section
    class="py-24 bg-gradient-to-b from-base-200 to-base-100 text-base-content relative z-10 border-b border-base-content/5"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary),0.05)_0%,transparent_70%)] pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-5xl font-black mb-6">
          Processo
          <span
            class="bg-gradient-to-r from-primary font-accent italic to-info bg-clip-text text-transparent pb-2 pr-4 inline-block"
            >direto ao ponto</span
          >
        </h2>
        <p class="text-lg md:text-xl opacity-80 leading-relaxed">
          Você não precisa de reunião desnecessária nem de “especialista”
          vendendo promessa. Você solicita e nós enviamos o
          <span class="text-primary font-bold">valor + escopo claro</span> do
          que será feito, sem enrolação.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Step 1 -->
        <div
          class="card bg-base-100/50 border border-base-content/10 p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="text-7xl mb-4 font-accent font-black italic bg-gradient-to-br from-primary/80 to-info/80 bg-clip-text text-transparent pb-2 pr-3"
          >
            01
          </div>
          <h3
            class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300"
          >
            Diagnóstico objetivo
          </h3>
          <p
            class="text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
          >
            Entendemos seu negócio e definimos o foco: gerar leads ou vendas.
          </p>
        </div>

        <!-- Step 2 -->
        <div
          class="card bg-base-100/50 border border-base-content/10 p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="text-7xl mb-4 font-accent font-black italic bg-gradient-to-br from-primary/80 to-info/80 bg-clip-text text-transparent pb-2 pr-3"
          >
            02
          </div>
          <h3
            class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300"
          >
            Estrutura que converte
          </h3>
          <p
            class="text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
          >
            Criamos página com copy estratégica + design funcional. Nada é
            estético. Tudo é pensado para conversão.
          </p>
        </div>

        <!-- Step 3 -->
        <div
          class="card bg-base-100/50 border border-base-content/10 p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="text-7xl mb-4 font-accent font-black italic bg-gradient-to-br from-primary/80 to-info/80 bg-clip-text text-transparent pb-2 pr-3"
          >
            03
          </div>
          <h3
            class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300"
          >
            Automação integrada
          </h3>
          <p
            class="text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
          >
            Leads entram direto no fluxo certo (WhatsApp, CRM ou e-mail). Sem
            processo manual. Sem improviso.
          </p>
        </div>

        <!-- Step 4 -->
        <div
          class="card bg-base-100/50 border border-base-content/10 p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div
            class="text-7xl mb-4 font-accent font-black italic bg-gradient-to-br from-primary/80 to-info/80 bg-clip-text text-transparent pb-2 pr-3"
          >
            04
          </div>
          <h3
            class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300"
          >
            Entrega clara e validável
          </h3>
          <p
            class="text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
          >
            Projeto ágil, escopo definido e foco em performance.
          </p>
        </div>
      </div>

      <!-- Footer / Target Audience -->
      <div
        class="text-center max-w-4xl mx-auto bg-base-200/50 rounded-2xl p-8 border border-base-content/5"
      >
        <p class="text-lg md:text-xl font-medium leading-relaxed">
          Para <span class="text-white">pequenos e médios negócios</span>,
          prestadores de serviço, agências e profissionais digitais ou quem quer
          mais
          <span
            class="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-bold"
            >resultado sem complicação.</span
          >
        </p>
      </div>
    </div>
  </section>
  <!-- Websites Showcase Carousel -->
  <section class="bg-base-200 text-base-content overflow-hidden">
    <div class="websites-carousel-wrapper">
      <div
        class="websites-carousel-track"
        :style="{ transform: `translateX(-${websiteCarouselOffset}px)` }"
      >
        <div
          v-for="(img, i) in websiteImagesLoop"
          :key="'ws-' + i"
          class="websites-carousel-item"
        >
          <div class="site-frame">
            <div class="site-frame-screen">
              <img :src="img" :alt="'Website ' + (i + 1)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const currentCaseIndex = ref(0);

const cases = [
  {
    title: 'Captação de Leads',
    icon: 'fa-regular fa-id-card',
    description: 'Formulário estratégico para captação de milhares de leads.',
    image: '/images/cases/captacao-de-leads.webp',
  },
  {
    title: 'Ranking no Google',
    icon: 'fa-solid fa-map-location-dot',
    description:
      'Site institucional com SEO otimizado para aparecer no Google, Google Meu Negócio e Google Maps.',
    image: '/images/cases/ranking-no-seo-e-whatsapp.webp',
  },
  {
    title: 'Venda e Entrega de Produtos',
    icon: 'fa-solid fa-bag-shopping',
    description:
      'E-commerce com envio de email marketing, gestão de estoque, integração com fretes e geração de notas fiscais.',
    image: '/images/cases/venda-e-entrega-de-produtos.webp',
  },
  {
    title: 'Conversão para Páginas',
    icon: 'fa-solid fa-bullhorn',
    description:
      'Landing page personalizada para conversão direta de leads qualificados.',
    image: '/images/cases/conversao-para-paginas.webp',
  },
  {
    title: 'App com Alto Tráfego',
    icon: 'fa-solid fa-mobile-screen-button',
    description:
      'Plataforma + App com experiência do usuário fluída e milhares de acessos e downloads.',
    image: '/images/cases/app-com-alto-trafego.webp',
  },
];

// ── Websites carousel ─────────────────────────────────────────────────────────
const websiteImages = [
  '/images/websites/akira_appti_me.webp',
  '/images/websites/cardapio-ehfjjv_appti_me.webp',
  '/images/websites/cardapio-restaurante-italiano-tp2n40zg_appti_me.webp',
  '/images/websites/cathedra_appti_me.webp',
  '/images/websites/cns_com_br.webp',
  '/images/websites/delicias-da-lu-hxxouwzc_appti_me.webp',
  '/images/websites/jogo-luta-3d-mobile-combate-personalizaca-a0qzw7ta_appti_me.webp',
  '/images/websites/loupeloupe_com.webp',
  '/images/websites/mimi-se_appti_me.webp',
  '/images/websites/observatorio-migracao-religiao_appti_me.webp',
  '/images/websites/quiz-emagrecimento-cartoon-dqmcchko_appti_me.webp',
  '/images/websites/souzalimaodontologia_com.webp',
];

// Duplicate for seamless loop
const websiteImagesLoop = computed(() => [...websiteImages, ...websiteImages]);

const ITEM_WIDTH = 280; // px (frame width + gap)
const websiteCarouselOffset = ref(0);
const totalWidth = computed(() => websiteImages.length * ITEM_WIDTH);

let websiteTimer = null;

onMounted(() => {
  // Website carousel: smooth RAF loop
  let lastTime = null;
  function animate(ts) {
    if (lastTime !== null) {
      const delta = ts - lastTime;
      const speed = 0.05; // px per ms
      websiteCarouselOffset.value += speed * delta;
      if (websiteCarouselOffset.value >= totalWidth.value) {
        websiteCarouselOffset.value -= totalWidth.value;
      }
    }
    lastTime = ts;
    websiteTimer = requestAnimationFrame(animate);
  }
  websiteTimer = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(websiteTimer);
});
</script>

<style scoped>
@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

/* Clients Carousel */
.clients-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.clients-carousel-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee 18s linear infinite;
}

.clients-carousel-track:hover {
  animation-play-state: paused;
}

.clients-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  border-right: 1px solid
    color-mix(in srgb, var(--color-base-content) 15%, transparent);
  flex-shrink: 0;
}

.clients-carousel-item:last-child {
  border-right: none;
}

.client-logo {
  height: 40px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  opacity: 0.55;
  filter: grayscale(100%) brightness(200%);
  transition:
    opacity 0.3s ease,
    filter 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
  filter: grayscale(0%) brightness(100%);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ── Cases Switcher ─────────────────────────────────────────────────────────── */
.cases-switcher {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.cases-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cases-slide.active {
  opacity: 1;
  transform: scale(1) translateY(0);
  z-index: 20;
}

.cases-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.cases-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: color-mix(
    in srgb,
    var(--color-base-content) 20%,
    transparent
  );
  transition: all 0.3s ease;
  cursor: pointer;
}

.cases-dot.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}

.cases-img {
  max-width: 100%;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* ── Websites Carousel ──────────────────────────────────────────────────────── */
.websites-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  padding-block: 1rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.websites-carousel-track {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  will-change: transform;
  padding: 12px 0 16px;
}

.websites-carousel-item {
  flex-shrink: 0;
}

/* Site Frame (browser-style) */
.site-frame {
  width: clamp(150px, 25vw, 200px);
  background: var(--color-base-200);
  border: 2px solid
    color-mix(in srgb, var(--color-base-content) 20%, transparent);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 12px 40px color-mix(in srgb, #000 40%, transparent);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.site-frame:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 56px color-mix(in srgb, #000 55%, transparent);
}

.site-frame-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: color-mix(in srgb, var(--color-base-100) 12%, transparent);
  border-bottom: 1px solid
    color-mix(in srgb, var(--color-base-100) 15%, transparent);
}

.site-frame-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-base-100) 25%, transparent);
  display: block;
}

.site-frame-screen {
  aspect-ratio: 1 / 2;
  overflow: hidden;
  background: var(--color-base-300);
}

.site-frame-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
</style>
