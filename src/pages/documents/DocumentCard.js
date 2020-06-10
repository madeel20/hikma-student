import React from "react";
import { CTags } from "../../uiComponents";

export default function DocumentCard(props) {
  return (
    <div onClick={props.onClick} className={props.className} key={props.index}>
      <img src={require("../../assets/svgs/pdf.svg")} alt="" />
      <div className="file-list-item-content">
        <h2 className="heading">How to Write an Essay</h2>
        <span className="text">1.2MB</span>
        <CTags data={["Curriculum", "Grade", "Subject"]} />
        <span className="text">You Shared With</span>
        <img src={require("../../assets/images/user-3.jpg")} alt="" />
        <span className="text">Student Shared With</span>
        <img src={require("../../assets/images/user-3.jpg")} alt="" />
      </div>
    </div>
  );
}
