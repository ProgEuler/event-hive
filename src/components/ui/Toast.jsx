import { useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ message, type = "success", onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div className={`flex items-center justify-between px-6 py-4 text-white shadow-md mb-2 w-full max-w-sm ${typeStyles[type]} gap-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors`}>
      <span>{message}</span>
      <button onClick={onClose}>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
