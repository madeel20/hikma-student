import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { useSelector } from "react-redux";
import { logout } from "../../store/actions/Users";

const routes = [
  {
    title: "Dashboard",
    // icon: 'icon-dashboard'
    icon: "icon-Home",
    path: "/dashboard",
  },
  {
    title: "My Subjects",
    icon: "icon-book",
    path: "my-subjects",
  },
  {
    title: "Homeworks",
    icon: "icon-homeworks",
    path: "homeworks",
  },
  {
    title: "Quizzes",
    icon: "icon-quizzes",
    path: "quizzes",
  },
  {
    title: "My Tutors",
    icon: "icon-user",
    path: "my-tutors",
  },
  {
    title: "Questions",
    icon: "icon-questions",
    path: "questions",
  },
  {
    title: "Schedule",
    icon: "icon-clock",
    path: "schedule",
  },
  {
    title: "Pre-made Lessons",
    icon: "icon-clock",
    path: "premade-lessons",
  },
  {
    title: "Messages",
    // icon: 'icon-email'
    icon: "icon-document",
    path: "messages",
  },
  {
    title: "Disputes",
    icon: "icon-clock",
    path: "disputes",
  },
  {
    title: "My Finances",
    icon: "icon-finance",
    path: "my-finances",
  },

  {
    title: "Lesson Signup",
    icon: "icon-document",
    path: "lesson-signup",
  },
  {
    title: "My Profile",
    // icon: 'icon-gear'
    icon: "icon-settings",
    path: "my-profile",
  },
  {
    title: "My Meetings",
    icon: "icon-alaram",
    path: "my-meetings",
  },
];

function SideMenu({ currentPathName }) {
  const checkActiveClass = (first, second) => {
    if (first.replace("/", "") === second.replace("/", "")) {
      return "active";
    } else {
      return "";
    }
  };

  const renderMenu = (menus) => {
    if (menus) {
      return (
        <ul>
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  to={menu.path}
                  class={`${checkActiveClass(currentPathName, menu.path)}`}
                >
                  <i className={menu.icon} />
                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
    return null;
  };
  const user = useSelector(({ users }) => users.user);

  const renderUserName = () => {
    if (user.details) {
      return `${user.details.firstName ? user.details.firstName : ""} ${
        user.details.lastName ? user.details.lastName : ""
      }`;
    }
    return "";
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => logout()} key="1">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="side-menu h-100 w-100">
      <div className="logo">
        <img
          src={require("../../assets/svgs/logo.svg")}
          alt="Himka"
          draggable="false"
        />
      </div>
      <div className="menu scroll-y">{renderMenu(routes)}</div>
      {Object.keys(user).length ? (
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="user d-flex flex-row">
            <img
              src={
                user && user.imageUrl
                  ? user.imageUrl
                  : require("../../assets/images/placeholder-user-image.png")
              }
              draggable="false"
            />
            <div className="user-info d-flex flex-column">
              <span>user</span>
              <span>{renderUserName()}</span>
            </div>
          </div>
        </Dropdown>
      ) : null}
    </div>
  );
}
export default SideMenu;
