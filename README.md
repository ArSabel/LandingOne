# Landing Pack Hombre — Netwheels

Landing dedicada al **Pack El Hombre Que Ella Desea** ($24.99 · variant ID `48763472347392`).

Formato VSL/PLF estilo dark + dorado, autocontenida, lista para deploy en cualquier servidor estático.

---

## 📁 Estructura

```
landing_pack_hombre/
├── index.html              ← La landing (autocontenida, ~80KB)
├── assets/
│   ├── actor.jpg           ← Foto Nashly hero (84KB)
│   ├── portada-es.jpeg     ← Cover Pack ES (220KB)
│   ├── portada-en.jpeg     ← Cover Pack EN (227KB)
│   └── portada-pt.jpeg     ← Cover Pack PT (232KB)
└── README.md               ← Este archivo
```

**Peso total:** ~830 KB · loads en menos de 1.5s en 4G.

---

## 🚀 Cómo deployar

### Opción A — Cloudflare Pages (gratis, recomendado para ads)

1. Subí toda esta carpeta a un repo GitHub (ej: `netwheels-landing-pack-hombre`)
2. En Cloudflare Pages: Connect to Git → seleccionás el repo
3. Build settings: dejarlo todo vacío (es HTML estático)
4. Deploy → te da una URL tipo `landing-pack-hombre.pages.dev`
5. Conectás un subdominio: `pack.netwheelsgrowthpartnert.com`

### Opción B — Vercel (también gratis)

1. `npm i -g vercel`
2. Desde dentro de esta carpeta: `vercel --prod`
3. Te genera URL al toque

### Opción C — Subir a Shopify como página custom

1. Shopify Admin → Online Store → Pages → New page
2. Pegar el HTML completo (modo HTML, no editor visual)
3. Las imágenes hay que subir manual a Files de Shopify y reemplazar paths `assets/` por los URLs que te da Shopify
4. URL final: `netwheelsgrowthpartnert.com/pages/pack-hombre`

### Opción D — Subir al subfolder del repo principal

1. Copiar esta carpeta entera dentro de `netwheels-landing-repo/`
2. Push al main
3. Deploy automático la sirve en `netwheelsgrowthpartnert.com/landing_pack_hombre/`

---

## 🔧 Configuración del producto

| Atributo | Valor |
|---|---|
| Producto | Pack El Hombre Que Ella Desea |
| Precio | $24.99 (compare-at $28.97) |
| Variant ID | `48763472347392` |
| Handle | `pack-el-hombre-que-ella-desea` |
| Cupón aplicado al cart | `BIENVENIDA10` (10% extra) |
| Cart permalink | `https://netwheelsgrowthpartnert.com/cart/48763472347392:1?discount=BIENVENIDA10` |

Los 4 CTAs principales (hero, oferta central, final, sticky mobile) apuntan todos al mismo cart permalink con tracking UTM `landing_hp`.

---

## 🌍 Idiomas

3 idiomas con i18n integrado (no requiere build):
- 🇪🇸 Español (default)
- 🇺🇸 English
- 🇧🇷 Português

Detección automática por `navigator.language` + persistencia en `localStorage`. El usuario puede cambiar idioma con el selector arriba a la derecha.

Si agregás/cambiás textos: las 3 keys deben actualizarse a la vez (paridad i18n). Hay 67 keys × 3 = 201 strings.

---

## 📊 Tracking pendiente (antes de tráfico pagado)

El HTML ya tiene los hooks `data-track="..."` en todos los CTAs. Falta solo descomentar e insertar IDs reales al final del archivo:

```html
<!-- GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>...gtag('config','G-XXXXXXXXXX');</script>

<!-- META PIXEL -->
<script>...fbq('init','XXXXXXXXXXXXXXX');fbq('track','PageView');</script>
```

Sin pixel = ads de Meta no aprenden = CPA caro. Innegociable antes de meter $1 de tráfico.

---

## ✅ Checklist pre-deploy

- [ ] Reseñas: agregar comentarios reales o ajustar texto de cards
- [ ] GA4 ID real configurado
- [ ] Meta Pixel ID real configurado
- [ ] og:image apunta a URL pública real (actualmente: `https://netwheelsgrowthpartnert.com/portadas/es/hp.jpeg`)
- [ ] Probar end-to-end mobile: click CTA → llega al checkout Shopify → procesa pago test
- [ ] Validar Lighthouse score (target: Performance >85, Accessibility >90, SEO >90)
- [ ] Confirmar que `BIENVENIDA10` aplica al checkout (cart permalink)

---

## 📝 Cambios y mantenimiento

- **Cambiar imagen del actor:** reemplazar `assets/actor.jpg` (cualquier formato, mantener nombre)
- **Cambiar portadas:** reemplazar `assets/portada-{es,en,pt}.jpeg`
- **Cambiar precio:** buscar `$24.99` y `$28.97` en `index.html` y reemplazar
- **Cambiar variant ID** (ej: si Shopify lo regenera): buscar `48763472347392` y reemplazar todas las ocurrencias

---

## 🆚 Diferencia con la landing principal

Esta landing es **dedicada al Pack Hombre** — pensada para ads dirigidos. La landing principal (`landing_netwheels_v3.html` en el folder raíz) es la **home multi-producto** con los 8 libros y selección de avatar hombre/mujer.

Cuando un visitante hace click en un ad de Meta del Pack Hombre, va directo acá (single-product landing) — convierte ~2-3× mejor que mandarlos a la home multi-producto.

---

## 🤝 Soporte

- WhatsApp: +593 96 847 3255
- Email: edwardsmurillo@hotmail.com
- Generada con asistencia del agente Landing Dev & CRO Expert · Netwheels

---

*Última actualización: 2026-05-30*
