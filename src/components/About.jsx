import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import logo from '../images/logo1.png';
// === Styled Components ===

const AboutSection = styled.section`
  padding: 40px 20px;
  background: linear-gradient(
    135deg,
    #14253a 20%,
    #081835 30%,
    #1a5e13 75%,
    #1a0a33 100%
  );
  @media (max-width: 768px) {
    padding: 60px 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 30px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Kings', cursive;
  text-align: center;
  margin-bottom: 20px;
  color: #e63946;
  font-size: clamp(2rem, 4vw, 3rem);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 20px;
    line-height: 1.1;
    font-size: clamp(1.6rem, 2.5vw, 3rem);
    font-family: 'Sevillana', cursive;
    color: #f7f6f6;
  }
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

const AboutImage = styled.img`
 width: 100%;
  max-height: 400px;
  border-radius: 14px;
  object-fit: contain;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  margin-bottom:20px;
`;

const VideoElement = styled.video`
  width: 100%;
  max-height: 600px;
  border-radius: 14px;
  object-fit: cover;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;


export const StorySection = styled.section`
  background: linear-gradient(
    135deg,
    #14253a 20%,
    #081835 30%,
    #1a5e13 75%,
    #1a0a33 100%
  );
  padding: 50px 30px;
  margin: 1px auto;
  max-width: 960px;
  border-radius: 30px;
  box-shadow: 0 8px 20px rgba(255, 209, 134, 0.15);
  color: #f7f6f6;
  text-align: center;

  h2 {
    font-family: "Kaushan Script", cursive;
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 25px;
    color: #ff6f61;
    letter-spacing: 1px;
  }

  p {
    font-size: clamp(1rem, 2vw, 3rem);
    line-height: 1.85;
    white-space: pre-line;
    margin-bottom: 24px;
    font-family: "Sevillana", cursive;
  }

  strong {
    color: #10c7e7;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 20px;

    p:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

// === Component ===

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutSection>
        <SectionTitle>Our Story</SectionTitle>

        <ContentGrid>
         <TextContent>
  <p>
    At X Nightlife Lounge, the night doesn’t just happen — it’s created. From smooth sounds to
    electric vibes, we bring together music, drinks, and atmosphere for nights worth remembering.
  </p>
  <p>
    Whether you’re here to chill, celebrate, or party till late, our space is designed to match
    your mood and elevate every moment after sunset.
  </p>
</TextContent>

          <ImageContainer>
            <AboutImage 
              src={logo} 
              alt="Aerial view of Shanvilla Resort showing luxury bungalows on the beach"
            />
          </ImageContainer>
        </ContentGrid>
        <ImageContainer>
<VideoElement
  src="/videos/vid1.mp4"
  muted
  autoPlay
  loop
  playsInline
>
  Your browser does not support the video tag.
</VideoElement>


</ImageContainer>

<StorySection>
  <p>
    Welcome to X Nightlife Lounge — where Murang’a’s nights come alive. Step into a space
    defined by sound, style, and atmosphere, crafted for unforgettable evenings and
    electric energy.
  </p>

  <hr />

  <p>
    Set in the heart of town, X Nightlife blends great music, expertly mixed drinks,
    and a vibrant crowd to create a lounge experience that feels premium, relaxed,
    and effortlessly cool.
  </p>

  <hr />

  <p>
    Whether you’re here to unwind after a long day, celebrate with friends, or dance
    into the late hours, every night at X Nightlife is designed to match your mood.
  </p>

  <hr />

  <p>
    From themed parties and live DJ sets to grill nights and private celebrations,
    we curate moments that keep the vibe right and the memories lasting.
  </p>

  <hr />

  <p>
    <strong>X Nightlife Lounge — where the night begins.</strong>
  </p>
</StorySection>


      </AboutSection>
    </motion.div>
  );
};

export default About;
