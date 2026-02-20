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
    class="min-h-screen bg-gradient-to-b from-base-100 via-base-200 to-base-100 text-base-content overflow-x-hidden relative selection:bg-primary selection:text-primary-content"
  >
    <!-- Background is now flat -->

    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 w-full border-b text-base-content transition-all duration-300',
        isScrolled
          ? 'border-base-300/50 bg-base-100/80 backdrop-blur-md'
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
            class="w-8 h-8 transition-transform group-hover:scale-110 duration-300 bg-gradient-to-br from-primary to-info p-2 rounded-lg"
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
          <span
            class="text-base font-bold font-accent italic tracking-wide bg-clip-text text-base-content"
            >Apptime Agency</span
          >
        </NuxtLink>
        <a
          href="#cta"
          class="inline-flex btn btn-sm rounded-full border-none bg-gradient-to-r from-primary to-info hover:brightness-110 text-white md:px-6 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_20%,transparent)] transition-all hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]"
        >
          Começar um projeto <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </nav>

    <!-- Main Content Spacer -->
    <div>
      <slot />
    </div>

    <div
      id="cta"
      class="relative py-24 px-6 border-t border-base-content/5 bg-gradient-to-b from-base-200 to-base-100 text-base-content text-center overflow-hidden"
    >
      <!-- Animated Grid Background (from Hero) -->
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

      <div class="relative z-10 max-w-5xl mx-auto">
        <div
          class="badge badge-primary badge-outline mb-8 py-3 px-4 font-bold text-sm tracking-wider"
        >
          Sem reunião. Sem enrolação.
        </div>

        <h2
          class="text-2xl md:text-5xl font-black mb-8 tracking-tight leading-tight"
        >
          Seu site pode continuar parado. <br />
          <span
            class="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent font-accent italic block"
            >Ou começar a gerar resultado.</span
          >
        </h2>
        <p class="text-base md:text-xl opacity-70 mb-10 max-w-2xl mx-auto">
          Solicite agora e receba uma proposta objetiva com valor, escopo claro
          e tudo que será entregue. Simples, direto e focado em performance.
        </p>

        <div class="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5511975205644"
            target="_blank"
            class="btn border-none rounded-full bg-gradient-to-r from-primary to-info hover:brightness-110 text-white btn-lg px-12 py-4 h-auto text-xl font-bold shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_30%,transparent)] transition-all hover:scale-105 hover:shadow-[0_0_50px_color-mix(in_srgb,var(--color-primary)_50%,transparent)]"
          >
            Solicitar Proposta Agora
            <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="relative z-10 py-20 px-6 overflow-hidden border-t border-base-content/5 bg-base-100 text-base-content"
    >
      <!-- Subtle Background Glow -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <!-- Column 1: Brand -->
          <div class="md:col-span-5">
            <NuxtLink to="/" class="flex items-center gap-3 mb-6 group">
              <div
                class="w-10 h-10 transition-transform group-hover:scale-110 duration-300 bg-gradient-to-br from-primary to-info p-2.5 rounded-xl shadow-lg shadow-primary/20"
              >
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
              <span
                class="text-xl font-bold font-accent italic tracking-wide text-base-content"
              >
                Apptime Agency
              </span>
            </NuxtLink>
            <p
              class="text-base-content/60 max-w-sm leading-relaxed text-sm md:text-base"
            >
              Ajudamos empresas a saírem do improviso e entrarem no mundo
              digital com sites profissionais e estratégicos.
            </p>
          </div>

          <!-- Column 2: Contact -->
          <div class="md:col-span-4">
            <h4
              class="text-sm font-bold uppercase tracking-widest text-primary mb-6"
            >
              Contato
            </h4>
            <div class="space-y-4">
              <a
                href="https://wa.me/5511975205644"
                target="_blank"
                class="flex items-center gap-3 group text-base-content/70 hover:text-primary transition-colors"
              >
                <div
                  class="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                >
                  <i class="fa-brands fa-whatsapp text-lg"></i>
                </div>
                <span class="text-sm">+55 11 97520-5644</span>
              </a>
              <a
                href="mailto:contato@apptime.app"
                class="flex items-center gap-3 group text-base-content/70 hover:text-primary transition-colors"
              >
                <div
                  class="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                >
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <span class="text-sm">contato@apptime.dev</span>
              </a>
            </div>
          </div>

          <!-- Column 3: Social -->
          <div class="md:col-span-3">
            <h4
              class="text-sm font-bold uppercase tracking-widest text-primary mb-6"
            >
              Redes Sociais
            </h4>
            <div class="flex flex-wrap gap-4">
              <a
                href="https://instagram.com/apptimeai"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all hover:scale-110 shadow-sm"
                title="Instagram"
              >
                <i class="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/company/apptimeai"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 shadow-sm"
                title="LinkedIn"
              >
                <i class="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://github.com/apptimedev"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-[#333] hover:text-white transition-all hover:scale-110 shadow-sm"
                title="GitHub"
              >
                <i class="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://wa.me/5511975205644"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all hover:scale-110 shadow-sm"
                title="WhatsApp"
              >
                <i class="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div
          class="pt-8 border-t border-base-content/5 flex flex-col items-center gap-6 text-xs md:text-sm text-base-content/40 text-center"
        >
          <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>
              &copy; {{ new Date().getFullYear() }} Apptime Serviços de Internet
              Ltda.<br />Todos os direitos reservados.
            </p>
          </div>
          <p>CNPJ: 43.602.070/0001-22</p>
          <p class="max-w-5xl text-xs">
            Sua privacidade é nossa prioridade. Suas informações estão 100%
            seguras e são utilizadas exclusivamente para facilitar o nosso
            contato comercial. Não vendemos, não alugamos e não compartilhamos
            seus dados com terceiros sob nenhuma circunstância.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}
</style>
