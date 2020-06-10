import React, { useState } from "react";
import {
  CDragAndDrop,
  CTags,
  SelectCategoriesFilter,
} from "../../uiComponents";
import { categories } from "./data";
import { MappedElement } from "../../utils/helper";
import { FiX } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function Files() {
  const [files, setFiles] = useState([]);

  const updateFileIntoState = (file) => {
    let data = files;
    data.push(file);
    setFiles(data);
  };
  return (
    <div className="files d-flex flex-column">
      <div className="file-list">
        <MappedElement
          data={["", "", "", ""]}
          renderElement={(value, index) => {
            return (
              <div className="file-list-item" key={index}>
                <img src={require("../../assets/svgs/pdf.svg")} alt="" />
                <div className="file-list-item-content">
                  <h2 className="heading">Homework 1</h2>
                  <span className="text">1.2MB</span>
                  <CTags data={["Curriculum", "Grade", "Subject"]} />
                </div>
                <div className="file-list-item-actions">
                  <span>
                    <RiDeleteBinLine />
                  </span>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
export default Files;
