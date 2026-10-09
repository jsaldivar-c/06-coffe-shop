export const SITE = {
  name: 'Tulipán',
  suffix: 'café',
  lang: 'es',
  description: 'Café de especialidad, tostado en lotes pequeños y enviado fresco a tu puerta.',
  announcement: 'Envío gratis desde $500 · Tostado esta semana',
  freeShippingFrom: 500,
  currency: 'MXN',
  locale: 'es-MX',
} as const;

export const NAV_LINKS = [
  { label: 'Tienda', href: '/tienda' },
  { label: 'Nosotros', href: '#' },
  { label: 'Suscripción', href: '#' },
  { label: 'Contacto', href: '#' },
];

export const FOOTER_COLUMNS = [
  { title: 'Tienda', links: ['Grano', 'Molido', 'Kits de regalo'] },
  { title: 'Ayuda', links: ['Envíos', 'Preguntas frecuentes', 'Contacto'] },
];

export const PAYMENT_METHODS = ['Tarjeta', 'Transferencia', 'OXXO', 'Mercado Pago'];

export const BENEFITS = [
  { title: 'Tostado fresco', description: 'Tostamos cada semana, nunca de más.' },
  { title: 'Envío rápido', description: 'En 2 a 4 días a todo el país.' },
  { title: 'Origen directo', description: 'Compramos a productores, sin intermediarios.' },
  { title: 'Pago seguro', description: 'Tarjeta, transferencia, OXXO y Mercado Pago.' },
];

export const REVIEWS = [
  { quote: 'El Huila con leche es mi nuevo ritual de las mañanas. Llegó fresquísimo.', author: 'Mariana R., CDMX' },
  { quote: 'Por fin un café que sabe a lo que dice la bolsa. Ya pedí la suscripción.', author: 'Luis A., Guadalajara' },
  { quote: 'Lo uso en mi cafetería y mis clientes preguntan siempre qué es.', author: 'Sofía M., Querétaro' },
];
