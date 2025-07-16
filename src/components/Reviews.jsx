import React from 'react';
import { Form, DatePicker, Select, Button, Row, Col } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

const BookingSection = () => {
  const handleSubmit = (values) => {
    console.log('Booking info:', values);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Book Your Stay</h2>
          <div style={styles.divider}></div>

          <Form layout="vertical" onFinish={handleSubmit}>
            <Row gutter={[24, 16]}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Check-in & Check-out Dates"
                  name="dates"
                  rules={[{ required: true }]}
                >
                  <RangePicker
                    size="large"
                    style={{ width: '100%', height: 50, minWidth: 0 }}
                    className="responsive-range-picker"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item label="Guests" name="guests" rules={[{ required: true }]}>
                  <Select
                    defaultValue="2"
                    size="large"
                    style={{ width: '100%', height: 50, minWidth: 0 }}
                  >
                    <Option value="1">1 Guest</Option>
                    <Option value="2">2 Guests</Option>
                    <Option value="3">3 Guests</Option>
                    <Option value="4">4 Guests</Option>
                    <Option value="5">5+ Guests</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item label="Rooms" name="rooms" rules={[{ required: true }]}>
                  <Select
                    defaultValue="1"
                    size="large"
                    style={{ width: '100%', height: 50, minWidth: 0 }}
                  >
                    <Option value="1">1 Room</Option>
                    <Option value="2">2 Rooms</Option>
                    <Option value="3">3 Rooms</Option>
                    <Option value="4">4+ Rooms</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <div style={styles.buttonContainer}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={styles.submitButton}
              >
                Check Availability
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 1rem', // more padding for desktop, enough for mobile
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 1rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    margin:'1rem',
    borderRadius: 12,
    border:'1px solid rgb(182, 171, 171)',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '0.5rem',
    fontFamily: 'Playfair Display, serif',
  },
  divider: {
    width: 80,
    height: 4,
    backgroundColor: '#C6A355',
    margin: '0 auto 1.5rem',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#C6A355',
    borderColor: '#C6A355',
    height: 50,
    padding: '0 2.5rem',
    fontSize: '1rem',
    borderRadius: 30,
    width: '100%',
    maxWidth: 300,
  },
};

export default BookingSection;
