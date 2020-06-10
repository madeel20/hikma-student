import React, { Fragment, useState } from "react";
import { Button, Checkbox, Dropdown, Form, Menu } from "antd";
import { MappedElement } from "../../utils/helper";
import { CModal } from "../../uiComponents";
import { AiOutlineEllipsis, AiOutlinePlus } from "react-icons/ai";
import { IoMdAdd, IoIosArrowRoundBack } from "react-icons/io";

const CreateQuiz = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <Form
      name="create-quiz"
      className="create-quiz-form-container h-100 d-flex flex-column"
      initialValues={{}}
      onFinish={onFinish}
    >
      <div className="create-quiz-container h-100 d-flex flex-column">
        <div className="quiz-questions-container w-100 d-flex flex-1 flex-column scroll-y">
          <h4>How to write an essay?</h4>
          <div className="questions">
            <MappedElement
              data={["", "", "", "", "", ""]}
              renderElement={(value, index) => {
                return (
                  <Form.Item name={index} className="question mb-4" key={index}>
                    <span className="question-text">
                      {index + 1}. Which two statements together prove that Tim
                      has a red car?
                    </span>
                    <Checkbox.Group className="question-answers">
                      <Checkbox value="Gil likes Tim's car colour">
                        Gil likes Tim's car colour
                      </Checkbox>
                      <Checkbox value="Tim likes fast cars">
                        Tim likes fast cars
                      </Checkbox>
                      <Checkbox value="Gil has a fast car">
                        Gil has a fast car
                      </Checkbox>
                    </Checkbox.Group>
                  </Form.Item>
                );
              }}
            />
          </div>
          <div className="add-question">
            <IoMdAdd />
            <span>Add...</span>
          </div>
        </div>
        <Form.Item className="pl-4 pb-4 pr-4 mb-0">
          <Button
            htmlType="submit"
            className="c-button c-button-primary button-with-loading"
            block
          >
            Create New Quizzes
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

function QuizInner({ back }) {
  return (
    <div className="d-flex flex-column">
      <div className="inner-header">
        <span onClick={() => back(false)}>
          {" "}
          <IoIosArrowRoundBack />{" "}
        </span>
        <h4>Lesson</h4>
      </div>
      <div className="create-quiz-container d-flex flex-column">
        <div className="quiz-questions-container d-flex flex-column w-100 p-0">
          <h4>How to write an essay?</h4>
          <div className="questions">
            <MappedElement
              data={["", "", "", "", "", ""]}
              renderElement={(value, index) => {
                return (
                  <div className="question mb-4" key={index}>
                    <span className="question-text">
                      {index + 1}. Which two statements together prove that Tim
                      has a red car?
                    </span>
                    <Checkbox.Group className="question-answers">
                      <Checkbox value="Gil likes Tim's car colour">
                        Gil likes Tim's car colour
                      </Checkbox>
                      <Checkbox value="Tim likes fast cars">
                        Tim likes fast cars
                      </Checkbox>
                      <Checkbox value="Gil has a fast car">
                        Gil has a fast car
                      </Checkbox>
                    </Checkbox.Group>
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
function Quizzes() {
  const [detailModalIsOpen, setDetailModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const menu = () => (
    <Menu className="categories-dropdown">
      <Menu.Item key="0"> Share with all students </Menu.Item>
      <Menu.Item key="1"> Share with whole class </Menu.Item>
      <Menu.Item key="2"> Share with... </Menu.Item>
    </Menu>
  );

  return (
    <div className="details-tab-container">
      {!showQuiz ? (
        <Fragment>
          <div className="c-section mb-5">
            <ul className="list">
              <MappedElement
                data={["", ""]}
                renderElement={(value, index) => {
                  return (
                    <li
                      className="list-item"
                      key={index}
                      onClick={() => setShowQuiz(true)}
                    >
                      <img
                        className="icon"
                        src={require("../../assets/svgs/quizzes.svg")}
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
                        Deadline: Mar 30
                      </div>
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
          <CModal
            show={detailModalIsOpen}
            className="right-side"
            onHide={() => setDetailModal(false)}
          >
            <CreateQuiz />
          </CModal>
          <button
            className="c-fab-button"
            onClick={() => setDetailModal(!detailModalIsOpen)}
          >
            <AiOutlinePlus />
          </button>
        </Fragment>
      ) : (
        <QuizInner back={() => setShowQuiz(false)} />
      )}
    </div>
  );
}

export default Quizzes;
