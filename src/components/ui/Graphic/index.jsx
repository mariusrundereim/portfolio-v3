import { useState, useEffect } from "react";
import graphicDesktop from "/graphic/gfx-desktop-0.svg";
import graphicMobile from "/graphic/gfx-mobile-0.svg";

function GraphicDecoration() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <img
          src={isDesktop ? graphicDesktop : graphicMobile}
          alt="Graphic Decoration"
        />
      </div>
    </>
  );
}

export default GraphicDecoration;
