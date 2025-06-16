import { XmarkICon } from "../icons/x-markIcon";
import { Button } from "./Button";

interface ModelProps {
  open: boolean;
  onClose: () => void;
}

export const CreateComponentModel = ({ open, onClose }: ModelProps) => {
  if (!open) return null;

  return (
    <div>
      <div className="w-screen h-screen bg-slate-600 fixed top-0 left-0  opacity-40 flex justify-center">
        <div className=" flex flex-col justify-center">
          <div className="bg-white p-4 rounded-2xl">
            <div className="flex justify-end p-3">
              <div className="cursor-pointer" onClick={onClose}>
                <XmarkICon size="lg" />
              </div>
            </div>
            <Input placeholder="title" />
            <Input placeholder="link" />
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                text="Submit"
                onclick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded-2xl my-2"
        onChange={onChange}
      ></input>
    </div>
  );
}
