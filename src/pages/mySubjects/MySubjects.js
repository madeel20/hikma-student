import React from "react";
import {
  CNav,
  CTypeList,
  SelectCategoriesFilter,
  CSubjectsList,
} from "../../uiComponents";
import { FiSearch } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { subjectList } from "./data";
import { Dropdown, Menu, Tabs } from "antd";
import Lessons from "./Lessons";
import Progress from "./Progress";
import Files from "./Files";
import Questions from "./Questions";
import Quizzes from "./Quizzes";
import RecordedClasses from "./RecordedClasses";
import Homeworks from "./Homeworks";

const { TabPane } = Tabs;

const menu = (
  <Menu>
    <Menu.Item key="0"> Share with teacher </Menu.Item>
    <Menu.Item key="1"> Share with whole class </Menu.Item>
    <Menu.Item key="2"> Share with... </Menu.Item>
  </Menu>
);

function MySubjects() {
  return (
    <div className="my-subjects w-100 d-flex flex-column ">
      <CNav />
      <div className="two-card-view d-flex">
        <div className="first-card-view">
          <div className="first-card-view-header d-flex">
            <h1 className="flex-1">My Subjects</h1>
            <button>
              <FiSearch />
            </button>
          </div>

          <div className="first-card-view-body scroll-y">
            <CSubjectsList data={subjectList} />
          </div>
        </div>
        <div className="second-card-view d-flex flex-column">
          <div className="second-card-view-header d-flex align-items-center">
            <h1 className="flex-1">Mathematics</h1>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <AiOutlineEllipsis />
              </a>
            </Dropdown>
          </div>
          <Tabs
            className="h-100 d-flex flex-column c-tabs"
            defaultActiveKey="quizzes"
          >
            <TabPane tab="List Of Lessons" key="lessons">
              <div className="content-container scroll-y">
                <Lessons />
              </div>
            </TabPane>
            <TabPane className="h-100" tab="Progress" key="progress">
              <div className="content-container scroll-y">
                <Progress />
              </div>
            </TabPane>
            <TabPane tab="Files" key="files">
              <div className="content-container scroll-y">
                <Files />
              </div>
            </TabPane>
            <TabPane tab="Questions" key="questions">
              <div className="content-container scroll-y">
                <Questions />
              </div>
            </TabPane>
            <TabPane tab="Quizzes" key="quizzes">
              <div className="content-container scroll-y">
                <Quizzes />
              </div>
            </TabPane>
            <TabPane tab="Recorded Classes" key="recorded-classes">
              <div className="content-container scroll-y">
                <RecordedClasses />
              </div>
            </TabPane>
            <TabPane tab="Homeworks" key="homeworks">
              <div className="content-container scroll-y">
                <Homeworks />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default MySubjects;
