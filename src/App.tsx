import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Table from "./pages/Table";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      {/*<h1>주문테이블</h1> */}
    </div>
  );
}

export default App;
