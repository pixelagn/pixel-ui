import { colorType } from "./colors";

type dirType = "ltr" | "rtl";

export interface BaseProps {
    children?: React.ReactNode | string;
    onClick?: () => void;
    onChange?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeyDown?: () => void;
    onKeyUp?: () => void;
    onKeyPress?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onMouseMove?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    hidden?: boolean;
    className?: string;
    id?: string;
    color?: colorType;
    name?: string;
    dir?: dirType;
    key?: string;
    style?: React.CSSProperties;
    title?: string;
};