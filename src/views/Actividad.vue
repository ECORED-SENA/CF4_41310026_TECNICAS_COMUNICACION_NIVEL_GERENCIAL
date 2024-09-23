<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Formato de documentos formales',
      introduccion:
        '<b> Objetivo:</b> Identificar la correcta elaboración y estructuración de documentos formales en un entorno organizacional.<br>Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del "Asunto" en un documento formal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer una introducción extensa al tema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sintetizar el tema del documento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incluir datos del remitente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indicar la fecha y lugar de origen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo debe escribirse el nombre del remitente en un documento formal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En cursiva.', esCorrecta: false },
            { id: 'b', texto: 'En negrilla y minúsculas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'En mayúsculas y sin negrilla.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'En mayúsculas y subrayado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento del documento no debe llevar negrilla ni subrayado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre del destinatario.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La fecha de elaboración.', esCorrecta: false },
            { id: 'c', texto: 'La palabra "Asunto".', esCorrecta: true },
            { id: 'd', texto: 'El nombre del remitente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cómo se debe escribir el nombre del lugar de origen en la fecha de un documento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En minúsculas, seguido del día, mes y año.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En mayúsculas, seguido del día, mes y año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En cursiva, seguido del mes y año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En mayúsculas y separado por puntos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué característica debe tener el cuerpo o texto del documento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Extenso y detallado.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Claro, breve, directo y cortés.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Corto, informal y coloquial.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Complejo y técnico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo debe separarse el lugar de origen y la fecha en un documento formal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Por una coma.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Sin ningún tipo de separación.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Por un guion.', esCorrecta: false },
            { id: 'd', texto: 'Por un punto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué información se incluye en el "Lugar de origen y fecha de elaboración"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Nombre del remitente.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El nombre del lugar, día, mes y año.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'El cargo del destinatario.', esCorrecta: false },
            { id: 'd', texto: 'La descripción del asunto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿En qué formato se debe escribir el "Asunto" del documento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En cursiva y subrayado.', esCorrecta: false },
            {
              id: 'b',
              texto: 'En negrilla y en mayúsculas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con mayúscula inicial seguida de dos puntos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En cursiva, seguido de un punto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cómo se debe redactar el cuerpo del documento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe contener todos los detalles posibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con tecnicismos y lenguaje rebuscado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De forma clara, breve y directa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Con un tono informal y amigable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué se recomienda no utilizar en el nombre del remitente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayúsculas.', esCorrecta: false },
            { id: 'b', texto: 'Negrilla.', esCorrecta: true },
            { id: 'c', texto: 'Cursivas.', esCorrecta: false },
            { id: 'd', texto: 'Subrayado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
