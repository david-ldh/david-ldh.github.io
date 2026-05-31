# David LDH — Página web personal

Sitio web personal y portafolio enfocado en **ingeniería de datos**, construido con HTML, CSS y JavaScript puro (sin frameworks ni build tools) y publicado en **GitHub Pages**.

🔗 **En vivo:** [david-ldh.github.io](https://david-ldh.github.io)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat&logo=githubpages&logoColor=white)

---

## ✨ Características

- 🌗 **Bilingüe (ES / EN)** — selector de idioma con preferencia guardada en `localStorage`.
- 🗂️ **Proyectos por estado** — agrupados automáticamente (Completado, En desarrollo, Planificado).
- 🎨 **Paleta crema cálida** con acento *teal*, definida mediante variables CSS (`:root`).
- 🧩 **Contenido separado de la presentación** — los datos viven en `data/`, no en el HTML.
- 🖼️ **Ilustraciones SVG propias** — nítidas, ligeras y sin dependencias externas.
- 📱 **Diseño responsive** — se adapta a móvil y escritorio.
- ⚡ **Sin build** — se sirve tal cual; ideal para GitHub Pages.

---

## 📁 Estructura del proyecto

```
Pagina_web_personal/
├── index.html          # Página principal (hero, sobre mí, proyectos, contacto)
├── projects.html       # Listado completo de proyectos
├── css/
│   └── styles.css      # Estilos globales y variables de tema
├── js/
│   └── main.js         # Renderizado, i18n y lógica de interfaz
├── data/
│   ├── content.js      # Datos: proyectos y contacto (bilingüe)
│   └── i18n.js         # Textos de interfaz (ES / EN)
└── img/                # Ilustraciones SVG
```

---

## 🛠️ Personalización

| Quiero cambiar… | Edito… |
|---|---|
| Proyectos (título, descripción, tecnologías, estado, imagen, enlace) | `data/content.js` |
| Enlaces de contacto | `data/content.js` → `contact` |
| Textos de interfaz / traducciones | `data/i18n.js` |
| Colores, espaciados y tipografía | `css/styles.css` → `:root` |

**Añadir un proyecto** — agrega un objeto al array `projects` en `data/content.js`:

```js
{
  titles: { es: "Mi proyecto", en: "My project" },
  descriptions: { es: "Descripción…", en: "Description…" },
  tech: ["Python", "SQL"],
  status: "in-progress",   // completed | in-progress | planned
  featured: true,             // true -> aparece en la portada
  image: "img/mi-proyecto.svg",
  url: "https://github.com/usuario/repo",
}
```

---

## 🌐 Despliegue

El sitio se publica automáticamente con **GitHub Pages** desde la rama `main`. Cada `git push` actualiza la web en unos minutos.

> 💡 Si tras un cambio no ves la actualización, fuerza la recarga del navegador con `Ctrl` + `F5` para evitar la caché.

---

## 📬 Contacto

- **GitHub:** [@david-ldh](https://github.com/david-ldh)
- **LinkedIn:** [david-ldh](https://www.linkedin.com/in/david-ldh/)
