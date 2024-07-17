import React from 'react';
import { Modal, Typography, Input, Collapse } from 'antd';


const { Panel } = Collapse;
const { Search } = Input;

const PurchaseHistoryModal = ({ visible, onClose, data }) => (
  <Modal
    title="Purchase History"
    visible={visible}
    onCancel={onClose}
    footer={null}
    width={900} // 与 ClientDetailModal 一样大
    bodyStyle={{ padding: 0 }} // 去掉内边距
  >
    <div className="purchase-history-header">
      <Search placeholder="Search" style={{ marginBottom: 16, padding: '10px 20px' }} />
    </div>
    <div className="purchase-history-content">
      <Collapse accordion>
        {data.map((item, index) => (
          <Panel 
            header={`${item.purpose} - ${item.date}`} 
            key={index}
            className="purchase-history-panel"
          >
            <Typography.Paragraph><strong>Item:</strong> {item.item}</Typography.Paragraph>
            <Typography.Paragraph><strong>Amount:</strong> ${item.amount}</Typography.Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  </Modal>
);

export default PurchaseHistoryModal;
