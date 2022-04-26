import { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazy-load";
export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const [isOpen, setIsOpen] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjNfMjQy/MDAxNTYxMjU0Mzg5NjA3.zecJboIUyDHafll9jvCpxX2h-8r4LnR1f9zQFhuUGRog.m_za4cPanmThDbDFJmNavCxewLA0nyLEPJftTlgNVnQg.JPEG.sgjjojo/jpeg_%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg?type=w800";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  const changeIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
      <button onClick={changeIsOpen}>레이지로드 껏다키기</button>
      {isOpen ? (
        <></>
      ) : (
        <div>
          <div className="filler" />
          <LazyLoad height={762} offsetVertical={300}>
            <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={683} offsetTop={200}>
            <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={730} offsetHorizontal={280}>
            <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad
            height={720}
            onContentVisible={() =>
              console.log("look ma I have been lazyloaded!")
            }
          >
            <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
          </LazyLoad>
          <div className="filler" />
        </div>
      )}
    </>
  );
}
