// Idioma activo: se recuerda entre visitas con localStorage. Por defecto, español.
let currentLang = localStorage.getItem("lang") || "es";

function t(key, lang) {
  return (i18n[lang] && i18n[lang][key]) || (i18n.es && i18n.es[key]) || key;
}

// Iconos de marca (SVG inline) para los enlaces de contacto.
const contactIcons = {
  github:
    '<svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>',
};

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

// Aplica los textos estáticos marcados con data-i18n en el HTML.
function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key, lang);
  });
}

function projectCard(p, lang) {
  const tech = (p.tech || [])
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");

  const title = (p.titles && (p.titles[lang] || p.titles.es)) || "";
  const description =
    (p.descriptions && (p.descriptions[lang] || p.descriptions.es)) || "";

  const titleHtml =
    p.url && p.url !== "#"
      ? `<a href="${p.url}" target="_blank" rel="noopener">${title}</a>`
      : title;

  const badge = p.status
    ? `<span class="status status-${p.status}">${t("status." + p.status, lang)}</span>`
    : "";

  const image = p.image
    ? `<img class="project-thumb" src="${p.image}" alt="${title}" loading="lazy" />`
    : "";

  return `
    <article class="project-card">
      ${image}
      <div class="project-card-header">
        <h3>${titleHtml}</h3>
        ${badge}
      </div>
      <p>${description}</p>
      ${tech ? `<div class="tags">${tech}</div>` : ""}
    </article>`;
}

// Renderiza proyectos agrupados por estado dentro de un contenedor.
function renderGroupedProjects(container, projects, lang) {
  const order = ["completado", "en-desarrollo", "planificado"];
  const byStatus = {};
  projects.forEach((p) => {
    (byStatus[p.status] = byStatus[p.status] || []).push(p);
  });

  const statuses = order
    .filter((s) => byStatus[s])
    .concat(Object.keys(byStatus).filter((s) => !order.includes(s)));

  container.innerHTML = statuses
    .map(
      (status) => `
      <div class="project-group">
        <h3 class="group-title">${t("status." + status, lang)}</h3>
        <div class="projects-grid">
          ${byStatus[status].map((p) => projectCard(p, lang)).join("")}
        </div>
      </div>`
    )
    .join("");
}

function render(lang) {
  document.documentElement.lang = lang;
  applyStaticTranslations(lang);

  // Elementos comunes
  setText(".logo", content.name);
  setText("footer p", `© ${content.footerYear} ${content.name}`);

  // Portada: proyectos destacados
  const featuredContainer = document.querySelector("#proyectos .project-groups");
  if (featuredContainer) {
    renderGroupedProjects(
      featuredContainer,
      content.projects.filter((p) => p.featured),
      lang
    );
  }

  // Contacto
  const contactList = document.querySelector(".contact-links");
  if (contactList) {
    contactList.innerHTML = content.contact
      .map((c) => {
        const icon = contactIcons[c.label.toLowerCase()] || "";
        return `<li><a href="${c.url}" target="_blank" rel="noopener">${icon}<span>${c.label}</span></a></li>`;
      })
      .join("");
  }

  // Página de todos los proyectos
  const allContainer = document.querySelector("#todos-proyectos .project-groups");
  if (allContainer) {
    renderGroupedProjects(allContainer, content.projects, lang);
  }

  // Botón de idioma: muestra el idioma al que se cambiará
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";
}

document.addEventListener("DOMContentLoaded", () => {
  render(currentLang);

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("lang", currentLang);
      render(currentLang);
    });
  }
});
