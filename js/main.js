document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".logo").textContent = content.name;
  document.querySelector("#hero h1").textContent = content.title;
  document.querySelector("#hero .subtitle").textContent = content.subtitle;
  document.querySelector("#sobre-mi p").textContent = content.about;
  document.querySelector("footer p").textContent = `© ${content.footerYear} ${content.name}`;

  const grid = document.querySelector(".projects-grid");
  grid.innerHTML = content.projects
    .map(
      (p) => `
      <div class="project-card">
        <h3>${p.url !== "#" ? `<a href="${p.url}" target="_blank">${p.title}</a>` : p.title}</h3>
        <p>${p.description}</p>
      </div>`
    )
    .join("");

  const contactList = document.querySelector(".contact-links");
  contactList.innerHTML = content.contact
    .map((c) => `<li><a href="${c.url}" target="_blank">${c.label}</a></li>`)
    .join("");
});
