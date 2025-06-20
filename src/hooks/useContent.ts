import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";

export function useContent() {
  const [contents, setContent] = useState([]);

  const refresh = () => {
    axiosInstance
      .get("/content", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setContent(res.data.contents);
      });
  };
  useEffect(() => {
    refresh();

    let interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return contents;
}
