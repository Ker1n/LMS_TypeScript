import React from "react";
import {connect} from 'react-redux';
import {History} from 'history';

import {SignWrapper, SignInnerWrapper, SignInput, SignButton} from './SignStyled';
import { UPDATE_PROFILE } from "../../store/types";


type SignProps = { 
    history: History
    updateProfile(name:string):void
}
const mapDispatchToProps = (dispatch: any) => ({
    updateProfile(name:string) { 
        dispatch({ 
            type: UPDATE_PROFILE,
            profile: { 
                name
            }
        })
    }
})

const mapStateToProps = (state: any) => ({ 

})

export default connect(mapStateToProps, mapDispatchToProps)(class Sign extends React.Component<SignProps> {
  state = {
    name: "",
  };

  changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    this.setState({
      name: e.target.value,
    });
  };

  enterToApplication = () => {
      if(!this.state.name?.length) { 
          alert('enter your name')
      }
      debugger;
      this.props.updateProfile(this.state.name);
      localStorage.setItem("token", "there is a token ");
      this.props.history.push('/calendar')
  }

  render() {
    return (
      <SignWrapper>
        <SignInnerWrapper>
          <SignInput 
            value={this.state.name} 
            onChange={this.changeName} 
            placeholder='enter name' 
          />
          <SignButton onClick={this.enterToApplication}>Enter</SignButton>
        </SignInnerWrapper>
      </SignWrapper>
    );
  }
});
