import LayoutBanner from "./banner/index";
import { ReactNode, useState } from "react";
import * as S from "./layoutStyle";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayouySidebar from "./sidebar/index";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const [isChanged, setIsChanged] = useState(false);

  return (
    <S.MainWrapper>
      <S.BodyWrapper>
        <LayouySidebar isChanged={isChanged} setIsChanged={setIsChanged} />
        <S.ColumnWrapper>
          <LayoutBanner />
          <S.Body>{props.children}</S.Body>
        </S.ColumnWrapper>
      </S.BodyWrapper>
    </S.MainWrapper>
  );
}
