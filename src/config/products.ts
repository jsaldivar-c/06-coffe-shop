import type { Product, Size } from '../types/product';

export const products: Product[] = [
  { slug: 'huila', name: 'Huila', notes: 'Caramelo, naranja, panela', base: 220, tag: 'Más vendido', type: 'Grano', roast: 'Medio', description: 'Dulce y redondo, con acidez suave. Va bien con leche y también solo.', profile: [60, 70, 85, 25], origin: ['Colombia, Huila', '1,750 msnm', 'Lavado', 'Caturra'] },
  { slug: 'chiapas', name: 'Chiapas', notes: 'Chocolate, nuez, cacao', base: 195, tag: 'Nuevo', type: 'Grano', roast: 'Oscuro', description: 'Cuerpo denso y poca acidez. Pensado para espresso y café con leche.', profile: [35, 85, 60, 55], origin: ['México, Chiapas', '1,400 msnm', 'Lavado', 'Bourbon'] },
  { slug: 'yirgacheffe', name: 'Yirgacheffe', notes: 'Jazmín, limón, durazno', base: 260, tag: 'Edición limitada', type: 'Grano', roast: 'Claro', description: 'Floral y brillante. Para quien disfruta un café de filtro limpio.', profile: [90, 45, 65, 15], origin: ['Etiopía, Yirgacheffe', '2,000 msnm', 'Natural', 'Heirloom'] },
  { slug: 'mezcla-casa', name: 'Mezcla Casa', notes: 'Avellana, panela, cacao', base: 180, tag: 'Favorito', type: 'Molido', roast: 'Medio', description: 'Nuestra mezcla de diario. Equilibrada y fácil de preparar.', profile: [50, 65, 70, 35], origin: ['Mezcla de 3 orígenes', '1,300–1,800 msnm', 'Lavado', 'Varias'] },
  { slug: 'oaxaca', name: 'Oaxaca', notes: 'Miel, almendra, ciruela', base: 205, tag: '', type: 'Molido', roast: 'Medio', description: 'Notas dulces y frutales, con final largo y limpio.', profile: [65, 60, 80, 25], origin: ['México, Oaxaca', '1,600 msnm', 'Honey', 'Typica'] },
  { slug: 'descafeinado', name: 'Descafeinado', notes: 'Cacao, caramelo, nuez', base: 215, tag: '', type: 'Grano', roast: 'Oscuro', description: 'Descafeinado por agua suiza. Todo el sabor, sin desvelo.', profile: [30, 70, 65, 45], origin: ['Colombia, Nariño', '1,900 msnm', 'Agua suiza', 'Castillo'] },
];

export const sizes: Size[] = [
  { label: '250 g', multiplier: 1 },
  { label: '500 g', multiplier: 1.9 },
  { label: '1 kg', multiplier: 3.6 },
];

export const grinds = ['Grano entero', 'Prensa francesa', 'Espresso', 'Filtro'];

export const SUBSCRIPTION_DISCOUNT = 0.1;

export const shopFilters = ['Todos', 'Grano', 'Molido', 'Claro', 'Medio', 'Oscuro'];
