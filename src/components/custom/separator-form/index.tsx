interface SeparatorFormProps {
  title: string;
}

export function SeparatorForm({ title }: SeparatorFormProps) {
  return (
    <div className="bg-slate-100 p-2">
      <h2 className=" font-medium mb-0">{title}</h2>
    </div>
  );
}
