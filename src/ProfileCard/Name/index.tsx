import { styled } from "styled-components";
import { Consumer } from "../ProfileCard";

const H1 = ({ className = "" }) => (
  <Consumer>
    {({ profile }) => {
      const { name } = profile;
      return <h1 className={className}>{name}</h1>;
    }}
  </Consumer>
);

export const Name = styled(H1)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 13px;
`;
