import styled from "styled-components";




export const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c0dbba;
  width: 100vw;
  height: 100vh;
`;
export const SignInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;

`;
export const SignInput = styled.input`
    margin: 50px 0px 50px 0px;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    -webkit-appearance: none;
    border-color: #282c34;
    &:focus { 
      outline: none;
    }
`;
export const SignButton = styled.div`
  width: 80%;
  height: 50px;
  background-color: #ff7e62;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s background-color;
  &:hover {
    background-color: #b85c49;
  }
`;
