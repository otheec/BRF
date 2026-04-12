interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  children,
  compact = false,
}: PageHeaderProps) {
  if (compact) {
    return (
      <div className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-stone-900">
          {title}
        </h1>
        {subtitle && (
          <p className="text-stone-500 text-lg mt-1">{subtitle}</p>
        )}
        {children}
      </div>
    );
  }

  return (
    <section className="py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-stone-500 text-lg max-w-xl mx-auto mb-10">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  );
}
