import styled from "styled-components";
import { Consumer } from "../ProfileCard";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 17px;
  letter-spacing: 0.135px;
`;

const Link = styled.a`
  display: block;
  font-weight: 600;
  width: 100%;
  background-color: var(--grey);
  padding: 15px 0;
  border-radius: 8px;
  box-shadow: 0 0 2px var(--grey);
  transition: all ease-in 0.3s;

  &:link,
  &:active,
  &:visited,
  &:hover {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: var(--darkGrey);
    background-color: var(--green);
  }
`;

export const Links = () => (
  <Consumer>
    {({ profile }) => {
      const { links } = profile;

      return (
        <List>
          {links.map((l, i) => (
            <li key={l.src + i}>
              <Link href={l.src}>{l.title}</Link>
            </li>
          ))}
        </List>
      );
    }}
  </Consumer>
);
