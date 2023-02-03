import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import FirstPost1 from "../../assets/img/posts/front_view.jpg";
import FirstPost2 from "../../assets/img/posts/indoor_pool.jpg";
import FirstPost3 from "../../assets/img/posts/kitchen.jpg";
import FirstPost4 from "../../assets/img/posts/living_room.jpg";
import FirstPost5 from "../../assets/img/posts/main_entrance.jpg";
import Video from "../../assets/img/posts/video3.mp4";
import Thumbnail from "../../assets/img/posts/indoor_pool.jpg";

export default function Projects() {
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
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={FirstPost1}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={FirstPost2}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={FirstPost3}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={FirstPost4}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={FirstPost5}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <MediaContainer ref={myRef}>
                  {playVideo ?
                    <ReactPlayer url={Video} playing={true} controls={true} loop={true} muted={false} playsinline={true} />
                    :
                    <img src={Thumbnail} alt="thumbnail" />
                  }
                </MediaContainer>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -285px;
  left: 0;
  @media (max-width: 1190px) {
    top: -300px !important;
  }
  @media (max-width: 920px) {
    top: -240px !important;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -45px !important;
    left: 0;
  }
`;
const MediaContainer = styled.div`
  margin: 0 6% 10px 6%;
  display: flex;
  align-items: center;
  div {
    height: auto !important;
    transition: opacity 400ms ease 0ms;
    margin: auto;
    width: 400px !important;
    padding: 0 40px;
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
