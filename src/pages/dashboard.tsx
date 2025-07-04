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
  const [contentType, setContenttype] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent(contentType);

  const shareButton = async () => {
    const res = await axiosInstance.post("/share", {
      share: true,
    });
    console.log(res.data);
    const url = `http://localhost:5173${res.data.message}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div>
      <SideBar
        onSelectType={(type: any) => {
          setContenttype(type);
        }}
      />

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
          {contentType &&
            content.map(({ type, link, title, _id }) => (
              <div>
                <Card type={type} link={link} title={title} _id={_id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
