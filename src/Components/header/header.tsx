import React from "react";
import styled from "styled-components";
import ProfileComponent from "../common/Profile";

const HEADER_HEIGHT1 = 90;

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT1}px;
  background-color: #fff;
`;
const HeaderTitle = styled.h2``;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>Education LMS</HeaderTitle>
        <ProfileComponent />
      </HeaderWrapper>
    );
  }
}
