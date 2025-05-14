import { handleSize, handleColor } from "./Button.handler"
import { ButtonProps } from "./Button.type"

const Button = ({ 
    children, 
    onClick,
    className,
    color = "primary",
    size = "regular",
    disabled = false
}: ButtonProps) => {

    return (
        <button 
            className={`
                px-4 py-2 m-2 rounded-md cursor-pointer transition-all duration-200
                disabled:cursor-not-allowed
                flex items-center justify-center gap-1
                ${handleColor(color)} ${handleSize(size)} ${className}
            `} 
            onClick={onClick}
            disabled={disabled}
        >
            { children }
        </button>
    )
}

export default Button