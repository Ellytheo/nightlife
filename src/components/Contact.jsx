import React, { useState } from 'react';
import axios from 'axios';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Form, Input, Button, Row, Col, message } from 'antd';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('first_name', values.firstName);
    formData.append('last_name', values.lastName);
    formData.append('email', values.email);
    formData.append('phone', values.phone || '');
    formData.append('message', values.message);

    try {
      const res = await axios.post(
        'https://Shanvilla.pythonanywhere.com/submit_contact',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (res.data.status === 'success') {
        message.success('Message sent successfully!');
        form.resetFields();
      } else {
        message.error(res.data.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      message.error('Failed to send message. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="gallery-container" style={{ padding: '40px 20px',  }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 15px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2
            className="teet p-3 rounded"
            style={{
              fontSize: '2rem',
              fontFamily: 'Kaushan Script, cursive',
              color: '#FF0000',
              backgroundColor:'#201c58',
              maxWidth: 400,
              margin: '0 auto 16px',
            }}
          >
            Contact X Nightlife Lounge
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: '#A21B23',
              margin: '0 auto 24px',
            }}
          />
          <p
            style={{
              color: 'rgb(200, 200, 216)',
              fontSize: '2rem',
              maxWidth: 700,
              margin: '0 auto',
              fontFamily: 'are you serious, cursive',
              lineHeight: 1.4,
            }}
          >
            Planning your night out or need assistance? We’re here all night to keep the drinks flowing and the vibes unforgettable.
          </p>
        </div>

        <Row gutter={[32, 32]} align="stretch">
          {/* Resort Info */}
          <Col xs={24} md={12}>
            <div
              style={{
                background: '#f9f9f9',
                padding: 60,
                borderRadius: 12,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontFamily: 'Playfair Display, serif',
                  marginBottom: 48,
                  color: '#C6A355',
                  textAlign: 'center',
                }}
              >
                Lounge Information
              </h3>

             {[
  {
    icon: <EnvironmentOutlined style={{ fontSize: 26, color: '#A21B23' }} />,
    title: 'Address',
    content: (
      <>
        Xnightlife lounge<br />
        Murang'a Town, Murang'a County<br />
        Kenya
      </>
    ),
  },
  {
    icon: <PhoneOutlined style={{ fontSize: 26, color: '#A21B23' }} />,
    title: 'Phone',
    content: <>+254 ###########</>,
  },
  {
    icon: <MailOutlined style={{ fontSize: 26, color: '#A21B23' }} />,
    title: 'Email',
    content: <>############@######.###</>,
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 26, color: '#A21B23' }} />,
    title: 'Hours',
    content: (
      <>
        Check-in: 3:00 PM<br />
        Check-out: 3:00 PM<br />
        Reception: 24/7
      </>
    ),
  },
].map(({ icon, title, content }, idx) => (
  <div className="row mb-4" key={idx}>
    <div className="col-1 d-flex align-items-start pt-3">
      {icon}
    </div>
    <div className="col-4 mx-4">
      <strong style={{ display: 'block', marginBottom: '6' }}>{title}</strong>
      <p className="mb-0" style={{ lineHeight: 1.6 }}>{content}</p>
    </div>
  </div>
))}
            </div>
          </Col>

          {/* Contact Form */}
          <Col xs={24} md={12}>
            <div
              style={{
                backgroundColor: '#1d375e',
                borderRadius: 12,
                padding: 40,
                height: '100%',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[{ required: true, message: 'Please enter your first name' }]}
                    >
                      <Input size="large" placeholder="Enter your first name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[{ required: true, message: 'Please enter your last name' }]}
                    >
                      <Input size="large" placeholder="Enter your last name" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email address' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input size="large" placeholder="Enter your email address" />
                </Form.Item>

                <Form.Item label="Phone" name="phone">
                  <Input size="large" placeholder="Enter your phone number" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <Input.TextArea rows={4} placeholder="How can we assist you?" />
                </Form.Item>

                <Form.Item>
                  <Button className="custom-submit-button" type="danger" size="large" htmlType="submit" loading={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Map */}
        <div
          style={{
            marginTop: 64,
            height: 384,
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            width: '100%',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67608.40102103521!2d37.05846115750545!3d-0.7269797719971265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828990058d94793%3A0x4053513ec1984c5f!2sNight%20life%20lounge%20muranga!5e1!3m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Shanvilla Resort Location"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
