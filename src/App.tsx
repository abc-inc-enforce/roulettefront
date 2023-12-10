import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import TableManage from "./pages/TableManage";
import CreateMenu from "./pages/CreateMenu";
import Home from "./pages/HomeLayout";
import Order from "./pages/Order";
import Roulette from "./pages/RouletteLayout";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/table" element={<TableManage />} />
            <Route path="/menu" element={<CreateMenu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/" element={<Home />} />
            <Route path="/roulette" element={<Roulette />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
