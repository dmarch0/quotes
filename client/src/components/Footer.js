import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import style from "../config/style";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Quotes &copy; 2019. Made with React. <a href="#">GitHub link</a>
      </p>
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
  }
  p {
    margin: 0;
  }
`;

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  {}
)(StyledFooted);
