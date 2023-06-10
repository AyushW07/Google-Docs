import { Fragment } from "react";
import "./App.css";
import FunctionMenus from "./Components/organism/Function Menus/FunctionMenus";
import MenuBar from "./Components/organism/MenuBar/MenuBar";
import TextArea from "./Components/organism/TextArea/TextArea";

function App() {
  return (
    <Fragment>
      <div>
        <MenuBar />
        <FunctionMenus />
      </div>
      <TextArea />
    </Fragment>
  );
}

export default App;
