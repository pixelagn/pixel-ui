import { sizes } from "../../tokens/size";
import { buttonColors } from "./Button.handler"
import ButtonProps from "./Button.type"

const Button = ({ 
    children, 
    onClick,
    className = "",
    color = "primary",
    size = "regular",
    disabled = false,
    href,
    target,
    type = "button",
}: ButtonProps) => {
    const classes = `
        px-4 py-2 rounded-md cursor-pointer transition-all duration-200
        disabled:cursor-not-allowed w-max
        flex items-center justify-center gap-2 
        ${buttonColors[color]} ${sizes[size]} ${className}
    `
    if (href) {
        return (
            <a
                className={`${classes} `}
                href={href}
                target={target}
                onClick={onClick}
            >
                { children }
            </a>
        );
    }

    return (
        <button
            className={`${classes} `}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            { children }
        </button>
    );
}

export default Button