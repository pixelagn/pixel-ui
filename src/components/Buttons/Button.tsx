import { ButtonProps } from "./ButtonProps"

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button