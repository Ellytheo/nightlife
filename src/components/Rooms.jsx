import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import { CheckOutlined, CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PricingCard = ({ title, image, pricing, features, buttonText }) => (
  <div
    className="flex-grow-1 mx-auto mx-md-0 bg-white border rounded shadow-sm overflow-hidden"
    style={{ maxWidth: "28rem", cursor: "pointer" }}
  >
    <div style={{ height: "16rem", overflow: "hidden" }}>
      <img src={image} alt={`${title}`} className="w-100 h-100 object-fit-cover"/>
    </div>
    <div className="p-4">
      <h5 className="mb-3">{title}</h5>
      <div className="mb-4">
        {["bedBreakfast", "halfBoard", "fullBoard"].map((plan, idx) => (
          <div key={idx} className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted">{plan.replace(/([A-Z])/g, " $1")}</span>
            <span className="fw-bold text-primary">
              KES {pricing[plan].toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <ul className="text-muted mb-4" style={{ listStyleType: "none", paddingLeft: 0 }}>
        {features.map((feature, i) => (
          <li key={i} className="d-flex align-items-center mb-2">
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary w-100">{buttonText}</button>
    </div>
  </div>
);

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAll, setShowAll] = useState(false);

 const initialRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious air-conditioned room featuring a private balcony with resort views.",
    price: "KES 7,500",
    image: "https://readdy.ai/api/search-image?query=deluxe%20hotel%20room&width=800&height=500",
    amenities: ["Air Conditioning", "Private Bathroom", "Flat-screen TV", "High-speed WiFi", "Balcony with View"],
  },
  {
    id: 2,
    name: "Standard Room",
    description: "Comfortable air-conditioned room perfect for couples or business travelers.",
    price: "KES 6,000",
    image: "https://readdy.ai/api/search-image?query=standard%20hotel%20room&width=800&height=500",
    amenities: ["Air Conditioning", "Private Bathroom", "Flat-screen TV", "Work Desk", "High-speed WiFi"],
  },
  {
    id: 3,
    name: "Superior Room",
    description: "Elegant and spacious with a seating area, perfect for families or extended stays.",
    price: "KES 9,000",
    image: "https://readdy.ai/api/search-image?query=superior%20hotel%20room&width=800&height=500",
    amenities: ["Seating Area", "Private Bathroom", "Smart TV", "High-speed WiFi", "Mini Bar"],
  },
  {
    id: 4,
    name: "Executive Suite",
    description: "Luxury suite offering a separate living space, premium amenities, and scenic views.",
    price: "KES 12,000",
    image: "https://readdy.ai/api/search-image?query=executive%20hotel%20suite&width=800&height=500",
    amenities: ["Living Area", "Bathtub", "Flat-screen TV", "Premium WiFi", "Complimentary Breakfast"],
  },
  {
    id: 5,
    name: "V.I.P Suite",
    description: "Top-tier suite designed for luxury, featuring exclusive services, a private lounge, and panoramic views.",
    price: "KES 15,000",
    image: "https://readdy.ai/api/search-image?query=vip%20suite%20hotel%20room&width=800&height=500",
    amenities: ["Private Lounge", "24/7 Butler Service", "Jacuzzi", "Smart Home Controls", "Premium Entertainment System"],
  }
];


    const accommodations = [
    {
      id: 1,
      name: "Standard Room",
      description:
        "Comfortable, air-conditioned space ideal for couples or business travelers, with modern amenities and stylish décor.",
      imageSingle:
        "https://readdy.ai/api/search-image?query=standard%20hotel%20room%20single%20bed&width=600&height=400",
      imageDouble:
        "https://readdy.ai/api/search-image?query=standard%20hotel%20room%20double%20bed&width=600&height=400",
      singlePricing: {
        bedBreakfast: 4000,
        halfBoard: 5500,
        fullBoard: 6500,
      },
      doublePricing: {
        bedBreakfast: 4700,
        halfBoard: 7200,
        fullBoard: 9500,
      },
    },
    {
      id: 2,
      name: "Deluxe Room",
      description:
        "Spacious room with private balcony, resort views, and elegant furnishings.",
      imageSingle:
        "https://readdy.ai/api/search-image?query=deluxe%20hotel%20room%20single%20bed&width=600&height=400",
      imageDouble:
        "https://readdy.ai/api/search-image?query=deluxe%20hotel%20room%20double%20bed&width=600&height=400",
      singlePricing: {
        bedBreakfast: 5200,
        halfBoard: 6200,
        fullBoard: 7500,
      },
      doublePricing: {
        bedBreakfast: 6000,
        halfBoard: 8500,
        fullBoard: 10500,
      },
    },
    {
      id: 3,
      name: "Superior Room",
      description:
        "Ideal for families or groups, featuring multiple beds and ample space.",
      imageSingle:
        "https://readdy.ai/api/search-image?query=superior%20hotel%20room%20single%20bed&width=600&height=400",
      imageDouble:
        "https://readdy.ai/api/search-image?query=superior%20hotel%20room%20double%20bed&width=600&height=400",
      singlePricing: {
        bedBreakfast: 6200,
        halfBoard: 7500,
        fullBoard: 8500,
      },
      doublePricing: {
        bedBreakfast: 7000,
        halfBoard: 9500,
        fullBoard: 11500,
      },
    },
    {
      id: 4,
      name: "Executive Room",
      description:
        "Twin-bed room, perfect for colleagues or friends traveling together.",
      imageSingle:
        "https://readdy.ai/api/search-image?query=executive%20hotel%20room%20single%20bed&width=600&height=400",
      imageDouble:
        "https://readdy.ai/api/search-image?query=executive%20hotel%20room%20double%20bed&width=600&height=400",
      singlePricing: {
        bedBreakfast: 7000,
        halfBoard: 8500,
        fullBoard: 9500,
      },
      doublePricing: {
        bedBreakfast: 7700,
        halfBoard: 10000,
        fullBoard: 12000,
      },
    },
    {
      id: 5,
      name: "V.I.P Suite",
      description:
        "Luxury suite with exclusive amenities and premium services for the discerning guest.",
      imageSingle:
        "https://readdy.ai/api/search-image?query=vip%20suite%20hotel%20room%20single%20bed&width=600&height=400",
      imageDouble:
        "https://readdy.ai/api/search-image?query=vip%20suite%20hotel%20room%20double%20bed&width=600&height=400",
      singlePricing: {
        bedBreakfast: 8000,
        halfBoard: 9500,
        fullBoard: 10500,
      },
      doublePricing: {
        bedBreakfast: 8700,
        halfBoard: 11000,
        fullBoard: 13500,
      },
    },
  ];

  const showRoomModal = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-6 m-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-[clamp(1.8rem,4vw,2.5rem)]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in luxury with our exquisitely designed accommodations.
          </p>
        </div>
        

        {!showAll ? (
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="mySwiper m-5"
            >
              {initialRooms.map((room) => (
                <SwiperSlide key={room.id}>
                  <Card
                    style={{ maxWidth: 320, width: '100%' }}
                    hoverable
                    cover={<img alt={room.name} src={room.image} className="h-80 object-cover object-top" />}
                    className="border-0 shadow-md overflow-hidden room-card"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-[clamp(1.5rem,3.5vw,2rem)]" style={{ fontFamily: 'Playfair Display, serif' }}>{room.name}</h3>
                        <div className="text-xl font-semibold text-yellow-600">{room.price}<span className="text-sm text-gray-500">/night</span></div>
                      </div>
                      <p className="text-gray-600 mb-6 h-20 overflow-hidden">{room.description}</p>
                      <Button type="primary" block className="!rounded-button" style={{ background: '#C6A355', borderColor: '#C6A355' }} onClick={() => showRoomModal(room)}>
                        View Details
                      </Button>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-12">
              <Button
                type="default"
                size="large"
                onClick={() => setShowAll(true)}
                className="!rounded-button"
                style={{ borderColor: '#C6A355', color: '#C6A355', height: '50px', padding: '0 30px', fontSize: '16px' }}
              >
                View All Accommodations <RightOutlined />
              </Button>
            </div>
          </>
          
        ) : (
          <section className="py-2 bg-white">
            <div className="container">
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Button
    type="default"
    size="large"
    onClick={() => setShowAll(false)}
    className="!rounded-button sky-hover"
    style={{ borderColor: '#C6A355', color: '#C6A355', height: '50px', padding: '0 30px', fontSize: '16px' }}
  >
    &larr; Back to Slider
  </Button>
</div>
              <div className="d-flex flex-column gap-5">
                {accommodations.map((room) => (
                  
                  <div key={room.id} className="bg-white rounded shadow-sm p-4">
                    <div className="text-center mb-4">
                      <h4 className="fw-bold mb-3">{room.name}</h4>
                      <p className="text-muted">{room.description}</p>
                    </div>
                    <div className="d-flex flex-column flex-md-row gap-4 justify-content-center">
                      <PricingCard
                        title="Single Occupancy"
                        image={room.imageSingle}
                        pricing={room.singlePricing}
                        features={["Single bed accommodation", "Modern conveniences included", "24/7 room service"]}
                        buttonText="Book Single Room"
                      />
                      <PricingCard
                        title="Double Occupancy"
                        image={room.imageDouble}
                        pricing={room.doublePricing}
                        features={["Comfortable beds for two", "Modern amenities", "Enhanced dining options"]}
                        buttonText="Book Double Room"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal for Room Detail */}
      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width="90%"
        style={{ maxWidth: 700 }}
        bodyStyle={{ padding: 0, overflowY: 'auto', maxHeight: '80vh' }}
        centered
        className="room-detail-modal"
        closeIcon={<CloseOutlined style={{ fontSize: '18px', color: '#C6A355' }} />}
      >
        {selectedRoom && (
          <>
            <div className="relative w-full max-h-[300px] md:max-h-[400px] overflow-hidden rounded-t-lg">
              <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-[clamp(1.8rem,4vw,2.5rem)]" style={{ fontFamily: 'Playfair Display, serif' }}>{selectedRoom.name}</h3>
                <div className="text-xl font-semibold text-yellow-400">
                  {selectedRoom.price} <span className="text-sm text-white/80">/ night</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-b-lg">
              <p className="mb-6 text-gray-700 leading-relaxed">{selectedRoom.description}</p>
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Amenities</h4>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mb-6">
                {selectedRoom.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm">
                    <CheckOutlined style={{ color: '#C6A355', marginRight: 8 }} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button
                  type="default"
                  className="!rounded-button w-full sm:w-[48%]"
                  style={{ borderColor: '#C6A355', color: '#C6A355' }}
                  onClick={handleModalClose}
                >
                  Back to Rooms
                </Button>
                <Button
                  type="primary"
                  className="!rounded-button w-full sm:w-[48%]"
                  style={{ background: '#C6A355', borderColor: '#C6A355' }}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Rooms;
