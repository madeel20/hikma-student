import React from "react";
import { Form, Input, Tabs } from "antd";
import { AiOutlineSend } from "react-icons/ai";
const { TabPane } = Tabs;

function Questions() {
  return (
    <div className="questions-tab-container">
      <Tabs defaultActiveKey="1" type="card" className="c-card-tab">
        <TabPane tab="Answered (4)" key="answered">
          <div className="question-cards">
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-body">
                <div className="message-list">
                  <div className="message-list-item">
                    <img
                      src={require("../../assets/images/user-3.jpg")}
                      alt=""
                    />
                    <p>
                      <b>Mary (You):</b>
                      Use subheadings to break up the text and make clear
                      paragraphs. Write in a semi- informal, conversational
                      style...
                      <a href="javascript:">Show More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="question-card-footer">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-body">
                <div className="message-list">
                  <div className="message-list-item">
                    <img
                      src={require("../../assets/images/user-3.jpg")}
                      alt=""
                    />
                    <p>
                      <b>Mary (You):</b>
                      Use subheadings to break up the text and make clear
                      paragraphs. Write in a semi- informal, conversational
                      style...
                      <a href="javascript:">Show More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="question-card-footer">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-body">
                <div className="message-list">
                  <div className="message-list-item">
                    <img
                      src={require("../../assets/images/user-3.jpg")}
                      alt=""
                    />
                    <p>
                      <b>Mary (You):</b>
                      Use subheadings to break up the text and make clear
                      paragraphs. Write in a semi- informal, conversational
                      style...
                      <a href="javascript:">Show More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="question-card-footer">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-body">
                <div className="message-list">
                  <div className="message-list-item">
                    <img
                      src={require("../../assets/images/user-3.jpg")}
                      alt=""
                    />
                    <p>
                      <b>Mary (You):</b>
                      Use subheadings to break up the text and make clear
                      paragraphs. Write in a semi- informal, conversational
                      style...
                      <a href="javascript:">Show More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="question-card-footer">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Unanswered (5)" key="unanswered">
          <div className="question-cards">
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-footer pl-0">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-footer pl-0">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-footer pl-0">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-footer pl-0">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
            <div className="question-card">
              <div className="question-card-header">
                <div className="replied"> Replied back in 1h </div>
                <h4>How to write an article?</h4>
              </div>
              <div className="question-card-footer pl-0">
                <div className="input-with-button c-input">
                  <Input placeholder="Type something..." />
                  <button>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default Questions;
