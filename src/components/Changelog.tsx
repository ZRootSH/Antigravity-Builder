import React from 'react';
import { Sparkles, Bug, Zap, GitCommit, Shield, Cpu } from 'lucide-react';

interface ReleaseItem {
  version: string;
  date: string;
  isLatest?: boolean;
  changes: {
    type: 'feature' | 'fix' | 'perf' | 'security';
    text: string;
  }[];
}

const releases: ReleaseItem[] = [
  {
    version: 'v2.0.0',
    date: '3 de Julio, 2026',
    isLatest: true,
    changes: [
      { type: 'feature', text: 'Motor de codificación agentica actualizado con soporte nativo para Gemini 3.1 Pro (High).' },
      { type: 'feature', text: 'Canalización automatizada en Dokploy con Traefik, FPM y createrepo para distribución continua en DNF.' },
      { type: 'perf', text: 'Eliminación del requerimiento --no-sandbox mediante empaquetado optimizado en el wrapper /usr/local/bin.' },
      { type: 'security', text: 'Soporte completo de sandboxing nativo para entornos Red Hat Enterprise Linux 9 y Fedora 40.' },
    ],
  },
  {
    version: 'v1.9.0',
    date: '15 de Mayo, 2026',
    changes: [
      { type: 'feature', text: 'Integración de servidores MCP (Model Context Protocol) persistentes en el directorio de trabajo.' },
      { type: 'feature', text: 'Soporte para sidecars y terminales bash en segundo plano con monitoreo en tiempo real.' },
      { type: 'perf', text: 'Compresión de memoria engram y reducción del consumo de RAM del IDE en un 35%.' },
      { type: 'fix', text: 'Corregido error de parpadeo de cursores en sesiones de pair-programming remotas sobre X11.' },
    ],
  },
  {
    version: 'v1.8.5',
    date: '28 de Abril, 2026',
    changes: [
      { type: 'fix', text: 'Solucionado problema de renderizado en monitores HiDPI bajo el compositor Wayland en Fedora.' },
      { type: 'perf', text: 'Optimizado el analizador sintáctico de TypeScript en el editor de código embebido.' },
      { type: 'security', text: 'Actualizadas las dependencias de electron y node para mitigar CVE-2026-3192.' },
    ],
  },
];

export const Changelog: React.FC = () => {
  const getBadge = (type: string) => {
    switch (type) {
      case 'feature':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-neon-cyan border border-cyan-500/20">
            <Sparkles className="w-3 h-3" /> Nueva Función
          </span>
        );
      case 'fix':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <Bug className="w-3 h-3" /> Corrección
          </span>
        );
      case 'perf':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Zap className="w-3 h-3" /> Rendimiento
          </span>
        );
      case 'security':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Shield className="w-3 h-3" /> Seguridad
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="changelog" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neon-purple mb-3">
            Evolución Continua
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Historial de Versiones (Changelog)
          </h3>
          <p className="mt-4 text-slate-400 text-base">
            Cada versión distribuida en el repositorio es probada y compilada automáticamente para asegurar máxima estabilidad en Linux.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {releases.map((release, index) => (
            <div key={release.version} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline dot */}
              <div
                className={`absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 transition-all duration-300 ${
                  release.isLatest
                    ? 'bg-neon-cyan border-slate-950 shadow-neon-cyan scale-110'
                    : 'bg-slate-700 border-slate-950 group-hover:bg-slate-500'
                }`}
              />

              {/* Date stamp on the left for screens >= sm */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24 text-xs font-mono text-slate-400">
                {release.date}
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 sm:p-7 border-slate-800/80 hover:border-slate-700 transition-all duration-300">
                
                {/* Version Title and Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                      <GitCommit className="w-5 h-5 text-primary-400" />
                      {release.version}
                    </h4>
                    {release.isLatest && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase bg-gradient-to-r from-neon-cyan to-primary-500 text-slate-950 tracking-wider">
                        Actual / Latest
                      </span>
                    )}
                  </div>
                  <span className="sm:hidden text-xs font-mono text-slate-400">
                    {release.date}
                  </span>
                </div>

                {/* Change List */}
                <ul className="space-y-3">
                  {release.changes.map((change, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <div className="shrink-0 mt-0.5">
                        {getBadge(change.type)}
                      </div>
                      <span className="flex-1 pt-0.5">{change.text}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
