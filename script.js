/* =====================================================================
   1) TEXTOS DEL INDEX (tarjetas del listado de proyectos)
   Editar aquí NO cambia los casos de estudio.
   image = imagen del listado, por ejemplo "img/bufi-portada.jpg"
   ===================================================================== */
const projects = [
 {
  id:"bufi",
  n:"01",
  title:"BUFI Assistant",
  year:"2026",
  kicker:"Operaciones de diseño con IA",
  line:"Haciendo accesible el conocimiento de diseño con IA.",
  desc:"Convertir información dispersa en una fuente centralizada y consultable mediante un asistente basado en IA.",
  tags:["Innovación con IA", "Design Ops", "Gestión del conocimiento"],
  metric:["90%", "Reducción reportada en el tiempo de búsqueda de información."],
  image:"images/cover_bufi.jpg",
 },
 {
  id:"hub",
  n:"02",
  title:"Design HUB Optimization",
  year:"2025–2026",
  kicker:"Operaciones de diseño globales",
  line:"Escalando la colaboración entre equipos globales.",
  desc:"Optimización del proceso de soporte del HUB mediante estandarización, centralización de información y herramientas de autoservicio.",
  tags:["Transformación organizacional", "Design Ops", "Colaboración global"],
  metric:["80%", "Reducción reportada en sesiones de onboarding y kick-off."],
  image:"images/image_02.png",
 },
 {
  id:"pledge",
  n:"03",
  title:"Payment Pledge",
  year:"Servicios financieros",
  kicker:"Estrategia global de producto",
  line:"De la cobranza reactiva a una experiencia de pago más humana.",
  desc:"Una solución digital global que permite a clientes en situación de impago generar compromisos de pago desde su aplicación móvil, sin acudir a una sucursal.",
  tags:["Diseño de producto", "Economía conductual", "UX financiero","Global"],
  metric:["2 KPIs", "Tasa de conversión de compromisos y conversión a pago."],
  image:"images/cover_pledge.png",
 },
 {
  id:"restr",
  n:"04",
  title:"Restructuring",
  year:"Servicios financieros",
  kicker:"Experiencia de cliente e impacto en negocio",
  line:"De la complejidad financiera a una solución de autogestión.",
  desc:"Una experiencia digital que permite a clientes en situación de mora reestructurar sus créditos desde su aplicación móvil, ampliando plazos y reduciendo sus cuotas mensuales.",
  tags:["Diseño de producto", "Investigación UX", "Economía conductual"],
  metric:["1 KPI", "Tasa de conversión de reestructuras."],
  image:"images/cover_rest.png",
 }
];

/* =====================================================================
   2) TEXTOS DE LOS CASOS DE ESTUDIO (panel que se abre al dar clic)
   Editar aquí NO cambia el index. La clave debe coincidir con el id
   del proyecto. Los textos [Completa: ...] se resaltan en amarillo.
   image = imagen dentro del caso, por ejemplo "img/bufi-caso.jpg"

   EL CASO MUESTRA 5 SECCIONES, EN ESTE ORDEN:
   01. El reto          → challenge
   02. La oportunidad   → approach
   03. La solución      → solution
   04. El impacto       → impact
   05. Mi perspectiva   → lead
   (desc y role ya no se muestran en el caso; puedes borrarlos)

   FORMATO DENTRO DE LOS TEXTOS:
   ==texto==              → fondo amarillo
   **texto**              → negrita
   ![descripción](ruta)   → imagen (ej. ![Flujo](images/flujo.png))
   ===================================================================== */
const casos = {
 bufi: {
  title:"BUFI Assistant",
  kicker:"Operaciones de diseño con IA",
  line:"Haciendo accesible el conocimiento de diseño con IA.",
  desc:`**De información dispersa a conocimiento inteligente.**

Un asistente de IA que facilita el acceso a información de diseño mediante consultas en lenguaje natural, conectando Gemini con un repositorio centralizado en Google Sheets.`,
  year:"2026",
  tags:["Innovación con IA", "Design Ops", "Gestión del conocimiento"],
  image:"images/bufi_02.png",
  role:`==Senior Product Designer · Line Manager==
  **Responsabilidades principales:**

   • Identificación del problema y oportunidad de innovación.
   • Definición de la experiencia de consulta.
   • Estructuración del conocimiento y repositorio.
   • Diseño de instrucciones y lógica contextual de la Gema.
   • Configuración de la solución con Gemini y Google Sheets.`,
  challenge:`**Encontrar información no debería detener al equipo.**

Las referencias, maquetas y actualizaciones estaban dispersas entre chats, archivos y diferentes fuentes.

Esto generaba búsquedas manuales, pérdida de tiempo y dependencia constante del equipo UX para localizar información.`,
  approach:`**Hacer que el conocimiento fuera accesible y autónomo.**

En lugar de crear otro repositorio de consulta, exploré cómo utilizar IA para transformar la búsqueda tradicional en una experiencia conversacional.

La estrategia se centró en:
- Centralizar la información en Google Sheets.
- Estructurar el conocimiento para facilitar su consulta.
- Utilizar Gemini para habilitar búsquedas en lenguaje natural.`,
  solution:`**BUFI. Pregunta y encuentra.**

Diseñé y configuré un asistente mediante una Gema de Gemini, conectado al repositorio de información del proyecto.

El equipo podía consultar referencias y encontrar información relevante sin navegar manualmente entre múltiples archivos y conversaciones.
![](images/flujo_01.png)`,
  impact: `**Menos tiempo buscando. Más tiempo creando.**
==##90%##==
Reducción reportada en tiempo de búsqueda.**

- Acceso más rápido a referencias de diseño.
- Mayor autonomía para el Scrum Team.
- Menos interrupciones y consultas recurrentes al equipo UX.`,
  lead:`**La IA genera valor cuando resuelve problemas reales.**

Este proyecto refleja mi enfoque de diseño: identificar fricciones que afectan a las personas, aprovechar la tecnología y construir soluciones que mejoren la forma en que trabajan los equipos.`,
 },


 hub: {
  title:"Design HUB Optimization",
  kicker:"Operaciones de diseño globales",
  line:"Escalando la colaboración entre equipos globales.",
  desc:`Optimización del proceso de soporte del HUB mediante estandarización, centralización de información y herramientas de autoservicio.`,
  year:"2025–2026",
  tags:["Transformación organizacional", "Design Ops", "Colaboración global"],
  image:"images/bbva_cover.png",
  role:`==Senior Product Designer · Design Operations · Line Manager==
  **Transformar la operación, no solo resolver solicitudes.**

- Identificación de fricciones operativas.
- Facilitación de workshops de co-creación.
- Diseño del modelo de soporte estandarizado.
- Alineación con Product Owners locales.
- Impulso de la adopción del nuevo proceso.`,
  challenge:`**La falta de estandarización generaba fricción entre equipos.**

Cada región gestionaba las solicitudes de soporte de manera diferente, provocando procesos ambiguos, dependencia de los UX globales y tiempo invertido en tareas repetitivas.

El reto era crear un modelo común que facilitara la colaboración y autonomía de los equipos locales.`,
  approach:`**Pasar de resolver solicitudes a prevenirlas.**

En lugar de atender cada necesidad de forma aislada, buscamos transformar el modelo operativo mediante tres pilares:
- **Alineación:** homologar criterios con Product Owners locales.
- **Estandarización:** definir procesos, responsabilidades y tiempos de respuesta.
- **Autoservicio:** centralizar el conocimiento para reducir dependencias.`,
  solution:`**Un HUB más accesible y escalable.**

Diseñamos una plataforma web como fuente única de información operativa, permitiendo a los equipos consultar procesos, acceder a guías y resolver dudas de forma autónoma.

![](images/HUB_process_02.png)`,
  impact:`**Menos sesiones de acompañamiento. Más autonomía.
==##80%##==
Reducción en sesiones de onboarding y kick-off.**

- Información centralizada y accesible.
- Procesos y expectativas de servicio más claros.
- Menor dependencia del soporte recurrente de UX globales.
- Mayor capacidad para enfocarse en proyectos estratégicos E2E.`,
  lead:`**Escalar diseño también significa mejorar cómo trabajan los equipos.**

Este proyecto refleja mi enfoque de liderazgo: identificar fricciones organizacionales, conectar diferentes equipos y construir sistemas que permitan trabajar con mayor autonomía y eficiencia.

**El verdadero valor no está en resolver cada solicitud, sino en crear las condiciones para que deje de ser necesario resolverla una y otra vez.**`,
 },


 pledge: {
  title:"Payment Pledge",
  kicker:"Estrategia global de producto",
  line:"Haciendo más humanos los compromisos financieros.",
  desc:`**Pagar una deuda no debería ser una experiencia de fricción.**

Los procesos tradicionales de cobranza dependían de llamadas y canales reactivos que generaban estrés y limitaban la autonomía del cliente.

El desafío era crear una experiencia global que pudiera adaptarse a las regulaciones y comportamientos financieros de cinco países.`,
  year:"Servicios financieros",
  tags:["Diseño de producto", "Economía conductual", "UX financiero"],
  image:"images/payment_1.png",
  role:"Senior Product Designer",
  challenge:`**Transformar la cobranza en una experiencia de autogestión.**

A través de investigación cualitativa con usuarios y stakeholders de negocio en los cinco países, exploramos las barreras que dificultaban asumir un compromiso de pago.

Identificamos una oportunidad: ofrecer mayor control y flexibilidad al cliente, sin perder de vista los objetivos de recuperación del negocio.`,
  approach:"[Completa: investigación, hallazgos de economía conductual y decisiones por país]",
  solution:`Payment Pledge. Un compromiso de pago a tu manera.

Diseñamos un flujo digital que permite al cliente establecer su compromiso de pago directamente desde su aplicación móvil.

La experiencia le permite elegir:
- Monto del compromiso.
- Fecha de pago.
- Plazos disponibles.
Aplicamos principios de Behavioral Economics y UX Writing para simplificar las decisiones, reducir la carga cognitiva y ofrecer una experiencia más clara y empática.
![](images/pledge_2.png)
![](images/pledge_3.png)`,
  impact:`Más autonomía para el cliente. Nuevas oportunidades para el negocio.

El producto estableció un canal digital para que los clientes pudieran gestionar sus compromisos de pago de forma proactiva.

KPIs principales:
- Tasa de conversión de compromisos de pago.
- Tasa de conversión de compromiso a pago.`,
  lead:`**Diseñar para el negocio también significa entender a las personas.**

Este proyecto me permitió conectar investigación, comportamiento humano y objetivos financieros para transformar una experiencia tradicionalmente reactiva en una oportunidad de autogestión.

**Mi aprendizaje:** cuando damos claridad y autonomía a las personas, podemos construir experiencias que respondan tanto a sus necesidades como a los objetivos del negocio.`,
 },

 restr: {
  title:"Restructuring",
  kicker:"Experiencia de cliente e impacto en negocio",
  line:"Convirtiendo la complejidad financiera en claridad.",
  desc:"Simplificar la reestructuración de tarjetas y préstamos mediante una experiencia de autoservicio que permite explorar plazos, cuotas y alternativas de pago.",
  year:"Servicios financieros",
  tags:["Diseño de producto", "Investigación UX", "Economía conductual"],
  image:"images/cover_rest.png",
  role:"Senior Product Designer",
  challenge:`**Regularizar una deuda no debería ser un proceso complicado.**

Los clientes en situación de mora dependían de llamadas de cobranza o visitas a sucursales para negociar sus créditos.

El desafío era transformar este proceso en una experiencia digital clara, considerando la complejidad financiera y regulatoria de diferentes geografías, así como la ansiedad que genera una situación de impago.`,
  approach:`**Dar al cliente alternativas para recuperar el control de sus finanzas.**

A través de investigación, buscamos comprender las necesidades de flexibilidad y las barreras que enfrentaban los clientes al renegociar sus deudas.

La oportunidad consistía en ofrecer una alternativa de autogestión que permitiera explorar opciones de pago de manera sencilla y transparente.`,
  solution:`**Restructuring. Una nueva forma de organizar tus pagos.**

Diseñamos un flujo digital de simulación que permite al cliente visualizar y ajustar las condiciones de su reestructuración directamente desde la app.

La experiencia permite:
- Consultar alternativas de reestructuración.
- Visualizar nuevas cuotas mensuales.
- Ajustar plazos de pago.
- Comprender el impacto de cada alternativa antes de continuar.
Aplicamos UX Writing y Behavioral Economics para simplificar decisiones y reducir la carga cognitiva.`,
  impact:`**Más claridad para decidir. Mayor autonomía para actuar.**

La solución habilitó un canal digital de autogestión para clientes en situación de mora, facilitando la exploración de alternativas para regularizar sus créditos.

KPI principal:

- Tasa de conversión de reestructuras.`,
  lead:`**Diseñar experiencias financieras también significa reducir la incertidumbre.**

Este proyecto me permitió conectar investigación, comportamiento humano y objetivos de recuperación de negocio para simplificar una decisión financiera compleja.

**Mi aprendizaje:** cuando una persona entiende sus opciones y puede visualizar sus consecuencias, tiene mejores herramientas para tomar decisiones con confianza.`,
 },
};

/* Función de sanitización, formato de texto, resaltado e imágenes */
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const attr = s => s.replace(/"/g,"&quot;");
const hl = s => esc(s)
  .replace(/\[Completa: [^\]]*\]/g, m => `<span class="todo">${m}</span>`)
  .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, src) =>
    `<figure class="case-img"><img src="${attr(src)}" alt="${attr(alt)}" loading="lazy" onerror="this.outerHTML='<span class=todo>No se encontró la imagen: '+this.getAttribute('src')+'</span>'">${alt ? `<figcaption>${alt}</figcaption>` : ""}</figure>`)
  .replace(/==([^=]+)==/g, '<mark class="hl">$1</mark>')   // ==texto== → fondo amarillo
  .replace(/##([^#]+)##/g, '<span class="big-num">$1</span>') // ##texto## → texto grande
  .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')                // **texto** → negrita
  .replace(/\n/g, "<br>")
  .replace(/(<br>)*(<figure)/g, "$2")
  .replace(/(<\/figure>)(<br>)*/g, "$1");

/* Estilos de imágenes y resaltado dentro de los casos */
document.head.insertAdjacentHTML("beforeend", `<style>
.case mark.hl{background:var(--hl);color:inherit;padding:0 .15em}
.case dd:has(.case-img){max-width:none}
.case-img{margin:24px 0}
.case-img img{display:block;width:100%;height:auto;border:2px solid var(--black)}
.case-img figcaption{font-size:.8em;color:var(--grey);margin-top:8px}
</style>`);

const cursorEl = document.getElementById("cursor");
const thumb = (p, key, label) => `<figure class="thumb"><span class="ph">${label}<br><b>${esc(p.title)}</b></span>${p[key]?`<img src="${esc(p[key])}" alt="${label}: ${esc(p.title)}" loading="lazy" onerror="this.remove()">`:""}</figure>`;

/* Lista de proyectos */
const list = document.getElementById("workList");
list.innerHTML = projects.map(p => `
 <article class="project" tabindex="0" role="button" data-id="${p.id}" aria-label="Abrir caso de estudio ${esc(p.title)}">
  <div class="meta"><span>${p.n} · ${esc(p.year)}</span><span class="muted">${esc(p.kicker)}</span></div>
  <div class="big">${esc(p.title)}</div>
  <div class="row">
   <div><p><b>${esc(p.line)}</b></p><p style="margin-top:8px">${esc(p.desc)}</p><p style="margin-top:14px">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</p></div>
   <div class="metric"><b>${esc(p.metric[0])}</b><p class="muted">${esc(p.metric[1])}</p><p class="open-hint" style="margin-top:10px">Leer caso de estudio</p></div>
  </div>
  ${thumb(p,"image","Imagen de portada (listado)")}
 </article>`).join("");

/* Panel del caso de estudio (5 secciones) */
const dlg = document.getElementById("caseDlg"), body = document.getElementById("caseBody");
let lastFocus = null;
function openCase(id){
 const p = projects.find(x => x.id === id); if(!p) return;
 const c = {...p, image:"", ...(casos[id]||{})};
 lastFocus = document.activeElement;
 body.innerHTML = `
  <button class="btn alt close" id="closeCase">Cerrar</button>
  <p class="muted">${p.n} · ${esc(c.kicker)}</p>
  <h2>${esc(c.title)}</h2>
  <p class="lead">${esc(c.line)}</p>
  <p class="muted">${esc(c.year)} · ${c.tags.map(esc).join(", ")}</p>
  ${thumb(c,"image","Imagen del caso de estudio")}
  <dl>
   <dt>01. El reto</dt><dd>${hl(c.challenge)}</dd>
   <dt>02. La oportunidad</dt><dd>${hl(c.approach)}</dd>
   <dt>03. La solución</dt><dd>${hl(c.solution)}</dd>
   <dt>04. El impacto</dt><dd>${hl(c.impact)}</dd>
   <dt>05. Mi perspectiva</dt><dd>${hl(c.lead)}</dd>
  </dl>`;
 dlg.showModal(); dlg.scrollTop = 0;
 dlg.appendChild(cursorEl); /* el dialog vive en la capa superior: el cursor debe ir dentro */
 document.getElementById("closeCase").onclick = () => dlg.close();
 history.replaceState(null,"","#"+id);
}
dlg.addEventListener("click", e => { if(e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => { document.body.appendChild(cursorEl); history.replaceState(null,"","#work"); if(lastFocus) lastFocus.focus(); });
list.addEventListener("click", e => { const a = e.target.closest(".project"); if(a) openCase(a.dataset.id); });
list.addEventListener("keydown", e => { if((e.key==="Enter"||e.key===" ") && e.target.classList.contains("project")){ e.preventDefault(); openCase(e.target.dataset.id);} });
const first = location.hash.slice(1); if(projects.some(p=>p.id===first)) openCase(first);

/* Menú móvil */
const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", e => { if(e.target.tagName==="A"){ menu.classList.remove("open"); burger.setAttribute("aria-expanded","false"); } });

/* Enlace activo en la navegación */
const links = [...document.querySelectorAll(".menu a:not(.cta)")];
const io = new IntersectionObserver(es => es.forEach(en => {
 if(en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#"+en.target.id));
}), {rootMargin:"-45% 0px -50% 0px"});
["about","work","leadership"].forEach(id => io.observe(document.getElementById(id)));

/* Cursor personalizado (solo desktop) */
if(matchMedia("(hover:hover) and (pointer:fine)").matches){
 const c = document.getElementById("cursor"); document.body.classList.add("has-cursor");
 let x=0,y=0,tx=0,ty=0;
 addEventListener("mousemove", e => { tx=e.clientX; ty=e.clientY; });
 (function loop(){ x+=(tx-x)*.25; y+=(ty-y)*.25; c.style.transform=`translate(${x-9}px,${y-9}px)`; requestAnimationFrame(loop); })();
 document.addEventListener("mouseover", e => c.classList.toggle("big", !!e.target.closest(".project")));
}

document.getElementById("yr").textContent = new Date().getFullYear();
