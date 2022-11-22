import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const twbutton = cva("button border rounded-xl inline-block", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-1", "px-3"],
      large: ["text-lg", "py-1", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof twbutton> {}

export const TwButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={twbutton({ intent, size, className })} {...props} />;
