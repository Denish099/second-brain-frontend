import { ReactElement } from "react";

const ButtonColorVariants = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-indigo-800 text-white";
    case "secondary":
      return "bg-teal-200 text-indigo-800";
  }
};

const ButtonSizeVariant = (variant: string) => {
  switch (variant) {
    case "sm":
      return "px-3 py-1 text-sm";
    case "md":
      return "px-4 py-1.5 text-md";
    case "lg":
      return "px-5 py-2 text-lg";
  }
};
interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onclick: () => void;
}

export const Button = (props: ButtonProps): ReactElement => {
  const classes = `
      inline-flex items-center justify-center gap-2 rounded 
      ${ButtonColorVariants(props.variant)} 
      ${ButtonSizeVariant(props.size)}
    `;

  return (
    <button className={classes} onClick={props.onclick}>
      {props.startIcon && <span>{props.startIcon}</span>}
      <span>{props.text}</span>
      {props.endIcon && <span>{props.endIcon}</span>}
    </button>
  );
};
