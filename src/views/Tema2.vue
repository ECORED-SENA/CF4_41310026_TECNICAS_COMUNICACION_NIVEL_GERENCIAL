<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolo de comunicación en la organización 

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9(data-aos="fade-right")
            p.mb-0
              | Un protocolo establece, bajo normas sociales y culturales, una serie de acciones concretas a seguir y regula comportamientos en diversos contextos. Ejemplos comunes serían los pasos para realizar un evento público o los comportamientos de etiqueta para asistir a una cena. En este sentido, el protocolo organizacional de comunicación, que no debe confundirse con el protocolo de internet, establece las directrices, normas y procedimientos que regulan la elaboración y flujo de información entre los diferentes roles y áreas de una organización. 
          .col-lg-3(data-aos="fade-left")
            img(src="@/assets/curso/tema2/1.png", style="max-width: 295px", alt="").mt-4.mt-lg-0.m-auto

        .titulo-tres.mb-4(data-aos="flip-up").mb-5
          h4 Formatos para la elaboración de documentos escritos

        p(data-aos="fade-up").mb-4
          | #[strong Elementos esenciales de la documentación organizacional:]


        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-color-p.p-5.brounded-md.mb-4.mb-lg-0
            .row.align-items-end.mb-4
              .col-auto
                img(src='@/assets/curso/tema2/2.svg', alt='', style='max-width: 61px')
              .col
                .subtitle-card
                  h5 Código
            p.mb-0 Sistema convencional que identifica el departamento, área o sección que produce el documento, con sus respectivas series. Hace referencia a la identificación numérica, alfabética, alfanumérica u otros, de la dependencia en la organización.
          .col-md.tarjeta.bg-color-p20.p-5.brounded-md.mb-4.mb-lg-0
            .row.align-items-end.mb-4
              .col-auto
                img(src='@/assets/curso/tema2/3.svg', alt='', style='max-width: 61px')
              .col
                .subtitle-card
                  h5 Carta

            p.mb-0 Es un medio de comunicación escrito, generalmente dirigido a una persona o grupo específico, que tiene como propósito transmitir información, expresar ideas, o realizar solicitudes de manera formal o informal. Las cartas pueden tener diferentes fines, como laborales, académicos, personales o comerciales, y su tono varía en función del destinatario y del contexto. 


        p(data-aos="fade-up").mb-5
          | A continuación, se detallan algunos de los aspectos clave que deben observarse en cuanto a la estructura y estilo de los documentos, con especial atención a la presentación del asunto, cuerpo, lugar de origen y destinatario: 

        .row.justify-content-center.align-items-stretch.mb-lg-4
          .col-lg-8(data-aos="fade-right")
            TabsA.color-acento-botones
              .tarjeta.p-4(titulo="Asunto")
                h5 Asunto 
                p Resume el tema central del documento. Se escribe con la palabra “Asunto” seguida de dos puntos, sin negrilla ni subrayado. El asunto debe ser claro y conciso para que el lector entienda el propósito de la comunicación. 

              .tarjeta.p-4(titulo="Asunto")
                h5 Cuerpo o texto 
                p Redactado de manera clara, breve, directa y cortés. Evitar lenguaje complicado o redundante, manteniendo siempre un tono respetuoso y profesional.

              .tarjeta.p-4(titulo="Lugar de origen y fecha")
                h5 Lugar de origen y fecha 
                p Incluye el nombre del lugar de origen, seguido del día, mes (en minúsculas) y el año, sin puntos. Esto proporciona contexto sobre la ubicación y temporalidad del documento. 

              .tarjeta.p-4(titulo="Remitente")
                h5 Remitente 
                p El nombre del remitente se debe escribir en mayúsculas, con su cargo y organización, si corresponde. No se recomienda el uso de negrillas. 

              .tarjeta.p-4(titulo="Destinatario")
                h5 Destinatario  
                p Indica a quién va dirigida la comunicación, incluyendo nombre, cargo, y, si es necesario, la organización a la que pertenece. 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema2/4.png", style="max-width: 400px", alt="").mt-5.mt-lg-0.m-auto

    p(data-aos="fade-up").mb-5
      | #[strong Ejemplo de formato de carta:]

    .bg-full-width.bg-fondo-5.mb-md-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-xl-7(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/5.png", style="max-width: 100%", alt="Ejemplo de carta formal con estructura que incluye destinatario, asunto, cuerpo de la solicitud, firma, y copia al destinatario secundario.")

      
    .bg-fondo-6.mt-big
      .row.justify-content-center.mb-4
          .col-lg-5
            a.anexo.mb-4(:href="obtenerLink('/downloads/EjemploFormatoCarta.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Descargar ejemplo de formato de carta en PDF
      .row.justify-content-center.align-items-center.mb-5
        .col-10(data-aos="fade-right")
          .bg-color-ac10.mb-5
            .row.justify-content-center.align-items-center
              .col-xl-auto(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/tema2/6.png", style="max-width: 400px", alt="")
                
              .col-xl(data-aos="fade-left")
                .p-xl-4.pe-xl-5.p-4.p-md-5
                  img(src="@/assets/curso/tema2/6.png", style="max-width: 400px", alt="").m-auto.d-xl-none.mb-5

                  p.mb-4 #[strong Los elementos esenciales de la documentación:]

                  ul.custom-list.mb-0
                    li.mb-2 Denominación o título académico.

                    li.mb-2 Nombre del destinatario.

                    li.mb-2 Cargo.

                    li.mb-2 Organización.

                    li.mb-2 Dirección (para documentos externos).

                    li.mb-2 Nombre del lugar de origen (para documentos externos).

                    li.mb-2 País (para documentos externos).

          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 Anexos

          p(data-aos="fade-up").mb-5
            | Se detallan en el texto y al final de la comunicación, a dos interlíneas libres del remitente. La palabra "anexo" o "anexos," según el caso, se escribe con mayúscula inicial, seguida de dos puntos (:). A un espacio se indica la cantidad; entre paréntesis se relaciona el número de hojas, folios y el tipo de anexo, escritos de forma continua y separados por coma (,). 

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.col-xl-7(data-aos="fade-right")
              .bg-color-s20.py-4.px-4.px-lg-5
                .row.justify-content-center.align-items-center
                  .col-lg-auto(data-aos="fade-right").d-none.d-lg-block
                    img(src="@/assets/curso/tema2/7.svg", style="max-width: 81px", alt="")
                  .col-lg
                    p.mb-0 #[strong Ejemplo.] Anexos: cuatro (una invitación en un folio, dos actas en diez folios y un informe en diez folios).


          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 Copia

          p(data-aos="fade-right").mb-5 La palabra "copia" se escribe con mayúscula inicial, sin abreviar, seguida de dos puntos (:). Se coloca a dos interlíneas libres del cargo del firmante o a interlineado sencillo de anexos, si los hay, contra el margen izquierdo. A un espacio se relacionan los destinatarios, alineados de la siguiente manera: tratamiento de cortesía o título, cargo y organización. Si se dirige a un funcionario de la misma entidad, se omite el nombre de la organización. Todo ello sin abreviar.

          p(data-aos="fade-right").mb-5
            | #[strong Ejemplos de líneas especiales:]


          .row.justify-content-center.align-items-stretch.mb-2
            .col-lg-4.bg-color-ac20.py-4.px-4.px-lg-5(data-aos="fade-right")
              .mt-lg-4
                p.mb-0 #[strong Ejemplo 1.]
                p.mb-0 #[strong En línea separada] 
            .col-lg-8.bg-color-white.py-4.px-4.px-lg-5(data-aos="fade-right")
              p.mb-0 Copia:
              p.mb-0 Señor Julio Montoya, Gerente AMS.
              p.mb-0 Señor Carlos Salazar Gómez, Gerente Nacional, Textiles S.A.
              p.mb-0 Doctor Bernardo Murcia Vélez, Jefe de Aseguramiento de la Calidad, COPAV.

          .row.justify-content-center.align-items-stretch.mb-2
            .col-lg-4.bg-color-ac20.py-4.px-4.px-lg-5(data-aos="fade-right")
              .mt-lg-4
                p.mb-0 #[strong Ejemplo 2.]
                p.mb-0 #[strong Para dependencias] 
            .col-lg-8.bg-color-white.py-4.px-4.px-lg-5(data-aos="fade-right")
              p.mb-0 Copia:
              p.mb-0 Gerencia.
              p.mb-0 Gestión Humana.
              p.mb-0 Dirección Financiera.

          .row.justify-content-center.align-items-stretch.mb-2
            .col-lg-4.bg-color-ac20.py-4.px-4.px-lg-5(data-aos="fade-right")
              .my-lg-4
                p.mb-0 #[strong Ejemplo 3.]
                p.mb-0 #[strong Para códigos de las dependencias] 
            .col-lg-8.bg-color-white.py-4.px-4.px-lg-5(data-aos="fade-right")
              p.mb-0 Copia:  1010, 1030, 100.

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.bg-color-ac20.py-4.px-4.px-lg-5(data-aos="fade-right")
              .my-lg-4
                p.mb-0 #[strong Ejemplo 4.]
                p.mb-0 #[strong En línea seguida] 
            .col-lg-8.bg-color-white.py-4.px-4.px-lg-5(data-aos="fade-right")
              p.mt-2 Copia: Señores Juan Díaz Pérez, Director Técnico; Jairo Ruiz Cano, Director de Talento Humano; César Arenas, Jefe de Producción.

          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 La carta u oficio

          p(data-aos="fade-up").mb-5
            | Tiene como objetivos fundamentales informar y persuadir al destinatario. Para ello, se recomienda lo siguiente: 

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema2/8.png", style="max-width: 294px", alt="").m-auto.mb-4.mb-lg-0
            .col-lg(data-aos="fade-left")
              .bg-color-gray-2.p-4.p-lg-5.h-100
                ul.custom-list.mb-0
                  li.mb-2 Tratar un solo tema por comunicación.
                  li.mb-2 Redactar de forma clara, precisa, concreta y concisa.
                  li.mb-2 Usar un tratamiento respetuoso y cortés.
                  li.mb-2 Redactar en primera persona del plural y utilizar el tratamiento de "usted" en singular o plural.
                  li.mb-2 Emplear un estilo gramatical natural, sencillo y continuo.
                  li.mb-2 Utilizar los formatos normalizados en los manuales de cada organización.
                  li.mb-2 Distribuir el texto de acuerdo con su extensión.


          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 La circular

          p(data-aos="fade-right").mb-5 Tiene como objetivo fundamental dar a conocer información de carácter general. Internamente, se utiliza para informar disposiciones, normas, lineamientos y políticas. Externamente, da a conocer reglas de negocios, nuevos productos o servicios, entre otros. 

          p(data-aos="fade-right").mb-5
            | #[strong Partes de la circular:]

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10.col-xxl-8
              img(src="@/assets/curso/tema2/9.png", style="max-width: 100%", alt="Diagrama ilustrativo de las diferentes partes que componen una circular").d-none.d-lg-block.m-auto.mb-4
              img(src="@/assets/curso/tema2/9b.png", style="max-width: 100%", alt="Diagrama ilustrativo de las diferentes partes que componen una circular").d-lg-none.m-auto.mb-4
          
          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 El memorando

          p(data-aos="fade-right") Es la comunicación escrita que se utiliza para transmitir información, orientaciones y pautas en las dependencias locales, regionales, nacionales e internacionales y en las líneas de coordinación jerárquica de la organización.

          p(data-aos="fade-right")
            | #[strong Uso del memorando: ]

          p(data-aos="fade-right").mb-5 El memorando puede tener los siguientes objetivos:

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema2/10.png", style="max-width: 294px", alt="").m-auto.mb-4.mb-lg-0
            .col-lg(data-aos="fade-left")
              .bg-color-gray-2.p-4.p-lg-5.h-100
                ul.custom-list.mb-0
                  li.mb-1 Informar sobre un hecho de forma breve.
                  li.mb-1 Expresar necesidades.
                  li.mb-1 Hacer requerimientos.
                  li.mb-1 Regular o aclarar una situación.
                  li.mb-1 Tramitar, desarrollar o agilizar un asunto.
                  li.mb-1 Dar respuesta a una comunicación recibida.
                  li.mb-1 Reiterar información, requerimientos o solicitudes urgentes.
                  li Conocer detalles sobre un aspecto determinado.
                  
          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 Correo electrónico

          .row.justify-content-center.align-items-center.mb-5
            .col-lg
              p.mb-0 Se recomienda a las organizaciones que regulen el uso de este sistema, ya que requiere de internet para intercambiar información electrónica, y asignen a uno o más usuarios autorizados la responsabilidad de su gestión. El correo puede ser tanto masivo como institucional y se utiliza para enviar adjuntos como cartas, memorandos, circulares y cualquier otro documento necesario para el sustento del contenido. No se recomienda utilizar el correo electrónico para resolver temas complejos, ya que su función es la de transmitir información, no garantizar su éxito en el intercambio.
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.png", style="max-width: 190px", alt="").m-auto.mt-4.mt-lg-0

          .title-cuatro.rounded-pill(data-aos="fade-up").mb-4
            h5 El informe

          p(data-aos="fade-right").mb-5 Un informe busca determinar los pasos que se deben llevar a cabo para presentar un proyecto. Se aconseja seguir una guía que incluya:

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              .p-4.p-lg-5.bg-color-gray-2
                .row.justify-content-center.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/12.svg", style="max-width: 207px", alt="").m-auto.mb-4.mb-lg-0
                  .col-lg
                    ul.custom-list.mb-0
                      li.mb-2 Ubicar adecuadamente fotos, dibujos, diagramas, tablas y gráficas para hacerlo más atractivo.
                      li.mb-2 Presentarlo de manera organizada y clara. Se puede usar vocabulario técnico, siempre que no afecte la claridad del informe.

          

</template>

<script>
export default {
  name: 'Tema2',
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
