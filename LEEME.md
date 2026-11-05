# Manual de Campo Cobúe · app instalable

Esta carpeta es la app completa. Publicada en GitHub Pages, se abre desde cualquier móvil, tablet o PDA, se instala en la pantalla de inicio y funciona sin conexión.

## Publicarla en GitHub Pages (una sola vez)
1. En github.com, pulsa **New repository**. Nombre: `manual-campo` (o el que prefieras). Visibilidad: **Public** (GitHub Pages gratis solo funciona con repositorios públicos; con GitHub Pro o Team puede ser privado).
2. En el repositorio vacío, pulsa **uploading an existing file**.
3. GitHub admite **100 archivos por subida**. Hazlo en dos tandas:
   - Tanda 1: arrastra todos los archivos `d-000.jpg` a `d-090.jpg` y pulsa **Commit changes**.
   - Tanda 2: **Add file → Upload files** y arrastra todo lo demás (`index.html`, `sw.js`, `manifest.webmanifest`, `campo.json`, `logo.png`, `t-*.jpg`, `.nojekyll`, `LEEME.md` y la carpeta `icons`). **Commit changes**.
   - `.nojekyll` es un archivo oculto: si no lo ves, activa "mostrar archivos ocultos" en tu ordenador. No es imprescindible.
4. Ve a **Settings → Pages**. En *Build and deployment*: Source **Deploy from a branch**, Branch **main**, carpeta **/ (root)**. **Save**.
5. En uno o dos minutos aparece la dirección: `https://TU-USUARIO.github.io/manual-campo/`.

## Instalarla en los dispositivos
- **Android / PDA (Chrome):** abrir la dirección → botón **Instalar** de la barra superior, o menú ⋮ → **Instalar aplicación**.
- **iPhone / iPad (Safari):** abrir la dirección → botón **Compartir** → **Añadir a pantalla de inicio**.
- La primera vez descarga unos 19 MB (mejor con wifi). Después funciona sin conexión.

## Actualizarla
Sube los archivos nuevos al mismo repositorio, sustituyendo los anteriores. Las apps instaladas se actualizan solas la siguiente vez que se abren con conexión (el archivo `sw.js` cambia de versión con cada paquete nuevo).

## Actualización del 03/11/2026 (fichas técnicas 03/11 · 364 referencias)
Si ya la tenías publicada, sube y sustituye **todos** los archivos (en las mismas dos tandas). Las apps instaladas descargan la versión nueva solas al abrirlas con conexión.
