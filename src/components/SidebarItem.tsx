import { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 rounded-2xl mr-2 transition-all duration-250">
      {icon} {text}
    </div>
  );
}
