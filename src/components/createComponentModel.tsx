import { XmarkICon } from "../icons/x-markIcon";

interface ModelProps {
  open: boolean;
  onclose: () => void;
}

export const CreateComponentModel = ({ open, onclose }: ModelProps) => {
  if (!open) return null;

  return (
    <div className="w-1/2 h-[90%] bg-red-200 fixed top-10 left-1/4 p-4 shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <p>Hello Modal</p>
        </div>
        <XmarkICon size="lg" />
      </div>
    </div>
  );
};
