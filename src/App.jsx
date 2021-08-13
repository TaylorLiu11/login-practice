import React, { useState } from 'react';
import { Login, Register } from './components/login';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.add("right");
      this.rightSide.classList.remove("left");
    }
    this.setState(preState => ({ isLogginActive: !preState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "註冊" : "登入";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (<Login containerRef={(ref) => this.current = ref} />)}
            {!isLogginActive && (<Register containerRef={(ref) => this.current = ref} />)}
            <RightSide current={current} currentActive={currentActive} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div className="right-side right" ref={props.containerRef} onClick={props.onClick} >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div >
  );
};

export default App;
