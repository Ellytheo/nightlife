import React from "react";
import { Carousel } from "antd";
import {
  FaWifi,
  FaConciergeBell,
  FaUtensils,
  FaParking,
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaBriefcase,
} from "react-icons/fa";
import { MdSupportAgent } from 'react-icons/md';

// Make sure to import your custom CSS (amenity-card, testimonial-section, etc.)

const Amenities = () => {
  return (
    <>
      {/* Amenities Section */}
      <section id="amenities" className="py-5 gallery-container">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-4"
              style={{ color:"#f80606", fontFamily: "Playfair Display, serif", fontSize: "2.25rem" }}
            >
              Premium Amenities
            </h2>
            <div
              className="mx-auto mb-4"
              style={{ width: "80px", height: "4px", backgroundColor: "#D97706" }}
            />
            <p className="text-light mx-auto" style={{ maxWidth: "768px" }}>
              Every detail of your stay has been considered. Enjoy our
              comprehensive range of world-class amenities designed for your
              comfort and convenience.
            </p>
          </div>

          <div className="row g-4">
            {[
       {
  Icon: FaWifi,
  title: "Free Wi-Fi",
  desc: "Stay connected while you chill ,complimentary Wi-Fi available throughout the lounge.",
  color: "#3B82F6",
},
{
  Icon: MdSupportAgent,
  title: "Customer Service",
  desc: "Friendly staff always on hand to take orders, assist with seating, and keep the vibes smooth.",
  color: "#8B5CF6",
},
{
  Icon: FaUtensils,
  title: "Room Service",
  desc: "Order food and drinks straight to your room and enjoy great flavors without missing a moment of comfort.",
  color: "#10B981",
},

{
  Icon: FaBriefcase,
  title: "Private Lounge Seating",
  desc: "Comfortable seating for groups, celebrations, and relaxed nights out with friends.",
  color: "#F97316",
},
{
  Icon: FaConciergeBell,
  title: "Table Service",
  desc: "Premium table service for drinks and bottles, ensuring a seamless nightlife experience.",
  color: "#EF4444",
},
{
  Icon: FaParking,
  title: "Secure Parking & Car Wash",
  desc: "Convenient parking with optional car wash services while you enjoy your night.",
  color: "#6B7280",
},
{
  Icon: FaUtensils,
  title: "Grill & BBQ Nights",
  desc: "Savor delicious grilled meals and BBQ delights prepared fresh in our lounge kitchen.",
  color: "#F97316",
},
{
  Icon: FaConciergeBell,
  title: "Relatable parties",
  desc: "we host parties and group events with customized setups, music, and full-service support relatable to everyone.",
  color: "#EF4444",
},

            ].map(({ Icon, title, desc }) => (
              <div key={title} className="col-12 col-md-6 col-lg-3">
                <div className="amenity-card">
                  <div className="amenity-icon">
                    <Icon />
                  </div>
                  <h3 className="amenity-title">{title}</h3>
                  <p className="amenity-description">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section py-3 m-2 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif", fontSize: "2.25rem" }}
            >
              Guest Experiences
            </h2>
            <div
              className="mx-auto mb-4"
              style={{ width: "80px", height: "4px", backgroundColor: "#D97706" }}
            />
            <p className="text-secondary mx-auto text text-dark fs-4" style={{ maxWidth: "768px" }}>
              <i>"Hear what our guests have to say about their unforgettable
              experiences at X Nightlife lounge."</i>
            </p>
          </div>

          <Carousel
  autoplay
  autoplaySpeed={4000}   // 6 seconds per slide (nice & smooth)
  className="max-w-4xl mx-auto"
  style={{ maxWidth: "768px" }}
>

            {[
              
    {
  text: "Our night at Shanvilla Lounge blew us away. From the music to the lighting and top-tier service, every detail was on point. The staff made our anniversary night unforgettable.",
  author: "Robert & Sarah Johnson",
  rating: 5,
},
{
  text: "A refreshing spot to unwind and enjoy the night. Great atmosphere, attentive staff, and comfortable seating made it a perfect place to relax with friends.",
  author: "Emily R.",
  rating: 4.5,
},
{
  text: "We loved the warm hospitality and the stylish outdoor setup. Drinks were well crafted, the music was just right, and the vibe helped us completely unwind.",
  author: "David Musa.",
  rating: 4,
},
{
  text: "Shanvilla Lounge strikes the perfect balance between comfort and nightlife. The ambience is well curated, the service is smooth, and the overall experience feels premium.",
  author: "Sarah Karanja.",
  rating: 5,
},
{
  text: "A great spot for couples or groups looking to enjoy a laid-back evening away from the city buzz. Cozy seating, good music, and friendly service made it a win for us.",
  author: "The Mwangi Family",
  rating: 4.5,
},
{
  text: "The lounge exceeded our expectations. The drinks menu was impressive, the food paired perfectly, and the views added an extra touch to the night.",
  author: "James & Linda P.",
  rating: 5,
},
{
  text: "Relaxed, stylish, and welcoming — Shanvilla Lounge made our evening memorable. The staff’s attention and the overall vibe made us want to stay longer.",
  author: "Grace Wanjiku.",
  rating: 4.5,
},
{
  text: "From the moment we walked in, the experience felt premium. Exceptional service, great ambience, and even better energy than the photos. We’re definitely coming back.",
  author: "Michael & Jennifer Chen",
  rating: 5,
},
{
  text: "The staff’s warmth and professionalism set the tone for a great night. Every drink was perfectly mixed, and the ambience made it easy to relax and enjoy the moment.",
  author: "Linda & Mark Thompson",
  rating: 4.5,
},
{
  text: "An incredible location paired with flawless service. The sunset views, music, and lounge setup made the night unforgettable. Already planning our next visit.",
  author: "Anita & Raj Patel",
  rating: 5,
},
{
  text: "Spacious seating, great music, and a welcoming vibe made this a fantastic night out. Everyone found something to enjoy — definitely a go-to lounge spot.",
  author: "The Garcia Family",
  rating: 5,
},

            ].map(({ text, author, rating }, i) => (
              <div key={i} className="px-3 pb-4 text-center">
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">{author}</div>
                <div className="testimonial-stars d-flex justify-content-center gap-2">
                  {[...Array(5)].map((_, idx) => {
                    if (rating >= idx + 1) return <FaStar key={idx} />;
                    else if (rating > idx && rating < idx + 1)
                      return <FaStarHalfAlt key={idx} />;
                    else return <FaStar key={idx} style={{ opacity: 0.3 }} />;
                  })}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Amenities;
