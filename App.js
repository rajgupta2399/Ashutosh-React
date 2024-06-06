import React from "react";
import Header from "./Header";


const parent = <h1>hello</h1>; // JSX - javascript XML

// Class Components
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Class Components</h1>
        <Header propsName="Props Passing"/>
      </div>
    );
  }
}

export default App;
{
  /*
function Component 
const App1 = () =>{
    return(
        <>
            <h1>Hello Function Components</h1>
        </>
    )
}

export default App1;
*/
}

