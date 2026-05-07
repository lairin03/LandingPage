interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#071022] p-5 shadow-sm">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">{label}</p>
    </div>
  );
}
