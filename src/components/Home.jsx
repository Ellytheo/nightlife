import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import pic1 from '../images/c.jpeg';
import pic16 from '../images/pic16.jpg';
import pic3 from '../images/s.jpeg';
import pic4 from '../images/aa.jpeg';
import pic20 from '../images/pic20.jpg';
import logo from '../images/logo1.png';

const zoom = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const HeroSector = styled.section`
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;

 &::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url(${pic20});
  background-size: cover;
  background-position: center;
  filter: brightness(1) contrast(1) saturate(1.05);
  background-color: rgba(255, 255, 255, 0.4); /* more white and more transparent */
  background-blend-mode: lighten;
  animation: ${zoom} 30s ease-in-out infinite;
  z-index: 0;
  border-radius: 40px;
}
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  background: rgba(247, 243, 243, 0.41);
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(255, 200, 150, 0.3);
  padding: 30px 40px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const HeroParagraph = styled.p`
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-size: 1.3rem;
  color: rgb(226, 57, 57);
  line-height: 1.85;
  max-width: 650px;
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ff6f61, #ffd166);
  box-shadow: 0 4px 15px rgba(255, 209, 134, 0.4);
  font-weight: 700;
  padding: 16px 48px;
  border-radius: 50px;
  border: none;
  color: #4a4a4a;
  font-size: 1.1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.35s ease;

  svg {
    transition: transform 0.35s ease;
  }

  &:hover {
    background: linear-gradient(45deg, #ffd166, #4ecdc4);
    box-shadow: 0 8px 30px rgba(78, 205, 196, 0.7);
    transform: scale(1.1);

    svg {
      transform: translateX(6px);
      color: #ffd166;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 18px 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgba(245, 9, 9, 1);

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const SectionDescription = styled.p`
  color: #fcf9f9;
  font-size: 1.75rem;
  max-width: 700px;
  margin: 0 auto 40px;
  font-family: "Playfair Display", serif;

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const HighlightText = styled.div`
  padding: 20px;

  h3 {
    font-family: 'Kaushan Script', cursive;
    font-size: 1.8rem;
    color: rgba(245, 9, 9, 1);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: 'Sevillana', cursive;
    font-size: 2rem;
    color: #f8f7f7;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  a {
    font-family: 'Alex Brush', cursive;
    text-decoration: none;
    color: #d97706;
    font-weight: bold;
    font-size: 2rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: rgb(20, 9, 180);
    }

    @media (max-width: 768px) {
      font-size:1.3rem;
    }
  }
`;

const HighlightImage = styled.img`
  width: 85%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const HeroOverlay = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;


const Home = () => {
  return (
    <>
      <HeroSector>
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/shanvilla.mp4" type="video/mp4" />
        </video>
        <HeroContent>
          <HeroSection>
            <HeroContent>

             <HeroOverlay>
  <img
    src={logo}
    alt="Shanvilla Resort"
    style={{
      width: '100%',
      maxWidth: '400px', // Optional: controls the max size
      height: 'auto',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      objectFit: 'cover',
      display: 'block',
      margin: '0 auto'
    }}g
  />
</HeroOverlay>



              <HeroParagraph>
  <h1>After Dark</h1>
  <span>Luxury. Music. Mood.</span>
</HeroParagraph>


              <Link to="/about">
                <Button>
                  Learn More About Us <FaArrowRight />
                </Button>
              </Link>
            </HeroContent>
          </HeroSection>

         <HeroParagraph>
  Where sizzling flavors,handcrafted drinks, and unforgettable vibes come together for the ultimate night out.
</HeroParagraph>

        </HeroContent>
      </HeroSector>

      <section className="py-5 bg-white gallery-container">
        <div className="container text-center mb-5">
          <SectionTitle>Discover X Nightlife Lounge</SectionTitle>
          <div className="text-light" style={{ width: '220px', height: '4px', backgroundColor: '#2606d9ff', margin: '0 auto 10px' }}></div>
         <SectionDescription>
  Experience the ultimate fusion of bold flavors, vibrant vibes, and unforgettable nights
  at XNightlife Lounge and Grill — every detail crafted to make your evening extraordinary.
</SectionDescription>

        </div>

        <div className="container">
          {[
            {
  title: "Parties & Events",
  desc: "Join our themed nights, live DJ sessions, and special events for a night to remember.",
  linkText: "View our events",
  linkHref: "/gallery",
  img: pic4
},
            {
  title: "Chill Lounge Spots",
  desc: "Kick back in our comfy lounge areas with friends, sip on your favorite drinks, and let the music set the mood for an unforgettable night.",
  linkText: "",
  linkHref: "/seating",
  img: pic1
},
{
  title: "Signature Drinks",
  desc: "Sip on expertly crafted cocktails, chilled beers, and exclusive drinks that keep the energy flowing all night long.",
  linkText: "Check Out the Gallery",
  linkHref: "/gallery",
  img: pic16
},
{
  title: "Grill & Snacks",
  desc: "Indulge in tasty bar bites and sizzling grill specials that pair perfectly with cocktails, keeping your night flavorful and fun.",
  linkText: "",
  linkHref: "/menu",
  img: pic3
}


          ].map((item, index) => (
            <div className="row align-items-center mb-5" key={item.title}>
              <div className={`col-12 col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <HighlightImage src={item.img} alt={item.title} />
              </div>
              <div className={`col-12 col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                <HighlightText>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.linkHref}>
                    {item.linkText} <i className="bi bi-arrow-right"></i>
                  </a>
                </HighlightText>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
