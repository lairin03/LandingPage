interface FeatureCardProps {
  title: string;
  description: string;
  accent: string;
}

export default function FeatureCard({ title, description, accent }: FeatureCardProps) {
  return (
    <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/10">
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{accent}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300">{description}</p>
    </div>
  );
}
