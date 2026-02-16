<template>
  <div
    class="min-h-screen bg-base-100 text-base-content font-sans overflow-x-hidden relative selection:bg-primary selection:text-primary-content"
  >
    <!-- Global Background Gradients -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full animate-pulse delay-700"
      ></div>
    </div>

    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-base-100/70 border-b border-white/5 transition-all duration-300"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-10 h-10 transition-transform group-hover:scale-110 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1300 1300"
              class="w-full h-full fill-current text-primary"
            >
              <defs>
                <linearGradient
                  id="navLogoGradient"
                  x1="531.81"
                  y1="765.53"
                  x2="1239.28"
                  y2="57.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="var(--color-primary)" />
                  <stop offset="1" stop-color="var(--color-secondary)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#navLogoGradient)"
                d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z"
              />
            </svg>
          </div>
          <span class="font-bold text-xl tracking-tight uppercase font-heading"
            >Apptime Agency</span
          >
        </NuxtLink>
        <a
          href="https://wa.me/5511975205644"
          target="_blank"
          class="hidden md:inline-flex btn btn-sm btn-primary rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
        >
          Falar com Especialista
        </a>
      </div>
    </nav>

    <!-- Main Content Spacer -->
    <div class="pt-24">
      <slot />
    </div>

    <!-- Footer CTA -->
    <footer
      class="relative z-10 bg-gradient-to-t from-base-100 to-base-300 py-24 text-center px-6 overflow-hidden"
    >
      <!-- Glow effect behind -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black mb-6">
          Pronto para transformar seu site em uma máquina de oportunidades?
        </h2>
        <p class="text-xl md:text-2xl text-base-content/70 mb-10">
          Descubra como podemos criar um site que realmente trabalha por você.
        </p>

        <div class="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5511975205644"
            target="_blank"
            class="btn btn-primary btn-lg rounded-full px-12 py-4 h-auto text-xl font-bold shadow-[0_0_50px_-10px_var(--color-primary)] hover:scale-105 transition-transform"
          >
            <i class="fa-brands fa-whatsapp"></i> Fale com a Apptime agora
          </a>
        </div>

        <div
          class="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-base-content/40"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Apptime Serviços de Internet
            Ltda. Todos os direitos reservados.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <NuxtLink to="/terms" class="hover:text-white transition-colors"
              >Termos</NuxtLink
            >
            <NuxtLink to="/privacy" class="hover:text-white transition-colors"
              >Privacidade</NuxtLink
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
