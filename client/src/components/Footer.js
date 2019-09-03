import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import style from "../config/style";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      Quotes (c) <a href="#">Github link</a>
    </div>
  );
};

const StyledFooted = styled(Footer)`
  width: 100%;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: ${props => style[props.theme].secondaryText};
  background-color: ${props => style[props.theme].bg};
  font-family: sans-serif;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  {}
)(StyledFooted);
