import React from "react";
import { connect } from "react-redux";
//import { Profile } from "../../reducers/profile";
import styled from "styled-components";

const DEFAULT_AVATAR =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

type ProfileAvatarProps = {
  src: string;
};

const ProfileWrapper = styled.div`
  height: 100$
`;
const ProfileAvatar = styled.div`
  background-image: url(${(props: ProfileAvatarProps) => props.src});
`;

const ProfileName = styled.div`
`;

function ProfileComponent(props: any) {
  console.log(props)
  return (
    <>
      <ProfileWrapper>
        <ProfileAvatar src={props.avatar || DEFAULT_AVATAR} />
        <ProfileName>{props.name}</ProfileName>
      </ProfileWrapper>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    ...state.profile,
  };
};

export default connect(mapStateToProps, null)(ProfileComponent);
