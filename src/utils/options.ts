const preguntas: Array<questions> = [
  {
    indice: 0,
    pregunta: 'Preferencias Alimentarias',
    descripcion: 'Elije cual es tu preferencia alimentaria.',
    opciones: [
      'Omnivorismo',
      'Vegetarianismo',
      'Veganismo',
      'Pescetarianismo',
      'Frugivorismo',
      'Crudiveganismo',
      'Flexitarianismo',
    ],
  },
  {
    indice: 1,
    pregunta: 'Alergias',
    descripcion: 'Selecciona las alergias que padeces',
    opciones: [
      'Maní (cacahuate)',
      'Frutos secos',
      'Leche de vaca',
      'Huevo',
      'Mariscos',
      'Pescado',
      'Trigo',
      'Soja',
    ],
  },
  {
    indice: 2,
    pregunta: 'Actividad Fisica',
    descripcion: 'Selecciona tu nivel de actividad fisica',
    opciones: ['Baja', 'Moderada', 'Alta', 'Nula'],
  },
  {
    indice: 3,
    pregunta: 'Tiempo',
    descripcion: 'Selecciona el rango de tiempo disponible para hacer tu receta',
    opciones: ['30min a 1h', '1h a 3h', 'mas de 3h'],
  },
];

type questions = {
  indice: number;
  pregunta: string;
  descripcion: string;
  opciones: Array<string>;
};

export default preguntas;
