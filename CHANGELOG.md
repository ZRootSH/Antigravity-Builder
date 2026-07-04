# Changelog

All notable changes to the **Antigravity IDE RPM Repository & Web Portal** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-04

### Added
- **Automated RPM Packaging Pipeline**: Docker-based builder (`Dockerfile.repo` & `build-repo.sh`) using Fedora 40 base image, `fpm`, and `createrepo_c` to automatically generate native RPM packages for Red Hat Enterprise Linux, Fedora, and AlmaLinux.
- **Desktop Integration**: Automatic generation of GNOME/KDE `.desktop` shortcuts, SVG icons, and `/usr/local/bin/antigravity-ide` wrapper with `--no-sandbox` support.
- **DNF Repository Management**: Automated `createrepo_c` XML metadata generation (`repomd.xml`, sqlite databases) inside `/var/www/repo/`.
- **Community Web Portal**: Modern landing page built with Astro 5, React 19, TypeScript strict mode, and Tailwind CSS featuring dark mode neon aesthetics.
- **Interactive UI Components**:
  - `Hero`: Dynamic presentation with terminal command copy features.
  - `InstallGuide`: Step-by-step instructions for adding the `.repo` file and running `dnf install`.
  - `Changelog`: Interactive release history tracker.
  - `Footer`: Modern footer with infrastructure sponsorship recognition (`Hosted and Powered by ZrootSH - Solutions`).
- **Dokploy & Traefik Integration**: Production-ready multi-stage Dockerfile and Nginx configuration optimized for seamless deployment via Dokploy PaaS.
