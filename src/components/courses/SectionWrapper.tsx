type SectionWrapperProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({
  title,
  description,
  action,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={className}>
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm text-muted sm:text-base">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
