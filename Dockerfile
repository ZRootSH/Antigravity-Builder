# ==============================================================================
# Dockerfile Multi-Stage para el Frontend Web de Antigravity IDE (Astro + Nginx)
# ==============================================================================

# Etapa 1: Construcción del sitio web con Node.js y pnpm
FROM node:20-alpine AS build

# Habilitar corepack e instalar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar archivos de dependencias y resolverlas primero (caché de capas Docker)
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

# Copiar el código fuente y compilar la aplicación Astro estática
COPY . .
RUN pnpm run build

# Etapa 2: Servidor web ligero Nginx
FROM nginx:alpine AS production

# Remover configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copiar archivos estáticos compilados desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
