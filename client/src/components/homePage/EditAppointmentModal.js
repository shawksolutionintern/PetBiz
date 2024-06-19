import React from "react";
import { Modal, Form, Input, DatePicker, TimePicker, Select, Row, Col, Button } from "antd";
import moment from 'moment';

const { Option } = Select;

const EditAppointmentModal = ({ request, onClose }) => {
  const [form] = Form.useForm();

  const initialValues = {
    serviceType: request.service,
    date: moment(request.date, 'MMM D YYYY'),
    time: moment(request.time, 'h:mm A'),
    duration: request.duration,
    employee: request.employee,
    notes: request.notes,
    clientName: request.clientName,
    phone: request.phone,
    email: request.email,
    loyaltyCard: request.loyaltyCard,
    petName: request.petName,
    petType: request.petType,
    dob: moment(request.dob, 'MM/DD/YYYY'),
    gender: request.gender,
    weight: request.weight
  };

  return (
    <Modal
      open={true}
      title={`Edit Booking Request ${request.id}`}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Submit
        </Button>,
      ]}
      width={800}
    >
      <Form form={form} layout="vertical" name="edit_appointment_form" initialValues={initialValues}>
        <Row gutter={16}>
          <Col span={12}>
            <h3>Service Info</h3>
            <Form.Item
              name="serviceType"
              label="Service Type"
              rules={[{ required: true, message: "Please select a service type!" }]}
            >
              <Select placeholder="Select a service type">
                <Option value="Dog Haircut">Dog Haircut</Option>
                <Option value="Boarding">Boarding</Option>
                <Option value="Checkup">Checkup</Option>
              </Select>
            </Form.Item>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="date"
                  label="Date"
                  rules={[{ required: true, message: "Please select a date!" }]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="time"
                  label="Time"
                  rules={[{ required: true, message: "Please select a time!" }]}
                >
                  <TimePicker use12Hours format="h:mm A" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="duration"
                  label="Duration"
                  rules={[{ required: true, message: "Please select a duration!" }]}
                >
                  <Select placeholder="Select a duration">
                    <Option value="30">30 Minutes</Option>
                    <Option value="60">60 Minutes</Option>
                    <Option value="90">90 Minutes</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="employee"
              label="Employee"
              rules={[{ required: true, message: "Please select an employee!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="notes" label="Notes">
              <Input.TextArea rows={4} />
            </Form.Item>
            <div className="add-buttons">
              <Button type="dashed" style={{ width: '100%', marginBottom: 8 }}>
                + Add Service
              </Button>
              <Button type="dashed" style={{ width: '100%' }}>
                + Add Product
              </Button>
            </div>
            <div className="total-price">
              <span>Total Price: $80</span>
            </div>
          </Col>
          <Col span={12}>
            <h3>Client Info</h3>
            <Form.Item
              name="clientName"
              label="Client Name"
              rules={[{ required: true, message: "Please enter the client name!" }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[{ required: true, message: "Please enter the phone number!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: "Please enter the email!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="loyaltyCard" label="Loyalty Card">
              <Input />
            </Form.Item>
            <h3>Pet Info</h3>
            <Form.Item
              name="petName"
              label="Pet Name"
              rules={[{ required: true, message: "Please enter the pet name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="petType"
              label="Pet Type"
              rules={[{ required: true, message: "Please select the pet type!" }]}
            >
              <Select placeholder="Select a pet type">
                <Option value="Golden retriever">Golden retriever</Option>
                <Option value="Dog">Dog</Option>
                <Option value="Cat">Cat</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="dob"
                  label="D.O.B"
                  rules={[{ required: true, message: "Please select the date of birth!" }]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ required: true, message: "Please select the gender!" }]}
                >
                  <Select placeholder="Select gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="weight" label="Weight">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditAppointmentModal;



