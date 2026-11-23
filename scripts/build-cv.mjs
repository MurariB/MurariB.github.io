// Builds public/Murari-Bhadragiri-CV.pdf from src/data/profile.ts using headless Chrome.
// Run: npm run cv   (macOS, needs Google Chrome installed)
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { profile, experience, tallyPlate, projects, skills, stem, certifications, education, awards } from "../src/data/profile.ts";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const email = `${profile.emailUser}@${profile.emailDomain}`;
const site = "murarib.github.io";

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(profile.name)} – CV</title>
<style>
@page { size: A4; margin: 14mm 15mm; }
* { box-sizing: border-box; }
body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 10pt; line-height: 1.42; color: #1e293b; margin: 0; }
h1 { font-size: 22pt; margin: 0; color: #0f172a; letter-spacing: -0.3px; }
.title { font-size: 11.5pt; color: #0f766e; font-weight: 600; margin-top: 2px; }
.contact { margin-top: 6px; font-size: 9pt; color: #475569; }
.contact a { color: #475569; text-decoration: none; }
header { border-bottom: 2px solid #0f766e; padding-bottom: 8px; margin-bottom: 4px; }
h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1px; color: #0f766e; margin: 14px 0 6px; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px; }
h3 { font-size: 10.5pt; margin: 0; color: #0f172a; }
.row { display: flex; justify-content: space-between; gap: 12px; }
.meta { color: #64748b; font-size: 9pt; }
.when { color: #64748b; font-size: 9pt; white-space: nowrap; }
ul { margin: 3px 0 0; padding-left: 15px; }
li { margin: 1px 0; }
.item { margin-bottom: 9px; break-inside: avoid; }
.tech { font-size: 8.5pt; color: #64748b; margin-top: 2px; }
.skills { display: grid; grid-template-columns: 150px 1fr; gap: 2px 10px; }
.skills b { color: #0f172a; }
p { margin: 0 0 5px; }
.stats { font-weight: 600; color: #0f172a; }
</style></head><body>
<header>
  <h1>${esc(profile.name)}</h1>
  <div class="title">${esc(profile.title)} · ${esc(profile.tagline)}</div>
  <div class="contact">${esc(profile.location)} · <a href="mailto:${email}">${email}</a> ·
    <a href="${profile.linkedin}">linkedin.com/in/murari-bhadragiri-32175732</a> ·
    <a href="${profile.github}">github.com/MurariB</a> · <a href="https://${site}">${site}</a></div>
</header>

<h2>Profile</h2>
${profile.about.map((p) => `<p>${esc(p)}</p>`).join("")}

<h2>Skills</h2>
<div class="skills">${skills.map((g) => `<b>${esc(g.group)}</b><span>${g.items.map(esc).join(", ")}</span>`).join("")}</div>

<h2>Experience</h2>
${experience.map((r) => `<div class="item">
  <div class="row"><h3>${esc(r.title)}</h3><span class="when">${esc(r.period)}</span></div>
  <div class="meta">${esc(r.company)}${r.client ? ` · Client: ${esc(r.client)}` : ""} · ${esc(r.location)}</div>
  <ul>${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
  ${r.tech ? `<div class="tech">${r.tech.map(esc).join(" · ")}</div>` : ""}
</div>`).join("")}

<h2>Agentic AI Development</h2>
<div class="item">
  <div class="row"><h3>${esc(tallyPlate.name)}: personal project</h3><span class="when">2026</span></div>
  <p>${esc(tallyPlate.summary)}</p>
  <ul>
    ${tallyPlate.pipeline.map((p) => `<li><b>${esc(p.step)}:</b> ${esc(p.agents)}</li>`).join("")}
    <li><b>Guardrails:</b> ${esc(tallyPlate.guardrails)}</li>
    <li><b>Features:</b> ${tallyPlate.features.map(esc).join("; ")}</li>
  </ul>
  <div class="tech">${tallyPlate.tech.map(esc).join(" · ")}</div>
</div>

<h2>Key Projects</h2>
${projects.map((p) => `<div class="item"><div class="row"><h3>${esc(p.name)}</h3><span class="when">${esc(p.org)}</span></div>
  <p>${esc(p.summary)}</p><div class="tech">${p.tech.map(esc).join(" · ")}</div></div>`).join("")}

<h2>Volunteering</h2>
<div class="item">
  <div class="row"><h3>${esc(stem.role)}, ${esc(stem.org)}</h3><span class="when">${esc(stem.since)} – Present</span></div>
  <p>${esc(stem.summary)}</p>
  <p class="stats">${stem.impact.map((s) => `${esc(s.value)} ${esc(s.label.toLowerCase())}`).join(" · ")} <span class="meta">(Nov 2025 – Nov 2026)</span></p>
  <ul>${stem.highlights.map((h) => `<li><b>${esc(h.title)}</b>: ${esc(h.detail)}</li>`).join("")}</ul>
</div>

<h2>Certifications</h2>
<ul>${certifications.map((c) => `<li>${esc(c.name)}, ${esc(c.issuer)}, ${esc(c.date)}</li>`).join("")}</ul>

<h2>Education & Awards</h2>
<ul>
  <li>${esc(education.degree)}, ${esc(education.school)}, ${esc(education.year)}. ${esc(education.note)}</li>
  ${awards.map((a) => `<li>${esc(a)}</li>`).join("")}
</ul>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), "cv-"));
const htmlPath = join(dir, "cv.html");
writeFileSync(htmlPath, html);
const out = resolve("public/Murari-Bhadragiri-CV.pdf");
execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${out}`, `file://${htmlPath}`,
], { stdio: "ignore" });
console.log(`Wrote ${out}`);
