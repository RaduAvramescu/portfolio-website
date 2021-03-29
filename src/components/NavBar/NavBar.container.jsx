import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

import NavBarView from "./NavBar.view";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
      isVisible: true,
      isCollapsed: true,
    };
  }

  handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;
    const curScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > curScrollPos;
    this.setState({
      prevScrollPos: curScrollPos,
      isVisible,
    });

    if (!isVisible && !this.state.isCollapsed) this.handleCollapse();
  };

  handleCollapse = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    return (
      <NavBarView
        isVisible={this.state.isVisible}
        onScrollToTop={this.handleScrollToTop}
        onCollapse={this.handleCollapse}
        isCollapsed={this.state.isCollapsed}
      />
    );
  }
}
