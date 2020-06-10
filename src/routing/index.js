import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  Dashboard,
  Schedule,
  Quizzes,
  Questions,
  MySubjects,
  MyTutors,
  MyProfile,
  MyMeetings,
  MyFinances,
  Messages,
  Homeworks,
  PremadeLessons,
  Disputes,
  LessonSignup,
} from "../pages";
import { SideMenu } from "../uiComponents";

function Auth() {
  return (
    <Fragment>
      <Switch>
        <Route
          path="*"
          render={() => (
            <div>
              <h1>Not Found</h1>
            </div>
          )}
        />
      </Switch>
    </Fragment>
  );
}

const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/my-tutors",
    component: MyTutors,
  },
  {
    path: "/homeworks",
    component: Homeworks,
  },
  {
    path: "/my-subjects",
    component: MySubjects,
  },
  {
    path: "/my-meetings",
    component: MyMeetings,
  },
  {
    path: "/lesson-signup",
    component: LessonSignup,
  },
  {
    path: "/schedule",
    component: Schedule,
  },
  {
    path: "/my-finances",
    component: MyFinances,
  },
  {
    path: "/questions",
    component: Questions,
  },
  {
    path: "/quizzes",
    component: Quizzes,
  },
  {
    path: "/disputes",
    component: Disputes,
  },
  {
    path: "/messages",
    component: Messages,
  },
  {
    path: "/premade-lessons",
    component: PremadeLessons,
  },
  {
    path: "/my-profile",
    component: MyProfile,
  },
];

function Root(props) {
  return (
    <Fragment>
      <div className="body-with-side-menu d-flex flex-row h-100">
        <div className="side-menu-container">
          <SideMenu
            currentPathName={
              props && props.location ? props.location.pathname : ""
            }
          />
        </div>
        <div className="body-container scroll-y">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect from="/" to="/dashboard" />
            <Route
              path="*"
              render={() => (
                <div>
                  <h1>Not Found</h1>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export { Auth, Root };
