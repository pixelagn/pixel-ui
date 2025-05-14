export const handleSize = (size: string) => {
    switch (size) {
        case "small":
            return "text-xs";
        case "regular":
            return "text-sm";
        case "medium":
            return "text-base";
        case "large":
            return "text-xl font-medium";
        default:
            return "text-base";
    }
}

export const handleColor = (color: string) => {
    switch (color) {
        case "primary":
            return "bg-blue-500 hover:bg-blue-700 text-white disabled:bg-blue-300";
        case "secondary":
            return "bg-violet-500 hover:bg-violet-700 text-white disabled:bg-violet-300";
        case "success":
            return "bg-emerald-500 hover:bg-emerald-700 text-white disabled:bg-emerald-300";
        case "danger":
            return "bg-red-500 hover:bg-red-700 text-white disabled:bg-red-300";
        case "warning":
            return "bg-yellow-500 hover:bg-yellow-700 text-white disabled:bg-yellow-300";
        case "info":
            return "bg-indigo-500 hover:bg-indigo-700 text-white disabled:bg-indigo-300";
        case "light":
            return "bg-neutral-100 hover:bg-neutral-300 text-neutral-800 disabled:bg-neutral-300";
        case "dark":
            return "bg-slate-800 hover:bg-slate-600 text-white disabled:bg-slate-600";
        default:
            return "bg-blue-500 hover:bg-blue-700 text-white disabled:bg-blue-300";
    }
}