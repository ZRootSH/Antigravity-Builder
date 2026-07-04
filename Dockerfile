FROM node:22-alpine AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN ls -la
RUN pnpm exec astro build


# Etapa 2: Servidor web ligero Nginx
FROM nginx:alpine AS production
# Copiar archivos estáticos compilados desde la etapa de build
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# Copiar archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exponer el puerto 80
EXPOSE 3020
# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
