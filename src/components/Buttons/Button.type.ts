export interface ButtonProps {
    children?: React.ReactNode | string;
    onClick?: () => void;
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    size?: "small" | "regular" | "medium" | "large";
    disabled?: boolean;
    href?: string;
    target?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};