import { useState } from "react";
import { SideBar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { CreateComponentModel } from "../components/createComponentModel";
import { PlusComponent } from "../icons/plusIcon";
import { Card } from "../components/Card";
import { ShareIcon } from "../icons/shareIcon";
import { useContent } from "../hooks/useContent";
import axiosInstance from "../lib/axios";

export function Dashboard() {
  const content = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const shareButton = async () => {
    const res = await axiosInstance.post("/share", {
      share: true,
    });

    const url = `http://localhost:5173/api/v1/share/${res.data.hash}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div>
      <SideBar />

      <div className="p-4 space-y-6  ml-76">
        <CreateComponentModel
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-3">
          <Button
            variant="primary"
            size="lg"
            text="Add Content"
            onclick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusComponent size="lg" />}
          />

          <Button
            variant="secondary"
            size="lg"
            text="Share"
            startIcon={<ShareIcon size="lg" />}
            onclick={shareButton}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {content.map(({ type, link, title }) => (
            <div>
              <Card type={type} link={link} title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
