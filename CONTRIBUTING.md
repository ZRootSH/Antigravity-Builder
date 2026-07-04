# Contributing Guide — Antigravity Linux Community

Thank you for your interest in contributing to the official RPM repository and web portal for **Antigravity IDE**! We are a community-driven initiative and deeply value any improvements, bug reports, or feature suggestions.

---

## 🛠️ Local Development Environment

This project consists of two main components:
1. **Web Portal (Frontend)**: Built with [Astro](https://astro.build/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and strict TypeScript.
2. **RPM Packaging Pipeline (Backend/DevOps)**: Orchestrated with Docker, Bash (`build-repo.sh`), FPM, and `createrepo_c`.

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/) (Recommended package manager: `npm install -g pnpm`)
- [Docker](https://www.docker.com/) and Docker Compose (to test RPM generation)

---

## 🚀 Getting Started with the Web Portal

1. **Fork and Clone the repository**:
   ```bash
   git clone https://github.com/your-username/antigravity-rpm-repo.git
   cd antigravity-rpm-repo
   ```

2. **Install dependencies using `pnpm`**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```
   The site will be available locally at `http://localhost:4321`.

---

## 📦 Testing the RPM Packaging Pipeline (`build-repo.sh`)

If you want to improve the packaging script `build-repo.sh` or `Dockerfile.repo`:

1. Ensure Docker is running on your machine.
2. Run the repository builder inside an isolated container:
   ```bash
   docker compose run --rm repo-builder
   ```
3. Verify that the `.rpm` package and `repomd.xml` metadata are generated correctly inside the local `./repo/` directory or Docker volume.

---

## 📬 Pull Request (PR) Process

1. Create a branch for your feature or bugfix:
   ```bash
   git checkout -b feature/footer-styling-improvements
   ```
2. Make your changes while maintaining strict TypeScript typing and code style conventions.
3. Verify that the project builds without errors:
   ```bash
   pnpm run build
   ```
4. Commit your changes with descriptive messages (we recommend [Conventional Commits](https://www.conventionalcommits.org/)):
   ```bash
   git commit -m "feat(footer): improve link accessibility and contrast"
   ```
5. Push your changes to your fork and open a **Pull Request** targeting the `main` branch of the upstream repository.

Thank you for making Linux and Open Source a better ecosystem for everyone! 🚀
