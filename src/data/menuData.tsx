import { useState, useEffect } from "react";

type MenuItem = {
  img: string;
  name: string;
  category: string;
  price: number;
};

const MenuData = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = () => {
    // 서버에서 메뉴 데이터를 가져오는 비동기 요청
    fetch("http://localhost:8080/menus")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("메뉴 데이터 가져오기 실패");
        }
      })
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error:", error));
  };
  return menu;
};

export default MenuData;
