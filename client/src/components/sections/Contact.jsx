import React, { useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import axios from 'axios';
// Assets
import ContactImg1 from "../../assets/img/sk_logo.png";

import MapBackgroundImage from "../../assets/img/map_background.jpg";

export default function Contact() {
  const [recipient_email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  function sendMail() {
    if (recipient_email && subject && message && name) {
      axios.post("https://localhost:5000/send_email", {
        recipient_email,
        subject,
        message,
        name
      }).then(() => alert('Message sent successfully'))
        .catch(() => alert('Message failed to send'))
      return;
    }
    return alert('Fill in all of the fields to continue')
  }
  return (
    <Parallax
      bgImage={MapBackgroundImage}
      strength={150}
    >
      <Wrapper id="contact">
        <div className="container whiteColor" style={{ backgroundColor: '#70707099', borderRadius: '25px' }}>
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              If you're looking for a reliable and experienced real estate professional to guide you through the buying, selling, or renting process, please do not hesitate to contact me.
              <br />
              I am dedicated to providing my clients with exceptional service and expert advice.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)} className="font20 extraBold whiteBg whiteColor" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="font20 extraBold whiteColor" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)} className="font20 extraBold whiteColor" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" onChange={(e) => setMessage(e.target.value)} className="font20 extraBold whiteColor" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" onClick={() => sendMail()} className="pointer animate radius8 whiteBg" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} style={{ height: 400 }} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Parallax>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #2d545e;
  background-color: #2d545e;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #12343b;
    border: 1px solid #2d545e;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;

`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









