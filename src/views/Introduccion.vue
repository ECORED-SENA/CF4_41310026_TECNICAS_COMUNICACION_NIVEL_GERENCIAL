<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-5
        .row.mb-4
          .col-md-auto(data-aos="fade-right")
            img(src="@/assets/curso/intro/img1.svg", style="max-width: 85px", alt="").m-auto.mb-4.mb-lg-0
          .col(data-aos="fade-left")
            p.mb-0 El plan de comunicación interno, liderado por la gerencia, asegura que los colaboradores adquieran los conocimientos necesarios para elaborar documentos escritos como informes, memorandos, correos y cartas de acuerdo. Todos estos documentos deben cumplir con las reglas gramaticales y ortográficas, así como con los protocolos de comunicación establecidos por la organización. De esta forma, se garantiza que la información fluya de manera precisa y uniforme dentro de la empresa. 
        .row
          .col-lg-7(data-aos="fade-right")
            .p-4.bg-color-p20.brounded.mb-4
              p.mb-0 Este objetivo se logra mediante la implementación coherente de la relación entre la comunicación escrita y los protocolos de la organización. Al aplicar estas directrices, la empresa promueve la claridad y efectividad en el intercambio de información, lo que fortalece los procesos internos y mejora la interacción entre los distintos niveles jerárquicos. 
            p.mb-0 Además, es importante que la gerencia revise y actualice constantemente los protocolos de comunicación para adaptarlos a las nuevas tecnologías y a las necesidades de la organización. De esta manera, se asegura que el flujo de información siga siendo eficiente y esté alineado con los objetivos estratégicos de la empresa. 
          .col-lg-5(data-aos="fade-left")
            img(src="@/assets/curso/intro/img2.svg", style="max-width: 505px", alt="").m-auto.mt-5.mt-lg-0
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
