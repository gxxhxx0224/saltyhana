import { Outlet } from "react-router-dom";

import { Main } from "../DashboardLayout/styles";
import Header from "../../components/Header/Header";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <Main>
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </Main>
    </>
  );
}
