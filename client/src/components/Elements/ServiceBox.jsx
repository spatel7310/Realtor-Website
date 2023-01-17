import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import InstagramIcon from "../../assets/svg/Services/InstagramIcon";
import ZillowIcon from "../../assets/svg/Services/ZillowIcon";
import YoutubeIcon from "../../assets/svg/Services/YoutubeIcon";
import KwIcon from "../../assets/svg/Services/KwIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "zillow":
      getIcon = <ZillowIcon/>;
      break;
    case "kw":
      getIcon = <KwIcon />;
      break;
    case "instagram":
      getIcon = <InstagramIcon />;
      break;
    case "youtube":
      getIcon = <YoutubeIcon />;
      break;
    default:
      getIcon = <InstagramIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <BtnWrapper >
        <FullButton title={title} action={() => alert("clicked")} border />
      </BtnWrapper>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const BtnWrapper = styled.div`
  align-self: center;
  width: 180px;
  margin: 25px 0;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;