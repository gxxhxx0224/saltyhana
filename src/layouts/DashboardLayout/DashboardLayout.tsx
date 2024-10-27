import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import CounselButton from "../../components/CounselButton/CounselButton"; // 고객센터 버튼 컴포넌트
import ChatModal from "../../components/ChatModal/ChatModal"; // 모달 컴포넌트 임포트
import Header from "../../components/Header/Header";
import { Main } from "./styles";
import { HeaderOffset } from "../../components/Header/styles";

export default function DashboardLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Main>
        <div style={{ flex: "none" }}>
          <HeaderOffset></HeaderOffset>
          <Sidebar />
        </div>
        <div style={{ flex: 1 }}>
          <HeaderOffset></HeaderOffset>
          <Outlet />
        </div>

        <div style={{}}>
          {/* 상담 모달 */}
          <CounselButton onClick={openModal} />
          <ChatModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </Main>
    </>
  );
}
