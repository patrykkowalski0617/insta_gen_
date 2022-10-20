import styled from "styled-components";

export const ContentWrapper = styled.div`
  > p:last-of-type::after {
    content: "_";
  }
  p {
    margin: 0;
    padding-top: 15px;
  }
  padding: 0 35px;
  line-height: 1;
`;
