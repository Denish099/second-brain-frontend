import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";
import { Card } from "../components/Card";

export const SharePage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pathParts = window.location.pathname.split("/");
        const shareId = pathParts[2]; // e.g., for /share/abc123

        const res = await axiosInstance.get(`share/${shareId}`);
        setContent(res.data.content); // ✅ update state
      } catch (error) {
        console.error("Error fetching share data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-4">
      {content.map(({ type, link, title, _id }) => (
        <div key={_id}>
          <Card type={type} link={link} title={title} _id={_id} />
        </div>
      ))}
    </div>
  );
};
