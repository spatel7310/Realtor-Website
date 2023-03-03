import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import Video from "../../assets/img/posts/video1.mp4"
import Thumbnail from "../../assets/img/posts/living_room.jpg"

export default function Services() {
  const myRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      const par = param[0]
      setPlayVideo(par.isIntersecting)
    })
    observer.observe(myRef.current);
  }, [])

  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Links and Resources</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="zillow"
                title="Zillow"
                link="https://www.zillow.com/profile/Sulay%20K"
                subtitle="Zillow is a real estate and rental marketplace website that allows users to search for homes, apartments, and other properties for sale or rent. Check out my link!"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="kw"
                title="Keller Williams"
                link="https://sulay.kw.com/"
                subtitle="Keller Williams Realty is an American technology and international real estate franchise. Visit my real estate franchise directly."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="instagram"
                title="Instagram"
                link="https://www.instagram.com/soldbysulay/"
                subtitle="Stay up to date with my latest news. Check out my instagram. "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="youtube"
                title="Youtube"
                link="https://www.youtube.com/@sulaykrushikar5959/featured"
                subtitle="Subsribe to my youtube channel to get the latest and greatest real estate content." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Discover your dream home</h4>
                <h2 className="font40 extraBold">The Best Way to Buy</h2>
                <p className="font12">
                  Discover your dream home with me, a seasoned real estate agent committed to finding the perfect property that fits your needs and exceeds your expectations.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => window.location.href = 'https://www.zillow.com/profile/Sulay-K/'}>
                    </FullButton>
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <Link to="contact" spy={true} smooth={true} >
                      <FullButton title="Contact Us" border />
                    </Link>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div>
                    <MediaContainer ref={myRef}>
                      {playVideo ?
                        <ReactPlayer url={Video} playing={true} controls={true} loop={true} muted={false} playsinline={true} />
                        :
                        <img src={Thumbnail} alt="thumbnail" />
                      }
                    </MediaContainer>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  text-align: center;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const MediaContainer = styled.div`
  margin: 0 6% 10px 6%;
  display: flex;
  align-items: center;
  div {
    height: auto !important;
    transition: opacity 400ms ease 0ms;
    video {
      height: auto !important;
      border-radius: 1rem;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
      opacity: 1;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 2s;
      
      @keyframes fadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;