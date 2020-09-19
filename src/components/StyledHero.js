import styled from "styled-components";
import defaultImg from "../images/design2.jpg";

const StyledHero = styled.header`
  min-height: 80vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
