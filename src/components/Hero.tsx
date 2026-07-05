import React from "react";
import {
  Terminal,
  Download,
  ArrowRight,
  ShieldCheck,
  Cpu,
  ServerCog,
  Layers,
  CheckCircle2,
} from "lucide-react";

const arch = import.meta.env.PUBLIC_ARCH || "x86_64";
const version = import.meta.env.PUBLIC_VERSION || "2.1.1";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-primary-500/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary-300">
                Antigravity IDE v{version} Oficial
              </span>
              <span className="text-xs text-slate-400 border-l border-slate-700 pl-2">
                Linux RHEL / Fedora ({arch})
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Desarrollo Agentico <br />
              <span className="text-gradient-cyan">Nativo para Linux</span>
            </h1>

            {/* Technical Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              El entorno de desarrollo de próxima generación impulsado por{" "}
              <span className="text-white font-semibold">Google DeepMind</span>.
              Optimizado con arquitectura multi-hilo, sin sandboxing
              restrictivo, y distribuido en paquetes{" "}
              <code className="text-neon-cyan bg-slate-900/80 px-2 py-0.5 rounded font-mono text-sm">
                .rpm
              </code>{" "}
              para máxima integración en Red Hat y Fedora.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-slate-300 bg-surface/40 p-3 rounded-xl border border-white/5">
                <Cpu className="w-5 h-5 text-neon-cyan shrink-0" />
                <span className="text-sm font-medium">Rendimiento Nativo</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 bg-surface/40 p-3 rounded-xl border border-white/5">
                <ShieldCheck className="w-5 h-5 text-neon-purple shrink-0" />
                <span className="text-sm font-medium">
                  Sin --no-sandbox bugs
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 bg-surface/40 p-3 rounded-xl border border-white/5">
                <ServerCog className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium">ZrootSH</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`/repo/${arch}/antigravity-ide-${version}-1.${arch}.rpm`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-neon-cyan to-primary-400 hover:from-primary-300 hover:to-neon-cyan shadow-neon-cyan transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Descargar .RPM {arch}</span>
              </a>

              <a
                href="#instalacion"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-surface hover:bg-slate-800 border border-slate-700/80 transition-all duration-200"
              >
                <span>Configurar Repositorio DNF</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Terminal / IDE Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background blur for card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur-xl opacity-30 animate-pulse-slow" />

              {/* Terminal Window */}
              <div className="relative glass-card border border-slate-700/60 overflow-hidden bg-slate-950/90">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>bash - dnf install (Nota: Aun no disponible)</span>
                  </div>
                  <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-3 text-slate-300 overflow-x-auto">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">[zrootsh@fedora ~]#</span>
                    <span className="text-white">
                      sudo dnf install antigravity-ide
                    </span>
                  </div>

                  <div className="text-slate-400 space-y-1 pl-2 border-l-2 border-slate-800">
                    <p>Dependencias resueltas.</p>
                    <p className="text-slate-300">
                      ================================================
                      <br />
                      Paquete | Arquitectura | Versión | Repositorio
                      <br />
                      ================================================
                      <br />
                      Instalando:
                      <br />
                      <span className="text-neon-cyan font-semibold">
                        antigravity-ide
                      </span>{" "}
                      {arch}{" "}
                      {version}-1
                      antigravity-repo
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-emerald-400 font-semibold bg-emerald-950/20 p-2.5 rounded border border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>
                        ¡Listo! Antigravity IDE instalado correctamente.
                      </span>
                    </div>
                  </div>
                  {/* Simulated Agent Output 
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-slate-400 text-xs">
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <Layers
                        className="w-3.5 h-3.5 animate-spin"
                        style={{ animationDuration: "8s" }}
                      />
                      <span className="font-semibold">
                        Antigravity Agentic Sidecar:
                      </span>
                    </div>
                    <p className="text-slate-300 pl-5 italic">
                      "Entorno Linux detectado (Wayland/X11). Conectado a Gemini
                      3.1 Pro. Listo para programar en pareja."
                    </p>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
