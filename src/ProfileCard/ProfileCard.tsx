import styled from "styled-components";
import type { PropsWithChildren } from "react";
import { createContext } from "react";

export type TProfile = {
  profile: {
    avatar: {
      src: string;
      alt: string;
    };
    name: string;
    location: string;
    quote: string;
    links: Array<{
      src: string;
      title: string;
    }>;
  };
};

export const ProfileContext = createContext<TProfile>({
  profile: {
    avatar: { src: "", alt: "no avatar" },
    links: [],
    location: "no location",
    name: "no name",
    quote: "no quote",
  },
});

export const { Provider, Consumer } = ProfileContext;

const ProfileCard = (
  props: PropsWithChildren<TProfile> & { className?: string }
) => (
  <Provider value={{ profile: props.profile }}>
    <section className={props.className}>{props.children}</section>
  </Provider>
);

export const ProfileCardStyled = styled(ProfileCard)`
  padding: 24px;
  border-radius: 10px;
  background-color: var(--darkGrey);
  box-shadow: 2px 2px 2px var(--darkGrey);
  width: 328px;
  @media screen and (min-width: 1440px) {
    width: 385px;
    padding: 40px;
  }
`;
