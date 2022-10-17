import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
  fontSize?: "lg" | "md" | "sm";
  fontWeight?: "bold" | "regular";
  color?: "gray.100" | "gray.200" | "gray.300" | "blue" | "purple";
}

export function Text({
  asChild = false,
  fontSize = "md",
  color = "gray.300",
  fontWeight = "regular",
  className,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(
        styles.text,
        styles[`text-${fontSize}`],
        styles[`text-${color.replace(".", "-")}`],
        fontWeight === "bold" && styles[`text-${fontWeight}`],
        className
      )}
      {...props}
    />
  );
}
