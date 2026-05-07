import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import StatBlock from './components/StatBlock';

const features = [
  {
    title: 'Diseño urbano premium',
    description: 'Una gorra minimalista con acabado mate, costuras invisibles y una silueta que se mantiene impecable todo el día.',
    accent: 'Estilo icónico',
  },
  {
    title: 'Tecnología de confort',
    description: 'Tejido ligero, transpirable y ajustable que ofrece un fit perfecto sin perder forma.',
    accent: 'Ajuste superior',
  },
  {
    title: 'Edición limitada',
    description: 'Colección exclusiva + envíos rápidos para quienes quieren un look premium sin esperar.',
    accent: 'Stock reducido',
  },
];

const testimonials = [
  {
    quote: 'La gorra llegó en menos de 48h y el acabado es increíble. Se siente premium en cada detalle.',
    name: 'Sofía Reyes',
    role: 'Cliente habitual',
  },
  {
    quote: 'Perfecta para salir, trabajar y mantener un estilo elegante sin esfuerzo. La mejor pieza de mi armario.',
    name: 'Luis Álvarez',
    role: 'Emprendedor digital',
  },
];

const stats = [
  { value: '500+', label: 'Unidades vendidas' },
  { value: '4.9/5', label: 'Calificación promedio' },
  { value: '24h', label: 'Despacho express' },
];

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const heroMotion = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    }),
    [],
  );

  return (
    <div className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-glow" style={{ left: cursorPos.x, top: cursorPos.y, opacity: loaded ? 1 : 0 }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-halo opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_20%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <header className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200 font-semibold shadow-soft">A</div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">AURA Caps</p>
              <p className="text-sm text-slate-400">Gorras premium de edición limitada</p>
            </div>
          </div>
          <a
            href="#shop"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/15"
          >
            Comprar ahora
          </a>
        </header>

        <main className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={heroMotion}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-soft">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Edición limitada: la gorra que define tu presencia.
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-[4rem] lg:text-[4.8rem]">
                La gorra premium que tu armario estaba pidiendo.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                AURA Cap combina materiales técnicos, fit perfecto y una estética minimalista para que marques presencia hoy, mañana y siempre.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#shop"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Comprar ahora
              </a>
              <a
                href="#features"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Ver detalles
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatBlock key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border border-white/10 p-6 shadow-soft">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent" />
              <div className="flex items-center justify-between text-sm text-cyan-100">
                <span className="rounded-full bg-white/5 px-3 py-1">Gorra urbana</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Edición limitada</span>
              </div>

              <div className="mt-10 space-y-6">
                <div className="rounded-[2rem] bg-[#070a17] p-6 shadow-glow">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Colección</p>
                      <p className="mt-3 text-2xl font-semibold text-white">AURA Noir</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-300">
                      #{' '}
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-[#071122] p-5">
                    <p className="text-sm text-slate-400">Material</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Ultra tejido</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-[#071122] p-5">
                    <p className="text-sm text-slate-400">Ajuste</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Un tamaño</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-[#070a17] p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Envío</p>
                  <p className="mt-3 text-lg leading-7">
                    Envío express disponible. Compra hoy y recibe tu gorra premium en 24-48h con empaque exclusivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-12 top-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          </motion.div>
        </main>

        <section id="features" className="mt-24 grid gap-10 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} accent={feature.accent} />
          ))}
        </section>

        <section id="shop" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Compra ahora</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                AURA Cap: gorra premium con presencia inmediata.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Producto diseñado para destacar. Un solo modelo, una experiencia de compra sencilla y un resultado de estilo que no pasa desapercibido.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#06101d] p-8 shadow-soft">
              <div className="flex items-center justify-between text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Precio</p>
                  <p className="mt-3 text-4xl font-semibold text-white">$79</p>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Envío express</span>
              </div>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex items-start gap-3 text-base">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Envío en 24-48h.
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Pago seguro y seguimiento inmediato.
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Empaque premium y regalo listo para usar.
                </li>
              </ul>
              <a
                href="mailto:ventas@auracaps.com?subject=Quiero%20comprar%20AURA%20Cap"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-ink transition hover:bg-cyan-300"
              >
                Comprar AURA Cap
              </a>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Opiniones</p>
            <div className="mt-8 space-y-5">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#060916] p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Por qué solo una gorra</p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-[1.75rem] bg-[#071028] p-6 text-slate-300 shadow-sm">
                <p className="text-3xl font-semibold text-white">Diseño único</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Un solo producto, máxima atención</p>
              </div>
              <div className="rounded-[1.75rem] bg-[#071028] p-6 text-slate-300 shadow-sm">
                <p className="text-3xl font-semibold text-white">Stock limitado</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Diseño exclusivo, demanda alta</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="mt-24 rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-br from-[#05101f] via-[#050714] to-[#080d1f] px-8 py-12 shadow-glow sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Compra con urgencia</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                AURA Cap se agota rápido. Consigue la tuya antes de que cierre la colección.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Producto limitado, envío express y diseño premium para quien necesita estilo inmediato.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.75rem] bg-[#071228] p-6 text-slate-300 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Entrega garantizada</p>
                <p className="mt-3 text-xl font-semibold text-white">24-48h</p>
              </div>
              <div className="rounded-[1.75rem] bg-[#071228] p-6 text-slate-300 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Soporte directo</p>
                <p className="mt-3 text-xl font-semibold text-white">Chat y correo</p>
              </div>
              <a
                href="mailto:ventas@auracaps.com?subject=Comprar%20AURA%20Cap"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-ink transition hover:bg-cyan-300"
              >
                Quiero la mía
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
