import React, { useState } from "react";
import {
  CNav,
  CCardWrapper,
  SelectCategoriesFilter,
  CDragAndDrop,
  CMultipleImages,
} from "../../uiComponents";
import { Tabs, Radio, Form, Button, Input, Select, Checkbox } from "antd";
import { FiX } from "react-icons/fi";
import { categories, selectOptions } from "./data";
import { MappedElement } from "../../utils/helper";
import { renderOptions } from "../../utils/helper";

import { AiOutlinePlus } from "react-icons/ai";
import DocumentCard from "./DocumentCard";
import { CModal } from "../../uiComponents";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBinLine, RiShareForwardLine } from "react-icons/ri";
import _ from "lodash";

const { TabPane } = Tabs;

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

const UploadFile = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <Form
      name="upload-new-file-form"
      className="modal-form"
      initialValues={{}}
      onFinish={onFinish}
    >
      <h4 className="modal-form-title">Upload New File</h4>

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

      <Form.Item name="type">
        <Select defaultValue="" className="c-select">
          <Select.Option value="">Type</Select.Option>
          {renderOptions(selectOptions)}
        </Select>
      </Form.Item>

      <Form.Item name="grade">
        <div className="form-item-title m-1">Members</div>
        <div className="d-flex flex-row align-items-center">
          <CMultipleImages
            data={[
              require("../../assets/images/user.jpg"),
              require("../../assets/images/user.jpg"),
              require("../../assets/images/user.jpg"),
            ]}
            renderCount={1}
          />

          <span className="c-link-text p-2">Add</span>
        </div>
      </Form.Item>

      <Form.Item name="file">
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

function Documents() {
  const [uploadFileModal, setUploadFileModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (selected) => {
    let data = selectedItems ? [...selectedItems] : [];
    if (data.length) {
      let index = data.findIndex((item) => item === selected);
      console.log(index);
      if (index !== -1) {
        data.splice(index, 1);
        setSelectedItems(data);
      } else {
        data.push(selected);
      }
    } else {
      data.push(selected);
    }
    console.log("selected", selectedItems);
    setSelectedItems(data);
  };

  const renderWeeklyDocument = () => {
    return (
      <div className="file-list">
        <MappedElement
          data={[{ _id: 1 }, { _id: 2 }]}
          renderElement={(value, index, arr) => {
            let check = selectedItems.some((obj) => obj._id === value._id);
            console.log("check", check);
            return (
              <DocumentCard
                key={index}
                className={`file-list-item ${check ? "active" : ""}`}
                onClick={() => addItem(value, arr, index)}
              />
            );
          }}
        />
      </div>
    );
  };

  const renderMonthlyDocument = () => {
    return (
      <div className="file-list">
        <MappedElement
          data={[{ _id: 3 }, { _id: 4 }, { _id: 5 }]}
          renderElement={(value, index, list) => {
            return (
              <DocumentCard
                className="file-list-item"
                onClick={() => addItem(value, list)}
              />
            );
          }}
        />
      </div>
    );
  };

  const renderDrawer = () => {
    if (selectedItems.length > 0) {
      return (
        <div className="bottom-drawer">
          <span className="heading">Selected 1 Item</span>
          <span className="add-text">Select All</span>
          <div className="clear-all-button">
            <span>Clear All</span>
          </div>
          <div className="select-button-group">
            <RiDeleteBinLine className="c-delete-icon" color="#FF2C2C" />
            <RiShareForwardLine className="c-share-icon" color="#10C7E3" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="documents d-flex flex-column w-100">
      <CNav />
      <h3 className="page-title"> Documents </h3>
      {renderDrawer()}
      <CCardWrapper className="container-document c-card-wrapper col-md-12 p-0 flex-1">
        <div className="document-tab-container">
          <Tabs defaultActiveKey="1" type="card" className="c-card-tab">
            <TabPane tab="Files (26)" key="files">
              <div className="d-flex align-items-center mb-5">
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
              <div className="c-section mb-4">
                <h6 className="c-section-title">This Week</h6>
                {renderWeeklyDocument()}
              </div>
              <div className="c-section mb-4">
                <h6 className="c-section-title">This Month</h6>
                {renderMonthlyDocument()}
              </div>
            </TabPane>
            <TabPane tab="Learning Resources (10)" key="learningresources">
              <div className="d-flex align-items-center mb-5">
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
              <div className="c-section mb-4">
                <h6 className="c-section-title">This Week</h6>
                {renderWeeklyDocument()}
              </div>
              <div className="c-section mb-4">
                <h6 className="c-section-title">This Month</h6>
                {renderMonthlyDocument()}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CCardWrapper>

      <button className="c-fab-button" onClick={() => setUploadFileModal(true)}>
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
        show={uploadFileModal}
        className="center small"
        onHide={() => setUploadFileModal(false)}
      >
        <UploadFile />
      </CModal>
    </div>
  );
}
export default Documents;
