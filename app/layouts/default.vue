<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    class="min-h-screen bg-base-100 text-base-content overflow-x-hidden relative selection:bg-primary selection:text-primary-content"
  >
    <!-- Background is now flat -->

    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 w-full border-b text-base-content transition-all duration-300',
        isScrolled
          ? 'border-base-300 bg-base-100'
          : 'border-transparent bg-transparent',
      ]"
    >
      <div
        :class="[
          'max-w-7xl mx-auto md:px-6 px-4 flex justify-between items-center transition-all duration-300',
          isScrolled ? 'py-4' : 'py-8',
        ]"
      >
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-8 h-8 transition-transform group-hover:scale-110 duration-300 bg-primary p-2 rounded-lg"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1300 1300"
                class="w-full h-full fill-current text-primary-content"
              >
                <path
                  d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z"
                />
              </svg>
            </div>
          </div>
          <span class="text-base font-bold font-accent italic"
            >Apptime Agency</span
          >
        </NuxtLink>
        <a
          href="https://wa.me/5511975205644"
          target="_blank"
          class="inline-flex btn btn-sm btn-primary md:px-6 shadow-none border-none transition-all"
        >
          Começar um projeto <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </nav>

    <!-- Main Content Spacer -->
    <div>
      <slot />
    </div>

    <!-- Footer CTA -->
    <footer
      class="relative z-10 bg-base-100 py-24 text-center px-6 overflow-hidden border-t border-base-300 text-base-content"
    >
      <div class="relative z-10 max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          Pronto para transformar seu site em uma máquina de oportunidades?
        </h2>
        <p class="text-xl md:text-2xl opacity-70 mb-10">
          Descubra como podemos criar um site que realmente trabalha por você.
        </p>

        <div class="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5511975205644"
            target="_blank"
            class="btn btn-primary btn-lg px-12 py-4 h-auto text-xl font-bold shadow-none border-none transition-transform"
          >
            <i class="fa-brands fa-whatsapp"></i> Fale com a Apptime agora
          </a>
        </div>

        <div
          class="mt-20 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center text-sm opacity-40"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Apptime Serviços de Internet
            Ltda. Todos os direitos reservados.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <NuxtLink to="/terms" class="hover:text-primary transition-colors"
              >Termos</NuxtLink
            >
            <NuxtLink to="/privacy" class="hover:text-primary transition-colors"
              >Privacidade</NuxtLink
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
