import { useRef, useState } from "react";
import { XmarkICon } from "../icons/x-markIcon";
import { Button } from "./Button";
import { Input } from "./inputs";
import axiosInstance from "../lib/axios";

interface ModelProps {
  open: boolean;
  onClose: () => void;
}

enum contentType {
  youtube = "youtube",
  twitter = "twitter",
}

export const CreateComponentModel = ({ open, onClose }: ModelProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(contentType.youtube);

  async function addComponent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axiosInstance.post(
      "/content",
      { title, link, type },
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    onClose();
  }
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-slate-600 opacity-40"></div>
      <div className="bg-white p-4 rounded-2xl z-50 w-96 shadow-lg">
        <div className="flex justify-end">
          <div className="cursor-pointer" onClick={onClose}>
            <XmarkICon size="lg" />
          </div>
        </div>
        <Input placeholder="title" ref={titleRef} />

        <Input placeholder="link" ref={linkRef} />
        <div className="flex justify-center m-4 text-xl">Type</div>
        <div className="flex justify-around m-4 gap-1">
          <Button
            text="youtube"
            size="md"
            variant={type === contentType.youtube ? "primary" : "secondary"}
            onclick={() => {
              setType(contentType.youtube);
            }}
          ></Button>
          <Button
            text="Twitter"
            size="md"
            variant={type === contentType.twitter ? "primary" : "secondary"}
            onclick={() => {
              setType(contentType.twitter);
            }}
          ></Button>
        </div>
        <div className="flex justify-center mt-2">
          <Button
            variant="primary"
            size="lg"
            text="Submit"
            onclick={addComponent}
          />
        </div>
      </div>
    </div>
  );
};
