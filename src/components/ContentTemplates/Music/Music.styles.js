import styled from "styled-components";

export const ContentWrapper = styled.div`
  text-transform: uppercase;
  font-size: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  > :nth-child(1) {
    color: #ff0000;
  }
  > :nth-child(2) {
    color: #ff7700;
  }
  > :nth-child(3) {
    color: #ffff00;
  }
  .hide {
    color: #202420;
  }
`;

export const LinkToGifPage = styled.a`
  position: absolute;
  top: -12px;
  padding: 0 10px;
  background-color: #fff;
  text-decoration: none;
  color: #000;
  left: 55%;
`;
