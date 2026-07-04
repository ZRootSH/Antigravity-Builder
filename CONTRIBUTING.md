# Guía de Contribución — Antigravity Linux Community

¡Gracias por tu interés en contribuir al repositorio oficial RPM y portal web de **Antigravity IDE**! Somos una iniciativa impulsada por la comunidad y valoramos enormemente cualquier mejora, reporte de errores o sugerencia.

---

## 🛠️ Entorno de Desarrollo Local

Este proyecto consta de dos componentes principales:
1. **El Portal Web (Frontend)**: Construido con [Astro](https://astro.build/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) y TypeScript.
2. **El Pipeline de Empaquetado (Backend/DevOps)**: Orquestado con Docker, Bash (`build-repo.sh`), FPM y `createrepo_c`.

### Prerrequisitos
- [Node.js](https://nodejs.org/) (v20 o superior)
- [pnpm](https://pnpm.io/) (Gestor de paquetes recomendado: `npm install -g pnpm`)
- [Docker](https://www.docker.com/) y Docker Compose (para probar el empaquetado RPM)

---

## 🚀 Cómo Empezar con el Portal Web

1. **Bifurca (Fork) y Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/antigravity-rpm-repo.git
   cd antigravity-rpm-repo
   ```

2. **Instala las dependencias con `pnpm`**:
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   pnpm run dev
   ```
   El sitio estará disponible localmente en `http://localhost:4321`.

---

## 📦 Cómo Probar el Pipeline de Empaquetado RPM (`build-repo.sh`)

Si deseas mejorar el script de empaquetado `build-repo.sh` o el `Dockerfile.repo`:

1. Asegúrate de tener Docker corriendo en tu sistema.
2. Ejecuta el constructor del repositorio en un entorno aislado:
   ```bash
   docker compose run --rm repo-builder
   ```
3. Verifica que el paquete `.rpm` y los metadatos `repomd.xml` se hayan generado correctamente dentro de la carpeta local `./repo/`.

---

## 📬 Proceso para Enviar Pull Requests (PR)

1. Crea una rama para tu función o corrección:
   ```bash
   git checkout -b feature/mejora-estilos-footer
   ```
2. Realiza tus cambios asegurándote de mantener el tipado estricto en TypeScript y las convenciones de código.
3. Verifica que el proyecto compile sin errores:
   ```bash
   pnpm run build
   ```
4. Haz commit de tus cambios con mensajes descriptivos (sugerimos usar [Conventional Commits](https://www.conventionalcommits.org/)):
   ```bash
   git commit -m "feat(footer): mejorar accesibilidad y contraste de enlaces"
   ```
5. Sube tus cambios a tu fork y abre un **Pull Request** hacia la rama `main` del repositorio principal.

¡Gracias por hacer de Linux y el software Open Source un ecosistema mejor para todos! 🚀
