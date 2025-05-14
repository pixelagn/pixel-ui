const handleColor = (color: string) => {
    switch (color) {
        case "primary":
            return "bg-blue-500 hover:bg-blue-700 text-white";
        case "secondary":
            return "bg-violet-500 hover:bg-violet-700 text-white";
        case "success":
            return "bg-emerald-500 hover:bg-emerald-700 text-white";
        case "danger":
            return "bg-red-500 hover:bg-red-700 text-white";
        case "warning":
            return "bg-yellow-500 hover:bg-yellow-700 text-white";
        case "info":
            return "bg-indigo-500 hover:bg-indigo-700 text-white";
        case "light":
            return "bg-neutral-100 hover:bg-neutral-300 text-neutral-800";
        case "dark":
            return "bg-slate-800 hover:bg-slate-600 text-white";
        default:
            return "bg-blue-500 hover:bg-blue-700 text-white";
    }
}

export default handleColor;