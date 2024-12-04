import React, { useEffect } from "react";
import { Modal, Form, Input, DatePicker, TimePicker, Select, Row, Col, Button, Divider} from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './css/EditAppointmentModal.css';

const { Option } = Select;

const AppointmentForm = ({ open, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Modal
      open={open}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "500",
            fontFamily: "Rubik",
          }}
        >
          <IoIosCloseCircleOutline
            size={24}
            style={{ color: "#525050", marginRight: 8, cursor: "pointer" }}
            onClick={onClose}
          />
          <span style={{color:'#525050'}}>  Make an Appointment</span>
        </div>
      }
      footer={null}
      width="80%"
      closable={false}
      centered={true}
      className="custom-modal"
    >
      <Form
        form={form}
        layout="vertical"
        name="edit_appointment_form"
        initialValues={{}}
      >
        <Row gutter={16}>
          {/* 左侧部分 */}
          <Col span={12}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                fontFamily: "Inter",
                marginBottom: '10px',
              }}
            >
              Service Info
            </h3>
            <Form.Item
              name="serviceType"
              label={<span className="form-label">Service Type</span>}
            >
              <Select className="form-input" placeholder="Select a service type">
                <Option value="Dog Haircut">Dog Haircut</Option>
                <Option value="Boarding">Boarding</Option>
                <Option value="Checkup">Checkup</Option>
              </Select>
            </Form.Item>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="date"
                  label={<span className="form-label">Date</span>}
                >
                  <DatePicker className="form-input" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="time"
                  label={<span className="form-label">Time</span>}
                >
                  <TimePicker
                    className="form-input"
                    use12Hours
                    format="h:mm A"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="duration"
                  label={<span className="form-label">Duration</span>}
                >
                  <Select className="form-input" placeholder="Select a duration">
                    <Option value="30">30 Minutes</Option>
                    <Option value="60">60 Minutes</Option>
                    <Option value="90">90 Minutes</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="employee"
              label={<span className="form-label">Employee</span>}
            >
              <Select className="form-input" placeholder="Select a employee">
                <Option value="Branda">Branda</Option>
                <Option value="Linda">Linda</Option>
                <Option value="Emma">Emma</Option>
              </Select>
            <Form.Item 
              name="notes" 
              label={<span className="form-label">Notes</span>}>
              <Input.TextArea rows={4} className="form-input"/>
            </Form.Item>
            </Form.Item>
            <div className="add-service">+ Add Service</div>
            <div className="add-product">+ Add Product</div>
            <div className="total-price">
              <span>Total Price: $80</span>
            </div>
          </Col>
          {/* 垂直分割线 */}
          <Col span={1}>
            <Divider type="vertical" style={{ height: "100%", backgroundColor: "#000000" }} />
          </Col>
          {/* 右侧部分 */}
          <Col span={11}>
            <h3 className="section-title">Client Info</h3>
            <Form.Item
              name="clientName"
              label={<span className="form-label">Client Name</span>}
            >
              <Input className="form-input" />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label={<span className="form-label">Phone</span>}
                >
                  <Input className="form-input" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label={<span className="form-label">Email</span>}
                >
                  <Input className="form-input" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="loyaltyCard"
              label={<span className="form-label">Loyalty Card</span>}
            >
              <Input className="form-input" />
            </Form.Item>
            <Divider
              style={{
                backgroundColor: "#000000",
                margin: "16px 0",
              }}
            /> {/* 水平分割线 */}
            <h3 className="section-title">Pet Info</h3>
            <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                  name="petName"
                  label={<span className="form-label">Pet Name</span>}
                >
                  <Input className="form-input" />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                  name="petType"
                  label={<span className="form-label">Pet Type</span>}
                >
                  <Select className="form-input" placeholder="Select a pet type">
                    <Option value="Golden retriever">Golden retriever</Option>
                    <Option value="Dog">Dog</Option>
                    <Option value="Cat">Cat</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
              <Form.Item
                  name="dob"
                  label={<span className="form-label">D.O.B</span>}
                >
                  <DatePicker className="form-input" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="gender"
                  label={
                    <span className="form-label">Gender</span>}
                  >
                  <Select className = "form-input" placeholder="Select gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="weight"
                  label={
                    <span className="form-lable">weight</span>}
                  >
                  <Input className="form-input" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        {/*submit button*/}
        <Row style={{ marginTop: 24, }} justify="center">
          <Col>
            <Button
              type="primary"
              style={{
                width: "225px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9", 
                color: "#000000", 
                fontWeight: "600", 
                fontSize: "16px",
              }}
              onClick={() => form.submit()}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AppointmentForm;

