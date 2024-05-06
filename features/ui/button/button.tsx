import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
  unstyled = "",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "empty-gray",
  error = "error",
  emptyError = "empty-error",
  unstyled = "",
}

export enum ButtonIconPosition {
  isLeading = "is-leading",
  isTrailing = "is-trailing",
  isOnly = "is-only",
}

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  iconPosition?: ButtonIconPosition;
  text?: string;
  iconSrc?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  className,
  size = ButtonSize.unstyled,
  color = ButtonColor.unstyled,
  iconPosition = ButtonIconPosition.isOnly,
  text,
  onClick = () => {},
  iconSrc = "",
  disabled = false,
}: ButtonProps) {
  const renderIcon = () => {
    if (iconSrc === "") return;
    return (
      <div
        className={classNames(styles.icon, styles[size], styles[iconPosition])}
        style={{
          maskImage: `url(${iconSrc})`,
          WebkitMaskImage: `url(${iconSrc})`,
        }}
      />
    );
  };
  if (text === "") iconPosition = ButtonIconPosition.isOnly;
  if (text != "" && iconPosition == ButtonIconPosition.isOnly)
    iconPosition = ButtonIconPosition.isLeading;
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[iconPosition],
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition != ButtonIconPosition.isTrailing ? renderIcon() : ""}
      {text}
      {children}
      {iconPosition == ButtonIconPosition.isTrailing ? renderIcon() : ""}
    </button>
  );
}
