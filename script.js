// ============================================
// PROJECT DATA
// ============================================
// Each project can include a `repo` (full GitHub URL) — when present, the
// project modal will live-fetch that repo's README + any document files
// straight from the GitHub API. Projects without a repo yet show a
// "repository coming soon" note instead of a broken link.
const projects = [
  {
    domain: "hw",
    title: "Remote Health Monitoring System",
    desc: "ESP32 firmware for continuous multi-sensor acquisition (heart rate, SpO₂, temperature) with interrupt-driven real-time processing, streaming vitals over WiFi to Firebase, a React Native app, and a web dashboard.",
    longDesc: [
      "Wrote interrupt-driven ESP32 firmware in Embedded C to sample heart rate, SpO₂, and temperature sensors continuously without blocking the main control loop.",
      "Set up WiFi connectivity and a real-time data pipeline pushing vitals to Firebase Realtime Database / Firestore.",
      "Built a React Native companion app so vitals can be monitored live from a phone, plus a web dashboard for a second-screen view.",
      "Designed and laid out the custom PCB carrying the sensor front-end and ESP32 module."
    ],
    tags: ["ESP32", "Embedded C", "Firebase", "React Native", "PCB Design"],
    repo: "https://github.com/miruanand/HealthWatch-One"
  },
  {
    domain: "hw",
    title: "12×12 Multiplier — Hybrid Adder",
    desc: "A 12×12 multiplier combining Carry Look-Ahead and Carry Select adder architectures to optimize the speed–power trade-off. Simulated and verified in Verilog HDL, implemented for FPGA deployment.",
    longDesc: [
      "Designed a 12×12 multiplier architecture that hybridizes Carry Look-Ahead and Carry Select adder stages to balance propagation delay against power draw.",
      "Modeled and verified the full datapath in Verilog HDL, with testbenches covering edge-case operand combinations.",
      "Synthesized and mapped the design onto FPGA fabric via Quartus, checking timing closure and resource utilization.",
      "Compared the hybrid design's speed/power profile against a standalone Carry Look-Ahead baseline."
    ],
    tags: ["Verilog HDL", "FPGA", "Quartus", "Digital Design"],
    repo: "https://github.com/miruanand/12x12-Hybrid-Adder"
  },
  {
    domain: "hw",
    title: "Domino Logic in Sub/Near-Threshold CMOS",
    desc: "Low-power VLSI design exploring domino logic behavior at sub- and near-threshold voltages, designed and benchmarked in Cadence Virtuoso at 180nm and 90nm nodes.",
    longDesc: [
      "Designed domino logic gates in Cadence Virtuoso and characterized their behavior as supply voltage is scaled into the sub- and near-threshold regions.",
      "Benchmarked the same gates at both 180nm and 90nm process nodes to compare how technology scaling affects noise margins and leakage.",
      "Ran transient and DC simulations to quantify the speed–power trade-off at each voltage/node combination.",
      "Documented failure modes (like leakage-induced state loss) specific to domino logic at ultra-low voltages."
    ],
    tags: ["Cadence Virtuoso", "VLSI", "Low-Power Design", "180nm / 90nm"],
    repo: "https://github.com/miruanand/Subthreshold-Domino-Logic-VLSI"
  },
  {
    domain: "hw",
    title: "Hearing Aid",
    desc: "A compact dual-layer PCB built with SMD components for audio amplification — end-to-end analog design from schematic to a working, wearable form factor.",
    longDesc: [
      "Designed the analog amplification schematic from scratch, simulating gain stages and noise behavior in LTspice before committing to hardware.",
      "Laid out a compact dual-layer PCB with SMD components to keep the final form factor wearable.",
      "Hand-assembled and soldered the SMD board, then debugged the analog front-end against real audio input.",
      "Tuned gain staging to keep output within a safe, comfortable listening range."
    ],
    tags: ["PCB Design", "SMD Assembly", "Analog Circuits", "LTspice"],
    repo: "https://github.com/miruanand/PCB-Based-Hearing-Aid"
  },
  {
    domain: "sw",
    title: "Energy Supply Chain Resilience Platform",
    desc: "A multi-agent AI system for import-dependent economies — fusing GDELT/ACLED conflict signals, sanctions intelligence, and AIS vessel tracking with MPC-based strategic reserve optimization.",
    longDesc: [
      "Built a multi-agent AI pipeline where separate agents ingest GDELT/ACLED conflict-event data, sanctions intelligence, and live AIS vessel-tracking feeds.",
      "Fused those independent signal streams into a unified risk picture for energy-import-dependent economies.",
      "Implemented an MPC (Model Predictive Control) optimization layer to recommend strategic reserve drawdown/build-up policy under supply-risk scenarios.",
      "Used Supabase as the backing store for ingested events, agent outputs, and the resulting recommendations."
    ],
    tags: ["Multi-Agent AI", "AIS Tracking", "Supabase", "MPC Optimization"],
    repo: "https://github.com/miruanand/Energy-Supply-Chain-Resilience"
  },
  {
    domain: "sw",
    title: "AgroBot",
    desc: "A CV-based plant disease classification pipeline on Raspberry Pi 5 that triggers precision-targeted pesticide spraying to cut chemical wastage, paired with a mobile app for live monitoring and field analytics.",
    longDesc: [
      "Built a computer-vision classification pipeline running on-device on a Raspberry Pi 5 to detect plant disease in real time from camera feed.",
      "Designed the closed-loop targeting + spray-verification mechanism that aims treatment only where disease is detected, instead of blanket-spraying a field.",
      "Built a companion mobile app for live monitoring, remote control, and field analytics.",
      "Selected for Smart India Hackathon 2025; the detection-and-spraying mechanism became a published patent application."
    ],
    tags: ["Raspberry Pi 5", "Computer Vision", "Machine Learning", "Mobile App"],
    badge: "SIH 2025 · Patent Published",
    repo: "https://github.com/miruanand/AgroBot-ML-Powered-Precision-Agriculture-Robot"
  },
  {
    domain: "sw",
    title: "Maternal–Fetal Health Care System",
    desc: "An edge-AI health monitoring system on ESP32-S3 for real-time prediction of fetal distress and preterm labour, integrating wireless multi-sensor fusion for continuous, low-latency tracking.",
    longDesc: [
      "Built an edge-AI pipeline running directly on ESP32-S3 to predict fetal distress and preterm labour risk without depending on a cloud round-trip.",
      "Integrated wireless multi-sensor fusion so multiple physiological signals are combined into a single risk score in real time.",
      "Optimized the on-device model to keep inference latency low enough for continuous, safety-critical monitoring.",
      "The system's monitoring-and-prediction approach became a published patent application."
    ],
    tags: ["ESP32-S3", "Edge AI", "Sensor Fusion", "IoT"],
    badge: "Patent Published",
    repo: "https://github.com/miruanand/Maternal-Fetal-Health-Prediction-System"
  },
  {
    domain: "sw",
    title: "Wastewater Treatment MPC",
    desc: "A Transformer neural network forecasting key wastewater treatment parameters, exported to ONNX and integrated into MATLAB/Simulink to drive a Model Predictive Controller for real-time process optimization.",
    longDesc: [
      "Trained a Transformer neural network to forecast key wastewater treatment process parameters ahead of real time.",
      "Exported the trained model to ONNX so it could run outside the original training framework.",
      "Integrated the ONNX model into MATLAB/Simulink to feed forecasts into a Model Predictive Controller.",
      "Used the MPC loop to drive real-time process optimization decisions for the treatment plant."
    ],
    tags: ["Transformer", "ONNX", "Simulink", "MPC"],
    repo: "https://github.com/miruanand/WWTP-Transformer-MPC"
  }
];

// ============================================
// PATENT DATA
// ============================================
// `images` is an array so a card can hold more than one photo (a small
// gallery with arrows/dots shows up automatically once there's more than one).
const patents = [
  {
    images: ["assets/patents/AgroBot.png"],
    status: "Published",
    title: "Closed-Loop Liquid Dispensing System with Image-Based Spatial Targeting and Deposition Verification",
    applicant: "Vellore Institute of Technology, Chennai",
    field: "Computer Science",
    applicationNo: "202641065168",
    applicationType: "Ordinary Application",
    filingDate: "23/05/2026",
    publicationNo: "23/2026",
    desc: "Covers the ML-based plant disease detection and precision-targeted spraying mechanism built for AgroBot — a closed-loop system that identifies exactly where treatment is needed and verifies the spray was actually deposited correctly."
  },
  {
    images: ["assets/patents/Maternal_fetal.png"],
    status: "Published",
    title: "Maternal–Fetal Health Monitoring and Risk Prediction System",
    applicant: "Vellore Institute of Technology, Chennai",
    field: "Bio-Medical Engineering",
    applicationNo: "202641079080",
    applicationType: "Ordinary Application",
    filingDate: "26/06/2026",
    publicationDate: "03/07/2026",
    desc: "Covers an edge-AI system for real-time prediction of fetal distress and preterm labour, using wireless multi-sensor fusion processed directly on-device via ESP32-S3 — built to minimize the latency of cloud round-trips in a safety-critical setting."
  }
];


function parseGithubRepo(url) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^\/]+)\/([^\/#?]+)/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

const DOC_EXTENSIONS = ["pdf", "docx", "doc", "pptx", "ppt", "xlsx", "csv"];

async function fetchRepoReadme(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
    headers: { Accept: "application/vnd.github.html+json" }
  });
  if (!res.ok) throw new Error(`README not available (${res.status})`);
  return res.text();
}

async function fetchRepoDocs(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);
  if (!res.ok) throw new Error(`Repo contents not available (${res.status})`);
  const items = await res.json();
  if (!Array.isArray(items)) return [];
  return items.filter(item => {
    if (item.type === "dir") return /^docs?$|^documentation$/i.test(item.name);
    const ext = item.name.split(".").pop().toLowerCase();
    return DOC_EXTENSIONS.includes(ext);
  });
}

// ============================================
// PROJECT MODAL
// ============================================
const projectModal = document.getElementById("projectModal");
const projectModalDomain = document.getElementById("projectModalDomain");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalRepo = document.getElementById("projectModalRepo");
const projectModalBody = document.getElementById("projectModalBody");

function openProjectModal(project) {
  projectModalDomain.textContent = project.domain === "hw" ? "Hardware" : "Software / AI";
  projectModalDomain.className = `project-domain ${project.domain}`;
  projectModalTitle.textContent = project.title;

  const gh = parseGithubRepo(project.repo);

  if (project.repo) {
    projectModalRepo.href = project.repo;
    projectModalRepo.style.display = "inline-flex";
  } else {
    projectModalRepo.style.display = "none";
  }

  const bullets = (project.longDesc || [project.desc]).map(l => `<li>${l}</li>`).join("");

  projectModalBody.innerHTML = `
    <div class="project-modal-tags">
      ${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      ${project.badge ? `<span class="tag patent">${project.badge}</span>` : ""}
    </div>
    <div class="project-modal-section">
      <h4>What was done</h4>
      <ul class="project-modal-bullets" style="padding-left:20px; color:var(--text-dim); display:flex; flex-direction:column; gap:8px;">${bullets}</ul>
    </div>
    <div class="project-modal-section" id="pmReadmeSection">
      <h4>README (live from GitHub)</h4>
      <div class="gh-status" id="pmReadmeStatus">${gh ? '<span class="gh-spinner"></span> Fetching README…' : ""}</div>
      <div class="readme-box" id="pmReadmeBox" style="${gh ? "" : "display:none;"}"></div>
      ${!gh ? '<p class="repo-pending">Repository link not added yet — check back soon, or view other projects\' repos on <a href="https://github.com/miruanand?tab=repositories" target="_blank" rel="noopener" style="color:var(--signal)">GitHub</a>.</p>' : ""}
    </div>
    ${gh ? `
    <div class="project-modal-section" id="pmDocsSection">
      <h4>Documents in the repository</h4>
      <div class="gh-status" id="pmDocsStatus"><span class="gh-spinner"></span> Checking for documents…</div>
      <div class="doc-list" id="pmDocsList"></div>
    </div>` : ""}
  `;

  document.body.classList.add("modal-open");
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");

  if (gh) {
    fetchRepoReadme(gh.owner, gh.repo).then(html => {
      const statusEl = document.getElementById("pmReadmeStatus");
      const boxEl = document.getElementById("pmReadmeBox");
      if (statusEl) statusEl.innerHTML = "";
      if (boxEl) { boxEl.style.display = "block"; boxEl.innerHTML = html; }
    }).catch(() => {
      const statusEl = document.getElementById("pmReadmeStatus");
      if (statusEl) statusEl.innerHTML = `No README could be loaded right now — <a href="${project.repo}" target="_blank" rel="noopener" style="color:var(--signal)">view the repo directly ↗</a>`;
    });

    fetchRepoDocs(gh.owner, gh.repo).then(docs => {
      const statusEl = document.getElementById("pmDocsStatus");
      const listEl = document.getElementById("pmDocsList");
      if (!listEl) return;
      if (docs.length === 0) {
        statusEl.textContent = "No standalone document files found in the repo root.";
        return;
      }
      statusEl.innerHTML = "";
      listEl.innerHTML = docs.map(d => `
        <div class="doc-item">
          <span>${d.type === "dir" ? "📁" : "📄"} ${d.name}</span>
          <a href="${d.html_url}" target="_blank" rel="noopener">View ↗</a>
        </div>
      `).join("");
    }).catch(() => {
      const statusEl = document.getElementById("pmDocsStatus");
      if (statusEl) statusEl.innerHTML = `Couldn't load repo contents — <a href="${project.repo}" target="_blank" rel="noopener" style="color:var(--signal)">browse on GitHub ↗</a>`;
    });
  }
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("projectModalClose").addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", (e) => { if (e.target === projectModal) closeProjectModal(); });

// ============================================
// CERT VIEWER MODAL
// ============================================
const certModal = document.getElementById("certModal");
const certModalTitle = document.getElementById("certModalTitle");
const certModalBody = document.getElementById("certModalBody");
const certModalDownload = document.getElementById("certModalDownload");

function openCertModal(path, type, title) {
  certModalTitle.textContent = title;
  certModalDownload.href = path;
  if (type === "pdf") {
    certModalBody.innerHTML = `<embed src="${path}#toolbar=1" type="application/pdf" class="cert-frame">`;
  } else {
    certModalBody.innerHTML = `<div class="cert-image-wrap"><img src="${path}" alt="${title}"></div>`;
  }
  document.body.classList.add("modal-open");
  certModal.classList.add("open");
  certModal.setAttribute("aria-hidden", "false");
}

function closeCertModal() {
  certModal.classList.remove("open");
  certModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  certModalBody.innerHTML = "";
}

document.getElementById("certModalClose").addEventListener("click", closeCertModal);
certModal.addEventListener("click", (e) => { if (e.target === certModal) closeCertModal(); });

document.querySelectorAll(".cert-card").forEach(btn => {
  btn.addEventListener("click", () => {
    openCertModal(btn.dataset.cert, btn.dataset.type, btn.dataset.title);
  });
});

// Shared ESC-to-close for both modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (projectModal.classList.contains("open")) closeProjectModal();
    if (certModal.classList.contains("open")) closeCertModal();
  }
});

// ============================================
// RENDER PROJECT CARDS
// ============================================
const grid = document.getElementById('projectGrid');

function renderProjects(filter) {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.domain === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = `project-card ${p.domain} reveal reveal-stagger`;
    card.style.setProperty('--stagger-delay', `${(i % 4) * 0.08}s`);
    const domainLabel = p.domain === 'hw' ? 'Hardware' : 'Software / AI';
    card.innerHTML = `
      <div class="project-top">
        <h3>${p.title}</h3>
        <span class="project-domain ${p.domain}">${domainLabel}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        ${p.badge ? `<span class="tag ${p.domain === 'sw' ? 'patent' : 'patent'}">${p.badge}</span>` : ''}
      </div>
      ${p.repo ? `<div class="project-links"><a href="${p.repo}" target="_blank" rel="noopener">View Repository ↗</a></div>` : ''}
    `;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-links a')) return; // let the repo link behave normally
      openProjectModal(p);
    });
    grid.appendChild(card);
    requestAnimationFrame(() => revealObserver.observe(card));
  });
}
renderProjects('all');

// ============================================
// RENDER PATENT CARDS
// ============================================
const patentGrid = document.getElementById('patentGrid');

function appRow(label, value) {
  if (!value) return '';
  return `<div class="app-row"><span class="app-label">${label}</span><span class="app-value">${value}</span></div>`;
}

function renderPatents() {
  patentGrid.innerHTML = '';
  patents.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'patent-card reveal reveal-stagger';
    card.style.setProperty('--stagger-delay', `${i * 0.1}s`);

    const hasMultiple = p.images.length > 1;
    const galleryImgs = p.images.map((src, idx) => `
      <img src="${src}" alt="${p.title}" data-idx="${idx}" style="${idx === 0 ? '' : 'display:none;'}">
    `).join('');
    const arrows = hasMultiple ? `
      <button class="patent-gallery-arrow prev" aria-label="Previous image">‹</button>
      <button class="patent-gallery-arrow next" aria-label="Next image">›</button>
      <div class="patent-gallery-dots">
        ${p.images.map((_, idx) => `<span data-idx="${idx}" class="${idx === 0 ? 'active' : ''}"></span>`).join('')}
      </div>
    ` : '';

    card.innerHTML = `
      <div class="patent-media">${galleryImgs}${arrows}</div>
      <span class="patent-status published">${p.status}</span>
      <h3>${p.title}</h3>
      <div class="application-details">
        ${appRow('Application No.', p.applicationNo)}
        ${appRow('Application Type', p.applicationType)}
        ${appRow('Date of Filing', p.filingDate)}
        ${appRow('Applicant', p.applicant)}
        ${appRow('Field of Invention', p.field)}
        ${appRow('Publication No.', p.publicationNo)}
        ${appRow('Publication Date', p.publicationDate)}
      </div>
      <p class="patent-desc">${p.desc}</p>
    `;

    // click any image to open it full-size in the viewer modal
    card.querySelectorAll('.patent-media img').forEach(img => {
      img.addEventListener('click', () => openCertModal(img.getAttribute('src'), 'image', p.title));
    });

    if (hasMultiple) {
      const imgs = card.querySelectorAll('.patent-media img');
      const dots = card.querySelectorAll('.patent-gallery-dots span');
      let current = 0;
      function showSlide(idx) {
        current = (idx + imgs.length) % imgs.length;
        imgs.forEach((img, i2) => { img.style.display = i2 === current ? '' : 'none'; });
        dots.forEach((d, i2) => d.classList.toggle('active', i2 === current));
      }
      card.querySelector('.patent-gallery-arrow.prev').addEventListener('click', (e) => { e.stopPropagation(); showSlide(current - 1); });
      card.querySelector('.patent-gallery-arrow.next').addEventListener('click', (e) => { e.stopPropagation(); showSlide(current + 1); });
      dots.forEach(d => d.addEventListener('click', (e) => { e.stopPropagation(); showSlide(parseInt(d.dataset.idx, 10)); }));
    }

    patentGrid.appendChild(card);
    requestAnimationFrame(() => revealObserver.observe(card));
  });
}
renderPatents();

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderProjects(chip.dataset.filter);
  });
});

// ============================================
// RESUME DROPDOWN
// ============================================
const resumeBtn = document.getElementById('resumeBtn');
const resumeDropdown = resumeBtn.closest('.resume-dropdown');
resumeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  resumeDropdown.classList.toggle('open');
});
document.addEventListener('click', () => resumeDropdown.classList.remove('open'));

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const expanded = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', expanded);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('main .section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[data-tab]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// ============================================
// SCROLL PROGRESS TRACE (top bar, signature element)
// ============================================
const scrollTraceFill = document.getElementById('scrollTraceFill');
function updateScrollTrace() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollTraceFill.style.width = `${pct}%`;
}
window.addEventListener('scroll', updateScrollTrace, { passive: true });
window.addEventListener('resize', updateScrollTrace);

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

function initRevealGroup(selector, staggerStep = 0.08) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal', 'reveal-stagger');
    el.style.setProperty('--stagger-delay', `${(i % 6) * staggerStep}s`);
    revealObserver.observe(el);
  });
}

initRevealGroup('.section-eyebrow');
initRevealGroup('.section-title');
initRevealGroup('.skill-panel');
initRevealGroup('.timeline-item');
initRevealGroup('.cert-card');
initRevealGroup('.contact-link');
initRevealGroup('.sih-card', 0);
initRevealGroup('.about-text', 0);

// ============================================
// ANIMATED STAT COUNTERS (hero)
// ============================================
function animateStatNumber(el) {
  const raw = el.textContent.trim();
  const target = parseFloat(raw);
  if (isNaN(target)) return;
  const isDecimal = raw.includes('.');
  const decimals = isDecimal ? raw.split('.')[1].length : 0;
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = current.toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = raw;
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateStatNumber);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);

// ============================================
// INIT
// ============================================
window.addEventListener('load', () => {
  updateScrollTrace();
  document.getElementById('year').textContent = new Date().getFullYear();
});
