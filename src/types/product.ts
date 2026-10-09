export type ProductType = 'Grano' | 'Molido';
export type Roast = 'Claro' | 'Medio' | 'Oscuro';

export interface Product {
  slug: string;
  name: string;
  notes: string;
  /** Precio base (250 g, compra única) en MXN */
  base: number;
  tag: string;
  type: ProductType;
  roast: Roast;
  description: string;
  /** Perfil de sabor 0-100: acidez, cuerpo, dulzor, amargor */
  profile: [number, number, number, number];
  /** Origen, altura, proceso, variedad */
  origin: [string, string, string, string];
}

export interface Size {
  label: string;
  multiplier: number;
}

export interface CartItem {
  name: string;
  sub: string;
  price: number;
}
