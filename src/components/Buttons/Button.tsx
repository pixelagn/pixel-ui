import { sizes } from "../../tokens/size";
import { handleColor } from "./Button.handler"
import { ButtonProps } from "./Button.type"

const Button = ({ 
    children, 
    onClick,
    className,
    color = "primary",
    size = "regular",
    disabled = false,
    href,
    target,
    startIcon,
    endIcon
}: ButtonProps) => {

    const classes: string = `
        px-4 py-2 m-2 rounded-md cursor-pointer transition-all duration-200
        disabled:cursor-not-allowed w-max
        flex items-center justify-center gap-2
        ${handleColor(color)} ${sizes[size]} ${className}
    `;

    if (href) {
        return (
            <a 
                className={classes} 
                href={href}
                target={target}
                onClick={onClick}
            >
                { startIcon }
                { children }
                { endIcon }
            </a>
        );
    }

    return (
        <button 
            className={classes} 
            onClick={onClick}
            disabled={disabled}
        >
            { startIcon }
            { children }
            { endIcon }
        </button>
    );
}

export default Button