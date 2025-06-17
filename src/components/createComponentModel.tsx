import { XmarkICon } from "../icons/x-markIcon";
import { Button } from "./Button";
import { Input } from "./inputs";

interface ModelProps {
  open: boolean;
  onClose: () => void;
}

export const CreateComponentModel = ({ open, onClose }: ModelProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dimmed background overlay */}
      <div className="fixed inset-0 bg-slate-600 opacity-40"></div>

      {/* Modal content */}
      <div className="bg-white p-4 rounded-2xl z-50 w-96 shadow-lg">
        <div className="flex justify-end">
          <div className="cursor-pointer" onClick={onClose}>
            <XmarkICon size="lg" />
          </div>
        </div>
        <Input placeholder="title" />
        <Input placeholder="link" />
        <div className="flex justify-center mt-2">
          <Button
            variant="primary"
            size="lg"
            text="Submit"
            onclick={() => {
              // Handle submission logic here
            }}
          />
        </div>
      </div>
    </div>
  );
};
