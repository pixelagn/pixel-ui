import { sizeType } from "../../tokens/size";
import { BaseProps } from "../../tokens/BaseProps.type";

interface ButtonProps extends BaseProps {
    size?: sizeType;
    disabled?: boolean;
    href?: string;
    target?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export default ButtonProps;