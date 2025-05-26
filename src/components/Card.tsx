import { ReactElement } from "react";
import { ShareIcon } from "../icons/shareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = (props: CardProps): ReactElement => {
  return (
    <div className="bg-white rounded-md shadow-md border border-gray-100 p-4 max-w-72">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <ShareIcon size="md" />
          <p className="text-gray-500 text-xl">{props.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={props.link} target="_blank">
            <ShareIcon size="md" />
          </a>
          <ShareIcon size="md" />
        </div>
      </div>
      <div className="pt-2">
        {props.type == "youtube" && (
          <iframe
            className="w-full"
            src={props.link.replace("watch", "embed")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {props.type == "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
