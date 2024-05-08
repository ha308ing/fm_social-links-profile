import styled from "styled-components";
import { Consumer } from "../ProfileCard";

const H2 = ({ className = "" }) => (
  <Consumer>
    {({ profile }) => {
      const { location } = profile;
      return <h2 className={className}>{location}</h2>;
    }}
  </Consumer>
);

export const Location = styled(H2)`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 31px;
  color: var(--green);
  letter-spacing: 0.072px;
`;
