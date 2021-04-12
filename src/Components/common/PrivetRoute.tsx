import React from "react";

import { Redirect, Route } from "react-router-dom";
//import Sign from "../sign/Sign";
import Header from "../header/header";
import LeftBar from "./LeftBar";
import styled from "styled-components";

export const HEADER_HEIGHT = 90;

const InnerWrapper = styled.div`
  flex: 1;
`;

const OuterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5f8fa;
`;
const RouterWrapper = styled.div`
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
`;

const PrivateRoute = (props: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <OuterWrapper>
        <LeftBar />
        <InnerWrapper>
          <Header />
          <RouterWrapper>
            <Route {...props} />
          </RouterWrapper>
        </InnerWrapper>
      </OuterWrapper>
    );
  }
  return <Redirect to="sign" />;
};

export default PrivateRoute;
