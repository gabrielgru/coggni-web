# coggni-web: instrucciones para Claude Code

Sitio estático de marketing de Coggni. Ver README.md para la estructura.

## Reglas

- Mantenerlo estático: HTML, CSS y JS vanilla. No agregar frameworks, build steps ni dependencias npm sin pedirlo explícitamente.
- No cambiar las URLs `/privacy` ni `/terms` (registradas en Meta y Twilio). El contenido legal se edita solo si Gabriel lo pide.
- Mantener los meta tags SEO/OG de cada página (title, description, canonical, og:*, twitter:*).
- Idioma del sitio: español (es-UY).
- Nunca usar el guion largo (em dash) en textos.
- Antes de hacer push, verificar visualmente en desktop (1440px) y mobile (390px).
- Colores y tipografía: tokens en `:root` de `assets/css/styles.css`.
- Al cambiar `styles.css` o `main.js`, subir el número de versión `?v=N` en los HTML que los referencian (el navegador los cachea 1 día).
