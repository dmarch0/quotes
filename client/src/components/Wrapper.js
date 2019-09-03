import styled from "styled-components";
import { connect } from "react-redux";

import style from "../config/style";

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
  background-color: ${props => style[props.theme].bg};
  color: ${props => style[props.theme].mainText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-family: sans-serif;
  font-style: italic;
  transition: background-color 0.2s linear;
`;

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  {}
)(Wrapper);
