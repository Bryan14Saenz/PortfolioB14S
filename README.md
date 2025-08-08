# Portfolio Bryan14Saenz

Un portafolio web moderno y responsivo desarrollado con React, TypeScript y Vite para mostrar mis habilidades en programación y proyectos destacados.

## 🌟 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones fluidas
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación SPA**: Single Page Application con React Router DOM
- **Lazy Loading**: Carga optimizada de componentes para mejor rendimiento
- **Animaciones**: Implementadas con Motion para una experiencia visual atractiva
- **Filtros Dinámicos**: Sistema de filtrado para proyectos
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca principal de UI
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y servidor de desarrollo
- **React Router DOM** - Enrutamiento del lado del cliente
- **Tailwind CSS** - Framework de CSS utility-first

### Librerías Adicionales
- **Motion** - Animaciones y transiciones
- **React Icons** - Iconografía
- **React Slick** - Carrusel de componentes
- **Slick Carousel** - Funcionalidad de carrusel

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Sass** - Preprocesador CSS
- **PNPM** - Gestor de paquetes

## 📁 Estructura del Proyecto

```
PortfolioB14S/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/            # Recursos (imágenes, iconos)
│   ├── components/        # Componentes reutilizables
│   │   ├── button/        # Componentes de botones
│   │   ├── cards/         # Componentes de tarjetas
│   │   ├── carrusel/      # Componente carrusel
│   │   ├── cuadros/       # Componentes de cuadros
│   │   ├── enlaces/       # Componentes de enlaces
│   │   ├── filter/        # Componentes de filtrado
│   │   └── nav/           # Componentes de navegación
│   ├── context/           # Context API de React
│   ├── hooks/             # Custom hooks
│   ├── routes/            # Páginas principales
│   │   ├── homePage.tsx   # Página de inicio
│   │   ├── techPage.tsx   # Página de tecnologías
│   │   ├── projectsPage.tsx # Página de proyectos
│   │   ├── aboutPage.tsx  # Página acerca de
│   │   └── contactPage.tsx # Página de contacto
│   ├── services/          # Servicios y APIs
│   ├── styles/            # Estilos globales
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Punto de entrada
├── package.json           # Dependencias y scripts
├── vite.config.ts         # Configuración de Vite
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Este archivo
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- PNPM (recomendado) o NPM

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd PortfolioB14S
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm lint` - Ejecuta ESLint para revisar el código
- `pnpm preview` - Previsualiza la build de producción

## 🎨 Páginas del Portfolio

### 🏠 Página de Inicio (HomePage)
- Presentación personal
- Resumen de habilidades
- Enlaces a redes sociales

### 💻 Página de Tecnologías (TechPage)
- Stack tecnológico
- Habilidades técnicas
- Herramientas de desarrollo

### 📂 Página de Proyectos (ProjectsPage)
- Galería de proyectos
- Sistema de filtrado dinámico
- Detalles de cada proyecto

### 👤 Página Acerca de (AboutPage)
- Información personal
- Experiencia profesional
- Educación y certificaciones

### 📧 Página de Contacto (ContactPage)
- Formulario de contacto
- Información de contacto
- Enlaces a redes profesionales

## 🔧 Características Técnicas

### Lazy Loading
Los componentes de las páginas se cargan de forma perezosa para optimizar el rendimiento inicial:

```typescript
const TechPage = lazy(() => import("./routes/techPage"));
const ProjectsPage = lazy(() => import("./routes/projectsPage"));
// ...
```

### Context API
Utiliza React Context para el manejo de estado global, especialmente para el sistema de filtros:

```typescript
<Route path="/projectsPage" element={
  <FilterProvider>
    <ProjectsPage />
  </FilterProvider>
} />
```

### Suspense
Implementa React Suspense para manejar la carga de componentes lazy:

```typescript
<Suspense fallback={<div className="mt-10 text-center text-lg font-bold">Loading...</div>}>
  <Routes>
    {/* Rutas */}
  </Routes>
</Suspense>
```

## 🌐 SEO y Metadatos

El proyecto incluye metadatos optimizados para SEO:
- Meta description descriptiva
- Keywords relevantes
- Open Graph tags para redes sociales
- Estructura semántica HTML5

## 🎯 Funcionalidades Destacadas

- **Navegación Fluida**: SPA con transiciones suaves entre páginas
- **Filtrado Inteligente**: Sistema de filtros para organizar proyectos
- **Animaciones Atractivas**: Micro-interacciones con Motion
- **Carrusel Interactivo**: Showcase de proyectos y habilidades
- **Diseño Adaptativo**: Experiencia consistente en todos los dispositivos

## 🚀 Despliegue

### Build de Producción
```bash
pnpm build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Despliegue Recomendado
- **Netlify**: Ideal para SPAs con React Router
- **Vercel**: Excelente integración con proyectos de Vite
- **GitHub Pages**: Para hosting gratuito

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso personal y educativo.

## 👨‍💻 Autor

**Bryan14Saenz**
- GitHub: [@Bryan14Saenz](https://github.com/Bryan14Saenz)
- Portfolio: [bryan14saenz.is-a.dev](https://bryan14saenz.is-a.dev/)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
