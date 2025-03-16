const productosApple = [
  {
    nombre: 'Apple iPhone 15 Pro Max',
    descripcion:
      'El iPhone más avanzado con pantalla OLED de 6.7 pulgadas, cámaras de 48MP y chip A17 Bionic.',
    precio: 1499,
    caracteristicas: [
      'Pantalla OLED',
      'Cámara de 48MP',
      'Chip A17 Bionic',
      'Carga rápida',
    ],
    coloresDisponibles: ['Titanio', 'Negro Espacial', 'Plata', 'Azul'],
    imagen: 'https://www.apple.com/iphone-15-pro-max.jpg',
  },
  {
    nombre: 'Apple MacBook Pro 16"',
    descripcion:
      'Laptop profesional con pantalla Retina, chip M2 Max, y una autonomía de hasta 21 horas.',
    precio: 2799,
    caracteristicas: [
      'Pantalla Retina 16"',
      'Chip M2 Max',
      'Autonomía de 21 horas',
      'Teclado Magic Keyboard',
    ],
    coloresDisponibles: ['Plata', 'Gris Espacial'],
    imagen: 'https://www.apple.com/macbook-pro-16.jpg',
  },
  {
    nombre: 'Apple Watch Series 9',
    descripcion:
      'El reloj inteligente de Apple con monitorización avanzada de salud y batería de hasta 18 horas.',
    precio: 399,
    caracteristicas: [
      'Monitorización de salud',
      'Batería de 18 horas',
      'Pantalla siempre encendida',
      'Resistente al agua',
    ],
    coloresDisponibles: ['Negro', 'Blanco', 'Azul Marino', 'Verde'],
    imagen: 'https://www.apple.com/apple-watch-series-9.jpg',
  },
  {
    nombre: 'AirPods Pro 2ª Gen',
    descripcion:
      'Auriculares inalámbricos con cancelación activa de ruido y sonido espacial adaptativo.',
    precio: 249,
    caracteristicas: [
      'Cancelación activa de ruido',
      'Sonido espacial adaptativo',
      'Resistencia al sudor y al agua',
      'Modo transparencia',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/airpods-pro-2.jpg',
  },
  {
    nombre: 'Apple iPad Air 5',
    descripcion:
      'Tablet ultradelgada con pantalla Liquid Retina de 10.9 pulgadas y chip M1.',
    precio: 599,
    caracteristicas: [
      'Pantalla Liquid Retina',
      'Chip M1',
      'Compatibilidad con Apple Pencil 2ª Gen',
      'Cámara de 12MP',
    ],
    coloresDisponibles: ['Azul', 'Rosa', 'Verde', 'Gris Espacial'],
    imagen: 'https://www.apple.com/ipad-air-5.jpg',
  },
  {
    nombre: 'Apple TV 4K (2ª Gen)',
    descripcion:
      'Dispositivo de streaming con resolución 4K, HDR y control por voz con Siri.',
    precio: 179,
    caracteristicas: [
      'Resolución 4K',
      'HDR',
      'Control por voz con Siri',
      'Compatibilidad con Dolby Atmos',
    ],
    coloresDisponibles: ['Negro'],
    imagen: 'https://www.apple.com/apple-tv-4k.jpg',
  },
  {
    nombre: 'Apple HomePod Mini',
    descripcion:
      'Altavoz inteligente con sonido de calidad y control mediante Siri.',
    precio: 99,
    caracteristicas: [
      'Sonido de alta calidad',
      'Control por voz con Siri',
      'Conexión multi-room',
      'Compatibilidad con Apple Music',
    ],
    coloresDisponibles: ['Blanco', 'Naranja', 'Azul', 'Gris Espacial'],
    imagen: 'https://www.apple.com/homepod-mini.jpg',
  },
  {
    nombre: 'Apple Magic Mouse 3',
    descripcion:
      'Ratón inalámbrico con diseño de superficie táctil y batería recargable.',
    precio: 99,
    caracteristicas: [
      'Diseño de superficie táctil',
      'Batería recargable',
      'Conexión Bluetooth',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/magic-mouse-3.jpg',
  },
  {
    nombre: 'Apple Magic Keyboard',
    descripcion:
      'Teclado inalámbrico con un diseño ultradelgado y batería de larga duración.',
    precio: 129,
    caracteristicas: [
      'Diseño ultradelgado',
      'Batería de larga duración',
      'Conexión Bluetooth',
    ],
    coloresDisponibles: ['Blanco', 'Negro'],
    imagen: 'https://www.apple.com/magic-keyboard.jpg',
  },
  {
    nombre: 'Apple AirPods 3ª Gen',
    descripcion:
      'Auriculares inalámbricos con sonido de alta calidad y resistencia al agua.',
    precio: 179,
    caracteristicas: [
      'Sonido de alta calidad',
      'Resistencia al agua',
      'Compatibilidad con Siri',
      'Estuche de carga inalámbrica',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/airpods-3.jpg',
  },
  {
    nombre: 'iMac 24" (2025)',
    descripcion: 'Computadora todo-en-uno con pantalla Retina 4.5K y chip M3.',
    precio: 1299,
    caracteristicas: [
      'Pantalla Retina 4.5K',
      'Chip M3',
      'Diseño ultradelgado',
      'Cámara FaceTime HD 1080p',
    ],
    coloresDisponibles: [
      'Verde',
      'Azul',
      'Amarillo',
      'Naranja',
      'Púrpura',
      'Blanco',
    ],
    imagen: 'https://www.apple.com/imac-24.jpg',
  },
  {
    nombre: 'Apple AirTag',
    descripcion:
      'Dispositivo de localización con precisión de U1 para encontrar tus pertenencias.',
    precio: 29,
    caracteristicas: [
      'Localización precisa',
      'Batería reemplazable',
      'Compatibilidad con Find My',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/airtag.jpg',
  },
  {
    nombre: 'Apple Pencil (2ª Gen)',
    descripcion: 'Lápiz digital para iPad con carga magnética y baja latencia.',
    precio: 129,
    caracteristicas: [
      'Carga magnética',
      'Baja latencia',
      'Compatible con iPad Pro y iPad Air',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/apple-pencil-2.jpg',
  },
  {
    nombre: 'Apple iPhone 15',
    descripcion:
      'Smartphone con pantalla Super Retina OLED y cámaras avanzadas.',
    precio: 899,
    caracteristicas: [
      'Pantalla Super Retina OLED',
      'Cámara de 12MP',
      'Chip A16 Bionic',
      'Resistencia al agua',
    ],
    coloresDisponibles: ['Negro', 'Blanco', 'Azul', 'Verde'],
    imagen: 'https://www.apple.com/iphone-15.jpg',
  },
  {
    nombre: 'Apple iPad Mini 6',
    descripcion:
      'Tablet compacta con pantalla Liquid Retina de 8.3 pulgadas y chip A15 Bionic.',
    precio: 499,
    caracteristicas: [
      'Pantalla Liquid Retina',
      'Chip A15 Bionic',
      'Cámara de 12MP',
      'Compatibilidad con Apple Pencil',
    ],
    coloresDisponibles: ['Púrpura', 'Rosa', 'Estelar', 'Espacio Gris'],
    imagen: 'https://www.apple.com/ipad-mini-6.jpg',
  },
  {
    nombre: 'Apple Mac Pro (2025)',
    descripcion:
      'Computadora de sobremesa profesional con un rendimiento sin igual para tareas de alto rendimiento.',
    precio: 5999,
    caracteristicas: [
      'Procesador Xeon',
      'Hasta 1TB de RAM',
      'Tarjeta gráfica Radeon Pro',
    ],
    coloresDisponibles: ['Plata'],
    imagen: 'https://www.apple.com/mac-pro.jpg',
  },
  {
    nombre: 'Apple iPhone 15 Plus',
    descripcion:
      'Versión más grande del iPhone 15 con una pantalla de 6.7" y batería de larga duración.',
    precio: 1099,
    caracteristicas: [
      'Pantalla de 6.7"',
      'Batería de larga duración',
      'Cámara de 12MP',
      'Chip A16 Bionic',
    ],
    coloresDisponibles: ['Negro', 'Blanco', 'Azul', 'Verde'],
    imagen: 'https://www.apple.com/iphone-15-plus.jpg',
  },
  {
    nombre: 'Apple Magic Trackpad',
    descripcion:
      'Trackpad inalámbrico de alta precisión con soporte para gestos multi-touch.',
    precio: 129,
    caracteristicas: [
      'Soporte para gestos multi-touch',
      'Conexión Bluetooth',
      'Diseño elegante',
    ],
    coloresDisponibles: ['Blanco'],
    imagen: 'https://www.apple.com/magic-trackpad.jpg',
  },
  {
    nombre: 'Apple Beats Fit Pro',
    descripcion:
      'Auriculares deportivos inalámbricos con cancelación de ruido y ajuste seguro.',
    precio: 199,
    caracteristicas: [
      'Cancelación activa de ruido',
      'Ajuste seguro',
      'Compatibilidad con sonido espacial',
      'Resistencia al sudor y agua',
    ],
    coloresDisponibles: ['Blanco', 'Negro', 'Azul Marino', 'Verde'],
    imagen: 'https://www.apple.com/beats-fit-pro.jpg',
  },
  {
    nombre: 'Apple MacBook Air M2',
    descripcion:
      'Laptop ultradelgada con chip M2, ideal para la productividad y el entretenimiento.',
    precio: 999,
    caracteristicas: [
      'Chip M2',
      'Pantalla Retina de 13.3"',
      'Autonomía de 18 horas',
      'Teclado Magic Keyboard',
    ],
    coloresDisponibles: ['Plata', 'Gris Espacial', 'Medio Noche'],
    imagen: 'https://www.apple.com/macbook-air-m2.jpg',
  },
];

export default productosApple;
