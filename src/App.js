import React, { Component } from "react";
import Header from "./components/Header";
import "./styles.css";
import Team from "./components/Team";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Team />
      </div>
    );
  }
}
export default App;
