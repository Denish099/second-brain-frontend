import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";

export function useContent(contentType: string | boolean) {
  const [contents, setContent] = useState([]);

  const refresh = () => {
    axiosInstance
      .get("/content", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        let data = res.data.contents;
        if (contentType !== true) {
          data = data.filter((item: any) => item.type === contentType);
        }
        setContent(data);
      });
  };

  useEffect(() => {
    refresh();

    const interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [contentType]); // refresh when contentType changes

  return contents;
}
