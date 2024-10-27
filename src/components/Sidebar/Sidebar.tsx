import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./styles";
import sidebar_home from "../../images/sidebar_home.png";
import sidebar_calendar from "../../images/sidebar_calendar.png";
import sidebar_goal from "../../images/sidebar_goal.png";
import sidebar_assets from "../../images/sidebar_assets.png";
import sidebar_recommend from "../../images/sidebar_recommend.png";
import sidebar_reservation from "../../images/sidebar_reservation.png";
import sidebar_setting from "../../images/sidebar_setting.png";

import ModalManager from "../Modals/ModalManager";

interface INav {
  to: string;
  imgSrc: string;
  displayName: string;
}

interface ModalManagerType {
  openModal: (modalName: string) => void;
  closeModal: () => void;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const modalManagerRef = useRef<ModalManagerType>(null);

  const NavItems: INav[] = [
    { to: "/home", imgSrc: sidebar_home, displayName: "Home" },
    { to: "/calendar", imgSrc: sidebar_calendar, displayName: "캘린더" },
    { to: "/goal", imgSrc: sidebar_goal, displayName: "목표 설정" },
    { to: "/assets", imgSrc: sidebar_assets, displayName: "개인 자산" },
    {
      to: "/recommend",
      imgSrc: sidebar_recommend,
      displayName: "상품 추천",
    },
  ];

  const handleOpenModal = () => {
    modalManagerRef.current?.openModal("창구예약");
  };

  const handleLogout = () => {
    // 로컬 스토리지에서 사용자 정보 가져오기
    const userInfoStr = localStorage.getItem("userInfo");
    if (userInfoStr) {
      const userInfo = JSON.parse(userInfoStr);

      // isLoggedIn을 false로 변경
      userInfo.isLoggedIn = false;

      // 변경된 정보를 다시 로컬 스토리지에 저장
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    // 루트 페이지로 이동
    navigate("/");
  };

  return (
    <styled.SidebarContainer>
      <styled.MenuSection>
        {NavItems.map((v, i) => (
          <styled.NavItemLink key={i} to={v.to}>
            {({ isActive }) => (
              <styled.MenuItem className={isActive ? "active" : ""}>
                <styled.IconImg src={v.imgSrc} />
                <span>{v.displayName}</span>
              </styled.MenuItem>
            )}
          </styled.NavItemLink>
        ))}
        <styled.MenuItem onClick={handleOpenModal}>
          <styled.ReservationIcon src={sidebar_reservation} />
          <span>창구 예약</span>
        </styled.MenuItem>
        <ModalManager ref={modalManagerRef} />
      </styled.MenuSection>
      <styled.SettingsSection>
        <styled.MenuItem onClick={handleLogout}>
          <styled.SettingIcon src={sidebar_setting} />
          <span style={{ color: "#b1b1b1" }}>로그아웃</span>
        </styled.MenuItem>
      </styled.SettingsSection>
    </styled.SidebarContainer>
  );
}
