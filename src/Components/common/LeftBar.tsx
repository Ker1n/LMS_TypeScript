import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { Homework } from "../../reducers/homeworks";
import { Lesson } from "../../reducers/lessons";
import { Profile as ProfileType } from "../../reducers/profile";
import ProfileComponent from './Profile';

type LeftBarProps = {
  profile: ProfileType;
  lessons: Lesson[];
  homeworks: Homework[];
};

const LeftBarWrapper = styled.div`
  
`;
const LeftBarProfileWrapper = styled.div`

`;
const ProgressWrapper = styled.div`

`;
const ProgressLabel = styled.div`

`;

type ProgressLineProps = { 
  width: string
}
const ProgressLine = styled.div`
  width: ${(props:ProgressLineProps)=> props.width ? props.width : 0 }
`;



const LeftBar = (props?: LeftBarProps) => {
  return (
    <LeftBarWrapper>
      <LeftBarProfileWrapper>
        <ProfileComponent />
        <ProgressWrapper> 
          <ProgressLabel>10%</ProgressLabel>
          <ProgressLine width={'10%'} />
        </ProgressWrapper>
      </LeftBarProfileWrapper>
    </LeftBarWrapper>
  );
};

const mapStateToProps = (state:any) => ({
  profile: state.profile,
  lessons: state.lessons,
  homeworks: state.homeworks,
});
export default connect(mapStateToProps, null)(LeftBar);
