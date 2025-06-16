import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";

export function SideBar() {
  return (
    <div className="h-screen bg-white border-r  border-slate-300 w-76 fixed left-0 top-0">
      <TwitterIcon size="2lg" />
      <YoutubeIcon size="2lg" />
    </div>
  );
}
