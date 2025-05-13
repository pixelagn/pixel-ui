import handleColor from "../../handlers/HandleColor"
import { ButtonProps } from "./Button.type"

const Button = ({ 
    text, 
    onClick,
    className,
    color = "primary"
}: ButtonProps) => {

    return (
        <button 
            className={
                `px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${handleColor(color)} ${className}`
            } 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button