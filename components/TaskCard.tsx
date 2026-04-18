type TaskCardProps = {
  title: string;
  done: boolean;
  onToggle: () => void;
};

export default function TaskCard({ title, done, onToggle }: TaskCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm flex items-center justify-between">
      <div>
        <h3 className={`font-medium ${done ? "line-through text-slate-400" : "text-slate-900"}`}>
          {title}
        </h3>
        <p className="text-sm text-slate-500">{done ? "Completed" : "Pending"}</p>
      </div>

      <button onClick={onToggle} className="px-4 py-2 rounded-lg bg-slate-900 text-white">
        {done ? "Undo" : "Done"}
      </button>
    </div>
  );
}
