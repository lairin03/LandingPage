interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#071122] p-7 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300/25">
      <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
        <p className="font-semibold text-white">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}
