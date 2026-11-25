# Alétheia — Red de Aprendizaje Cristiana

Sitio web de CACVA/Alétheia con CMS integrado (Sanity).

## Stack

- **Frontend:** Next.js 16 + TypeScript + CSS custom
- **CMS:** Sanity (Studio embebido en `/studio`)
- **Deploy:** Vercel

## Setup rápido

### 1. Crear proyecto en Sanity

1. Ir a [sanity.io/manage](https://www.sanity.io/manage)
2. Crear cuenta (gratis) y nuevo proyecto
3. Copiar el **Project ID**
4. En la configuración del proyecto, agregar CORS origin: `http://localhost:3000` y la URL de Vercel cuando la tengas

### 2. Configurar variables de entorno

Copiar `.env.example` → `.env.local` y completar:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Instalar y correr

```bash
npm install
npm run dev
```

- Sitio: http://localhost:3000
- CMS Studio: http://localhost:3000/studio

### 4. Deploy en Vercel

1. Subir a GitHub: `git init && git add . && git commit -m "Initial" && git push`
2. Ir a [vercel.com](https://vercel.com), importar el repo
3. En Settings → Environment Variables, agregar:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy automático

### 5. Configurar CORS en Sanity

En [sanity.io/manage](https://www.sanity.io/manage) → tu proyecto → API → CORS Origins:
- Agregar `https://tu-dominio.vercel.app` (con credentials)

## Contenido gestionable

Los moderadores pueden gestionar desde `/studio`:

| Contenido | Schema |
|-----------|--------|
| Artículos de blog | `post` |
| Testimonios | `testimonial` |
| Cursos | `course` |
| Libros (librería) | `book` |
| Boletines | `newsletter` |
| Descargables | `downloadable` |

## Estructura

```
src/
├── app/
│   ├── (site)/          # Páginas públicas con Navbar/Footer
│   │   ├── page.tsx     # Home
│   │   ├── cursos/
│   │   ├── nosotros/
│   │   ├── recursos/    # Blog, Boletines, Librería, Descargables
│   │   ├── comunidad/
│   │   └── contacto/
│   ├── studio/          # Sanity Studio CMS
│   ├── layout.tsx
│   └── globals.css
├── components/          # Navbar, Footer, ScrollReveal
├── sanity/schemas/      # Schemas del CMS
└── lib/                 # Helpers de fetch
```
