import Calander from "./component/Calander";
import LeftMenu from "./component/LeftMenu";
import MainTop from "./component/MainTop";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <LeftMenu />
        <div>
          <MainTop />
          <Calander />
        </div>
      </div>
    </Provider>
  );
}

export default App;
