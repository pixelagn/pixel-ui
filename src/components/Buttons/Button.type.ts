export interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    size?: "small" | "regular" | "medium" | "large";
    disabled?: boolean;
};