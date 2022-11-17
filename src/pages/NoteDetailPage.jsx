import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function NoteDetailPage() {
  const [top, setTop] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get("http://18.189.150.89:8080/api/note/1")
      .then((response) => {
        const data = response.data["result"];
        console.log(data);
        setTop(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex m-auto">
      <section className="w-1/3 m-3 p-10 border-x-1 bg-brand_comment">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          분석된문장
        </button>
        <article className="flex justify-between border-b border-gray-300 p-20 min-h-200	">
          <h3 className="text-base">title</h3>
          <p className="mt-15 	">description</p>
        </article>
        <article className="flex justify-between border-b border-gray-300 p-20 min-h-200">
          list
        </article>
      </section>
      <section className="w-2/3 m-3 p-10 border-x-1 bg-brand_comment">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          댓글
        </button>

        <form>
          <Input
            size="large"
            placeholder="large size"
            prefix={<UserOutlined />}
          />{" "}
        </form>
      </section>
    </div>
  );
}
