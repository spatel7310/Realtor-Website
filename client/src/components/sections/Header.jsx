import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import BackgroundImage from "../../assets/img/house_background.jpeg";
import Headshot from "../../assets/img/headshot.jpg"

export default function Header() {
  return (
    <Parallax
      bgImage={BackgroundImage}
      blur={5}
    >
      <Wrapper id="home" className="container flexSpaceCenter whiteColor">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">Sulay Krushikar</h1>
            <HeaderP className="font13 semiBold">
              Welcome to my personal real estate website. I am an experienced agent ready to help you find your dream home or sell your property.
              With my local market knowledge and commitment to excellent service,
              I will ensure your real estate experience is a success. Contact me to schedule a viewing.
            </HeaderP>
            <BtnWrapper>
              <FullButton title="Get Started" />
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={Headshot} alt="office" style={{ zIndex: 9, width: 410 }} />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>"I had the pleasure of working with Sulay Krushikar during the purchase of my first home and couldn't be happier! Sulay was patient, knowledgeable, and truly went above and beyond to make the process as smooth and stress-free as possible."</em>
                </p>
                <p className="font13 sandColor textRight" style={{ marginTop: '10px' }}>- Happy Customer</p>
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
        </RightSide>
      </Wrapper>
    </Parallax>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


