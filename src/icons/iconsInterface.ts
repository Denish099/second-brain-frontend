export interface IconProps {
  size: "sm" | "md" | "lg";
}
export const size = (variant: string) => {
  switch (variant) {
    case "sm":
      return "size-3";
    case "md":
      return "size-4";
    case "lg":
      return "size-5";
  }
};
