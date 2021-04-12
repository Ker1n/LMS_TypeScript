import React from "react";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Sign from "./Components/sign/Sign";
import PrivateRoute from "./Components/common/PrivetRoute";
import { Provider } from "react-redux";

import store from "./store/index";
import { Lessons } from "./Components/lessons/Lessons";
import { Calendar } from "./Components/calendar/Calendar";
import { HomeWorks } from "./Components/homeworks/HomeWorks";

const MENU = [
  {
    id: 1,
    title: "Все занятия",
    path: "/lessons",
    component: Lessons,
  },
  {
    id: 2,
    title: "Календарь",
    path: "/calendar",
    component: Calendar,
  },
  {
    id: 3,
    title: "Домашние задания",
    path: "/homeworks",
    component: HomeWorks,
  },
];

export const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            {MENU.map(({ path, component,id }) => {
              return <PrivateRoute path={path} component={component} key={id} />;
            })}
            <Route path="/" exact render={() => <Redirect to="/calendar" />} />
            <Route path="/sign" component={Sign} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
