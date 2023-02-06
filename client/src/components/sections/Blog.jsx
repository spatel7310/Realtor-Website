import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Latest News and Updates</h1>
            <p className="font13">
              Stay informed and ahead of the market trends with my latest real estate updates. From new listings to changes in the industry, I make it my priority to keep you informed and provide you with the most current information to make the best decision for your needs.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Sulay Krushikar, 2 months ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="More Properties for Sale!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Sulay Krushikar, 29 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Just Bought!"
                text="Very happy with the recent purchase I just made. Sulay helped me out a ton!"
                tag="client"
                author="Ankur, 6 months ago"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Revolutionize with Rates!"
                text="Rising mortgage rates signal a strong economy, making now a good time for financially ready buyers to invest and lock in low rates."
                tag="news"
                author="Ai Lee, 2 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Home Owners Unite"
                text="Home owners often have a strong emotional attachment to their property, they often view it as more than just an investment. "
                tag="news"
                author="Sophie Petersen, 12 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Investment Help"
                text="Real estate can be a profitable investment opportunity, as property values tend to appreciate over time, creating potential for capital gains."
                tag="company"
                author="Sulay Krushikar, 7 days ago"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: 250 }}>
              <FullButton title="Latest Market News" action={() => window.location.href = 'https://www.cnbc.com/real-estate/'} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: '50px 0' }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;