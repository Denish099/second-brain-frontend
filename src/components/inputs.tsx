import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          className="px-4 py-2 border rounded-2xl my-2 w-full"
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
