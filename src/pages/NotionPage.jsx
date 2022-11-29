import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";
import Sidebar from "../components/Sidebarpast/Sidebar";
export default function NotionPage() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "2-5-14990c44a4294a8d9641150f6110c691";
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      {Object.keys(response).length && (
        <NotionRenderer blockMap={response} fullPage={true} />
      )}
    </div>
  );
}
