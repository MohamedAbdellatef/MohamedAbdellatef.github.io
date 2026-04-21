import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 py-20", className)}>
      <div className="mb-10 max-w-2xl">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            // {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}