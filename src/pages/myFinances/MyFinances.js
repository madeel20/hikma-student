import React, { useState } from "react";
import { CNav, CModal } from "../../uiComponents";
import { MappedElement } from "../../utils/helper";
import { invoices } from "../data";
import { Button, Dropdown, Menu, DatePicker, Input, Form } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";

const menu = (
  <Menu>
    <Menu.Item key="0"> 1st menu item </Menu.Item>
    <Menu.Item key="1"> 2nd menu item </Menu.Item>
    <Menu.Item key="3"> 3rd menu item </Menu.Item>
  </Menu>
);

function MyFinances() {
  const [connectPaypal, SetConnectPaypal] = useState(false);
  const [cashOnDemandModal, setCashOnDemandModal] = useState(false);

  const renderFinanceSection = () => {
    return (
      <section className="finances-section d-flex flex-column">
        <div className="finances ">
          <div className="finance c-card ">
            <div className="finance-content">
              <h3> Add your PayPal account </h3>
              <p>
                Id nulla labore tempor commodo id ex non eiusmod nostrud.
                Eiusmod ea aliqua sunt consectetur esse ad officia fugiat aute
                incididunt.
              </p>
              <Button
                className="c-button"
                onClick={() => SetConnectPaypal(true)}
              >
                Connect PayPal
              </Button>
            </div>
            <img
              src={require("../../assets/images/visa-master-card.png")}
              className="finance-image"
              draggable="false"
              alt=""
            />
          </div>
          <div className="finance c-card">
            <div className="finance-content">
              <h3> Add your bank account </h3>
              <p>
                Id nulla labore tempor commodo id ex non eiusmod nostrud.
                Eiusmod ea aliqua sunt consectetur esse ad officia fugiat aute
                incididunt.
              </p>
              <Button
                className="c-button"
                onClick={() => SetConnectPaypal(true)}
              >
                Connect Account
              </Button>
            </div>
            <img
              src={require("../../assets/svgs/paypal.svg")}
              className="finance-image"
              draggable="false"
              alt=""
            />
          </div>
          <div className="finance c-card">
            <div className="finance-content">
              <h3> Cash on demand </h3>
              <p>
                Id nulla labore tempor commodo id ex non eiusmod nostrud.
                Eiusmod ea aliqua sunt consectetur esse ad officia fugiat aute
                incididunt.
              </p>
              <Button
                className="c-button"
                onClick={() => setCashOnDemandModal(true)}
              >
                Send Request
              </Button>
            </div>
            <img
              src={require("../../assets/images/visa-master-card.png")}
              className="finance-image"
              draggable="false"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  };

  const renderAddAccount = () => {
    return (
      <section className="finances-section d-flex flex-column">
        <div className="finances mb-4">
          <div className="finance c-card">
            <div className="finance-content">
              <h3> Your PayPal account is already verified</h3>
              <p>
                Id nulla labore tempor commodo id ex non eiusmod nostrud.
                Eiusmod ea aliqua sunt consectetur esse ad officia fugiat aute
                incididunt.
              </p>
              <Button
                className="c-button"
                onClick={() => SetConnectPaypal(true)}
              >
                Edit
              </Button>
            </div>
            <img
              src={require("../../assets/images/visa-master-card.png")}
              className="finance-image"
              draggable="false"
              alt=""
            />
          </div>
        </div>
        <div className="c-card-section mb-4">
          <div className="c-card finances-section">
            <div className="finances-content">
              <h4>$4268</h4>
              <p>Total fund ever recieved</p>
            </div>
          </div>
          <div className="c-card finances-section">
            <div className="finances-content">
              <h4>$1029</h4>
              <p>Total fund disbursed</p>
            </div>
          </div>
          <div className="c-card finances-section">
            <div className="finances-content">
              <h4>$2830</h4>
              <p>Total to be disbursed</p>
            </div>
          </div>
        </div>
        <div className="c-section mb-5">
          <h6 className="c-section-title">Last Payments</h6>
          <ul className="list">
            <MappedElement
              data={invoices}
              renderElement={renderLastPaymentItem}
            />
          </ul>
        </div>
      </section>
    );
  };
  const renderLastPaymentItem = (value, index) => {
    return (
      <li className="list-item" key={index}>
        <img
          className="icon"
          src={require("../../assets/svgs/invoice.svg")}
          alt=""
        />
        <div className="flex-1 d-flex align-items-center">
          <h6 className="text">{value.title}</h6>
        </div>
        <div className="text flex-1">{value.name}</div>
        <div className="flex-1 d-flex align-items-center">
          <div className="text ">{value.rate}</div>
          <div className="secondary-text">{value.lessons}</div>
        </div>
        <div className="secondary-text flex-1">{value.date}</div>

        <Dropdown
          overlay={menu}
          trigger={["click"]}
          overlayClassName="c-dropdown"
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <AiOutlineEllipsis />
          </a>
        </Dropdown>
      </li>
    );
  };

  const CashOnDemand = () => {
    const onFinish = (values) => {
      console.log("values", values);
    };

    return (
      <Form
        name="cash-on-demand-form"
        className="modal-form"
        initialValues={{}}
        onFinish={onFinish}
      >
        <h4 className="modal-form-title">Cash On Demand</h4>
        <h4 className="modal-form-sub-title">
          Admin will send a person to collect cash from your house.
        </h4>
        <div className="form-item-title">Select preferable Day&Time</div>
        <div className="two-form-item">
          <div className="two-form-item-left">
            <Form.Item name="day" className="c-data">
              <DatePicker />
            </Form.Item>
          </div>
          <div className="two-form-item-right">
            <Form.Item name="time" className="c-data">
              <DatePicker picker="time" />
            </Form.Item>
          </div>
        </div>
        <Form.Item name="location" className="c-input">
          <div className="form-item-title">Location</div>
          <Input />
          <div className="map-view"></div>
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            htmlType="submit"
            className="c-button button-with-loading"
            block
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className="my-finances w-100 d-flex flex-column">
      <CNav />
      <h3 className="page-title"> My Finances </h3>
      {connectPaypal ? renderAddAccount() : renderFinanceSection()}
      <CModal
        show={cashOnDemandModal}
        className="center small"
        onHide={() => setCashOnDemandModal(false)}
      >
        <CashOnDemand />
      </CModal>
    </div>
  );
}
export default MyFinances;
