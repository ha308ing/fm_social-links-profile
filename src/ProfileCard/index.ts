import { ProfileCardStyled } from "./ProfileCard";
export type { TProfile } from "./ProfileCard";
import { StyledAvatar } from "./Avatar";
import { Links } from "./Links";
import { Name } from "./Name";
import { Quote } from "./Quote";
import { Location } from "./Location";

export default Object.assign(ProfileCardStyled, {
  ProfileAvatar: StyledAvatar,
  ProfileName: Name,
  ProfileQuote: Quote,
  ProfileLocation: Location,
  ProfileLinks: Links,
});
