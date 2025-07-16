// src/CookieBanner.js
import React, { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const CookieBanner = () => {
  const location = useLocation();
  const hideBannerOn = ["/wp-adman", "/sponge"];
  const showBanner = !hideBannerOn.includes(location.pathname);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect system color scheme
  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkQuery.matches);

    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    darkQuery.addEventListener("change", handleThemeChange);
    return () => darkQuery.removeEventListener("change", handleThemeChange);
  }, []);

  // Analytics tracking on accept
  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === "true") {
      ReactGA.initialize("G-XXXXXXXXXX"); // ✅ Replace with your GA4 ID
      ReactGA.send("pageview");
    }
  }, []);

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="I Agree"
      declineButtonText="Decline"
      enableDeclineButton
      flipButtons
      style={{
        background: isDarkMode ? "#111" : "#f2f2f2",
        color: isDarkMode ? "#f5f5f5" : "#18e5ecff",
        fontSize: "15px",
        padding: "16px",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
      }}
      buttonStyle={{
        backgroundColor: "#d97706",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "6px",
        padding: "8px 20px",
        cursor: "pointer",
        marginRight:"20px",
      }}
      declineButtonStyle={{
        backgroundColor: isDarkMode ? "#444" : "#888",
        color: "#fff",
        borderRadius: "6px",
        padding: "8px 20px",
        cursor: "pointer",
        marginRight:"70px",
      }}
      overlay
      onAccept={() => {
        localStorage.setItem("analyticsConsent", "true");
        setTimeout(() => window.location.reload(), 300);
      }}
      onDecline={() => {
        localStorage.setItem("analyticsConsent", "false");
        setTimeout(() => window.location.reload(), 300);
      }}
    >
      🍪 We use cookies to enhance your browsing experience and analyze traffic. Click “I Agree” to consent.
    </CookieConsent>
  );
};

export default CookieBanner;
