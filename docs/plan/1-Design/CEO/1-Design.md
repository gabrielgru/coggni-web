PROMPT PARA CLAUDE CODE

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
# Landing Page Coggni – Versión Final

## 1. HERO SECTION (Above the fold)
**Headline:**  
Automatizamos tu cobranza y comunicación con clientes

**Subheadline:**  
Recordatorios automáticos por WhatsApp, SMS y Email para que cobres antes y trabajes menos.

**CTAs:**  
- [Agenda una demo] (botón destacado)  
- [Ver cómo funciona] (botón outline)  

**Visual:**  
Mockup/ilustración del flujo de recordatorios o reportes (placeholder elegante)

**Diseño Hero:**  
- Background: Gradiente sutil con Cavern Pink + Tide  
- Glassmorphism card conteniendo el copy  
- Elementos decorativos: Líneas onduladas/curvas abstractas (inspiración cerebro, sutil)  
- Responsivo: Stack vertical en mobile, lado a lado en desktop  

---

## 2. PROBLEMA + SOLUCIÓN
**Título:**  
La comunicación de las pymes merece ser profesional y automática

**Pain Points (iconos + texto):**  
- **Seguimiento desgastante y poco eficiente** → Horas de trabajo administrativo que no agregan valor.  
- **Mensajes improvisados e informales** → Comunicación desordenada que afecta la relación con clientes.  
- **Flujo de caja imprevisible** → Facturas atrasadas porque nadie las recuerda a tiempo.  

**Transición visual a la solución:**  
Con Coggni, las pymes automatizan recordatorios profesionales por WhatsApp, SMS y Email — sin ERP ni proyectos largos de integración.

---

## 3. FEATURES SECTION
**Título:**  
Todo lo que necesitas para cobrar profesionalmente

**Features principales (grid):**

### A) Automatización Inteligente
- **Icono:** Zap/Bot  
- **Descripción:** Recordatorios automáticos basados en fechas de vencimiento.  
- **Detalle:** WhatsApp, SMS y Email en un solo flujo.  

### B) Personalización Total
- **Icono:** Palette/Edit  
- **Descripción:** Mensajes adaptados a tu marca y tono.  
- **Detalle:** Templates customizables con variables dinámicas.  

### C) Reportes y Analítica Profesional
- **Icono:** BarChart/Activity  
- **Descripción:** Información clara para entender y mejorar tu cobranza.  
- **Detalle:** Métricas simples, reportería centralizada y seguimiento consolidado.  

**Diseño Features:**  
- Cards con hover effect (elevación + color sutil)  
- Iconos en círculos con gradiente  
- Spacing generoso entre cards  

---

## 4. HOW IT WORKS (3 pasos)
**Título:**  
Empieza en minutos

**Diseño:**  
Timeline horizontal con números grandes

**Pasos:**  
1. **Conecta tus datos** (icono: Link)  
2. **Configura recordatorios** (icono: Settings)  
3. **Cobra automáticamente** (icono: CheckCircle)  

---

## 5. FINAL CTA SECTION
**Background:**  
Gradiente suave con Martini + Cavern Pink  

**Headline:**  
¿Listo para automatizar tu cobranza?

**Subheadline:**  
Agenda una demo personalizada

**CTA:**  
[Agenda tu demo] (botón grande y destacado)

---

## 6. FOOTER
- Logo Coggni  
- Links: Producto, Casos de uso, Contacto  
- Legal: Privacidad, Términos  
- Social: LinkedIn  
- Copyright: © 2025 Coggni. Todos los derechos reservados.


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
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── shared/
│   ├── Navbar.tsx
│   └── CTAButton.tsx
public/
├── logo.svg                 (ya esta este archivo)
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

**El resultado debe ser visualmente impresionante. Si no lo es, iteramos hasta lograrlo.**