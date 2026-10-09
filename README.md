# Tulipán café

Landing y tienda de café construida con Astro y Tailwind CSS.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala dependencias                                |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`        |
| `npm run build`           | Genera el sitio de producción en `./dist/`          |
| `npm run preview`         | Previsualiza el build antes de desplegar            |
| `npm run astro ...`       | Ejecuta comandos de la CLI como `astro add`         |

## Estructura

```text
public/
└── images/          coffee-hero.jpg
src/
├── pages/           index.astro, tienda/index.astro, tienda/[slug].astro
├── layouts/         BaseLayout.astro (head, fuentes, header, footer, carrito)
├── components/      Header, Footer, CartDrawer, ProductCard, Hero, Benefits,
│                    FeaturedProducts, Story, Reviews, Newsletter, AnnouncementBar
├── config/          site.ts (marca, navegación, textos), products.ts (catálogo)
├── types/           product.ts
├── utils/           format.ts (moneda y precios)
├── scripts/         cart, menu, shop-filter, product-detail (JS del cliente)
└── styles/          global.css (Tailwind + tema con @theme)
```

## Estado actual

- Astro 7 + Tailwind CSS 4 (plugin `@tailwindcss/vite`). Tema (colores y fuentes DM Sans, DM Serif Display y Caveat) en `src/styles/global.css`.
- Pantallas implementadas a partir del diseño de Claude Design: Home (`/`), Tienda con filtros (`/tienda`) y detalle de producto (`/tienda/<slug>`).
- Responsive: menú hamburguesa y barra fija de compra en móvil.
- Carrito lateral con persistencia en `localStorage` y barra de envío gratis.
- Catálogo de 6 productos en `src/config/products.ts`.

## Pendiente

- Foto real para la sección "nuestra historia" y empaques de producto (hoy son placeholders).
- Páginas Nosotros, Suscripción y Contacto (los enlaces apuntan a `#`).
- Checkout ("Finalizar compra") y envío del formulario de cupón.
- Revisión en dispositivos reales.
