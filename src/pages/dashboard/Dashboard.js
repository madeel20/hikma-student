import React from "react";
import { CNav, CCard, LineGraph } from "../../uiComponents";
import { Image } from "react-bootstrap";
import { Dropdown, Menu } from "antd";
import Slider from "react-slick";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MappedElement } from "../../utils/helper";
import { hoursLeft, announcement } from "./data";
import { connect } from "react-redux";
import { RiTimeLine } from "react-icons/ri";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function Dashboard(props) {
  const { lessons, events, notifications, tutors } = props;

  const renderLessons = (array) => {
    if (array) {
      return (
        <Slider className="c-section-slider" {...settings}>
          {array.map((obj, index) => {
            return (
              <CCard
                key={index}
                title={obj.title}
                date={obj.date}
                type={obj.type}
                typeClass={obj.typeClass}
                users={obj.users}
                url="/"
              />
            );
          })}
        </Slider>
      );
    }
    return null;
  };

  const renderEvents = (array) => {
    if (array) {
      return (
        <Slider className="c-section-slider" {...settings}>
          {array.map((obj, index) => {
            return (
              <CCard
                key={index}
                title={obj.title}
                date={obj.date}
                type={obj.type}
                tags={["Curriculum", "Grade", "Subject"]}
                name={obj.name}
                role={obj.role}
                imageUrl={obj.imageUrl}
                typeClass=""
                timer={obj.createdAt}
              />
            );
          })}
        </Slider>
      );
    }
    return null;
  };
  const renderNotification = (array) => {
    if (array) {
      return (
        <div className="notifications">
          <ul className="list notification-list">
            <MappedElement
              data={array}
              renderElement={(obj, index) => {
                return (
                  <li key={index} className="list-item notification-list-item">
                    <h4 className="text title">{obj.title}</h4>
                    <p className="secondary-text date">{obj.date}</p>
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
      );
    }
    return null;
  };

  const renderHoursLeft = () => {
    return (
      <div className="hours">
        <ul className="basic-section-list">
          <MappedElement
            data={hoursLeft}
            renderElement={(obj, index) => {
              return (
                <li key={index} className="basic-section-list-item">
                  <RiTimeLine className="basic-section-icon" />
                  <h4 className="text title">
                    {obj.hours}-{obj.subject}
                  </h4>
                  <p className="secondary-text date">{obj.postTime}</p>
                </li>
              );
            }}
          />
        </ul>
      </div>
    );
  };

  const renderAnnouncements = () => {
    return (
      <div className="announcement">
        <ul className="basic-section-list">
          <MappedElement
            data={announcement}
            renderElement={(obj, index) => {
              return (
                <li key={index} className="basic-section-list-item">
                  <RiTimeLine className="basic-section-icon" />
                  <h4 className="text title">{obj.title}</h4>
                  <p className="secondary-text date">{obj.postTime}</p>
                </li>
              );
            }}
          />
        </ul>
      </div>
    );
  };
  const renderTutors = (array) => {
    if (array) {
      return (
        <div className="tutors">
          <ul className="tutor-list">
            <MappedElement
              data={array}
              renderElement={(obj, index) => {
                return (
                  <li key={index} className="tutor-list-item">
                    <Image src={obj.imageUrl} />
                    <h4 className="title">{obj.name}</h4>
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
      );
    }
    return null;
  };

  return (
    <div className="dashboard body-container-padding">
      <CNav />

      <div className="flex-container">
        <div className="flex-left">
          <div className="c-section mb-4">
            <h6 className="c-section-title">Upcoming Lessons</h6>
            {renderLessons(lessons)}
          </div>
          <div className="c-section mb-4">
            <h6 className="c-section-title">Upcoming Events</h6>
            {renderEvents(events)}
          </div>
          <div className="c-section mb-4">
            <h6 className="c-section-title">Notifications</h6>
            {renderNotification(notifications)}
          </div>
        </div>
        <div className="flex-right">
          <div className="c-section mb-5">
            <h6 className="c-section-title">Hours Left</h6>
            {renderHoursLeft()}
          </div>

          <div className="c-section mb-5">
            <h6 className="c-section-title">Announcements</h6>
            {renderAnnouncements()}
          </div>

          <div className="c-section">
            <h6 className="c-section-title">My Tutors</h6>
            {renderTutors(tutors)}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToState = ({ dashboard, notifications, myTutors }) => {
  return {
    lessons: dashboard.lessons,
    events: dashboard.events,
    notifications: notifications.notifications,
    tutors: myTutors.tutors,
  };
};
const mapDispatchToProps = {};
export default connect(mapDispatchToState, mapDispatchToProps)(Dashboard);
