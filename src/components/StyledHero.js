import styled from "styled-components";

const StyledHero = styled.header`
  min-height: calc(85vh - 66px);
  background: url(${(props) => props.img}) fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default StyledHero;
