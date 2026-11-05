// Manual de Campo Cobúe · service worker (versión a18e27b3c7). Se genera solo con build_pwa.py.
const CACHE='campo-a18e27b3c7';
const FILES=["./", "campo.json", "d-000.jpg", "d-001.jpg", "d-002.jpg", "d-003.jpg", "d-004.jpg", "d-005.jpg", "d-006.jpg", "d-007.jpg", "d-008.jpg", "d-009.jpg", "d-010.jpg", "d-011.jpg", "d-012.jpg", "d-013.jpg", "d-014.jpg", "d-015.jpg", "d-016.jpg", "d-017.jpg", "d-018.jpg", "d-019.jpg", "d-020.jpg", "d-021.jpg", "d-022.jpg", "d-023.jpg", "d-024.jpg", "d-025.jpg", "d-026.jpg", "d-027.jpg", "d-028.jpg", "d-029.jpg", "d-030.jpg", "d-031.jpg", "d-032.jpg", "d-033.jpg", "d-034.jpg", "d-035.jpg", "d-036.jpg", "d-037.jpg", "d-038.jpg", "d-039.jpg", "d-040.jpg", "d-041.jpg", "d-042.jpg", "d-043.jpg", "d-044.jpg", "d-045.jpg", "d-046.jpg", "d-047.jpg", "d-048.jpg", "d-049.jpg", "d-050.jpg", "d-051.jpg", "d-052.jpg", "d-053.jpg", "d-054.jpg", "d-055.jpg", "d-056.jpg", "d-057.jpg", "d-058.jpg", "d-059.jpg", "d-060.jpg", "d-061.jpg", "d-062.jpg", "d-063.jpg", "d-064.jpg", "d-065.jpg", "d-066.jpg", "d-067.jpg", "d-068.jpg", "d-069.jpg", "d-070.jpg", "d-071.jpg", "d-072.jpg", "d-073.jpg", "d-074.jpg", "d-075.jpg", "d-076.jpg", "d-077.jpg", "d-078.jpg", "d-079.jpg", "d-080.jpg", "d-081.jpg", "d-082.jpg", "d-083.jpg", "d-084.jpg", "d-085.jpg", "d-086.jpg", "d-087.jpg", "d-088.jpg", "d-089.jpg", "d-090.jpg", "icons/apple-touch-icon.png", "icons/favicon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "logo.png", "manifest.webmanifest", "t-00.jpg", "t-01.jpg", "t-02.jpg", "t-03.jpg", "t-04.jpg", "t-05.jpg", "t-06.jpg", "t-07.jpg", "t-08.jpg", "t-09.jpg", "t-10.jpg", "t-11.jpg", "t-12.jpg"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin) return;                       // hoja de merma y demás servicios externos: siempre a la red
  if(u.pathname.endsWith('/merma-config.json')){               // configuración: primero la red, para recoger cambios al momento
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(res=>{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put('merma-config.json',cp)); return res; }).catch(()=>caches.match('merma-config.json')));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok&&new URL(e.request.url).origin===location.origin){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); }
    return res; }).catch(()=>caches.match('./'))));
});
