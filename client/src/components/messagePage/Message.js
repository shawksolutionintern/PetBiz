import React, { useState } from 'react';
import { Avatar, Input, Tooltip} from 'antd';
import { UserOutlined, PlusOutlined, SmileOutlined, PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import Picker from 'emoji-picker-react';



import './Message.css';

const Message = () => {
  const users = [
    { name: 'Jack', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Mia', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Adams', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Michael', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Andy', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Peter', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };
  const addEmoji = (emoji) => {
    console.log(emoji.native); 
    setEmojiPickerVisible(false);
  };

  return (
    <div className="message-container">
      <div className="message-sidebar">
        <div className="message-search">
          <Input placeholder="Search" prefix={<UserOutlined />} />
          <PlusOutlined className="add-user-icon" />
        </div>
        <div className="message-list">
          {users.map((user, index) => (
            <div 
              key={index} 
              className={`message-list-item ${selectedUser === user ? 'active' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <Avatar src={user.avatar} size="large" />
              <span className="user-name">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="message-content">
        {selectedUser ? (
          <div className="chat-area">
            <div className="chat-header">
              <Avatar src={selectedUser.avatar} size="large" />
              <span className="chat-username">{selectedUser.name}</span>
            </div>
            <div className="chat-messages">
              {/* Sample Messages */}
              <div className="chat-message received">
                <Avatar src={selectedUser.avatar} size="medium" />
                <div className="message-bubble">Hello! Do you have any availability for grooming this week?</div>
              </div>
              <div className="chat-message sent">
                <div className="message-bubble">Hi! Yes, we are available this week on Friday morning and Saturday afternoon. </div>
                <Avatar src='https://ui-avatars.com/api/?name=Petbiz' size="medium" />
              </div>
              <div className="chat-message received">
                <Avatar src={selectedUser.avatar} size="medium" />
                <div className="message-bubble">Sure! I'd like to make an appointment for Friday morning. </div>
              </div>
              <div className="chat-message sent">
                <div className="message-bubble">Cool! See you there then. </div>
                <Avatar src='https://ui-avatars.com/api/?name=Petbiz' size="medium" />
              </div>
            </div>
            <div className="chat-input">
              <Input placeholder="Enter words" />
              <Tooltip title={<span><UploadOutlined /> Upload File</span>} overlayClassName="custom-tooltip">
                <PaperClipOutlined className="chat-icon" />
              </Tooltip>
              <div className="emoji-picker-wrapper">
                <SmileOutlined className="chat-icon" onClick={toggleEmojiPicker} />
                {emojiPickerVisible && (
                  <Picker onEmojiClick={addEmoji}  onSelect={addEmoji} style={{ position: 'absolute', bottom: '50px', right: '0' }} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Message;
