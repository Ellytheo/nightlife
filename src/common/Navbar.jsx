import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

/* ---------------- Animations ---------------- */
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

/* ---------------- Styled Components ---------------- */

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(
    135deg,
    #14253a 20%,
    #0e3681 30%,
    #1a5e13 75%,
    #1a0a33 100%
  );
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
`;

const Logo = styled(Link)`
  font-size: 39px;
  font-weight: bold;
  color: #e41616;
  text-decoration: none;
  padding: 0 15px;

  p {
    margin: 0;
    font-size: 30px;
    line-height: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* 🔥 ACTIVE-AWARE NAV LINK */
const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-family: "My Soul", cursive;
  font-size: 25px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: white;
    border-radius: 30px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: red;
    animation: ${pulse} 0.6s;

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  &.active {
    color: red;
    font-weight: 600;

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

/* ---------------- Mobile Sidebar ---------------- */

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-250px")};
  width: 250px;
  height: 60%;
  background: #1d3047;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.3);
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: left 0.3s ease;
  z-index: 2000;
`;

const SidebarLink = styled(NavLink)`
  color: #fff;
  font-size: 22px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;

  &.active {
    color: red;
    background-color: #fff;
    font-weight: bold;
    width: fit-content;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

/* ---------------- Navbar Component ---------------- */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        {/* Logo */}
        <Logo to="/" style={{ fontFamily: "'Mr Bedfort', cursive" }}>
          X-Nightlife
          <p style={{ fontFamily: "'Allura', cursive" }}>
            Lounge | Grill | Carwash
          </p>
        </Logo>

        {/* Desktop Links */}
        <NavLinks>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/amenities">Amenities</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
          <StyledNavLink to="/gallery">Gallery</StyledNavLink>
        </NavLinks>

        {/* Hamburger for Mobile */}
        <HamburgerButton onClick={() => setOpen(!open)}>
          {open ? <IoCloseOutline /> : <IoMenuOutline />}
        </HamburgerButton>

        {/* Sliding Sidebar */}
        <Sidebar open={open}>
          <SidebarLink to="/" end onClick={() => setOpen(false)}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" onClick={() => setOpen(false)}>
            About
          </SidebarLink>
          <SidebarLink to="/amenities" onClick={() => setOpen(false)}>
            Amenities
          </SidebarLink>
          <SidebarLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </SidebarLink>
          <SidebarLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </SidebarLink>
        </Sidebar>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
