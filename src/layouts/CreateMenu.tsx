import * as S from "./CreateMenu.style";
import Header from "../components/OnwerHeader";
import menu, { getBase64FromImage } from "../data/menu";
import { useState } from "react";
import React from "react";

type MenuItem = {
  img: string;
  name: string;
  category: string;
  price: number;
};

const CreateMenu = () => {
  const [menuData, setMenuData] = useState(menu);
  const [createMenu, setCreateMenu] = useState(false);
  const [Index, setIndex] = useState(1000);
  const reader = new FileReader();
  const [menuInfo, setMenuInfo] = useState<MenuItem>({
    img: "",
    name: "",
    category: "",
    price: 0,
  });
  const handleImgChange = (event: any) => {
    const img = event.target.files?.[0];
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setMenuInfo((prevMenuInfo) => ({
          ...prevMenuInfo,
          img: base64String,
        }));
        console.log(base64String);
      };
      reader.readAsDataURL(img);
    }
  };

  const handleDelete = (indexToDelete: number) => {
    setMenuData((prevMenuData) => {
      const updatedMenuData = prevMenuData.filter(
        (item, index) => index !== prevMenuData.length - 1 - indexToDelete,
      );

      // backendSend();
      return updatedMenuData;
    });
  };
  const handleFormSubmit = () => {
    if (
      menuInfo.name !== "" &&
      menuInfo.category !== "" &&
      menuInfo.price &&
      menuInfo.img !== ""
    ) {
      const newMenu = [...menuData, menuInfo];
      setMenuData(newMenu);
      console.log(menuInfo);
      alert("등록되었습니다.");
      setCreateMenu(false);
      // backendSend;
    } else {
      alert("값이 누락 되었습니다.");
    }
  };

  const creaetMenuPopup = () => {
    return (
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
                  price: parseInt(event.target.value),
                })
              }
            />
            <S.addBtn
              onClick={() => {
                handleFormSubmit();
                if (Index !== 1000) {
                  console.log(Index);
                  handleDelete(Index);
                  setIndex(1000);
                }
              }}
            >
              등록
            </S.addBtn>
          </S.menuInfo>
        </S.menuContainer>
      </S.createMenu>
    );
  };

  const backendSend = () => {
    fetch("앤드포인트", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuData),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  };

  return (
    <S.body>
      <Header />
      {createMenu && creaetMenuPopup()}
      <S.barlist>
        {menuData
          .slice()
          .reverse()
          .map(({ name }, index) => (
            <>
              <S.bar
                onClick={() => {
                  setCreateMenu(true);
                  setIndex(index + 1);
                  index = menuData.length - 1 - index;
                  setMenuInfo({
                    img: menuData[index].img,
                    name: menuData[index].name,
                    category: menuData[index].category,
                    price: menuData[index].price,
                  });
                }}
              >
                <S.bartext>{name}</S.bartext>
                <S.Btn
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                >
                  삭제
                </S.Btn>
              </S.bar>
            </>
          ))}
      </S.barlist>
      <S.addBtn
        onClick={() => {
          setCreateMenu(true);
          setMenuInfo({ img: "", name: "", category: "", price: 0 });
        }}
      >
        추가
      </S.addBtn>
    </S.body>
  );
};

export default CreateMenu;
