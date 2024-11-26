export default {
  global: {
    componenteFormativo: 'Protocolos de comunicación',
    descripcionCurso:
      'El componente formativo trata sobre las normas y formatos para la correcta elaboración de documentos formales en una organización, como cartas, memorandos e informes. Detalla cómo deben redactarse el asunto, cuerpo, lugar de origen, fecha, remitente y destinatario, destacando la importancia de la claridad, precisión y cortesía. Además, menciona el uso adecuado de la ortografía y los signos de puntuación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La comunicación escrita',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de la comunicación escrita',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sugerencias de gramática y ortografía',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protocolo de comunicación en la organización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Informes de gerencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41310026_CF4_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La comunicación escrita',
      referencia:
        'Aprendemos Juntos (2021)."Nuestra escritura nos representa". Estrella Montolío, lingüista y profesora. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=92oS2byPp24',
    },
    {
      tema: 'Características de la comunicación escrita',
      referencia:
        'Machado Mateos, A. & Rodríguez Sánchez, O. (2020). <em>Comunicación oral y escrita en la empresa. UF0521:</em> ( ed.). Editorial Tutor Formación.',
      tipo: 'Leer página 39-50',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/125937',
    },
    {
      tema: 'Sugerencias de gramática y ortografía',
      referencia:
        'Moreno Castrillón, F. (2013). <em>Gramática y ortografía al día: guía con las principales novedades de la Real Academia Española:</em> ( ed.). Universidad del Norte.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69894',
    },
    {
      tema: 'Protocolo de comunicación en la organización',
      referencia:
        'GCFAprendeLibre. (2022). Cómo escribir un correo laboral | Comunicación empresarial. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RfW2Mbri-9Y',
    },
    {
      tema: 'Informes de gerencia',
      referencia:
        'Utilidades de Gestión. (2021). Elaboración de Informes de Gestión. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HhqbBAt1qKc',
    },
  ],
  glosario: [
    {
      termino: 'Diálogo',
      significado:
        'conversación entre dos o más personas, sea oral o escrita, mediante la que se intercambia información y se comunican pensamientos, sentimientos y deseos.',
    },
    {
      termino: 'Habilidades sociales',
      significado:
        'comportamientos eficaces que realiza el ser humano para facilitar la relación con los demás.',
    },
    {
      termino: 'Kinestésico',
      significado:
        'relativo a la comunicación no verbal, que se manifiesta mediante movimientos o gestos corporales, como la postura, la mirada, los gestos y la expresión facial.',
    },
    {
      termino: 'Lenguaje',
      significado:
        'capacidad de la mente para expresar o comunicar experiencias y conocimientos a través de signos, símbolos y sonidos.',
    },
    {
      termino: 'Mensaje',
      significado:
        'información que el emisor envía al receptor, definida como el conjunto de ideas, pensamientos, sentimientos o acontecimientos expresados.',
    },
    {
      termino: 'Negociación',
      significado:
        'procedimiento de discusión entre partes en conflicto cuyo objetivo es llegar a un acuerdo aceptable.',
    },
    {
      termino: 'Paralingüístico',
      significado:
        'relativo a la comunicación no verbal, que incluye elementos como la entonación, el volumen, el ritmo y gestos semi articulados como bostezos, risas o muletillas.',
    },
    {
      termino: 'Polémico',
      significado:
        'relativo a la estructuración del espacio físico mediante gestos y movimientos, marcando límites personales.',
    },
    {
      termino: 'Relaciones interpersonales',
      significado:
        'son los puentes que se establecen entre personas, es decir, las formas de interacción entre seres humanos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bayer, C. (2014). Comunicación eficaz: Una competencia para lograr el éxito organizacional.',
      link: '',
    },
    {
      referencia:
        'Cestero, A. M. (2004). La comunicación no verbal. En J. Sánchez Lobato & I. Santos Gargallo (Eds.), Vademécum para la formación de profesores (pp. 593-612). Madrid: SGEL.',
      link: '',
    },
    {
      referencia:
        'Cestero, A. M., et al. (1998). Estudios de comunicación no verbal. Madrid: Edinumen.',
      link: '',
    },
    {
      referencia:
        'Coll, J., Gelabert, M. J., & Martinell, E. (1990). Diccionario de gestos y sus giros más usuales. Madrid: Edelsa.',
      link: '',
    },
    {
      referencia:
        'García-Carpintero, M. (1996). Las palabras, las ideas y las cosas: Una presentación de la filosofía del lenguaje. Barcelona: Editorial Ariel.',
      link: '',
    },
    {
      referencia:
        'Tobón, L. (2001). La lingüística del lenguaje: Estudios en torno a los procesos de significar y comunicar. Bogotá: Universidad Pedagógica Nacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e  Innovación Tecnológica Industrial - Regional Risaralda ',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
