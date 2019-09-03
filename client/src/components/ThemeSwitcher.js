import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import cn from "classnames";

import style from "../config/style";
import { switchTheme } from "../actions/themeActions";
import ThemeButton from "../components/ThemeButton";

const ThemeSwitcher = ({ className, switchTheme, theme }) => {
  const [open, toggle] = useState(false);
  return (
    <div className={cn(className, { open })} onClick={() => toggle(!open)}>
      <div className="button-placeholder" />
      <div className="buttons-container">
        {Object.keys(style).map(item => {
          return item !== theme ? (
            <ThemeButton
              theme={style[item]}
              key={item}
              open={open}
              onClick={() => switchTheme(item)}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

const StyledThemeSwitcher = styled(ThemeSwitcher)`
  box-sizing: border-box;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  padding: 10px 0;
  background-color: ${props => style[props.theme].secondaryColor};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in;
  overflow: hidden;
  &.open {
    width: ${() => (Object.keys(style).length - 1) * 50 + 10 + "px"};
    .buttons-container {
      transform: translate(0px, 0px);
    }
    .button-placeholder {
      transform: translate(-100px, 0px);
    }
  }
  .buttons-container {
    transition: all 0.5s ease-in;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(100px, 0px);
  }
  .button-placeholder {
    transition: all 0.2s ease-in;
    position: absolute;
    background-color: ${props => style[props.theme].bg};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 15px;
    top: 15px;
    transform: translate(0px, 0px);
  }
`;

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  { switchTheme }
)(StyledThemeSwitcher);
