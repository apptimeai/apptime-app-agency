<template>
  <!-- Hero Section -->
  <section
    class="relative bg-base-200 text-base-content pt-24 border-b border-base-300 overflow-hidden"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 z-0">
      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 opacity-12"
        style="
          background-image:
            linear-gradient(
              to right,
              var(--color-primary) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--color-primary) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: gridMove 20s linear infinite;
        "
      ></div>

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-base-200/80 to-base-200"
      ></div>
    </div>

    <header
      class="relative z-10 w-full max-w-5xl mx-auto px-6 pt-12 pb-12 md:pt-20 md:pb-20 text-center"
    >
      <div class="badge badge-primary badge-outline mb-6 py-3 px-4 font-bold">
        Processo rápido e sem burocracia
      </div>

      <h1
        class="text-3xl md:text-6xl font-black mb-6 leading-[1.1] md:leading-[1.1] tracking-tight"
      >
        Todo mundo cria sites. <br />
        <span
          class="block mt-2 text-primary font-accent italic text-3xl md:text-6xl pb-4"
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
          class="w-full md:w-auto btn btn-primary btn-lg px-2 md:px-12 text-base md:text-lg h-auto py-4"
        >
          Quero um sistema que converte
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
        <p class="text-sm opacity-50 mt-4 md:mt-0 font-medium">
          Rápido e direto, sem tomar o seu tempo.
        </p>
      </div>
    </header>
  </section>

  <!-- Clients Carousel -->
  <section class="py-10 bg-base-100 border-b border-base-300 overflow-hidden">
    <div class="text-center mb-6">
      <p class="text-xs font-bold tracking-widest uppercase opacity-40">
        Quem confia na Apptime
      </p>
    </div>
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
    class="relative z-10 py-20 bg-base-content text-base-100 border-y border-base-300"
  >
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Se seu site não traz
          <span class="text-primary font-accent italic">oportunidades</span>,
          <br class="hidden md:block" />ele não está cumprindo o papel dele.
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div
          class="card bg-base-200 text-base-content border border-base-300 hover:border-primary transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-4 text-3xl"
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
          class="card bg-base-200 text-base-content border border-base-300 hover:border-primary transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-4 text-3xl"
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
          class="card bg-base-200 text-base-content border border-base-300 hover:border-primary transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-4 text-3xl"
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
          class="card bg-base-200 text-base-content border border-base-300 hover:border-primary transition-all duration-300"
        >
          <div class="card-body items-center text-center">
            <div
              class="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-4 text-3xl"
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
          class="w-full md:w-auto btn btn-primary btn-lg px-2 md:px-12 text-base md:text-lg h-auto py-2"
        >
          Quero trazer mais oportunidades
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- What We Do -->
  <section
    class="relative z-10 py-20 md:py-32 bg-base-100 text-base-content overflow-hidden border-b border-base-300"
  >
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            O que fazemos <br />
            <span class="text-primary font-accent italic lowercase"
              >(de verdade)</span
            >
          </h2>
          <div class="space-y-8">
            <div class="flex gap-4">
              <div
                class="mt-1 w-10 h-10 shrink-0 bg-base-300 flex items-center justify-center text-primary"
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
                class="mt-1 w-10 h-10 shrink-0 bg-base-300 flex items-center justify-center text-primary"
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
                class="mt-1 w-10 h-10 shrink-0 bg-base-300 flex items-center justify-center text-primary"
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
                class="mt-1 w-10 h-10 shrink-0 bg-base-300 flex items-center justify-center text-primary"
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
            <a href="#cta" class="btn btn-outline btn-primary px-8">
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
    class="py-20 bg-base-content text-base-100 relative z-10 border-b border-base-300"
  >
    <div class="max-w-6xl mx-auto md:px-6 px-4">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-16">
        Como funciona nosso método
      </h2>

      <div class="grid md:grid-cols-4 gap-8">
        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none"
          >
            1
          </div>
          <div
            class="relative z-10 bg-base-200 text-base-content p-6 border-t-8 border-primary h-full transition-transform duration-300"
          >
            <h3 class="text-xl font-bold mb-3">Diagnóstico rápido</h3>
            <p class="opacity-70 text-sm">
              Entendemos seu negócio, oferta e objetivo (lead ou venda).
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none"
          >
            2
          </div>
          <div
            class="relative z-10 bg-base-300 text-base-content p-6 border-t-8 border-secondary h-full transition-transform duration-300"
          >
            <h3 class="text-xl font-bold mb-3">Estrutura de conversão</h3>
            <p class="opacity-70 text-sm">
              Criamos a página com copy estratégica + design funcional.
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none"
          >
            3
          </div>
          <div
            class="relative z-10 bg-base-300 text-base-content p-6 border-t-8 border-accent h-full transition-transform duration-300"
          >
            <h3 class="text-xl font-bold mb-3">Automação integrada</h3>
            <p class="opacity-70 text-sm">
              Leads caem direto no fluxo certo (WhatsApp, CRM ou e-mail).
            </p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -top-4 -left-4 text-8xl font-black opacity-5 z-0 select-none"
          >
            4
          </div>
          <div
            class="relative z-10 bg-base-300 text-base-content p-6 border-t-8 border-primary h-full transition-transform duration-300"
          >
            <h3 class="text-xl font-bold mb-3">Entrega sem enrolação</h3>
            <p class="opacity-70 text-sm">Projeto ágil, claro e validável.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Audience & Why Us Split -->
  <section class="py-20 bg-base-100 text-base-content relative z-10">
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

          <div class="bg-base-200 p-6 border-l-8 border-primary mb-8">
            <p class="mb-2">
              🤔 <strong>Se você quer só "um site bonito"</strong>,
              provavelmente não somos pra você.
            </p>
            <p class="font-bold text-primary">
              😎 Se você quer resultado, somos.
            </p>
          </div>

          <!-- Mobile Websites Carousel -->
          <div class="websites-carousel-wrapper">
            <div
              class="websites-carousel-track"
              :style="{ transform: `translateX(-${audienceCarouselOffset}px)` }"
            >
              <div
                v-for="(img, i) in websiteImagesLoop"
                :key="'aud-' + i"
                class="websites-carousel-item"
              >
                <div class="mobile-frame">
                  <div class="mobile-frame-notch"></div>
                  <div class="mobile-frame-screen">
                    <img :src="img" :alt="'Website ' + (i + 1)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Us -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Por que escolher a Apptime?</h2>
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div class="p-4 bg-base-200 hover:bg-base-300 transition-colors">
              <div class="text-3xl mb-2">🚀</div>
              <h4 class="font-bold mb-1">Sistema de vendas</h4>
              <p class="text-sm opacity-70">
                Não criamos site. Criamos sistemas que convertem.
              </p>
            </div>
            <div class="p-4 bg-base-200 hover:bg-base-300 transition-colors">
              <div class="text-3xl mb-2">⚙️</div>
              <h4 class="font-bold mb-1">Automação total</h4>
              <p class="text-sm opacity-70">
                Automação configurada desde o primeiro contato.
              </p>
            </div>
            <div class="p-4 bg-base-200 hover:bg-base-300 transition-colors">
              <div class="text-3xl mb-2">📊</div>
              <h4 class="font-bold mb-1">Foco em dados</h4>
              <p class="text-sm opacity-70">
                Tudo pensado para melhorar sua conversão.
              </p>
            </div>
            <div class="p-4 bg-base-200 hover:bg-base-300 transition-colors">
              <div class="text-3xl mb-2">🇧🇷</div>
              <h4 class="font-bold mb-1">Sem lero-lero</h4>
              <p class="text-sm opacity-70">
                Linguagem simples, prática e sem marketing vazio.
              </p>
            </div>
          </div>

          <!-- Mobile Websites Carousel (reverse direction) -->
          <div class="websites-carousel-wrapper">
            <div
              class="websites-carousel-track"
              :style="{ transform: `translateX(-${whyUsCarouselOffset}px)` }"
            >
              <div
                v-for="(img, i) in websiteImagesLoopReverse"
                :key="'why-' + i"
                class="websites-carousel-item"
              >
                <div class="mobile-frame">
                  <div class="mobile-frame-notch"></div>
                  <div class="mobile-frame-screen">
                    <img :src="img" :alt="'Website ' + (i + 1)" />
                  </div>
                </div>
              </div>
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
  '/images/websites/akira_appti_me_1770650444747 1.png',
  '/images/websites/cardapio-ehfjjv_appti_me_1770650473303 2.png',
  '/images/websites/cardapio-restaurante-italiano-tp2n40zg_appti_me_1770650762598 2.png',
  '/images/websites/cathedra_appti_me_1770650723958 2.png',
  '/images/websites/cns_com_br_1770650454730 2.png',
  '/images/websites/delicias-da-lu-hxxouwzc_appti_me_1770650759178 2.png',
  '/images/websites/jogo-luta-3d-mobile-combate-personalizaca-a0qzw7ta_appti_me_1770650460086 1.png',
  '/images/websites/loupeloupe_com_1771440749278 1.png',
  '/images/websites/mimi-se_appti_me_1771440746783 1.png',
  '/images/websites/quiz-emagrecimento-cartoon-dqmcchko_appti_me_1770650476417 1.png',
  '/images/websites/souzalimaodontologia_com_1770650470235 2.png',
];

// Duplicate for seamless loop
const websiteImagesLoop = computed(() => [...websiteImages, ...websiteImages]);
const websiteImagesLoopReverse = computed(() => {
  const reversed = [...websiteImages].reverse();
  return [...reversed, ...reversed];
});

const ITEM_WIDTH = 140; // px (frame width + gap)
const audienceCarouselOffset = ref(0);
const whyUsCarouselOffset = ref(0);
const totalWidth = computed(() => websiteImages.length * ITEM_WIDTH);

let websiteTimer = null;

function tick() {
  // Cases switcher
  currentCaseIndex.value = (currentCaseIndex.value + 1) % caseImages.length;

  // Audience carousel (left)
  audienceCarouselOffset.value += 0.5;
  if (audienceCarouselOffset.value >= totalWidth.value) {
    audienceCarouselOffset.value = 0;
  }

  // Why Us carousel (right)
  whyUsCarouselOffset.value -= 0.5;
  if (whyUsCarouselOffset.value <= 0) {
    whyUsCarouselOffset.value = totalWidth.value;
  }
}

onMounted(() => {
  whyUsCarouselOffset.value = totalWidth.value / 2;
  // Cases: switch every 2.5s
  caseTimer = setInterval(() => {
    currentCaseIndex.value = (currentCaseIndex.value + 1) % caseImages.length;
  }, 2500);
  // Carousels: smooth RAF loop
  let lastTime = null;
  function animate(ts) {
    if (lastTime !== null) {
      const delta = ts - lastTime;
      const speed = 0.04; // px per ms
      audienceCarouselOffset.value += speed * delta;
      if (audienceCarouselOffset.value >= totalWidth.value) {
        audienceCarouselOffset.value -= totalWidth.value;
      }
      whyUsCarouselOffset.value += speed * delta;
      if (whyUsCarouselOffset.value >= totalWidth.value) {
        whyUsCarouselOffset.value -= totalWidth.value;
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
    black 12%,
    black 88%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
}

.websites-carousel-track {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  will-change: transform;
}

.websites-carousel-item {
  flex-shrink: 0;
}

/* Mobile Frame */
.mobile-frame {
  width: 100px;
  background: var(--color-base-content);
  border-radius: 18px;
  padding: 8px 5px 10px;
  box-shadow:
    0 8px 24px color-mix(in srgb, var(--color-base-content) 30%, transparent),
    inset 0 0 0 1px
      color-mix(in srgb, var(--color-base-content) 60%, transparent);
  position: relative;
}

.mobile-frame-notch {
  width: 36px;
  height: 6px;
  background: color-mix(in srgb, var(--color-base-100) 20%, transparent);
  border-radius: 3px;
  margin: 0 auto 6px;
}

.mobile-frame-screen {
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 9 / 16;
  background: var(--color-base-200);
}

.mobile-frame-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
</style>
