import React, { useState } from "react";
import { SelectCategoriesFilter, CDragAndDrop } from "../../uiComponents";
import { lessons } from "./data";
import { Button, Dropdown, Form, Menu } from "antd";
import { FiX } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCloudDownload } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { MappedElement } from "../../utils/helper";
import { Image } from "react-bootstrap";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:">Option 1</a>
      <a href="javascript:">Option 2</a>
      <a href="javascript:">Option 3</a>
    </Menu.Item>
  </Menu>
);

function Lessons() {
  const [innerPageIsShow, setInnerPageIsShow] = useState(false);

  return (
    <div className="lesson">
      {innerPageIsShow ? (
        <LessonInner back={setInnerPageIsShow} />
      ) : (
        <div>
          <div className="c-section mb-4">
            <h6 className="c-section-title">
              <span className="mr-2">Starting Now</span>
            </h6>
            <ul className="list">
              <MappedElement
                data={[""]}
                renderElement={(type, index) => {
                  return (
                    <li className="list-item" key={index}>
                      <RiTimeLine className="icon group-lesson" />

                      <div className="flex-1 d-flex text align-items-center">
                        <b> Lesson 2 </b>
                        {!type ? (
                          <span className="c-subject-tag one-to-one mb-0">
                            GROUP LESSON
                          </span>
                        ) : null}
                      </div>
                      <div className="secondary-text flex-04">
                        <Image
                          className="c-subject-img"
                          src={require("../../assets/images/user-3.jpg")}
                        />
                      </div>
                      <Button className="c-button">Join</Button>
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
          <div className="c-section mb-4">
            <h6 className="c-section-title">
              <span className="mr-2">This Week</span>
            </h6>
            <ul className="list">
              <MappedElement
                data={["", ""]}
                renderElement={(type, index) => {
                  return (
                    <li className="list-item" key={index}>
                      <RiTimeLine className="icon group-lesson" />

                      <div className="flex-1 d-flex text align-items-center">
                        <b> Lesson 2 </b>
                        {!type ? (
                          <span className="c-subject-tag group-lesson mb-0">
                            ONE-TO-ONE
                          </span>
                        ) : null}
                      </div>
                      <div className="secondary-text flex-04">
                        <Image
                          className="c-subject-img"
                          src={require("../../assets/images/user-3.jpg")}
                        />
                      </div>
                      <div className="secondary-text flex-04">
                        Apr 14, 12:00AM - 1:00PM
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
        </div>
      )}
    </div>
  );
}

function LessonInner({ back }) {
  const [files, setFiles] = useState([]);

  const updateFileIntoState = (file) => {
    let data = files;
    data.push(file);
    setFiles(data);
  };
  return (
    <div className="homework-inner">
      <div className="homework-inner-header">
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

export default Lessons;
