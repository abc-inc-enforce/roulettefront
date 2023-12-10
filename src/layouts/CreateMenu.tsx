import * as S from "./CreateMenu.style";
import Header from "../components/OnwerHeader";
import { useState, useEffect } from "react";
import React from "react";
import MenuData from "../data/menuData";
import compress from "image-compressor.js";

type MenuItem = {
  id: number;
  img: string;
  name: string;
  category: string;
  price: number;
};

const CreateMenu = () => {
  const menu = MenuData();
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [createMenu, setCreateMenu] = useState(false);
  const [Index, setIndex] = useState(1000);
  const reader = new FileReader();
  const [menuInfo, setMenuInfo] = useState<MenuItem>({
    id: 0,
    img: "",
    name: "",
    category: "",
    price: 0,
  });

  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    fetchMenuData();
  }, []);
  useEffect(() => {
    updateCategories();
  }, [menuData]);
  const updateCategories = () => {
    // menuData에서 중복을 제거하여 카테고리 업데이트
    const uniqueCategories = Array.from(
      new Set(menuData.map((item) => item.category)),
    );
    setCategories(uniqueCategories);
  };

  const fetchMenuData = () => {
    fetch("http://localhost:8080/menus")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("메뉴 데이터 가져오기 실패");
        }
      })
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error:", error));
  };
  const handleImgChange = (event: any) => {
    const img = event.target.files?.[0];
    if (img) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const compressedImage = base64String;

        // setMenuInfo((prevMenuInfo: MenuItem) => ({
        //   ...prevMenuInfo,
        //   img: compressedImage as string, // 또는 String(compressedImage)로 변환
        // }));
        setMenuInfo((prevMenuInfo) => ({
          ...prevMenuInfo,
          img: "img",
        }));
        console.log(base64String);
      };
      reader.readAsDataURL(img);
    }
  };

  const handleDelete = (idToDelete: number) => {
    fetch(`http://localhost:8080/menus/${idToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // 삭제 성공 시 메뉴 데이터를 다시 가져와서 상태를 업데이트합니다.
          return fetch("http://localhost:8080/menus");
        } else {
          throw new Error("메뉴 삭제 실패");
        }
      })
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error:", error));
  };
  const handleFormSubmit = () => {
    if (
      menuInfo.name !== "" &&
      menuInfo.category !== "" &&
      menuInfo.img !== ""
    ) {
      const newMenu = [...menuData, menuInfo];
      setMenuData(newMenu);
      console.log(menuInfo);
      console.log("new:", menuInfo);
      alert("등록되었습니다.");
      setcategoryValue(menuInfo.category);
      setCreateMenu(false);
      if (Index == 1000) {
        fetch("http://localhost:8080/menus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menuInfo),
        })
          .then((response) => {
            if (response.ok) {
              // 성공적으로 처리되면 메뉴 데이터를 다시 가져와서 상태를 업데이트합니다.
              return fetch("http://localhost:8080/menus");
            } else {
              throw new Error("메뉴 생성 실패");
            }
          })
          .then((response) => response.json())
          .then((data) => setMenuData(data))
          .catch((error) => console.error("Error:", error));
      } else {
        fetch(`http://localhost:8080/menus/${menuInfo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menuInfo),
        })
          .then((response) => {
            if (response.ok) {
              // 성공적으로 처리되면 메뉴 데이터를 다시 가져와서 상태를 업데이트합니다.
              return fetch("http://localhost:8080/menus");
            } else {
              throw new Error("메뉴 생성 실패");
            }
          })
          .then((response) => response.json())
          .then((data) => setMenuData(data))
          .catch((error) => console.error("Error:", error));
      }
      // backendSend;
    } else {
      alert("값이 누락 되었습니다.");
    }
  };
  const [categoryValue, setcategoryValue] = useState("메인");

  const creaetMenuPopup = () => {
    // const [categoryValue, setcategoryValue] = useState("메인");
    return (
      <>
        <S.createMenu>
          <S.popupheader>
            <h3>메뉴 등록</h3>
            <p onClick={() => setCreateMenu(false)}>X</p>
          </S.popupheader>
          <S.menuContainer>
            <S.menuImg>
              {menuInfo.img ? (
                <S.img
                  // src={`data:image/png;base64, ${menuInfo.img}`}
                  src={menuInfo.img}
                  alt="음식 이미지"
                />
              ) : (
                <p>음식 사진을 업로드 해주세요</p>
              )}
              <S.FileUpload onChange={handleImgChange} />
            </S.menuImg>
            <S.menuInfo>
              <S.inputInfo
                placeholder="메뉴 이름 입력"
                value={menuInfo.name}
                onChange={(event) =>
                  setMenuInfo({ ...menuInfo, name: event.target.value })
                }
              />
              <S.inputInfo
                placeholder="메뉴 카테고리 입력"
                value={menuInfo.category}
                onChange={(event) =>
                  setMenuInfo({ ...menuInfo, category: event.target.value })
                }
              />
              <S.inputInfo
                placeholder="메뉴 가격 입력"
                value={menuInfo.price}
                onChange={(event) =>
                  setMenuInfo({
                    ...menuInfo,
                    price: parseInt(event.target.value) || 0,
                  })
                }
              />
              <S.addBtn
                onClick={() => {
                  handleFormSubmit();
                }}
              >
                등록
              </S.addBtn>
            </S.menuInfo>
          </S.menuContainer>
        </S.createMenu>
      </>
    );
  };

  return (
    <S.body>
      <Header />
      {createMenu && creaetMenuPopup()}
      <S.sidebar>
        <S.categoryList>
          {categories.map((name, index) =>
            name === categoryValue ? (
              <S.category
                onClick={() => setcategoryValue(name)}
                key={index}
                color="white"
              >
                {name}
              </S.category>
            ) : (
              <S.category onClick={() => setcategoryValue(name)} key={index}>
                {name}
              </S.category>
            ),
          )}
        </S.categoryList>
      </S.sidebar>

      <S.barlist>
        {menuData
          .slice()
          .reverse()
          .map(({ name, category }, index) =>
            category === categoryValue ? (
              <>
                <S.bar
                  onClick={() => {
                    console.log(index);
                    index = menuData.length - 1 - index;
                    const menuId = menuData[index].id;
                    setIndex(index);
                    setMenuInfo({
                      id: menuId,
                      img: menuData[index].img,
                      name: menuData[index].name,
                      category: menuData[index].category,
                      price: menuData[index].price,
                    });
                    setCreateMenu(true);
                  }}
                >
                  <S.bartext>{name}</S.bartext>
                  <S.Btn
                    onClick={(e) => {
                      const updatedIndex = menuData.length - 1 - index;
                      const menuId = menuData[updatedIndex].id;
                      e.stopPropagation();
                      handleDelete(menuId);
                    }}
                  >
                    삭제
                  </S.Btn>
                </S.bar>
              </>
            ) : null,
          )}
      </S.barlist>
      <S.addBtn
        onClick={() => {
          setMenuInfo({ id: 0, img: "", name: "", category: "", price: 0 });
          setIndex(1000);
          setCreateMenu(true);
        }}
        color="ss"
      >
        추가
      </S.addBtn>
    </S.body>
  );
};

export default CreateMenu;
