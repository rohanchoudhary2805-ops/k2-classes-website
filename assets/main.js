/* K2 Classes page code: builds the page from content.js, plus gallery viewer and animations. */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ini=n=>n.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase();
const wa=m=>`https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(m)}`;
const inr=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);

// Set visible name elements and page title
document.querySelectorAll("[data-name]").forEach(e=>e.textContent=DATA.name);
document.title = DATA.name;
// Update aria-labels and image alts that reference the old name
document.querySelectorAll('[aria-label]').forEach(e=>{const a=e.getAttribute('aria-label');if(a&&a.includes('K2 Classes'))e.setAttribute('aria-label',a.replace(/K2 Classes/g,DATA.name));});
document.querySelectorAll('img[alt]').forEach(i=>{if(i.alt&&i.alt.includes('K2 Classes'))i.alt = i.alt.replace(/K2 Classes/g,DATA.name);});

$("tagline").textContent=DATA.tagline;
$("callBtn").href="tel:"+DATA.phone.replace(/\s/g,"");
$("phone").textContent=DATA.phone;$("address").textContent=DATA.address;$("office").textContent=DATA.office;
$("mapBtn").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(DATA.address);
$("feeBtn").href=wa("Hi, I want to know about the yearly tuition fees at "+DATA.name+".");
$("year").textContent=new Date().getFullYear();
$("statsGrid").innerHTML=DATA.achievements.map(a=>`<div class="stat-card rv"><div class="stat-icon">${a.icon}</div><div class="stat-number" data-target="${a.number}" data-suffix="${a.suffix}">0${a[...`);
$("announceList").innerHTML=DATA.announcements.map(a=>`<article class="announce-card rv"><div class="announce-date">${esc(a.date)}</div><div><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div></article>`).join("");
$("topperList").innerHTML=DATA.toppers.map(t=>`<li><div class="avatar">${t[3]?`<img src="${t[3]}" alt="${esc(t[0])}">`:esc(ini(t[0]))}</div><div><strong>${esc(t[0])}</strong><br><small>${esc(t[1])}</small></div></li>`).join("");
$("teacherList").innerHTML=DATA.teachers.map(t=>`<article class="teacher"><div class="photo">${esc(ini(t[0]))}</div><h3>${esc(t[0])}</h3><p><strong>${esc(t[1])}</strong>${t[2]?"<br>"+esc(t[2]):""}</p></article>`).join("");
$("branches").innerHTML=DATA.branches.map(b=>`<article class="branch"><h3>${esc(b.name)} branch</h3><p class="note">${esc(b.note)}</p><div class="tablebox" tabindex="0" role="region" aria-label="${esc(b.name)} branch timings">${/* table omitted for brevity */""}</div></article>`).join("");
$("feeRows").innerHTML=DATA.fees.map(f=>`<tr><th scope="row">${esc(f[0])}</th>${f.slice(1).map(m=>`<td>${inr(m*12)}</td>`).join("")}</tr>`).join("");
const T=DATA.tshirt;let size=T.sizes[0];
$("teeDesc").textContent=T.description;$("teePrice").textContent="₹"+T.price;
$("sizes").innerHTML=T.sizes.map(s=>`<button type="button" class="chip" data-v="${s}">${s}</button>`).join("");
function draw(){$("orderBtn").href=wa(`Hi, I want to order the ${DATA.name} T-shirt. Size: ${size}, Colour: Black, Price: ₹${T.price}.`);document.querySelectorAll("#sizes .chip").forEach(b=>b.se...}
$("sizes").addEventListener("click",e=>{const b=e.target.closest(".chip");if(b){size=b.dataset.v;draw()}});
draw();
(function(){var d=document.getElementById("lightbox"),g=document.getElementById("gallery");if(!d||!g)return;
g.addEventListener("click",function(e){var b=e.target.closest(".shot");if(!b)return;var i=b.querySelector("img");
document.getElementById("lbImg").src=i.src;document.getElementById("lbImg").alt=i.alt;document.getElementById("lbCap").textContent=b.dataset.cap;d.showModal()});
document.getElementById("lbClose").addEventListener("click",function(){d.close()});
d.addEventListener("click",function(e){if(e.target===d)d.close()});})();
(function(){
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var bar=document.createElement("div");bar.id="bar";document.body.appendChild(bar);
addEventListener("scroll",function(){var h=document.documentElement,m=h.scrollHeight-innerHeight;bar.style.width=(m>0?scrollY/m*100:0)+"%"},{passive:true});
if(reduce)return;
var hero=document.querySelector(".hero"),st=document.createElement("div");st.className="stars";st.setAttribute("aria-hidden","true");
for(var i=0;i<46;i++){var d=document.createElement("i");d.style.cssText="left:"+(Math.random()*100)+"%;top:"+(Math.random()*68)+"%;--t:"+(2+Math.random()*4).toFixed(1)+"s;--dl:"+(Math.random()*4).toFixed(2)+"s;";st.appendChild(d)}
hero.insertBefore(st,hero.firstChild);
if(!("IntersectionObserver" in window))return;
document.documentElement.classList.add("anim");
function countUp(m){var t=m.textContent,n=parseFloat(t);if(isNaN(n))return;var suf=t.replace(/[0-9.]/g,"");t0=null;m.textContent="0"+suf;function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/900,1);m.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
function countStat(el){var n=parseInt(el.dataset.target),suf=el.dataset.suffix,t0=null;el.textContent="0"+suf;function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;el.classList.add("in");io.unobserve(el);var m=el.querySelector(".marks");if(m)countUp(m);var s=el.querySelector(".stat-number");if(s)countStat(s);var i=Array.prototype.indexOf.call(el.parentElement.children,el);el.style.setProperty("--d",Math.min(i,5)*80+"ms");el.classList.add("rv");io.observe(el)});
document.querySelectorAll(".section h2,.section .lead,.leader li,.teacher,.branch,.tablebox.fee,.fee-note,.tee,.shop>div:last-child,.gallery figure,.contact>div,.stat-card,.announce-card").forEach(function(el){var i=Array.prototype.indexOf.call(el.parentElement.children,el);el.style.setProperty("--d",Math.min(i,5)*80+"ms");el.classList.add("rv");io.observe(el)});
})();
