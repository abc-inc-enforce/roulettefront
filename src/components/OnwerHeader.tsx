import * as S from "./OnwerHeader.style";
import backIcon from "../assets/back.svg";
import { useNavigate, Link } from "react-router-dom";

const OnwerHeader = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <S.header>
        <ul>
          <li>
            <Link to="/table">매장관리</Link>
          </li>
          <li>
            <Link to="/menu">메뉴 관리</Link>
          </li>
        </ul>
        <S.backIcon src={backIcon} onClick={handleBackClick} />
      </S.header>
    </>
  );
};
export default OnwerHeader;
