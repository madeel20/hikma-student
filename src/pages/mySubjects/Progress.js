import React from "react";
import { MappedElement } from "../../utils/helper";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Dropdown, Menu } from "antd";
import { LineGraph2 } from "../../uiComponents";
import { labels, studentChartData } from "../dashboard/data";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:">Option 1</a>
      <a href="javascript:">Option 2</a>
      <a href="javascript:">Option 3</a>
    </Menu.Item>
  </Menu>
);

function Progress() {
  return (
    <div className="progress-component-tab-container">
      <div className="c-section mb-5">
        <h6 className="c-section-main-title">Homeworks</h6>
        <div className="c-section-multiple-titles d-flex">
          <h6 className="c-section-title flex-1">Subject</h6>
          <h6 className="c-section-title flex-05">Grade</h6>
          <h6 className="c-section-title flex-05">Date</h6>
        </div>
        <ul className="list">
          <MappedElement
            data={[""]}
            renderElement={(value, index) => {
              return (
                <li className="list-item" key={index}>
                  <img
                    className="icon"
                    src={require("../../assets/svgs/homework.svg")}
                    alt=""
                  />
                  <div className="text flex-1">
                    {" "}
                    <b>Spanish</b> (Lesson 3){" "}
                  </div>
                  <div className="secondary-text flex-05">
                    <b className="text m-0">10 / </b>9
                  </div>
                  <div className="secondary-text flex-05">Mar 30</div>
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

        <div className="card-views d-flex w-100 mt-4">
          <div className="card-view d-flex flex-column justify-content-between">
            <p className="card-view-sub-title mr-3 mb-4">
              Student progress from all student taking the same program
            </p>
            <LineGraph2 data={studentChartData} labels={labels} />
          </div>
        </div>
      </div>
      <div className="c-section mb-5">
        <h6 className="c-section-main-title">quizzes</h6>
        <div className="c-section-multiple-titles d-flex">
          <h6 className="c-section-title flex-1">Subject</h6>
          <h6 className="c-section-title flex-05">Grade</h6>
          <h6 className="c-section-title flex-05">Date</h6>
        </div>
        <ul className="list">
          <MappedElement
            data={[""]}
            renderElement={(value, index) => {
              return (
                <li className="list-item" key={index}>
                  <img
                    className="icon"
                    src={require("../../assets/svgs/quizzes.svg")}
                    alt=""
                  />
                  <div className="text flex-1">
                    {" "}
                    <b>Spanish</b> (Lesson 3){" "}
                  </div>
                  <div className="secondary-text flex-05">
                    <b className="text m-0">10 / </b>9
                  </div>
                  <div className="secondary-text flex-05">Mar 30</div>
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
  );
}
export default Progress;
