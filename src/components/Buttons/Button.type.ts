import { colorType } from "../../tokens/colors";
import { sizeType } from "../../tokens/size";

export interface ButtonProps {
    children?: React.ReactNode | string;
    onClick?: () => void;
    className?: string;
    color?: colorType;
    size?: sizeType;
    disabled?: boolean;
    href?: string;
    target?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};