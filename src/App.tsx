import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';

const features = [
  {
    title: 'Diseño urbano premium',
    description: 'Una gorra minimalista con acabado mate, costuras invisibles y una silueta que se mantiene impecable todo el día.',
    accent: 'Estilo icónico',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=300&fit=crop&crop=center',
  },
  {
    title: 'Tecnología de confort',
    description: 'Tejido ligero, transpirable y ajustable que ofrece un fit perfecto sin perder forma.',
    accent: 'Ajuste superior',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop&crop=center',
  },
  {
    title: 'Edición limitada',
    description: 'Colección exclusiva + envíos rápidos para quienes quieren un look premium sin esperar.',
    accent: 'Stock reducido',
    image: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?w=400&h=300&fit=crop&crop=center',
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
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=500&fit=crop&crop=center"
              alt="AURA Cap Noir - Gorra premium edición limitada"
              className="w-full h-96 object-cover rounded-[2.5rem] shadow-soft"
            />
            <div className="pointer-events-none absolute -right-12 top-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          </motion.div>
        </main>

        <section id="features" className="mt-24 grid gap-10 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} accent={feature.accent} image={feature.image} />
          ))}
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl lg:p-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Cómo se ve</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Estilo que habla por ti.
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-slate-300">
              Mira cómo AURA Cap transforma tu look urbano en algo premium y memorable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=center" alt="Modelo usando AURA Cap en estilo urbano" className="w-full h-80 object-cover rounded-[2rem]" />
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=400&fit=crop&crop=center" alt="Vista detallada de AURA Cap" className="w-full h-80 object-cover rounded-[2rem]" />
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
      </div>
    </div>
  );
}

export default App;
