import { ReactElement, useEffect } from "react";
import { ShareIcon } from "../icons/shareIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import axiosInstance from "../lib/axios";

interface CardProps {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
};

export const Card = (props: CardProps): ReactElement => {
  const deleteCard = async () => {
    console.log(props);
    await axiosInstance.delete("/content", {
      data: { contentId: props._id },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  };

  useEffect(() => {
    if (props.type === "twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [props.type]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 w-full sm:w-80">
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-lg font-medium">{props.title}</p>
          <div className="flex items-center gap-2">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Link"
            >
              <ShareIcon size="lg" />
            </a>
            <div onClick={deleteCard}>
              <DeleteIcon size="lg" />
            </div>
          </div>
        </div>

        {props.type === "youtube" && (
          <div className="w-full aspect-video rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src={getYouTubeEmbedUrl(props.link)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}

        {props.type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
