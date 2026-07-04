# Antigravity IDE — Official Linux DNF Repository & Web Portal

<div align="center">

![Antigravity IDE](https://img.shields.io/badge/Antigravity%20IDE-v2.1.1-00F2FE?style=for-the-badge&logo=linux&logoColor=black)
![Fedora](https://img.shields.io/badge/Fedora-40%2B-51A2DA?style=for-the-badge&logo=fedora&logoColor=white)
![RHEL / AlmaLinux](https://img.shields.io/badge/RHEL%20%2F%20Alma-8%2F9-EE0000?style=for-the-badge&logo=redhat&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-4FACFE?style=for-the-badge)

**Community-driven automated CI/CD pipeline generating native RPM packages and hosting the official DNF repository for Antigravity IDE on Linux.**

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-local-testing--development">Local Testing</a> •
  <a href="#-deployment-on-dokploy">Dokploy Deployment</a> •
  <a href="#-infrastructure--sponsorship">Sponsorship</a>
</p>

</div>

---

## 📖 About the Project

This repository houses the full-stack infrastructure and automated packaging engine for distributing **Antigravity IDE** on Red Hat-based Linux distributions (Fedora, Red Hat Enterprise Linux, AlmaLinux, and Rocky Linux). 

Instead of relying on manual `.tar.gz` extractions, this project provides a clean, automated containerized pipeline that packages the official binaries into native `.rpm` packages, generates the XML repository metadata via `createrepo_c`, and serves them through a high-performance Astro & React web portal.

---

## ✨ Key Features

- **🤖 Automated RPM Builder (`repo-builder`)**: Built on a `fedora:40` container using `fpm` and `createrepo_c` to automatically fetch official release tarballs, create system wrappers (`--no-sandbox`), inject desktop icons, and build standard RPM packages.
- **⚡ High-Performance Web Portal (`web-frontend`)**: Built with **Astro 5**, **React 19**, **Tailwind CSS**, and **TypeScript** in strict mode. Features dynamic terminal copy blocks, interactive changelogs, and a neon dark-mode aesthetic.
- **📦 Native DNF Integration**: Automatically generates and maintains `repomd.xml` and SQLite databases so users can install and update Antigravity IDE directly via `sudo dnf install antigravity-ide`.
- **☁️ Dokploy & Traefik Ready**: Multi-stage Dockerfile and Nginx configuration tailored for zero-config deployments on the **Dokploy PaaS**.

---

## 🧪 Local Testing & Development

We provide a frictionless local development environment. You can test both the RPM packaging pipeline and the web frontend locally on your machine.

### Prerequisites
- **Docker & Docker Compose** (v2.20+)
- **Node.js** (v20+ or LTS)
- **pnpm** (`npm install -g pnpm`)

---

### 1️⃣ Testing the RPM Build Pipeline Locally

The RPM builder runs inside an isolated Fedora container to ensure clean, reproducible builds without polluting your host system.

#### Step 1: Create the external Docker network
Because our `docker-compose.yml` is configured for production Dokploy environments (`external: true`), create the network locally first:
```bash
docker network create dokploy-network
```

#### Step 2: Trigger the build container
Run the repository builder service on-demand:
```bash
docker compose run --rm repo-builder
```

#### Step 3: What happens under the hood?
1. The container mounts `./build-repo.sh` and executes the build script.
2. It fetches the official Antigravity IDE release (`v2.1.1`) from Google Cloud Storage.
3. It structures `/opt/antigravity-ide`, generates `/usr/local/bin/antigravity-ide`, and creates GNOME/KDE `.desktop` shortcuts.
4. `fpm` compiles the package into an immutable `.rpm` artifact.
5. `createrepo_c` generates/updates the repository metadata in `/var/www/repo/`.

#### Step 4: Verify the generated artifacts
Once the command finishes, check your local Docker volume or repository inspection directory:
```bash
# Verify the RPM package was created
docker run --rm -v antigravity-rpm-repo:/repo alpine ls -lh /repo/x86_64/

# Verify XML repodata was generated
docker run --rm -v antigravity-rpm-repo:/repo alpine ls -la /repo/repodata/
```

---

### 2️⃣ Testing the Web Portal Locally (Frontend Only)

If you are developing UI components, styles, or Astro layouts, you can run the frontend development server without Docker:

```bash
# 1. Install dependencies
pnpm install

# 2. Start the Vite/Astro development server
pnpm run dev
```
Open your browser and navigate to `http://localhost:4321` to see the live reloading web portal.

---

### 3️⃣ Testing the Full Production Stack (Nginx + Repo + Web)

To test the compiled static website and the DNF repository served together via Nginx Alpine:

```bash
# Build and start the production web frontend container
docker compose up -d web-frontend

# Test accessing the repository locally
curl -I http://localhost/repo/repodata/repomd.xml
```

---

## 🚀 Deployment on Dokploy

This repository is optimized for deployment on **Dokploy** (open-source PaaS):

1. **Connect Repository**: Create a new **Compose** service in your Dokploy dashboard pointing to this Git repository.
2. **Configure Domain**: Navigate to the **Domains** tab in Dokploy:
   - Add your domain (e.g., `ide.yourdomain.com`).
   - Select the `web-frontend` service.
   - Set **Container Port** to `80`.
   - Enable **HTTPS (Let's Encrypt)**.
3. **Deploy**: Click Deploy. Dokploy's built-in Traefik proxy will automatically route traffic and manage SSL certificates.
4. **Automating Releases**: You can trigger the `repo-builder` service via a Dokploy Cron Job or GitHub Webhook whenever a new IDE release occurs.

---

## 🤝 Contributing & Community

We welcome contributions from developers, designers, and DevOps engineers! 
Please review our foundational community guidelines before getting started:

- [**Contributing Guide**](./CONTRIBUTING.md) — How to submit pull requests and report bugs.
- [**Code of Conduct**](./CODE_OF_CONDUCT.md) — Community standards and harassment-free environment pledge.
- [**Changelog**](./CHANGELOG.md) — Release history and version notes.
- [**MIT License**](./LICENSE) — Open-source software license.

---

## 🏢 Infrastructure & Sponsorship

<div align="center">
  <p>Server hosting, global bandwidth, and continuous deployment automation are proudly provided by our official infrastructure partner:</p>
  <h3>🌟 Hosted and Powered by <a href="https://zroot.sh">ZrootSH - Solutions</a> 🌟</h3>
</div>

---

<div align="center">
  <p font-mono text-xs>
    &copy; 2026 Antigravity Linux Community. Distributed under the MIT License.
  </p>
</div>
