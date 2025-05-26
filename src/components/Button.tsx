import { ReactElement } from "react";

const ButtonColorVariants = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-dark text-white";
    case "secondary":
      return "bg-light text-dark";
  }
};

const ButtonSizeVariant = (variant: string) => {
  switch (variant) {
    case "sm":
      return "px-2 py-1 text-sm w-30 rounded-sm";
    case "md":
      return "px-5 py-2 text-md w-40 rounded-md";
    case "lg":
      return "px-6 py-2 text-lg w-50 rounded-lg";
  }
};
interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}

export const Button = (props: ButtonProps): ReactElement => {
  const classes = `
      inline-flex items-center justify-center gap-2
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
