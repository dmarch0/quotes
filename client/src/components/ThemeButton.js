import styled from "styled-components";

const ThemeButton = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.bg};
  border: none;
  border-radius: 3px;
  display: block;
  padding: 0;
  margin-left: 5px;
  margin-right: 5px;
`;

export default ThemeButton;
