import React from "react";
import UserList from "../modules/UserList";
import Header from "../modules/HeaderMod";
import Sidebar from "../modules/SidebarMod";
import Graphic from "../modules/Graphic/Graphic";

const AdminPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Graphic />
      <UserList />
    </div>
  );
};

export default AdminPage;
