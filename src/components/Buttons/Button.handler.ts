import { colors, colorType } from "../../tokens/colors";

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

export const handleColor = (color: colorType) => {
    if (color === colors.dark)
        return `bg-${colors.dark}-800 hover:bg-${colors.dark}-600 text-white disabled:bg-${colors.dark}-600`;
    else if (color === colors.light)
        return `bg-${colors.light}-100 hover:bg-${colors.light}-300 text-${colors.light}-800 disabled:bg-${colors.light}-300`;
    else 
        return `bg-${colors[color]}-500 hover:bg-${colors.primary}-700 text-white disabled:bg-${colors.primary}-300`;
}