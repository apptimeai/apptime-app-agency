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
        Processo rápido e sem burocracia
      </div>

      <h1
        class="text-3xl md:text-6xl font-black mb-6 leading-[1.1] md:leading-[1.1] tracking-tight"
      >
        Todo mundo cria sites. <br />
        <span
          class="block mt-2 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic text-3xl md:text-6xl pb-4"
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
          Rápido, direto e sem tomar o seu tempo.
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
          <img src="/images/logos/cns-logo.png" alt="CNS" class="client-logo" />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/forus-logo.png"
            alt="Forus"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/loupeloupe-logo.png"
            alt="Loupe Loupe"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item">
          <img
            src="/images/logos/souzalima-logo.png"
            alt="Souza Lima"
            class="client-logo"
          />
        </div>
        <!-- Duplicated set for seamless loop -->
        <div class="clients-carousel-item" aria-hidden="true">
          <img src="/images/logos/cns-logo.png" alt="CNS" class="client-logo" />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/forus-logo.png"
            alt="Forus"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/loupeloupe-logo.png"
            alt="Loupe Loupe"
            class="client-logo"
          />
        </div>
        <div class="clients-carousel-item" aria-hidden="true">
          <img
            src="/images/logos/souzalima-logo.png"
            alt="Souza Lima"
            class="client-logo"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- The Problem -->
  <section
    class="relative z-10 py-20 bg-gradient-to-br from-base-200 via-base-300 to-base-200 text-base-content border-y border-base-content/5 overflow-hidden"
  >
    <!-- Background Effect -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto md:px-6 px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Se seu site não traz
          <span
            class="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic"
            >oportunidades</span
          >, <br class="hidden md:block" />ele não está cumprindo o papel dele.
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div
          class="card bg-base-100/50 backdrop-blur-md border border-base-content/5 hover:border-primary/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300/50 flex items-center justify-center mb-4 text-3xl"
            >
              😵
            </div>
            <h3 class="font-bold text-lg mb-2">Site institucional parado</h3>
            <p class="text-sm opacity-60">
              Bonito, mas não gera nenhum contato novo.
            </p>
          </div>
        </div>

        <div
          class="card bg-base-100/50 backdrop-blur-md border border-base-content/5 hover:border-primary/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300/50 flex items-center justify-center mb-4 text-3xl"
            >
              📉
            </div>
            <h3 class="font-bold text-lg mb-2">Tráfego que não vira lead</h3>
            <p class="text-sm opacity-60">
              Visitantes entram e saem sem deixar interesse.
            </p>
          </div>
        </div>

        <div
          class="card bg-base-100/50 backdrop-blur-md border border-base-content/5 hover:border-primary/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300/50 flex items-center justify-center mb-4 text-3xl"
            >
              🤯
            </div>
            <h3 class="font-bold text-lg mb-2">Tudo no improviso</h3>
            <p class="text-sm opacity-60">
              Leads perdidos por falta de gestão e follow-up.
            </p>
          </div>
        </div>

        <div
          class="card bg-base-100/50 backdrop-blur-md border border-base-content/5 hover:border-primary/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300/50 flex items-center justify-center mb-4 text-3xl"
            >
              🐢
            </div>
            <h3 class="font-bold text-lg mb-2">Processos manuais</h3>
            <p class="text-sm opacity-60">
              Vendas travadas por burocracia e lentidão.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 max-w-2xl mx-auto">
        <p class="text-lg font-medium italic opacity-80">
          Todo mundo 'faz site'. Poucos pensam em jornada, oferta e automação.
          <br class="hidden md:block" />Vamos mudar isso?
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 mt-12">
        <a
          href="#cta"
          class="w-full md:w-auto btn rounded-full border-none bg-gradient-to-r from-primary to-info hover:brightness-110 text-white btn-lg px-2 md:px-12 text-base md:text-lg h-auto py-2 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
        >
          Quero trazer mais oportunidades
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- What We Do -->
  <section
    class="relative z-10 py-20 md:py-32 bg-base-100 text-base-content overflow-hidden border-b border-base-content/5"
  >
    <!-- Background Glow -->
    <div
      class="absolute right-0 top-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"
    ></div>
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            O que fazemos <br />
            <span
              class="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic lowercase"
              >(de verdade)</span
            >
          </h2>
          <div class="space-y-8">
            <div class="flex gap-4">
              <div
                class="mt-1 w-10 h-10 shrink-0 bg-base-300/50 flex items-center justify-center text-primary"
              >
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">
                  Sites pensados para conversão
                </h3>
                <p class="opacity-70">
                  Não é só layout. É copy, estrutura e CTA certo no lugar certo.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="mt-1 w-10 h-10 shrink-0 bg-base-300/50 flex items-center justify-center text-primary"
              >
                <i class="fa-solid fa-magnet"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">
                  Captação de leads automática
                </h3>
                <p class="opacity-70">
                  Formulários, WhatsApp, CRM, e-mails e integrações funcionando
                  juntos.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="mt-1 w-10 h-10 shrink-0 bg-base-300/50 flex items-center justify-center text-primary"
              >
                <i class="fa-solid fa-robot"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">Automação de processos</h3>
                <p class="opacity-70">
                  Menos trabalho manual. Mais tempo para focar no que importa.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="mt-1 w-10 h-10 shrink-0 bg-base-300/50 flex items-center justify-center text-primary"
              >
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">
                  Foco em resultado, não em criar um site
                </h3>
                <p class="opacity-70">
                  Cada página tem um objetivo claro: otimizar para melhorar a
                  experiência do usuário e as conversões.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <a
              href="#cta"
              class="btn border-none rounded-full bg-gradient-to-r from-primary to-info hover:brightness-110 text-white px-8 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
            >
              Ver se isso serve pra mim
            </a>
          </div>
        </div>

        <div class="md:w-1/2 w-full">
          <!-- Cases Image Switcher -->
          <div class="cases-switcher">
            <div
              v-for="(img, i) in caseImages"
              :key="img"
              class="cases-slide"
              :class="{ active: i === currentCaseIndex }"
            >
              <img :src="img" :alt="'Case ' + (i + 1)" class="cases-img" />
            </div>
            <!-- Dots -->
            <div class="cases-dots">
              <button
                v-for="(img, i) in caseImages"
                :key="'dot-' + i"
                class="cases-dot"
                :class="{ active: i === currentCaseIndex }"
                @click="currentCaseIndex = i"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Method -->
  <section
    class="py-20 bg-gradient-to-t from-base-200 to-base-100 text-base-content relative z-10 border-b border-base-content/5"
  >
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-16">
        Como funciona nosso método
      </h2>

      <div class="grid md:grid-cols-4 gap-8">
        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none text-white/10"
          >
            1
          </div>
          <div
            class="relative z-10 bg-base-100/60 backdrop-blur-md text-base-content p-6 border-t-8 border-primary h-full transition-transform duration-300 hover:-translate-y-2 border border-base-content/5 shadow-lg"
          >
            <h3 class="text-xl font-bold mb-3">Diagnóstico rápido</h3>
            <p class="opacity-70 text-sm">
              Entendemos seu negócio, oferta e objetivo (lead ou venda).
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none text-white/10"
          >
            2
          </div>
          <div
            class="relative z-10 bg-base-100/60 backdrop-blur-md text-base-content p-6 border-t-8 border-secondary h-full transition-transform duration-300 hover:-translate-y-2 border border-base-content/5 shadow-lg"
          >
            <h3 class="text-xl font-bold mb-3">Estrutura de conversão</h3>
            <p class="opacity-70 text-sm">
              Criamos a página com copy estratégica + design funcional.
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none text-white/10"
          >
            3
          </div>
          <div
            class="relative z-10 bg-base-100/60 backdrop-blur-md text-base-content p-6 border-t-8 border-accent h-full transition-transform duration-300 hover:-translate-y-2 border border-base-content/5 shadow-lg"
          >
            <h3 class="text-xl font-bold mb-3">Automação integrada</h3>
            <p class="opacity-70 text-sm">
              Leads caem direto no fluxo certo (WhatsApp, CRM ou e-mail).
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none text-white/10"
          >
            4
          </div>
          <div
            class="relative z-10 bg-base-100/60 backdrop-blur-md text-base-content p-6 border-t-8 border-primary h-full transition-transform duration-300 hover:-translate-y-2 border border-base-content/5 shadow-lg"
          >
            <h3 class="text-xl font-bold mb-3">Entrega sem enrolação</h3>
            <p class="opacity-70 text-sm">Projeto ágil, claro e validável.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Audience & Why Us Split -->
  <section
    class="py-20 bg-gradient-to-b from-base-100 to-base-200 text-base-content relative z-10"
  >
    <div class="max-w-7xl mx-auto md:px-6 px-4">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Audience -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Para quem é a Apptime</h2>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 text-lg">
              <i class="fa-solid fa-circle-check text-primary"></i> Pequenos e
              médios negócios
            </li>
            <li class="flex items-center gap-3 text-lg">
              <i class="fa-solid fa-circle-check text-primary"></i> Prestadores
              de serviço
            </li>
            <li class="flex items-center gap-3 text-lg">
              <i class="fa-solid fa-circle-check text-primary"></i> Agências e
              profissionais digitais
            </li>
            <li class="flex items-center gap-3 text-lg">
              <i class="fa-solid fa-circle-check text-primary"></i> Quem quer
              vender mais sem complicar o processo
            </li>
          </ul>

          <div
            class="bg-base-100/50 backdrop-blur-sm p-6 border-l-8 border-primary mb-8 border border-base-content/5 rounded-r-lg"
          >
            <p class="mb-2">
              🤔 <strong>Se você quer só "um site bonito"</strong>,
              provavelmente não somos pra você.
            </p>
            <p
              class="font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent"
            >
              😎 Se você quer resultado, somos.
            </p>
          </div>
        </div>

        <!-- Why Us -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Por que escolher a Apptime?</h2>
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div
              class="p-4 bg-base-100/50 hover:bg-base-200/50 border border-base-content/5 transition-all rounded-lg"
            >
              <div class="text-3xl mb-2">🚀</div>
              <h4 class="font-bold mb-1">Sistema de vendas</h4>
              <p class="text-sm opacity-70">
                Não criamos site. Criamos sistemas que convertem.
              </p>
            </div>
            <div
              class="p-4 bg-base-100/50 hover:bg-base-200/50 border border-base-content/5 transition-all rounded-lg"
            >
              <div class="text-3xl mb-2">⚙️</div>
              <h4 class="font-bold mb-1">Automação total</h4>
              <p class="text-sm opacity-70">
                Automação configurada desde o primeiro contato.
              </p>
            </div>
            <div
              class="p-4 bg-base-100/50 hover:bg-base-200/50 border border-base-content/5 transition-all rounded-lg"
            >
              <div class="text-3xl mb-2">📊</div>
              <h4 class="font-bold mb-1">Foco em dados</h4>
              <p class="text-sm opacity-70">
                Tudo pensado para melhorar sua conversão.
              </p>
            </div>
            <div
              class="p-4 bg-base-100/50 hover:bg-base-200/50 border border-base-content/5 transition-all rounded-lg"
            >
              <div class="text-3xl mb-2">🇧🇷</div>
              <h4 class="font-bold mb-1">Sem lero-lero</h4>
              <p class="text-sm opacity-70">
                Linguagem simples, prática e sem marketing vazio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Websites Showcase Carousel -->
  <section
    class="pb-10 bg-base-200 text-base-content border-b border-base-content/5 overflow-hidden"
  >
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

// ── Cases image switcher ──────────────────────────────────────────────────────
const caseImages = [
  '/images/cases/app-store-analytics.png',
  '/images/cases/apptime-funnel.png',
  '/images/cases/cathedra-forms.png',
  '/images/cases/cns-forms.png',
  '/images/cases/copy-oferta.png',
  '/images/cases/copy-pao-caseiro.png',
  '/images/cases/forus-google-play.png',
  '/images/cases/google-analytics-chart.png',
  '/images/cases/google-analytics-funnel.png',
  '/images/cases/loupeloupe-1.png',
  '/images/cases/loupeloupe-2.png',
  '/images/cases/souzalima-maps-whatsapp.png',
];

const currentCaseIndex = ref(0);
let caseTimer = null;

// ── Websites carousel ─────────────────────────────────────────────────────────
const websiteImages = [
  '/images/websites/akira_appti_me.png',
  '/images/websites/cardapio-ehfjjv_appti_me.png',
  '/images/websites/cardapio-restaurante-italiano-tp2n40zg_appti_me.png',
  '/images/websites/cathedra_appti_me.png',
  '/images/websites/cns_com_br.png',
  '/images/websites/delicias-da-lu-hxxouwzc_appti_me.png',
  '/images/websites/jogo-luta-3d-mobile-combate-personalizaca-a0qzw7ta_appti_me.png',
  '/images/websites/loupeloupe_com.png',
  '/images/websites/mimi-se_appti_me.png',
  '/images/websites/observatorio-migracao-religiao_appti_me.png',
  '/images/websites/quiz-emagrecimento-cartoon-dqmcchko_appti_me.png',
  '/images/websites/souzalimaodontologia_com.png',
];

// Duplicate for seamless loop
const websiteImagesLoop = computed(() => [...websiteImages, ...websiteImages]);

const ITEM_WIDTH = 280; // px (frame width + gap)
const websiteCarouselOffset = ref(0);
const totalWidth = computed(() => websiteImages.length * ITEM_WIDTH);

let websiteTimer = null;

onMounted(() => {
  // Cases: switch every 2.5s
  caseTimer = setInterval(() => {
    currentCaseIndex.value = (currentCaseIndex.value + 1) % caseImages.length;
  }, 2500);
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
  clearInterval(caseTimer);
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
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 4px solid var(--color-base-300);
  background: var(--color-base-200);
}

.cases-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.7s ease;
}

.cases-slide.active {
  opacity: 1;
}

.cases-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cases-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.cases-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-base-content) 30%, transparent);
  border: none;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
  padding: 0;
}

.cases-dot.active {
  background: var(--color-primary);
  transform: scale(1.3);
}

/* ── Websites Carousel ──────────────────────────────────────────────────────── */
.websites-carousel-wrapper {
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
