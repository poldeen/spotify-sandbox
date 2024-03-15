import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useAppContext } from "../main";

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes("kanban");
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition },
  } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? "container-fluid" : "container"}>
      {/* <UserProvider>
        {(navbarPosition === "vertical" || navbarPosition === "combo") && (
          <NavbarVertical />
        )}
        <ProductProvider>
          <CourseProvider>
            <div className={classNames("content", { "pb-0": isKanban })}>
              <NavbarTop /> */}
      {/*------ Main Routes ------*/}
      <Outlet />
      {/*  {!isKanban && <Footer />}
            </div>
          </CourseProvider>
        </ProductProvider>
      </UserProvider>
      <ModalAuth /> */}
    </div>
  );
};

export default MainLayout;
