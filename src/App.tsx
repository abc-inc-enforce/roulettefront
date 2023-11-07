import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import TableManage from "./pages/TableManage";
import CreateMenu from "./pages/CreateMenu";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TableManage />} />
            <Route path="/menu" element={<CreateMenu />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      {/*<h1>주문테이블</h1> */}
    </div>
  );
}

export default App;
