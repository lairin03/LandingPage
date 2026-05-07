interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05101f] p-8 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/5">
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/15 text-lg font-semibold text-cyan-200">{step}</span>
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
    </div>
  );
}
