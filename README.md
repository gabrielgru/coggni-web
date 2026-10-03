# coggni-web

Sitio de marketing de Coggni (https://coggni.io). HTML y CSS estático, sin build ni dependencias. Publicado en Cloudflare Pages desde la rama `main`.

Reemplaza al sitio en Framer (dado de baja en octubre 2026). Réplica del diseño original a partir del snapshot del 2026-10-03.

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | Home (una sola página con anclas: `#how-it-works`, `#why-coggni`, `#reportes`, `#contact-us`, `#demo`) |
| `privacy.html` | Política de Privacidad, servida en `/privacy` |
| `terms.html` | Términos y Condiciones, servida en `/terms` |
| `404.html` | Página de error |
| `assets/css/styles.css` | Todos los estilos (tokens de color en `:root`) |
| `assets/js/main.js` | Menú mobile, pasos de "Cómo funciona", animaciones, año del footer |
| `assets/img/` | Imágenes de producto y logo |
| `assets/fonts/` | Inter variable (self-hosted) |
| `robots.txt`, `sitemap.xml` | SEO |
| `_headers` | Headers de seguridad y caché (Cloudflare Pages) |

## Importante

- **No cambiar las URLs `/privacy` y `/terms`**: están registradas en Meta (App Review WhatsApp) y Twilio.
- Cloudflare Pages sirve `privacy.html` como `/privacy` automáticamente.
- Analytics: Cloudflare Web Analytics, activado desde el panel de Pages (no requiere código).
- Agenda: Calendly embebido (`calendly.com/coggni/30min`).

## Desarrollo local

```bash
python3 -m http.server 8080
# abrir http://localhost:8080  (localmente /privacy es /privacy.html)
```

## Publicar

`git push` a `main`. Cloudflare Pages despliega solo. Cada rama/PR genera una URL de preview `*.pages.dev`.

El código anterior (Next.js, sin usar) está en la rama `legacy-nextjs`.
