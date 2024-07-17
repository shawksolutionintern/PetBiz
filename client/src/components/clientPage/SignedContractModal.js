import React from 'react';
import { Modal, Typography } from 'antd';

const SignedContractModal = ({ visible, onClose, data }) => (
  <Modal
    title="Signed Contract"
    visible={visible}
    onCancel={onClose}
    footer={null}
  >
    <Typography.Text>{data ? "Contract Signed" : "Contract Not Signed"}</Typography.Text>
  </Modal>
);

export default SignedContractModal;
