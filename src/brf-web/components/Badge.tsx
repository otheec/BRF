interface BadgeProps {
  label: string;
  variant?: "style" | "type" | "tag";
}

const variantClasses: Record<string, string> = {
  style: "bg-orange-100 text-orange-700 border border-orange-200",
  type: "bg-sky-100 text-sky-700 border border-sky-200",
  tag: "bg-amber-100 text-amber-700 border border-amber-200",
};

export default function Badge({ label, variant = "style" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
