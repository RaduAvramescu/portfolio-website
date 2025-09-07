import React, { useState, useEffect, useCallback } from "react";
import { animateScroll as scroll } from "react-scroll";

import NavBarView from "./NavBar.view";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const handleScroll = useCallback(() => {
    const curScrollPos = window.scrollY;
    const visible = prevScrollPos > curScrollPos;

    setPrevScrollPos(curScrollPos);
    setIsVisible(visible);

    if (!visible && !isCollapsed) {
      handleCollapse();
    }
  }, [prevScrollPos, isCollapsed, handleCollapse]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <NavBarView
      isVisible={isVisible}
      onScrollToTop={handleScrollToTop}
      onCollapse={handleCollapse}
      isCollapsed={isCollapsed}
    />
  );
};

export default NavBar;
