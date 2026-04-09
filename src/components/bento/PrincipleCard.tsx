interface PrincipleCardProps {
  principle: {
    number: string;
    title: string;
    description: string;
  };
}

export default function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <div className="h-full p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300">
      <span className="text-3xl font-display font-bold text-border-default leading-none block mb-3">
        {principle.number}
      </span>
      <h3 className="text-xs font-bold tracking-wider text-text-primary uppercase mb-2">
        {principle.title}
      </h3>
      <p className="text-xs font-serif-accent italic text-text-secondary leading-relaxed">
        &ldquo;{principle.description}&rdquo;
      </p>
    </div>
  );
}
