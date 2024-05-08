import "./App.css";
import ProfileCardStyled from "./ProfileCard";
import type { TProfile } from "./ProfileCard";

const profileData: TProfile["profile"] = {
  avatar: {
    src: "./avatar-jessica.jpeg",
    alt: "Jessica Randall Profile Photo",
  },
  name: "Jessica Randall",
  location: "London, United Kingdom",
  quote: '"Front-end developer and avid reader."',
  links: [
    {
      src: "#",
      title: "GitHub",
    },
    {
      src: "#",
      title: "Frontend Mentor",
    },
    {
      src: "#",
      title: "LinkedIn",
    },
    {
      src: "#",
      title: "Twitter",
    },
    {
      src: "#",
      title: "Instagram",
    },
  ],
};

function App() {
  return (
    <ProfileCardStyled profile={profileData}>
      <ProfileCardStyled.ProfileAvatar />
      <ProfileCardStyled.ProfileName />
      <ProfileCardStyled.ProfileLocation />
      <ProfileCardStyled.ProfileQuote />
      <ProfileCardStyled.ProfileLinks />
    </ProfileCardStyled>
  );
}

export default App;
