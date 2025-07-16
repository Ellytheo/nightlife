import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';

// --- Animations ---
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// --- Styled Components ---

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, #87CEEB, #00BFFF);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
  box-sizing: border-box;

  @media (max-width: 483px) {
    flex-direction: ${({ open }) => (open ? 'column' : 'row')};
    align-items: ${({ open }) => (open ? 'flex-start' : 'center')};
    gap: ${({ open }) => (open ? '10px' : '0')};
  }

`;

const Logo = styled(Link)`
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 0px 15px;
  border-radius: 30px;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 30px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }

  p {
    margin: 0;
    font-size: 25px;
    line-height: 1;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-family: "My Soul", cursive;
  font-size: 25px;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 30px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: rgb(255, 0, 0);
    animation: ${pulse} 0.6s;
    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;


const RadialNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: 10px;
  }
`;

const GridContainer = styled.div`
  position: relative;
  top:50%;
  right:80%;
  width: 160px;
  height: 160px;
  transform: translate(0, 0);

  @media (max-width: 483px) {
    right: ${({ open }) => (open ? '30%' : '-10%')};
`;

const CenterIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #444;
  color: white;
  font-size: 32px;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  border: none;
`;

const IconBox = styled(Link)`
  position: absolute;
  min-width: 70px;
  padding: 3px 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #096cee;
  user-select: none;
  opacity: 0;
  text-decoration: none;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: red;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  }

  h6 {
    margin: 0;
    font-size: 18px;
    font-family: 'Ole', cursive;
  }

  &.pos1 { top: 30%; left: 50%; transform: translate(-50%, -50%) translateY(-20px); }
  &.pos2 { top: 40%; left: 85%; transform: translate(-50%, -50%) translate(8px, 0px); }
  &.pos3 { top: 60%; left: 85%; transform: translate(-50%, -50%) translate(8px, 5px); }
  &.pos4 { top: 70%; left: 50%; transform: translate(-50%, -50%) translateY(20px); }
  &.pos5 { top: 60%; left: 15%; transform: translate(-50%, -50%) translate(-10px, 5px); }
  &.pos6 { top: 40%; left: 15%; transform: translate(-50%, -50%) translate(-10px, 0px); }

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
`;

// --- Main Component ---

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent open={open}>
        <Logo style={{ fontFamily: "'Nabla', cursive" }}>
          Shanvilla<p style={{ fontFamily: "'Allura', cursive" }}>Place for you</p>
        </Logo>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
          <NavLink to="/amenities">Amenities</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/gallery" className='booki'>Gallery</NavLink>
        </NavLinks>

        

        <RadialNav>
          <GridContainer className={open ? "open" : ""}>
            {[
              { to: '/about', label: 'About', pos: 'pos1' },
              { to: '/contact', label: 'Contact', pos: 'pos2' },
              { to: '/amenities', label: 'Amenities', pos: 'pos3' },
              { to: '/reviews', label: 'Home', pos: 'pos4' },
              { to: '/reviews', label: 'Booking', pos: 'pos5' },
              { to: '/rooms', label: 'Rooms', pos: 'pos6' }
            ].map(({ to, label, pos }) => (
              <IconBox
                key={to}
                to={to}
                className={`${pos} ${open ? 'open' : ''}`}
                role="button"
                tabIndex={open ? 0 : -1}
              >
                <h6>{label}</h6>
              </IconBox>
            ))}

            <CenterIcon
              onClick={() => setOpen(!open)}
              aria-pressed={open}
              aria-label={open ? "Close menu" : "Open menu"}
              type="button"
            >
              {open ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
            </CenterIcon>
          </GridContainer>
        </RadialNav>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
