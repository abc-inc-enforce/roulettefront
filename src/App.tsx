import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import TableManage from "./pages/TableManage";
import CreateMenu from "./pages/CreateMenu";
import Home from "./pages/HomeLayout";

import PriceUpgrade from "./pages/PriceUpgrade";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/table" element={<TableManage />} />
            <Route path="/menu" element={<CreateMenu />} />
            <Route path="/upgrade" element={<PriceUpgrade />} />
            <Route path="/order" element={<Order />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
