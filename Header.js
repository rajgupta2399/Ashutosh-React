import React from "react";

class Header extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { message: "stateless Class components" };
    } 
    
    handleClick() {
      this.setState({ message: "state Changed" });
      }
      
      render() {
    return (
      <header>
        <h2>
          This is the Header {this.state.message} <br />
        </h2>
        <button onClick={()=>{this.handleClick()}}>Click here</button>
      </header>
    );
  }
}

export default Header;
