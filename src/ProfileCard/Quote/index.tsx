import styled from "styled-components";
import { Consumer } from "../ProfileCard";

const P = ({ className = "" }) => (
  <Consumer>
    {({ profile }) => {
      const { quote } = profile;
      return <p className={className}>{quote}</p>;
    }}
  </Consumer>
);

export const Quote = styled(P)`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 28px;
`;
