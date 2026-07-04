import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Server,
  Download,
  ShieldAlert,
  Cpu,
  ArrowRight,
} from "lucide-react";

export const InstallGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"auto" | "manual">("auto");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const repoConfig = `[antigravity]
name=Antigravity IDE Official Repository
baseurl=https://ide.tudominio.com/repo/x86_64/
enabled=1
gpgcheck=0
metadata_expire=300`;

  const dnfInstallCmd = `sudo dnf check-update
sudo dnf install antigravity-ide -y`;

  const manualInstallCmd = `wget https://ide.tudominio.com/repo/x86_64/antigravity-ide-2.0.0-1.x86_64.rpm
sudo dnf localinstall ./antigravity-ide-2.0.0-1.x86_64.rpm -y`;

  return (
    <section id="installation" className="py-24 bg-surface/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neon-cyan mb-3">
            Guía de Despliegue Rápido
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Instalación en Red Hat, Fedora & AlmaLinux
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Elige entre sincronización continua con nuestro repositorio oficial{" "}
            <code className="text-primary-300 font-mono">dnf</code> o
            instalación manual por paquete local.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab("auto")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                activeTab === "auto"
                  ? "bg-gradient-to-r from-primary-600 to-neon-cyan text-slate-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Método Automático (Repositorio DNF)</span>
            </button>
            <button
              onClick={() => setActiveTab("manual")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                activeTab === "manual"
                  ? "bg-gradient-to-r from-primary-600 to-neon-cyan text-slate-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Método Manual (Descarga Directa)</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="glass-card p-6 sm:p-8 md:p-10 border-slate-700/60 relative overflow-hidden">
          {activeTab === "auto" ? (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 border border-primary-500/20 text-neon-cyan font-bold">
                  1
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    Añadir el archivo de repositorio a{" "}
                    <code className="text-primary-300 font-mono text-sm bg-slate-900 px-2 py-0.5 rounded">
                      /etc/yum.repos.d/antigravity.repo
                    </code>
                  </h4>
                  <p className="text-sm text-slate-400">
                    Este comando crea la configuración para que el gestor de
                    paquetes DNF/Yum apunte al contenedor automatizado de
                    Traefik/Dokploy.
                  </p>

                  {/* Code Block 1 */}
                  <div className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800/80 text-xs text-slate-400">
                      <span>/etc/yum.repos.d/antigravity.repo</span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `sudo tee /etc/yum.repos.d/antigravity.repo << 'EOF'\n${repoConfig}\nEOF`,
                            1,
                          )
                        }
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      >
                        {copiedIndex === 1 ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {copiedIndex === 1 ? "¡Copiado!" : "Copiar"}
                        </span>
                      </button>
                    </div>
                    <pre className="p-4 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{`sudo tee /etc/yum.repos.d/antigravity.repo << 'EOF'\n${repoConfig}\nEOF`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 border border-primary-500/20 text-neon-cyan font-bold">
                  2
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    Actualizar caché e instalar el IDE
                  </h4>
                  <p className="text-sm text-slate-400">
                    Una vez registrado el repositorio, ejecuta la instalación
                    estándar. DNF mantendrá tu IDE actualizado con cada release
                    automático del pipeline.
                  </p>

                  {/* Code Block 2 */}
                  <div className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800/80 text-xs text-slate-400">
                      <span>Terminal Bash</span>
                      <button
                        onClick={() => copyToClipboard(dnfInstallCmd, 2)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      >
                        {copiedIndex === 2 ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {copiedIndex === 2 ? "¡Copiado!" : "Copiar"}
                        </span>
                      </button>
                    </div>
                    <pre className="p-4 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{dnfInstallCmd}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-neon-purple font-bold">
                  1
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    Descargar el paquete RPM e instalar localmente
                  </h4>
                  <p className="text-sm text-slate-400">
                    Si prefieres no agregar repositorios en tu sistema, descarga
                    directamente el paquete precompilado y resuélvelo usando{" "}
                    <code className="text-purple-300 font-mono text-sm bg-slate-900 px-2 py-0.5 rounded">
                      dnf localinstall
                    </code>
                    .
                  </p>

                  {/* Code Block Manual */}
                  <div className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800/80 text-xs text-slate-400">
                      <span>Terminal Bash (Localinstall)</span>
                      <button
                        onClick={() => copyToClipboard(manualInstallCmd, 3)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      >
                        {copiedIndex === 3 ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {copiedIndex === 3 ? "¡Copiado!" : "Copiar"}
                        </span>
                      </button>
                    </div>
                    <pre className="p-4 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{manualInstallCmd}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-purple-500/20 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">
                    Nota de actualización:
                  </span>{" "}
                  Al usar el método manual, deberás descargar manualmente las
                  futuras versiones que el servicio{" "}
                  <code className="text-purple-300 font-mono">
                    repo-builder
                  </code>{" "}
                  empaque en el volumen. Para actualizaciones automáticas sin
                  intervención, recomendamos usar el Método Automático.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
