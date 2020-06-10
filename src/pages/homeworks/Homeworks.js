import React, { useState } from "react";
import {
  CNav,
  SelectCategoriesFilter,
  CMultipleImages,
  CModal,
  CDragAndDrop,
} from "../../uiComponents";
import {
  Button,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Checkbox,
  Select,
} from "antd";
import { FiX, FiSearch } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { categories } from "../documents/data";
import { MappedElement, renderOptions } from "../../utils/helper";
import { selectOptions } from "../myProfile/data";

const CreateWork = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <Form
      name="create-work-form"
      className="modal-form"
      initialValues={{}}
      onFinish={onFinish}
    >
      <h4 className="modal-form-title">Create Homework</h4>

      <Form.Item name="subject">
        <Select defaultValue="" className="c-select">
          <Select.Option value="">Subject</Select.Option>
          {renderOptions(selectOptions)}
        </Select>
      </Form.Item>
      <Form.Item name="curriculum">
        <Select defaultValue="" className="c-select">
          <Select.Option value="">Curriculum</Select.Option>
          {renderOptions(selectOptions)}
        </Select>
      </Form.Item>
      <Form.Item name="grade">
        <Select defaultValue="" className="c-select">
          <Select.Option value="">Grade</Select.Option>
          {renderOptions(selectOptions)}
        </Select>
      </Form.Item>

      <div className="form-item-title m-1">Deadline</div>
      <div className="two-form-item">
        <div className="two-form-item-left">
          <Form.Item name="day" className="c-data">
            <DatePicker />
          </Form.Item>
        </div>
        <div className="two-form-item-right">
          <Form.Item name="month" className="c-data">
            <DatePicker picker="month" />
          </Form.Item>
        </div>
      </div>
      <Form.Item name="workExperienceTo">
        <CDragAndDrop className="small" />
      </Form.Item>
      <div className="two-form-item">
        <div className="two-form-item-left">
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              className="c-button c-button-primary-light button-with-loading"
              block
            >
              Save & Send Later
            </Button>
          </Form.Item>
        </div>
        <div className="two-form-item-right">
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              className="c-button c-button-primary button-with-loading"
              block
            >
              Send to Students
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
const Share = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  const renderUsers = (users) => {
    return (
      <Checkbox.Group style={{ width: "100%" }} className="user-check-list">
        <MappedElement
          data={users}
          renderElement={(value, index) => {
            return (
              <Checkbox value={index} className="user-check-list-item">
                <img
                  className="user-check-list-item-image"
                  src={require("../../assets/images/user.jpg")}
                  draggable="false"
                  alt=""
                />
                <h1 className="user-check-list-item-title">
                  Harold H.{index + 1}
                </h1>
              </Checkbox>
            );
          }}
        />
      </Checkbox.Group>
    );
  };

  return (
    <Form
      name="Share"
      className="modal-form"
      initialValues={{}}
      onFinish={onFinish}
    >
      <h4 className="modal-form-title">Share With</h4>

      <Form.Item name="search" className="c-input c-input-with-icon">
        <FiSearch />
        <Input placeholder="Search" />
      </Form.Item>

      {renderUsers(["", "", "", "", ""])}

      <Form.Item className="mt-3 mb-0">
        <Button
          htmlType="submit"
          className="c-button c-button-primary button-with-loading"
          block
        >
          Share
        </Button>
      </Form.Item>
    </Form>
  );
};

function Homeworks() {
  const [createWorkModal, setCreateWorkModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const menu = () => (
    <Menu className="categories-dropdown">
      <Menu.Item key="0" onClick={() => setShareModal(true)}>
        {" "}
        Share with all students{" "}
      </Menu.Item>
      <Menu.Item key="1"> Share with whole class </Menu.Item>
      <Menu.Item key="2"> Share with... </Menu.Item>
    </Menu>
  );

  return (
    <div className="homeworks d-flex flex-column w-100">
      <CNav />

      <h3 className="page-title"> Homeworks </h3>

      <div className="d-flex align-items-center mb-3">
        <div className="d-flex flex-1">
          <div className="c-tag rounded mb-0">
            {" "}
            Curriculum{" "}
            <button>
              {" "}
              <FiX />{" "}
            </button>{" "}
          </div>
          <div className="c-tag rounded mb-0">
            {" "}
            Subject{" "}
            <button>
              {" "}
              <FiX />{" "}
            </button>{" "}
          </div>
          <div className="c-tag rounded mb-0">
            {" "}
            Grade{" "}
            <button>
              {" "}
              <FiX />{" "}
            </button>{" "}
          </div>
          <div className="clear-all-button">
            <span>Clear All</span>
          </div>
        </div>
        <SelectCategoriesFilter categories={categories} />
      </div>

      <div className="c-section mb-5">
        <ul className="list">
          <MappedElement
            data={["", ""]}
            renderElement={(value, index) => {
              return (
                <li className="list-item" key={index}>
                  <img
                    className="icon"
                    src={require("../../assets/svgs/homework.svg")}
                    draggable="false"
                    alt=""
                  />
                  <div className="text flex-1">
                    {" "}
                    <b> Lesson 1 </b> - How to use English articles?{" "}
                  </div>
                  <div className="secondary-text flex-05">
                    <span className="text">
                      {" "}
                      <b>Spanish</b>{" "}
                    </span>
                  </div>
                  <div className="secondary-text flex-05">
                    <CMultipleImages
                      data={[
                        require("../../assets/images/user.jpg"),
                        require("../../assets/images/user.jpg"),
                        require("../../assets/images/user.jpg"),
                      ]}
                      renderCount={1}
                    />
                  </div>
                  <div className="secondary-text flex-05">Deadline: Mar 30</div>
                  <Dropdown
                    overlay={menu()}
                    trigger={["click"]}
                    overlayClassName="c-dropdown"
                  >
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

      <div className="c-section mb-5">
        <h6 className="c-section-title">
          <span className="mr-2">Need to share</span>
        </h6>
        <ul className="list">
          <MappedElement
            data={["", ""]}
            renderElement={(value, index) => {
              return (
                <li className="list-item" key={index}>
                  <img
                    className="icon"
                    src={require("../../assets/svgs/homework.svg")}
                    draggable="false"
                    alt=""
                  />
                  <div className="text flex-1">
                    {" "}
                    <b> Lesson 1 </b> - How to use English articles?{" "}
                  </div>
                  <div className="secondary-text flex-05">
                    <span className="text">
                      {" "}
                      <b>Spanish</b>{" "}
                    </span>
                  </div>
                  <div className="secondary-text flex-05">
                    <CMultipleImages
                      data={[
                        require("../../assets/images/user.jpg"),
                        require("../../assets/images/user.jpg"),
                        require("../../assets/images/user.jpg"),
                      ]}
                      renderCount={1}
                    />
                  </div>
                  <div className="secondary-text flex-05">Deadline: Mar 30</div>
                  <Dropdown
                    overlay={menu()}
                    trigger={["click"]}
                    overlayClassName="c-dropdown"
                  >
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

      <button className="c-fab-button" onClick={() => setCreateWorkModal(true)}>
        <AiOutlinePlus />
      </button>

      <CModal
        show={shareModal}
        className="center small"
        onHide={() => setShareModal(false)}
      >
        <Share />
      </CModal>

      <CModal
        show={createWorkModal}
        className="center small"
        onHide={() => setCreateWorkModal(false)}
      >
        <CreateWork />
      </CModal>
    </div>
  );
}
export default Homeworks;
