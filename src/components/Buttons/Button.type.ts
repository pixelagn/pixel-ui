import { colorType } from "../../tokens/colors";

export interface ButtonProps {
    children?: React.ReactNode | string;
    onClick?: () => void;
    className?: string;
    color?: colorType;
    size?: "small" | "regular" | "medium" | "large";
    disabled?: boolean;
    href?: string;
    target?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};