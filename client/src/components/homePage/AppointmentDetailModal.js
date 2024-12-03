import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { RiTodoLine } from "react-icons/ri";
import { Divider, Row, Col, Button } from "antd";
import { CiCircleCheck } from "react-icons/ci";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import { PiCheck } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiUserHeartLine, RiMessage2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FiUser, FiArrowRightCircle } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { HiOutlineCake } from "react-icons/hi2";
import { BiMaleFemale } from "react-icons/bi";
import { CiCalculator1 } from "react-icons/ci";
import "./css/AppointmentDetailModal.css";

const AppointmentDetailModal = ({ request, onClose }) => {
  return (
    <div className="modal-overlayd-ap">
      <div className="modal-contentd">
        <button className="close-buttond" onClick={onClose}>
          <RxCrossCircled style={{ fontSize: "30px" }} />
        </button>
        <h2 className="modal-title">Appointment Detail</h2>

        <Row className="modal-bodyd">
          {/* Left Section: Service Info */}
          <Col span={11} className="service-info-section">
            <h3 className="section-title">Service Info</h3>
            <div className="service-item-ap">
              <RiTodoLine className="icon" />
              <p className="service-text">Dog Haircut</p>
            </div>
            <div className="service-item-ap">
              <IoTimeOutline className="icon" />
              <p className="service-text">Aug 1, 2023 at 8:00 AM</p>
            </div>
            <div className="service-item-ap">
              <FiUser className="icon" />
              <p className="service-text">Brandon</p>
            </div>
            <div className="service-item-ap">
              <AiOutlineDollar className="icon" />
              <p className="service-text">$80</p>
            </div>
            <div className="service-item-ap">
              <RiMessage2Line className="icon" />
              <p className="service-text">Client might arrive earlier than scheduled time.</p>
            </div>
            <h4 className="process-title">Service Process</h4>
            <div className="process-icons">
              <CiCircleCheck className="process-icon" />
              <span className="process-icon">···</span>
              <BsBoxArrowLeft className="process-icon" />
              <span className="process-icon">···</span>
              <PiCheck className="process-icon" />
              <span className="process-icon">···</span>
              <BsBoxArrowRight className="process-icon" />
              <span className="process-icon">···</span>
              <AiOutlineDollar className="process-icon" />
              <span className="process-icon">···</span>
              <RiUserHeartLine className="process-icon" />
            </div>
            <Button className="check-in-button-ap" type="primary">
              Check in <FiArrowRightCircle />
            </Button>
          </Col>

          {/* Vertical Divider */}
          <Col span={1} className="vertical-divider">
            <Divider type="vertical" style={{ height: "100%", borderColor: "#000000" }} />
          </Col>

          {/* Right Section: Client and Pet Info */}
          <Col span={12} className="client-info-section">
            <h3 className="section-title">Client Info</h3>
            <div className="service-item-ap">
              <FiUser className="icon" />
              <p className="service-text"> Elizabeth Cooke</p>
            </div>
            <div className="service-item-ap">
              <BsTelephone className="icon" />
              <p className="service-text">123-456-789</p>
            </div>
            <div className="service-item-ap">
              <MdOutlineMail className="icon" />
              <p className="service-text"> 13678@13678</p>
            </div>
            <div className="service-item-ap">
              <FaRegIdCard className="icon" />
              <p className="service-text"> B602138005</p>
            </div>
            
            {/* Horizontal Divider */}
            <Divider style={{ borderTop: "1px solid #000000" }} />

            <div className="pet-info-section">
            <div className="pet-image" style={{ float: "right", width: "267px", height: "188px", marginLeft: "20px", marginTop: "50px"}}>Pet Image</div>
              <h3 className="section-title">Pet Info</h3>
              <div className="service-item-ap">
                <MdOutlinePets className="icon" />
                <p className="service-text">Cola</p>
              </div>
              <div className="service-item-ap">
                <RiTodoLine className="icon" />
                <p className="service-text"> Golden Retriever</p>
              </div>
              <div className="service-item-ap">
                <HiOutlineCake className="icon" />
                <p className="service-text"> 10/01/2022</p>
              </div>
              <div className="service-item-ap">
                <BiMaleFemale className="icon" />
                <p className="service-text">Female</p>
              </div>
              <div className="service-item-ap">
                <CiCalculator1 className="icon" />
                <p className="service-text">56 lbs</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppointmentDetailModal;






