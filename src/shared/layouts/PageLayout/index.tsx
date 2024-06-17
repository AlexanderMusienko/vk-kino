import { FC } from "react";
import { Navbar } from "@/domains/app/components/Navbar";
import { Outlet } from "react-router-dom";
import { PageLayoutContainer } from "./ui";

type TPageLayoutProps = {};

export const PageLayout: FC<TPageLayoutProps> = () => {
  return (
    <PageLayoutContainer>
      <Navbar />
      <Outlet />
    </PageLayoutContainer>
  );
};
