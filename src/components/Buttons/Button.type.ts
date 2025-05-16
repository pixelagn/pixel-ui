import { BaseProps } from "../../tokens/BaseProps.type";

interface ButtonProps extends BaseProps {
    size?: "small" | "regular" | "medium" | "large";
    disabled?: boolean;
    href?: string;
    target?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export default ButtonProps;