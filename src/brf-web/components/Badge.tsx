interface BadgeProps {
  label: string;
  variant?: "style" | "type" | "tag";
}

const variantClasses: Record<string, string> = {
  style: "bg-[#ffbe5b]/15 text-[#ffbe5b] border border-[#ffbe5b]/25",
  type: "bg-[#94d0ff]/10 text-[#94d0ff] border border-[#94d0ff]/20",
  tag: "bg-[#e9c087]/10 text-[#e9c087] border border-[#e9c087]/20",
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
