import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Button, Dropdown, Menu } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import CTags from "../cTags/CTags";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javascript:">Send message to students</a>
    </Menu.Item>
  </Menu>
);

export const CMultipleImages = ({ data, renderCount = 2 }) => {
  if (data && data.length) {
    let userCount = data.length;
    return (
      <div className="c-multiple-images">
        {data.map((userImage, index) =>
          index <= renderCount ? <Image key={index} src={userImage} /> : null
        )}
        {userCount > renderCount + 1 ? (
          <div className="counter"> {userCount}+ </div>
        ) : null}
      </div>
    );
  }
  return null;
};

function CCard({
  title,
  date,
  type,
  typeClass,
  users,
  url,
  timer,
  tags,
  name,
  role,
  imageUrl,
  more = true,
}) {
  const [count, updateTimer] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
  });
  let interval;

  useEffect(() => {
    if (timer) {
      countdown(timer);
    }
  }, []);

  const countdown = (countDownDate) => {
    if (countDownDate) {
      interval = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        let data = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
        if (distance < 0) {
          updateTimer({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
          clearInterval(interval);
        } else {
          updateTimer(data);
        }
      }, 1000);
    }
  };
  const renderMultiUsers = () => {
    return (
      <div className="c-card-multi">
        <ul className="c-card-multi-list">
          <li className="c-card-multi-list-item">
            <Image className="c-card-multi-img" src={imageUrl} />
            <h4 className="text">{name}</h4>
            <BsDot />
            <p className="secondary-text date">{role}</p>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="c-card">
      <div className="c-card-header">
        <h1 className="c-card-title"> {title} </h1>
        {more ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <AiOutlineEllipsis />
            </a>
          </Dropdown>
        ) : null}
      </div>
      <div className="c-card-body">
        <p className="c-card-date"> {date} </p>
        <CTags data={tags} />
        {type ? (
          <span className={`c-card-tag ${typeClass}`}> {type} </span>
        ) : null}
        <CMultipleImages data={users} />
        {imageUrl && name && role ? renderMultiUsers() : null}
        {imageUrl && name && role ? renderMultiUsers() : null}
      </div>
      <div className="c-card-footer">
        {url ? (
          <Button className="c-button" block>
            Go to Lesson
          </Button>
        ) : null}
        {timer ? (
          <div className="timer">
            <p>Meeting starting soon</p>
            <div className="counter">
              <div className="count days">
                <span>{count.days >= 0 ? count.days : 0}</span>
                <span>days</span>
              </div>
              <div className="count hours">
                <span>{count.hours >= 0 ? count.hours : 0}</span>
                <span>hours</span>
              </div>
              <div className="count minutes">
                <span>{count.minutes >= 0 ? count.minutes : 0}</span>
                <span>minutes</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default CCard;
