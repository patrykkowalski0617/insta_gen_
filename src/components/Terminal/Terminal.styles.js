import styled from "styled-components";

export const TerminalWrapper = styled.div`
  text-transform: lowercase;
  background-color: #202420;
  color: #01d301;
  width: 392px;
  height: 392px;
  font-family: "VT323", monospace;
  padding: 22px 35px 15px 35px;
  margin: 10px auto;
  position: relative;
  ::before {
    content: ">> Terminal v5.18";
    height: 22px;
    background-color: #333a33;
    margin-left: -10px;
    font-family: sans-serif;
    font-size: 12px;
    color: #8ea38e;
    position: absolute;
    right: 0px;
    left: 10px;
    top: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 0 17px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  ::after {
    content: "x";
    position: absolute;
    font-family: sans-serif;
    font-size: 10px;
    color: #8ea38e;
    text-align: center;
    width: 14px;
    height: 14px;
    border: 1px solid;
    right: 4px;
    top: 3px;
    z-index: 1;
  }
`;
