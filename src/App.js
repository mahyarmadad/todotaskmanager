import "./App.scss";
import Calander from "./component/Calander";
import LeftMenu from "./component/LeftMenu";
import MainTop from "./component/MainTop";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <div>
        <MainTop />
        <Calander />
      </div>
    </div>
  );
}

export default App;
