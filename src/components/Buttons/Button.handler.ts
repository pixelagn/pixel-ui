import { colors, colorType } from "../../tokens/colors";

export const handleColor = (color: colorType) => {
    if (color === 'dark')
        return `bg-${colors.dark}-800 hover:bg-${colors.dark}-600 text-white disabled:bg-${colors.dark}-600`;
    else if (color === "light")
        return `bg-${colors.light}-100 hover:bg-${colors.light}-300 text-${colors.light}-800 disabled:bg-${colors.light}-300`;
    else 
        return `bg-${colors[color]}-500 hover:bg-${colors[color]}-700 text-white disabled:bg-${colors[color]}-300`;
}