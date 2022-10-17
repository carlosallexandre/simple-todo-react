import clsx from "clsx";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { Text, TextProps } from "../Text";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className, ...props }: ButtonProps) {
  return <button className={clsx(styles.container, className)} {...props} />;
}

function ButtonText(props: TextProps) {
  return <Text fontWeight="bold" color="gray.100" {...props} />;
}

interface ButtonIconProps extends HTMLAttributes<HTMLSpanElement> {}

function ButtonIcon({ className, ...props }: ButtonIconProps) {
  return <span className={clsx(styles.icon, className)} {...props} />;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
