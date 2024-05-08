import styled from "styled-components";
import { Consumer } from "../ProfileCard";

export const Avatar = ({ className = "" }) => (
  <Consumer>
    {({ profile }) => {
      const { avatar } = profile;
      return <img src={avatar.src} alt={avatar.alt} className={className} />;
    }}
  </Consumer>
);

export const StyledAvatar = styled(Avatar)`
  width: 87px;
  margin-bottom: 30px;
  border-radius: 100%;
`;
