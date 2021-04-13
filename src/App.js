import Calander from "./component/Calander";
import LeftMenu from "./component/LeftMenu";
import MainTop from "./component/MainTop";
import "./App.scss";

function App() {
  return (
    <div className="main">
      <LeftMenu />
      <div>
        <MainTop />
        <Calander />
      </div>
    </div>
  );
}

export default App;
