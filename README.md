# Demo-Lux

Breve descripción
- **Demo-Lux** es un proyecto de landing page/portfolio construido con React y Vite como base. Contiene componentes reutilizables (Navbar, Hero, Services, Team, Contact, Footer, etc.) y una página principal `LandingPage` para mostrar la estructura y ejemplos de UI con Material UI.

Contexto del proyecto
- Objetivo: servir como plantilla y demostración para una landing moderna con componentes visuales y micro-interacciones.
- Uso previsto: prototipado rápido, pruebas visuales y base para integrar formularios, pagos o CMS.

Tecnologías y librerías principales
- **Runtime / Build:** Vite
- **UI:** React 19 + @mui/material (Material UI)
- **Animaciones:** framer-motion
- **Styling:** @emotion/react, @emotion/styled
- **Iconos:** @mui/icons-material
- **Dev:** ESLint, @vitejs/plugin-react

Dependencias (resumen desde `package.json`)
- `react`, `react-dom` — React 19
- `@mui/material`, `@mui/icons-material` — Componentes e iconos Material UI
- `@emotion/react`, `@emotion/styled` — motor de estilos para MUI
- `framer-motion` — animaciones

Scripts útiles
- `npm run dev` — inicia el servidor de desarrollo (Vite)
- `npm run build` — construye para producción
- `npm run preview` — sirve la build de producción localmente
- `npm run lint` — ejecuta ESLint

Estructura del proyecto (resumen)
- `public/` — recursos estáticos
- `src/`
	- `assets/` — imágenes y archivos estáticos usados en la UI
	- `components/` — componentes reutilizables (Navbar, Footer, Contact, KitModal, etc.)
	- `pages/` — páginas (ej: `LandingPage`)
	- `App.jsx` — punto de entrada del SPA
	- `main.jsx` — arranque de React + Vite
	- `theme.js` — configuración del tema de MUI
	- `index.css`, `App.css` — estilos globales

Archivos y rutas importantes
- `src/pages/LandingPage/LandingPage.jsx` — página principal de ejemplo
- `src/pages/LandingPage/components/Team.jsx` — sección Equipo (ahora usa `KitModal`)
- `src/components/KitModal.jsx` — modal del "Kit de Despegue"

Cómo extender
- Añadir nuevas secciones dentro de `src/pages` o componentes reutilizables en `src/components`.
- Integrar formularios: conectar a un servicio (Netlify Forms, Firebase, backend propio) o agregar un flujo de checkout.

Notas
- El proyecto usa `rolldown-vite` como override de `vite` en `package.json` (ver `overrides`) — ajustar según necesidad.

Contacto
- Si necesitas que integre el checkout, un formulario real o despliegue (Netlify / Vercel), dime qué prefieres y lo agrego.
