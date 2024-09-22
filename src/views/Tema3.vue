<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informes de gerencia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-up") Este tipo de informes es de suma importancia para los responsables de la administración de una compañía, ya sea pública o privada, ya que permiten comparar la información recibida de diversos departamentos y generar estrategias para resolver conflictos y, mejorar los indicadores de gestión. Los informes gerenciales deben estar íntimamente relacionados con la información clave que necesita la gerencia y la junta directiva, con el fin de dar a conocer y hacer seguimiento a los productos de gestión y los procesos de la compañía en un periodo determinado, ya sea semanal, mensual, trimestral o anual. Con la tecnología disponible, la información puede ser analizada diariamente por todos los niveles de autorización de la empresa, permitiendo organizar informes de manera coherente y ordenada. 

      .col-lg-4
        img.img-fluid(src="@/assets/curso/tema3/1.png", alt="", style="max-width: 400px;").mt-4.mt-lg-0.m-auto

    
    .bg-full-width.bg-fondo-7
      .px-4.px-md-5.pb-5.mb-3
        .titulo-tres.mb-4(data-aos="flip-up").mb-5
          h4 Formatos para la elaboración de documentos escritos

        p(data-aos="fade-up") En general, un informe gerencial se basa en los resultados esperados y no en el procedimiento realizado. Es importante que la información se reciba a tiempo. El informe debe contener puntos clave muy concretos y prácticos, tomando en cuenta al destinatario y su responsabilidad para interactuar con esos datos. A continuación, se detallan los componentes principales de un informe gerencial.


    .bg-full-width.bg-fondo-3(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Portada").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Portada
                p.mb-4 Debe contener el título del informe, nombre del autor, ciudad y fecha centrada en la página, y el nombre de la compañía en la parte inferior. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/2.png", style="max-width:193px", alt="").mx-auto.mb-4

            .row(titulo="Tabla de contenido").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Tabla de contenido
                p.mb-4 Listado de los elementos del proyecto en orden dentro del documento, incluyendo títulos de capítulos, subcapítulos, secciones, numeración de páginas y complementos. Debe elaborarse al finalizar el proyecto. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/3.png", style="max-width:209px", alt="").mx-auto.mb-4

            .row(titulo="Introducción").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Introducción 
                p.mb-4 Presentación global, clara y concisa del informe gerencial, sin incluir resultados o conclusiones. Debe tener antecedentes, relevancia, motivación, objetivos y resultados esperados. 

              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/4.png", style="max-width:207px", alt="").mx-auto.mb-4


            .row(titulo="Índice de ilustraciones y tablas").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Índice de ilustraciones y tablas
                p.mb-4 Listado de todas las figuras y tablas con su título, número consecutivo y paginación correspondiente. 


              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/5.png", style="max-width:348px", alt="").mx-auto.mb-4


            .row(titulo="Resumen").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Resumen
                p.mb-4 Debe incluir: Formulación del objetivo, descripción del método o procedimiento utilizado, presentación de conclusiones, análisis de los hechos y circunstancias que justifican el proyecto. 


              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/6.png", style="max-width:213px", alt="").mx-auto.mb-4



            .row(titulo="Contenido del cuerpo del informe").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Contenido del cuerpo del informe
                p.mb-4 Descripción detallada de la metodología, resultados de los indicadores de gestión, discusión de los resultados y comparación con los objetivos. Las ilustraciones, tablas y gráficos son cruciales para interpretar los datos. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/7.png", style="max-width:212px", alt="").mx-auto.mb-4

            .row(titulo="Conclusiones").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Conclusiones
                p.mb-4 Presenta los resultados del balance entre los objetivos esperados y los obtenidos, incluye recomendaciones, alcance del informe, limitaciones de los datos y determinaciones para el desarrollo organizacional. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/8.png", style="max-width:217px", alt="").mx-auto.mb-4


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
