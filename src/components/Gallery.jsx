import React from "react";
import a from "../images/a.jpeg";
import aa from "../images/aa.jpeg";
import b from "../images/b.jpeg";
import c from "../images/c.jpeg";
import d from "../images/d.jpeg";
import e from "../images/e.jpeg";
import f from "../images/f.jpeg";
import g from "../images/g.jpeg";
import h from "../images/h.jpeg";
import i from "../images/i.jpeg";
import j from "../images/j.jpeg";
import k from "../images/k.jpeg";
import l from "../images/l.jpeg";
import logo1 from "../images/logo1.png";
import m from "../images/m.jpeg";
import n from "../images/n.jpeg";
import o from "../images/o.jpeg";
import p from "../images/p.jpeg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";
import pic12 from "../images/pic12.jpg";
import pic13 from "../images/pic13.jpg";
import pic14 from "../images/pic14.jpg";
import pic15 from "../images/pic15.jpg";
import pic16 from "../images/pic16.jpg";
import pic17 from "../images/pic17.jpg";
import pic18 from "../images/pic18.jpg";
import pic19 from "../images/pic19.jpeg";
import pic20 from "../images/pic20.jpg";
import pic21 from "../images/pic21.jpeg";
import pic22 from "../images/pic22.jpeg";
import pic23 from "../images/pic23.jpeg";
import pic24 from "../images/pic24.jpeg";
import pic25 from "../images/pic25.jpeg";
import pic26 from "../images/pic26.jpeg";
import pic27 from "../images/pic27.jpeg";
import pic28 from "../images/pic28.jpeg";
import pic29 from "../images/pic29.jpeg";
import pic30 from "../images/pic30.jpeg";
import q from "../images/q.jpeg";
import r from "../images/r.jpeg";
import s from "../images/s.jpeg";
import y from "../images/y.jpeg";



const images = [
  a, aa, b, c, d, e, f, g, h, i, j, k, l, logo1, m, n,o, p, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, q, r, s, y
];

const Gallery = () => {
  return (
    <div
      className="gallery-container"
      style={{
        padding: "40px 5vw", // Responsive padding
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      <h2
        className="text-danger"
        style={{
          fontFamily: "Kaushan Script, cursive",
          fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
          textAlign: "center",
        }}
      >
        Our Gallery
      </h2>
      <hr
        style={{
          width: 80,
          height: 4,
          backgroundColor: "#e40d0d",
          border: "none",
          borderRadius: 2,
          margin: "0 auto 32px",
        }}      />
      <div
  className="gallery-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    maxWidth: "1000px", // 4 * 220px to center 4 columns
    margin: "0 auto",  // center the grid
    gap: "16px",
  }}
>
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              aspectRatio: "1/1", // consistent square image boxes
            }}
          >
            <img
              src={src}
              alt={`gallery ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
