import LayoutHeader from "./header/index";
import LayoutBanner from "./banner/index";
import LayoutNavigation from "./navigation/index";
import LayoutFooter from "./footer/index";
import LayoutSidebar from "./sidebar";
import { ReactNode } from "react";
import * as S from "./layoutStyle";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADER = ["12-05-modal-refactoring"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADER.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <S.BodyWrapper>
        <LayoutSidebar />
        <S.Body>{props.children}</S.Body>
      </S.BodyWrapper>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
