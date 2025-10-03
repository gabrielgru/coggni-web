# SETUP Y PROMPT PARA CLAUDE CODE - COGGNI LANDING

## PASO 1: COMANDOS DE TERMINAL (Ejecutar primero en WSL)

```bash
# Navegar al proyecto
cd /home/gagru/projects/Coggni/projects/coggni-web

# Inicializar Next.js 15 con TypeScript y Tailwind
npx create-next-app@latest . --typescript --tailwind --app --eslint --no-src-dir

# Responder a las preguntas:
# ✓ Would you like to use TypeScript? Yes
# ✓ Would you like to use ESLint? Yes
# ✓ Would you like to use Tailwind CSS? Yes
# ✓ Would you like to use `src/` directory? No
# ✓ Would you like to use App Router? Yes
# ✓ Would you like to customize the default import alias? No

# Instalar shadcn/ui
npx shadcn@latest init

# Responder a las preguntas:
# ✓ Which style? Default
# ✓ Which color? Slate (lo personalizaremos después)
# ✓ Do you want to use CSS variables? Yes

# Instalar componentes shadcn/ui necesarios
npx shadcn@latest add button card badge separator avatar

# Instalar librerías adicionales
npm install framer-motion lucide-react

# Configurar Git y conectar con GitHub
git init
git add .
git commit -m "Initial Next.js setup with shadcn/ui"

# Crear repo en GitHub (si no lo has hecho)
gh repo create coggni-web --public --source=. --remote=origin --push

# Si ya creaste el repo manualmente, hacer:
git remote add origin https://github.com/TU_USUARIO/coggni-web.git
git branch -M main
git push -u origin main
```

---

## PASO 2: PROMPT PARA CLAUDE CODE (Copiar y pegar completo)

```
Eres un diseñador UI/UX senior especializado en landing pages B2B SaaS profesionales. Vamos a crear la landing page de Coggni.io con el más alto estándar de calidad visual.

═══════════════════════════════════════════════════════
🎯 OBJETIVO
═══════════════════════════════════════════════════════

Crear una landing page extremadamente profesional para Coggni.io - una plataforma B2B SaaS que automatiza y profesionaliza la comunicación de PYMES con sus clientes B2B. El primer caso de uso es automatizar recordatorios de cobranza vía WhatsApp, SMS y Email.

═══════════════════════════════════════════════════════
🎨 IDENTIDAD VISUAL (CRÍTICO - USAR EXACTAMENTE)
═══════════════════════════════════════════════════════

PALETA DE COLORES COGGNI:
- Scorpion:     #685C5E (Principal - Texto y elementos oscuros)
- Cavern Pink:  #E1C0BC (Secundario - Acentos suaves)
- Tide:         #B7B0AB (Neutro - Backgrounds y separadores)
- Martini:      #B4A2A4 (Acento - Highlights y hover states)

ESTILO VISUAL:
- Diseño: Sofisticado, minimalista, profesional (nivel Stripe/Linear/Vercel)
- Tipografía: Sans-serif moderna (Inter/Geist), jerarquía clara
- Espaciado: Generoso (mucho "aire"), padding/margin amplios
- Efectos: Glassmorphism sutil, gradientes suaves, sombras elegantes
- Animaciones: Micro-interacciones smooth (<300ms), hover states refinados
- Layout: Clean, grid-based, alineación perfecta

REFERENCIAS DE CALIDAD:
- Linear.app (spacing y minimalismo)
- Stripe.com (profesionalismo)
- Vercel.com (modernidad y tipografía)
- Framer.com (animaciones sutiles)

═══════════════════════════════════════════════════════
🏗️ STACK TÉCNICO
═══════════════════════════════════════════════════════

- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS 4
- shadcn/ui components
- Framer Motion (animaciones)
- Lucide React (iconografía)

OPTIMIZACIONES OBLIGATORIAS:
- Server Components donde sea posible
- next/image para todas las imágenes
- Lazy loading para secciones below fold
- Lighthouse score target: >95

═══════════════════════════════════════════════════════
📐 ESTRUCTURA DE LA LANDING PAGE
═══════════════════════════════════════════════════════

1. HERO SECTION (Above the fold)
   - Headline potente: "Automatiza tu cobranza B2B con inteligencia"
   - Subheadline: "Recordatorios profesionales por WhatsApp, SMS y Email que mejoran tu flujo de caja"
   - CTA Principal: "Agenda demo" (botón destacado)
   - CTA Secundario: "Ver demo" (botón outline)
   - Visual: Mockup/ilustración del dashboard (puedes usar placeholder elegante)
   - Badge: "Trusted by 50+ PYMES" o similar
   
   DISEÑO HERO:
   - Background: Gradiente sutil con Cavern Pink + Tide
   - Glassmorphism card conteniendo el copy
   - Elementos decorativos: Líneas onduladas/curvas sutiles
   - Responsivo: Stack vertical en mobile, lado a lado en desktop

2. SOCIAL PROOF SECTION
   - Logos de clientes (3-5) en escala de grises
   - Estadística destacada: "95% de mejora en tiempo de cobranza"
   - Layout: Centrado, minimalista

3. PROBLEMA + SOLUCIÓN
   - Título: "La cobranza no debería ser manual"
   - 3 Pain Points (iconos + texto):
     • Tiempo perdido en seguimiento
     • Comunicación inconsistente
     • Pérdida de ventas por olvidos
   - Transición visual a la solución

4. FEATURES SECTION
   - Título: "Todo lo que necesitas para cobrar profesionalmente"
   - 3 Features principales (grid):
     
     A) Automatización Inteligente
        - Icono: Zap o Bot
        - Descripción: "Envíos automáticos basados en fechas de vencimiento"
        - Detalle: WhatsApp, SMS, Email en un solo flujo
     
     B) Personalización Total
        - Icono: Palette o Edit
        - Descripción: "Mensajes adaptados a tu marca y tono"
        - Detalle: Templates customizables con variables dinámicas
     
     C) Dashboard en Tiempo Real
        - Icono: BarChart o Activity
        - Descripción: "Visualiza el estado de todas tus cobranzas"
        - Detalle: Métricas, reportes, y seguimiento centralizado
   
   DISEÑO FEATURES:
   - Cards con hover effect (elevación + cambio de color sutil)
   - Iconos en círculos con gradiente
   - Spacing generoso entre cards

5. HOW IT WORKS (3 pasos)
   - Diseño: Timeline horizontal con números grandes
   - Paso 1: "Conecta tus datos" (icono: Link)
   - Paso 2: "Configura recordatorios" (icono: Settings)
   - Paso 3: "Cobra automáticamente" (icono: CheckCircle)

6. TESTIMONIALS
   - 2-3 testimonios en cards
   - Incluir: Avatar, nombre, cargo, empresa, quote
   - Diseño: Grid o carousel sutil

7. PRICING (Opcional - si lo quieres simple)
   - 2 Planes:
     • Starter: Para comenzar
     • Professional: Para equipos
   - Features bullet points
   - CTA: "Comenzar ahora"

8. FINAL CTA SECTION
   - Background: Gradiente suave con Martini + Cavern Pink
   - Headline: "¿Listo para automatizar tu cobranza?"
   - Subheadline: "Agenda una demo personalizada"
   - CTA grande y destacado
   - Nota: "Sin tarjeta de crédito. Setup en 5 minutos."

9. FOOTER
   - Logo Coggni
   - Links: Producto, Casos de uso, Precios, Blog, Contacto
   - Legal: Privacidad, Términos
   - Social: LinkedIn, Twitter/X
   - Copyright: "© 2025 Coggni. Todos los derechos reservados."

═══════════════════════════════════════════════════════
🎯 CONFIGURACIÓN TAILWIND (ACTUALIZAR)
═══════════════════════════════════════════════════════

Actualiza tailwind.config.ts con los colores de Coggni:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scorpion: "#685C5E",
        cavernPink: "#E1C0BC",
        tide: "#B7B0AB",
        martini: "#B4A2A4",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... resto de colores shadcn
      },
      backgroundImage: {
        'gradient-coggni': 'linear-gradient(135deg, #E1C0BC 0%, #B7B0AB 100%)',
        'gradient-hero': 'linear-gradient(180deg, #E1C0BC 0%, #B4A2A4 50%, #685C5E 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

═══════════════════════════════════════════════════════
📱 RESPONSIVE DESIGN
═══════════════════════════════════════════════════════

- Mobile First approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Pruebas obligatorias: iPhone SE, iPhone 14, iPad, Desktop 1440px
- Touch targets: mínimo 44x44px
- Scroll behavior: smooth

═══════════════════════════════════════════════════════
✨ ANIMACIONES Y MICROINTERACCIONES
═══════════════════════════════════════════════════════

Usar Framer Motion para:
- Fade in sections on scroll (stagger children)
- Hover effects en cards (scale: 1.02, shadow)
- Button press effects
- Page load animation (fade + slide up)

EJEMPLO DE IMPLEMENTACIÓN:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

═══════════════════════════════════════════════════════
🎨 COMPONENTES SHADCN/UI A UTILIZAR
═══════════════════════════════════════════════════════

- Button (variants: default, outline, ghost)
- Card (para features, testimonials, pricing)
- Badge (para social proof, status)
- Separator (para secciones)
- Avatar (para testimonials)

Personalizar según paleta Coggni en components/ui/*

═══════════════════════════════════════════════════════
📂 ESTRUCTURA DE ARCHIVOS
═══════════════════════════════════════════════════════

app/
├── page.tsx                 (Landing page principal)
├── layout.tsx               (Root layout con metadata)
├── globals.css              (Estilos globales + Tailwind)
components/
├── ui/                      (shadcn/ui components)
├── sections/
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── shared/
│   ├── Navbar.tsx
│   └── CTAButton.tsx
public/
├── logo.svg                 (puedes crear placeholder)
└── images/                  (screenshots, mockups)

═══════════════════════════════════════════════════════
🚀 INSTRUCCIONES DE IMPLEMENTACIÓN
═══════════════════════════════════════════════════════

1. PRIMERO: Actualiza tailwind.config.ts con los colores Coggni
2. SEGUNDO: Actualiza app/globals.css con variables CSS personalizadas
3. TERCERO: Crea componentes de sección uno por uno (Hero → Footer)
4. CUARTO: Integra todo en app/page.tsx
5. QUINTO: Optimiza responsive y animaciones
6. SEXTO: Testing en diferentes dispositivos

═══════════════════════════════════════════════════════
✅ CHECKLIST DE CALIDAD (VERIFICAR)
═══════════════════════════════════════════════════════

VISUAL:
- [ ] Paleta de colores Coggni aplicada consistentemente
- [ ] Spacing generoso (no texto apretado)
- [ ] Jerarquía tipográfica clara (3-4 tamaños max)
- [ ] Hover states en todos los elementos interactivos
- [ ] Transiciones smooth (<300ms)
- [ ] Alineación pixel-perfect
- [ ] Contraste WCAG AAA

TÉCNICO:
- [ ] TypeScript sin errores
- [ ] Componentes Server Components donde posible
- [ ] next/image para todas las imágenes
- [ ] Metadata SEO completo
- [ ] Responsive perfecto (mobile → desktop)
- [ ] Performance: Lighthouse >95

UX/CONVERSIÓN:
- [ ] CTA visible above the fold
- [ ] Value proposition en <10 segundos de lectura
- [ ] Flujo lógico de información
- [ ] Fricción mínima para contacto
- [ ] Social proof early en el journey

═══════════════════════════════════════════════════════
💎 NIVEL DE CALIDAD ESPERADO
═══════════════════════════════════════════════════════

Este sitio debe competir visualmente con:
- Stripe.com
- Linear.app  
- Vercel.com
- Framer.com

NO ES ACEPTABLE:
- Colores genéricos de Tailwind
- Spacing inconsistente
- Tipografía sin jerarquía
- Botones básicos sin hover states
- Layout apretado sin "aire"
- Animaciones bruscas o ausentes

EL OBJETIVO ES EXCELENCIA VISUAL.

═══════════════════════════════════════════════════════
🎬 COMENCEMOS
═══════════════════════════════════════════════════════

Empieza por:
1. Confirmar que entiendes los requisitos
2. Actualizar tailwind.config.ts y globals.css
3. Crear el componente Hero (la primera impresión es crítica)
4. Iterar hasta que yo apruebe el Hero antes de continuar

¿Listo para crear una landing page excepcional?
```

---

## PASO 3: DESPUÉS DE IMPLEMENTAR

```bash
# Ver el sitio localmente
npm run dev
# Abrir: http://localhost:3000

# Cuando esté listo, hacer commit y push
git add .
git commit -m "Landing page Coggni v1"
git push origin main

# Conectar con Vercel:
# 1. Ir a vercel.com/new
# 2. Importar el repo coggni-web
# 3. Deploy
# 4. Configurar dominio coggni.io en Vercel
# 5. Actualizar DNS en Cloudflare
```

---

## NOTAS IMPORTANTES

- **Itera con Claude Code**: Pide screenshots de cada sección y compara con referencias
- **No te conformes**: Si algo no se ve profesional, pide mejoras específicas
- **Usa referencias**: "Haz esta sección como la de Linear.app pero con nuestra paleta"
- **Mobile first**: Prueba en móvil constantemente

**El resultado debe ser visualmente impresionante. Si no lo es, iteramos hasta lograrlo.**