import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, FileOutlined, GlobalOutlined, BellOutlined, BulbOutlined, MailOutlined, QuestionCircleOutlined, ThunderboltOutlined, InfoCircleOutlined, DownOutlined } from '@ant-design/icons';
import './Setting.css'; 

const contentData = {
  Accounts: [
    { icon: <UserOutlined />, title: 'Personal Details' },
    { icon: <LockOutlined />, title: 'Sign-in Preference' },
    { icon: <FileOutlined />, title: 'Privacy Policy' },
  ],
  General: [
    { icon: <GlobalOutlined />, title: 'Language' },
    { icon: <BellOutlined />, title: 'Notification' },
    { icon: <BulbOutlined />, title: 'Theme and Display' },
  ],
  Help: [
    { icon: <MailOutlined />, title: 'Contact' },
    { icon: <QuestionCircleOutlined />, title: 'FAQ' },
    { icon: <ThunderboltOutlined />, title: 'Version Update' },
    { icon: <InfoCircleOutlined />, title: 'About Petbiz' },
  ],
};

const Setting = () => {
  const [activeTab, setActiveTab] = useState('Accounts');

  const renderContent = (content) => (
    <div>
      {content.map((item, index) => (
        <Card key={index} className="setting-content-box" hoverable>
          <Row justify="space-between" align="middle">
            <Col>
              <Row align="middle">
                {item.icon}
                <span className="setting-box-title">{item.title}</span>
              </Row>
            </Col>
            <Col>
              <DownOutlined className="setting-dropdown-icon" />
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="setting-main-content-container">
      <div className="setting-top-bar">
        <div className="setting-tabs">
          <span 
            className={`setting-tab ${activeTab === 'Accounts' ? 'setting-active' : ''}`} 
            onClick={() => setActiveTab('Accounts')}
          >
            Accounts
          </span>
          <span 
            className={`setting-tab ${activeTab === 'General' ? 'setting-active' : ''}`} 
            onClick={() => setActiveTab('General')}
          >
            General
          </span>
          <span 
            className={`setting-tab ${activeTab === 'Help' ? 'setting-active' : ''}`} 
            onClick={() => setActiveTab('Help')}
          >
            Help
          </span>
        </div>
      </div>
      <div className="setting-tab-content">
        {renderContent(contentData[activeTab])}
      </div>
    </div>
  );
};

export default Setting;
