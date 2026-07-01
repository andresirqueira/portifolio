/**
 * Renderização e interatividade do portfólio.
 * A lógica lê PORTFOLIO_DATA de data.js — edite lá para mudar conteúdo.
 */

(function () {
  const data = PORTFOLIO_DATA;

  // ---- Sobre ----
  document.getElementById("heroName").textContent = data.profile.name;
  document.getElementById("heroRole").textContent =
    `${data.profile.role} | ${data.profile.company}`;
  const taglineEl = document.getElementById("heroTagline");
  if (taglineEl && data.profile.tagline) {
    taglineEl.textContent = data.profile.tagline;
  } else if (taglineEl) {
    taglineEl.hidden = true;
  }

  const socialEl = document.getElementById("aboutSocial");
  const contact = data.profile.contact || {};
  const contactLinks = [];

  if (contact.phone?.trim()) {
    const phone = contact.phone.trim();
    contactLinks.push({
      reveal: true,
      value: phone,
      className: "social-link--phone",
      label: `Mostrar telefone: ${phone}`,
      icon: "phone",
    });
  }

  if (contact.email?.trim()) {
    const email = contact.email.trim();
    contactLinks.push({
      reveal: true,
      value: email,
      className: "social-link--email",
      label: `Mostrar e-mail: ${email}`,
      icon: "mail",
    });
  }

  if (contact.linkedin?.trim()) {
    contactLinks.push({
      href: contact.linkedin.trim(),
      className: "social-link--linkedin",
      label: `LinkedIn de ${data.profile.name}`,
      icon: "linkedin",
    });
  }

  if (socialEl) {
    if (contactLinks.length) {
      socialEl.innerHTML = contactLinks
        .map((link) => {
          if (link.reveal) {
            return `
        <button
          type="button"
          class="social-link social-link--reveal ${link.className}"
          aria-label="${link.label}"
          aria-expanded="false"
        >
          <span class="social-link__icon-wrap" aria-hidden="true">
            ${renderIcon(link.icon, "social-link__icon")}
          </span>
          <span class="social-link__value">${link.value}</span>
        </button>`;
          }

          return `
        <a
          class="social-link ${link.className}"
          href="${link.href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${link.label}"
        >
          ${renderIcon(link.icon, "social-link__icon")}
        </a>`;
        })
        .join("");

      socialEl.querySelectorAll(".social-link--reveal").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const isOpen = btn.classList.contains("is-revealed");
          socialEl
            .querySelectorAll(".social-link--reveal.is-revealed")
            .forEach((openBtn) => {
              openBtn.classList.remove("is-revealed");
              openBtn.setAttribute("aria-expanded", "false");
            });
          if (!isOpen) {
            btn.classList.add("is-revealed");
            btn.setAttribute("aria-expanded", "true");
          }
        });
      });

      document.addEventListener("click", () => {
        socialEl
          .querySelectorAll(".social-link--reveal.is-revealed")
          .forEach((btn) => {
            btn.classList.remove("is-revealed");
            btn.setAttribute("aria-expanded", "false");
          });
      });
    } else {
      socialEl.hidden = true;
    }
  }

  const currentRole = data.profile.role;
  const currentCompany = data.profile.company;
  const exp = data.currentExperience;

  function renderCompanyVisual(name, logo, sizeClass) {
    const initial = name.charAt(0).toUpperCase();
    if (logo) {
      return `<img class="${sizeClass}" src="${logo}" alt="Logo ${name}" loading="lazy" />`;
    }
    return `<span class="${sizeClass} ${sizeClass}--initial" aria-hidden="true">${initial}</span>`;
  }

  document.getElementById("achievementsSubtitle").textContent =
    exp.achievementsSubtitle;
  document.getElementById("professionalProjectsSubtitle").textContent =
    exp.projectsSubtitle;
  document.getElementById("generalProjectsSubtitle").textContent =
    exp.generalProjectsSubtitle;

  const photoEl = document.getElementById("aboutPhoto");
  const initials = data.profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (data.profile.photo) {
    photoEl.innerHTML = `<img src="${data.profile.photo}" alt="Foto de ${data.profile.name}" />`;
  } else {
    photoEl.innerHTML = `
      <div class="about-photo__placeholder">
        <span>${initials}</span>
        <small>Adicione sua foto em data.js</small>
      </div>`;
  }

  const aboutDetails = document.getElementById("aboutDetails");
  const hasExperience = data.previousExperience?.length > 0;
  const hasEducation = data.education?.length > 0;

  function renderCurrentCompanyCard() {
    return `
      <div class="current-company-card reveal">
        <span class="current-company-card__badge">${exp.badge}</span>
        <div class="current-company-card__body">
          ${renderCompanyVisual(currentCompany, data.profile.companyLogo, "current-company-card__logo")}
          <div class="current-company-card__info">
            <p class="current-company-card__company">${currentCompany}</p>
            <p class="current-company-card__role">${currentRole}</p>
          </div>
        </div>
        <p class="current-company-card__text">${exp.banner}</p>
      </div>`;
  }

  aboutDetails.innerHTML = `
    ${renderCurrentCompanyCard()}
    <div class="about-details__grid">
      ${
        hasExperience
          ? renderAboutBlock(
              "Experiências anteriores",
              data.previousExperience,
              "experience"
            )
          : `<div class="about-block about-block--empty reveal">
              <h3>Experiências anteriores</h3>
              <p>Adicione itens em <code>previousExperience</code> no arquivo <code>data.js</code>.</p>
            </div>`
      }
      ${renderAboutBlock("Formação", data.education, "education")}
    </div>`;

  function normalizeCompany(entry) {
    if (typeof entry === "string") {
      return { name: entry, logo: "", description: "" };
    }
    return {
      name: entry.name || entry.company || "",
      logo: entry.logo || "",
      description: entry.description || "",
    };
  }

  function renderCompanyItem(entry) {
    const { name, logo, description } = normalizeCompany(entry);
    const initial = name.charAt(0).toUpperCase();

    const visual = logo
      ? `<img class="about-companies__logo" src="${logo}" alt="Logo ${name}" loading="lazy" />`
      : `<span class="about-companies__initial" aria-hidden="true">${initial}</span>`;

    return `
      <li class="about-companies__item">
        ${visual}
        <div class="about-companies__content">
          <p class="about-companies__name">${name}</p>
          ${description ? `<p class="about-companies__desc">${description}</p>` : ""}
        </div>
      </li>`;
  }

  function renderEducationItem(item) {
    const institution = item.institution || "";
    const initial = institution.charAt(0).toUpperCase();
    const visual = item.logo
      ? `<img class="about-education__logo" src="${item.logo}" alt="Logo ${institution}" loading="lazy" />`
      : `<span class="about-education__initial" aria-hidden="true">${initial}</span>`;

    return `
      <li class="about-education__item">
        ${visual}
        <div class="about-education__content">
          <p class="about-education__course">${item.course}</p>
          <p class="about-education__institution">${institution}</p>
          ${item.period ? `<p class="about-education__period">${item.period}</p>` : ""}
          ${item.description ? `<p class="about-education__desc">${item.description}</p>` : ""}
        </div>
      </li>`;
  }

  function renderAboutBlock(title, items, type) {
    if (!items?.length) {
      return `
        <div class="about-block about-block--empty reveal">
          <h3>${title}</h3>
          <p>Em breve — edite <code>data.js</code> para incluir.</p>
        </div>`;
    }

    if (type === "experience") {
      return `
        <div class="about-block reveal">
          <h3>${title}</h3>
          <ul class="about-companies">
            ${items.map((entry) => renderCompanyItem(entry)).join("")}
          </ul>
        </div>`;
    }

    if (type === "education") {
      return `
        <div class="about-block reveal">
          <h3>${title}</h3>
          <ul class="about-education">
            ${items.map((item) => renderEducationItem(item)).join("")}
          </ul>
        </div>`;
    }

    return `
      <div class="about-block reveal">
        <h3>${title}</h3>
        <ul class="about-timeline">
          ${items
            .map(
              (item) => `
            <li class="about-timeline__item">
              <div class="about-timeline__marker" aria-hidden="true"></div>
              <div class="about-timeline__content">
                <p class="about-timeline__title">${item.role}</p>
                <p class="about-timeline__subtitle">${item.company}</p>
                <p class="about-timeline__period">${item.period}</p>
                ${item.description ? `<p class="about-timeline__desc">${item.description}</p>` : ""}
              </div>
            </li>`
            )
            .join("")}
        </ul>
      </div>`;
  }

  // ---- Achievements ----
  const achievementsGrid = document.getElementById("achievementsGrid");
  const achievementBlocks = [
    { key: "development", cssClass: "dev" },
    { key: "operations", cssClass: "ops" },
  ];

  achievementBlocks.forEach(({ key, cssClass }) => {
    const block = data.achievements[key];
    const el = document.createElement("article");
    el.className = `achievement-block achievement-block--${cssClass} reveal`;
    el.innerHTML = `
      <div class="achievement-block__header">
        <div class="achievement-block__header-icon" aria-hidden="true">
          ${renderAchievementIcon(block.icon, "achievement-icon achievement-icon--lg")}
        </div>
        <div class="achievement-block__header-text">
          <h3>${block.title}</h3>
          <p>${block.subtitle}</p>
        </div>
      </div>
      <ul class="achievement-list">
        ${block.items
          .map(
            (item) => `
          <li class="achievement-item">
            <div class="achievement-item__icon" aria-hidden="true">
              ${renderAchievementIcon(item.icon)}
            </div>
            <div class="achievement-item__body">
              <p class="achievement-item__title">${item.title}</p>
              <p class="achievement-item__desc">${item.description}</p>
              <div class="tag-list">
                ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
              </div>
            </div>
          </li>`
          )
          .join("")}
      </ul>`;
    achievementsGrid.appendChild(el);
  });

  // ---- Projects ----
  const professionalProjectsGrid = document.getElementById(
    "professionalProjectsGrid"
  );
  const generalProjectsGrid = document.getElementById("generalProjectsGrid");

  function statusLabel(status) {
    if (status === "em-desenvolvimento") return "Em desenvolvimento";
    if (status === "em-teste") return "Em teste";
    return "Ativo";
  }

  function renderProjectDescription(project) {
    let html = project.description;
    if (project.link?.url) {
      const label = project.link.label || "Acessar projeto";
      html += ` <a class="project-link" href="${project.link.url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    return html;
  }

  function bindProjectLinks(container) {
    container.querySelectorAll(".project-link").forEach((link) => {
      link.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  function renderProjects(grid, projects) {
    if (!grid || !projects?.length) {
      if (grid) grid.innerHTML = "";
      return;
    }

    grid.innerHTML = "";

    projects.forEach((project, i) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.style.animationDelay = `${i * 0.05}s`;
      card.dataset.projectId = project.id;
      card.innerHTML = `
        <div class="project-card__image">
          <img src="${project.image}" alt="Captura do projeto ${project.title}" loading="lazy" />
          <div class="project-card__image-overlay">
            <span class="status-badge status-badge--${project.status}">${statusLabel(project.status)}</span>
          </div>
        </div>
        <div class="project-card__body">
          <div class="project-card__header">
            <div class="project-card__icon" aria-hidden="true">
              ${renderIcon(project.icon, "ui-icon")}
            </div>
            <h3 class="project-card__title">${project.title}</h3>
          </div>
          <p class="project-card__desc">${renderProjectDescription(project)}</p>
          <div class="tag-list project-card__tags">
            ${project.tech.map((t) => `<span class="tag tag--project">${t}</span>`).join("")}
          </div>
          <span class="project-card__cta">Ver detalhes</span>
        </div>`;
      card.addEventListener("click", () => openModal(project));
      bindProjectLinks(card);
      grid.appendChild(card);
    });
  }

  renderProjects(
    professionalProjectsGrid,
    data.professionalProjects || data.projects
  );
  renderProjects(generalProjectsGrid, data.generalProjects);
  observeReveals();

  // ---- Modal ----
  const modal = document.getElementById("projectModal");

  function openModal(project) {
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalImage").alt = project.title;
    document.getElementById("modalIcon").innerHTML = renderIcon(
      project.icon,
      "ui-icon ui-icon--lg"
    );
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").innerHTML =
      renderProjectDescription(project);

    const modalTech = document.getElementById("modalTech");
    modalTech.innerHTML = project.tech
      .map((t) => `<span class="tag tag--project">${t}</span>`)
      .join("");

    const statusEl = document.getElementById("modalStatus");
    statusEl.className = `status-badge status-badge--${project.status}`;
    statusEl.textContent = statusLabel(project.status);

    const featuresEl = document.getElementById("modalFeatures");
    featuresEl.innerHTML = "";
    if (project.features?.length) {
      featuresEl.innerHTML = project.features
        .map((f) => `<li><span class="modal__feature-dot" aria-hidden="true"></span>${f}</li>`)
        .join("");
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // ---- Tools ----
  const toolsSections = document.getElementById("toolsSections");
  const toolGroups = [
    {
      title: "Principais ferramentas em AV",
      icon: "wrench",
      variant: "av",
      items: data.avTools,
    },
    {
      title: "Ferramentas em geral",
      icon: "clipboard",
      variant: "general",
      items: data.generalTools,
    },
    {
      title: "Linguagens e programação",
      icon: "code",
      variant: "code",
      items: data.programming,
    },
  ];

  if (data.certifications?.length) {
    toolGroups.unshift({
      title: "Certificações AV",
      icon: "shield",
      variant: "cert",
      items: data.certifications,
    });
  }

  if (data.avBrands?.length) {
    const insertAt = data.certifications?.length ? 1 : 0;
    toolGroups.splice(insertAt, 0, {
      title: "Marcas em contato",
      subtitle:
        "Fabricantes e ecossistemas AV com os quais trabalho no dia a dia",
      icon: "layers",
      variant: "brands",
      items: data.avBrands,
    });
  }

  if (data.aiTools?.length) {
    toolGroups.push({
      title: "Inteligências Artificiais",
      icon: "sparkles",
      variant: "ai",
      items: data.aiTools,
    });
  }

  function renderToolCard(tool) {
    const src = tool.image || tool.logo || "";
    const logoScale = tool.logoScale
      ? ` style="transform: scale(${tool.logoScale});"`
      : "";

    const media = src
      ? `<div class="tool-item__media"><img src="${src}" alt="${tool.name}" loading="lazy"${logoScale} /></div>`
      : `<div class="tool-item__placeholder" aria-hidden="true">${tool.name.charAt(0)}</div>`;

    return `
      <div class="tool-item">
        ${media}
        <span class="tool-item__name">${tool.name}</span>
      </div>`;
  }

  toolGroups.forEach((group) => {
    if (!group.items.length) return;
    const section = document.createElement("div");
    section.className = `tool-block tool-block--${group.variant} reveal`;
    section.innerHTML = `
      <div class="tool-block__header">
        <div class="tool-block__header-icon" aria-hidden="true">
          ${renderIcon(group.icon, "achievement-icon achievement-icon--lg")}
        </div>
        <div class="tool-block__header-text">
          <h3>${group.title}</h3>
          ${group.subtitle ? `<p>${group.subtitle}</p>` : ""}
        </div>
      </div>
      <div class="tools-grid">
        ${group.items.map(renderToolCard).join("")}
      </div>`;
    toolsSections.appendChild(section);
  });

  // ---- Footer ----
  document.getElementById("footerNote").textContent = data.technicalNote;
  document.getElementById("footerName").textContent = data.profile.name;
  document.getElementById("footerYear").textContent =
    `Realizações AV · ${new Date().getFullYear()}`;

  // ---- Nav mobile ----
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Scroll reveal ----
  function observeReveals() {
    const reveals = document.querySelectorAll(".reveal:not(.visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  observeReveals();

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav__links a");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.id;
      });
      navAnchors.forEach((a) => {
        a.style.color =
          a.getAttribute("href") === `#${current}`
            ? "var(--accent)"
            : "";
      });
    },
    { passive: true }
  );
})();
