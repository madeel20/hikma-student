import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsCloudDownload } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { MappedElement } from "../../utils/helper";
import { Image } from "react-bootstrap";
import ReactPlayer from "react-player";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:">Option 1</a>
      <a href="javascript:">Option 2</a>
      <a href="javascript:">Option 3</a>
    </Menu.Item>
  </Menu>
);

function RecordedClasses() {
  const [innerPageIsShow, setInnerPageIsShow] = useState(false);

  return (
    <div className="classes">
      {innerPageIsShow ? (
        <RecordedLessons back={setInnerPageIsShow} />
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
                    <li
                      onClick={() => setInnerPageIsShow(true)}
                      className="list-item"
                      key={index}
                    >
                      <RiTimeLine className="icon one-to-one" />

                      <div className="flex-1 d-flex text align-items-center">
                        <b> Lesson 2 </b>
                        {!type ? (
                          <span className="c-subject-tag one-to-one mb-0">
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

function RecordedLessons({ back }) {
  return (
    <div className="d-flex flex-column">
      <div className="inner-header">
        <span onClick={() => back(false)}>
          {" "}
          <IoIosArrowRoundBack />{" "}
        </span>
        <h4>Lesson</h4>
      </div>

      <ReactPlayer
        className="video-player"
        controls={true}
        url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
      />

      <div className="c-section mt-4">
        <h6 className="c-section-title">Attachments</h6>
        <div className="files">
          <div className="file-list">
            <MappedElement
              data={[""]}
              renderElement={(value, index) => {
                return (
                  <div className="file-list-item w-100" key={index}>
                    <img
                      src={require("../../assets/svgs/pdf.svg")}
                      alt=""
                      draggable="false"
                    />
                    <div className="file-list-item-content">
                      <h2 className="heading">Homework 1</h2>
                      <span className="text">1.2MB</span>
                    </div>
                    <div className="file-list-item-actions">
                      <span>
                        <BsCloudDownload />
                      </span>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordedClasses;
