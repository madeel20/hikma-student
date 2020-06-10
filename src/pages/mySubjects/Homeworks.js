import React, { useState } from "react";
import { CDragAndDrop } from "../../uiComponents";
import { Button, Dropdown, Menu } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCloudDownload } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MappedElement } from "../../utils/helper";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:">Option 1</a>
      <a href="javascript:">Option 2</a>
      <a href="javascript:">Option 3</a>
    </Menu.Item>
  </Menu>
);

function Homeworks() {
  const [innerPageIsShow, setInnerPageIsShow] = useState(false);

  const renderList = () => {
    return (
      <MappedElement
        data={["Pending", "Graded", "Not Submitted", "Crossed Deadline"]}
        renderElement={(value, index) => {
          return (
            <div className="c-section mb-4">
              <h6 className="c-section-title">
                <span className="mr-2">{value}</span>
              </h6>
              <ul className="list">
                <MappedElement
                  data={["", ""]}
                  renderElement={(value, index) => {
                    return (
                      <li
                        className="list-item"
                        key={index}
                        onClick={() => setInnerPageIsShow(true)}
                      >
                        <img
                          className="icon"
                          src={require("../../assets/svgs/homework.svg")}
                          alt=""
                        />
                        <div className="text flex-1">
                          {" "}
                          <b> Lesson 1 </b> - How to use English articles?{" "}
                        </div>
                        <div className="secondary-text flex-05">
                          <span className="c-tag mb-0 rounded"> Pending </span>
                        </div>
                        <div className="secondary-text flex-05">
                          Deadline: Mar 30
                        </div>
                        <Dropdown overlay={menu} trigger={["click"]}>
                          <a
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            <AiOutlineEllipsis />
                          </a>
                        </Dropdown>
                      </li>
                    );
                  }}
                />
              </ul>
            </div>
          );
        }}
      />
    );
  };

  return (
    <div className="homework">
      {innerPageIsShow ? (
        <HomeworkInner back={setInnerPageIsShow} />
      ) : (
        renderList()
      )}
    </div>
  );
}

function HomeworkInner({ back }) {
  const [files, setFiles] = useState([]);

  const updateFileIntoState = (file) => {
    let data = files;
    data.push(file);
    setFiles(data);
  };
  return (
    <div className="inner">
      <div className="inner-header">
        <span onClick={() => back(false)}>
          <IoIosArrowRoundBack />
        </span>
        <h4>Lesson</h4>
      </div>
      <h1> How to write an essay? </h1>
      <div className="file-list">
        <MappedElement
          data={["", ""]}
          renderElement={(value, index) => {
            return (
              <div className="file-list-item" key={index}>
                <img src={require("../../assets/svgs/pdf.svg")} alt="" />
                <div className="file-list-item-content">
                  <h2 className="heading">Homework 1</h2>
                  <span className="text">1.2MB</span>
                </div>
                <div className="file-list-item-actions">
                  <span>
                    <BsCloudDownload />
                  </span>
                  <span>
                    <RiDeleteBinLine />
                  </span>
                </div>
              </div>
            );
          }}
        />
      </div>
      <div className="mb-4">
        <CDragAndDrop callBack={updateFileIntoState} />
      </div>

      <Button
        htmlType="submit"
        className="c-button c-button-primary button-with-loading"
        block
      >
        Submit
      </Button>
    </div>
  );
}

export default Homeworks;
