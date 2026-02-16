<template>
  <main class="max-w-4xl mx-auto px-6 py-12 md:py-20">
    <div class="mb-10">
      <NuxtLink
        to="/"
        class="btn btn-ghost btn-sm pl-0 gap-2 hover:bg-transparent hover:text-primary"
      >
        <i class="fa-solid fa-arrow-left"></i> Voltar para Home
      </NuxtLink>
      <h1 class="text-4xl md:text-5xl font-black mt-6 mb-4">Termos de Uso</h1>
      <p class="opacity-60">Última atualização: 26 de Janeiro de 2024</p>
    </div>

    <div
      class="prose prose-lg prose-headings:font-bold prose-h2:text-primary prose-a:text-primary max-w-none opacity-80 bg-base-200 p-8 rounded-box border border-base-300"
    >
      <h3>1. Aceitação dos Termos</h3>
      <p>
        Ao acessar e usar os serviços da Apptime ("nós", "nosso"), você aceita e
        concorda em cumprir estes Termos de Uso. Se você não concordar com
        qualquer parte destes termos, não deverá usar nossos serviços.
      </p>

      <h3>2. Serviços Oferecidos</h3>
      <p>
        A Apptime oferece serviços de desenvolvimento web, design estratégico,
        otimização de conversão e automação de marketing. Os detalhes
        específicos, prazos e entregáveis de cada projeto são definidos em
        contrato individual ou proposta comercial aprovada.
      </p>

      <h3>3. Propriedade Intelectual</h3>
      <p>
        Todo o conteúdo, layout, gráficos, código e outros materiais criados
        pela Apptime, salvo disposição em contrário no contrato de prestação de
        serviços, são de nossa propriedade intelectual ou licenciados para uso.
        O cliente recebe o direito de uso sobre o produto final entregue
        mediante pagamento integral.
      </p>

      <h3>4. Responsabilidades do Usuário</h3>
      <p>
        Você concorda em usar nossos serviços apenas para fins legais e de forma
        que não infrinja os direitos de terceiros ou restrinja o uso e gozo dos
        serviços por qualquer outra pessoa.
      </p>

      <h3>5. Limitação de Responsabilidade</h3>
      <p>
        A Apptime não será responsável por quaisquer danos indiretos,
        incidentais, especiais, consequenciais ou punitivos, incluindo, sem
        limitação, perda de lucros, dados, uso, boa vontade ou outras perdas
        intangíveis.
      </p>

      <h3>6. Alterações nos Termos</h3>
      <p>
        Reservamo-nos o direito de modificar estes termos a qualquer momento. As
        alterações entrarão em vigor imediatamente após a publicação no site. O
        uso continuado dos serviços após as alterações constitui aceitação dos
        novos termos.
      </p>

      <h3>7. Contato</h3>
      <p>
        Se você tiver dúvidas sobre estes Termos, entre em contato conosco
        através dos canais oficiais listados em nosso site.
      </p>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Termos de Uso - Apptime',
  meta: [
    { name: 'description', content: 'Termos de uso e condições da Apptime.' },
  ],
});
</script>
