import React from "react";
import SubjectTopicPage from "../../pages/SubjectTopicPage";
export default function MenuBar() {
  return (
    <div className="text-black">
      <section className="flex justify-between p-10">
        <div
          className="w-[1170px] h-[68px] rounded-lg bg-[#3056d3]"
          style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.12)" }}
        />
      </section>
      <SubjectTopicPage />
    </div>
  );
}
