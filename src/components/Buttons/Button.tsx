import handleColor from "../../handlers/HandleColor"
import { ButtonProps } from "./Button.type"

const Button = ({ 
    text, 
    onClick,
    className,
    color = "primary",
    size = "regular",
    disabled = false
}: ButtonProps) => {

    return (
        <button 
            className={`
                px-4 py-2 rounded-md cursor-pointer transition-all duration-200
                disabled:cursor-not-allowed
                ${handleColor(color)} ${handleSize(size)} ${className}
            `} 
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

const handleSize = (size: string) => {
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

export default Button