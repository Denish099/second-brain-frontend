import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar({ onSelectType }: any) {
  return (
    <div className="h-screen bg-white border-r  border-slate-300 w-76 fixed left-0 top-0">
      <div className="flex text-2xl pl-2 pt-2 gap-4">
        <Logo size="2lg" />
        Brainly
      </div>
      <div className="pt-10 pl-5">
        <SideBarItem
          text="Twitter"
          icon={<TwitterIcon size="2lg" />}
          onClick={() => {
            onSelectType("twitter");
          }}
        />
        <SideBarItem
          text="Youtube"
          icon={<YoutubeIcon size="2lg" />}
          onClick={() => {
            onSelectType("youtube");
          }}
        />
      </div>
    </div>
  );
}
